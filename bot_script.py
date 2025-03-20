# bot_script.py

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

# Set up ChromeDriver
driver = webdriver.Chrome(executable_path='./chromedriver')  # Update the path accordingly

# Navigate to the gym reservation website
driver.get('https://gymreservation.com')

# Find and interact with the necessary elements
username_input = driver.find_element('username_element_selector')
username_input.send_keys('your_username')

password_input = driver.find_element('password_element_selector')
password_input.send_keys('your_password')

submit_button = driver.find_element('submit_button_selector')
submit_button.click()

# Add code to navigate to the reservation page and fill in details

# Close the browser
driver.quit()