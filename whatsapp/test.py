from selenium import webdriver
import base64
import io
from PIL import Image
from selenium.webdriver.common.by import By

from selenium.webdriver.chrome.options import Options



import time 
# Start a Selenium WebDriver session



# Open the webpage containing the canvas element
options = webdriver.ChromeOptions() 
options.add_argument("user-data-dir=data")
# driver = webdriver.Chrome(executable_path=chromepath, chrome_options=options)
driver = webdriver.Chrome(chrome_options=options)  # You can replace 'Chrome' with 'Firefox', 'Edge', etc., depending on your browser
driver.get("https://web.whatsapp.com/")

time.sleep(5)

# Find the canvas element by tag name
# canvas = driver.find_element(By.XPATH, '//canvas[@role="img"]')
# canvas = driver.find_elements(By.XPATH, '@class="x2b8uid xk50ysn x1aueamr x1jzgpr8 xzwifym"')


span_element = driver.find_element(By.XPATH, '//span[@role="button" and @tabindex="0" and @class="_akav"]')

# Click on the <span> element
span_element.click()


input_element = driver.find_element(By.CSS_SELECTOR, 'input[aria-label="Type your phone number."][type="text"]')

# Input the phone number into the <input> element
phone_number = "9745666179"
input_element.clear()  # Clear any existing text in the input field
input_element.send_keys(phone_number)

button_element = driver.find_elements(By.CSS_SELECTOR, 'button.x889kno')

# Click on the <button> element
button_element[1].click()

span_elements = driver.find_elements(By.CLASS_NAME, 'x2b8uid')  # Replace 'x2b8uid' with the actual class name
# Extract text from each <span> element
for span in span_elements:
    print(span.text)

# Execute JavaScript to extract the base64-encoded image data from the canvas
image_data = driver.execute_script("""
    var canvas = arguments[0];
    return canvas.toDataURL("image/png").substring("data:image/png;base64,".length);
""", canvas)

# Convert the base64-encoded image data to a PIL image
image_bytes = base64.b64decode(image_data)
image = Image.open(io.BytesIO(image_bytes))

# Save the image for debugging purposes or further processing
image.save("canvas_image.png")

# Close the WebDriver session
# driver.quit()

