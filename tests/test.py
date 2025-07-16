from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as EC
import time

# Setup driver (adjust path to chromedriver if needed)
driver = webdriver.Chrome()

# Base URL of your app
base_url = 'http://localhost:8000'  # Change this to your app URL or local file URL

def test_registration():
    driver.get(base_url)
    # Navigate to Register page
    driver.find_element(By.CSS_SELECTOR, 'a[data-page="register"]').click()

    # Wait for register page to load
    WebDriverWait(driver, 5).until(
        EC.visibility_of_element_located((By.ID, 'register-form'))
    )

    # Fill registration form with valid data
    driver.find_element(By.ID, 'register-name').send_keys('Test User')
    driver.find_element(By.ID, 'register-email').send_keys('testuser@example.com')
    driver.find_element(By.ID, 'register-password').send_keys('password123')
    driver.find_element(By.ID, 'register-confirm-password').send_keys('password123')

    # Submit form
    driver.find_element(By.CSS_SELECTOR, '#register-form button[type="submit"]').click()

    # Check for success message (adjust selector if your app shows one)
    # Here we just wait a moment to simulate success
    time.sleep(2)
    print("Registration test completed.")

def test_login_logout():
    driver.get(base_url)
    # Navigate to Login page
    driver.find_element(By.CSS_SELECTOR, 'a[data-page="login"]').click()

    WebDriverWait(driver, 5).until(
        EC.visibility_of_element_located((By.ID, 'login-form'))
    )

    # Enter valid user credentials
    driver.find_element(By.ID, 'login-email').send_keys('user@cleancity.com')
    driver.find_element(By.ID, 'login-password').send_keys('password123')

    driver.find_element(By.CSS_SELECTOR, '#login-form button[type="submit"]').click()

    # Wait for dashboard or user info to appear
    WebDriverWait(driver, 5).until(
        EC.visibility_of_element_located((By.ID, 'user-info'))
    )
    print("Login successful.")

    # Logout
    driver.find_element(By.ID, 'logout-btn').click()

    # Confirm logout (wait for login links to appear)
    WebDriverWait(driver, 5).until(
        EC.visibility_of_element_located((By.ID, 'auth-links'))
    )
    print("Logout successful.")

def test_admin_update_request():
    driver.get(base_url)
    # Login as admin
    driver.find_element(By.CSS_SELECTOR, 'a[data-page="login"]').click()

    WebDriverWait(driver, 5).until(
        EC.visibility_of_element_located((By.ID, 'login-form'))
    )

    driver.find_element(By.ID, 'login-email').send_keys('admin@cleancity.com')
    driver.find_element(By.ID, 'login-password').send_keys('admin123')
    driver.find_element(By.CSS_SELECTOR, '#login-form button[type="submit"]').click()

    # Wait for admin link to appear and click
    WebDriverWait(driver, 5).until(
        EC.element_to_be_clickable((By.ID, 'admin-link'))
    )
    driver.find_element(By.ID, 'admin-link').click()

    # Wait for admin page to load
    WebDriverWait(driver, 5).until(
        EC.visibility_of_element_located((By.ID, 'admin-page'))
    )

    # Select a request (assuming dropdown is populated)
    select_request = Select(driver.find_element(By.ID, 'requestSelect'))
    if len(select_request.options) > 1:
        select_request.select_by_index(1)  # Select second option (first is placeholder)

    # Select new status
    select_status = Select(driver.find_element(By.ID, 'statusSelect'))
    select_status.select_by_visible_text('Scheduled')

    # Click update button
    update_btn = driver.find_element(By.ID, 'updateStatusBtn')
    if update_btn.is_enabled():
        update_btn.click()
        print("Request status updated.")
    else:
        print("Update button disabled; cannot update.")

    # Cleanup - logout
    driver.find_element(By.ID, 'logout-btn').click()

def main():
    try:
        test_registration()
        test_login_logout()
        test_admin_update_request()
    finally:
        driver.quit()

if __name__ == "__main__":
    main()
