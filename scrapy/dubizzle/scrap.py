import datetime
today = datetime.datetime.today().replace(hour=0,minute=0,second=0,microsecond=0).strftime('%d%m%y')
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import time 
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

delay = 100 
driver = webdriver.Chrome()  # You can replace 'Chrome' with 'Firefox', 'Edge', etc., depending on your browser
driver.get("https://uae.dubizzle.com/")

login_element = WebDriverWait(driver, delay).until(
    EC.presence_of_element_located((By.XPATH, '//a[@class="mui-style-1wscr34"]'))
)
login_element.click()


pop_up_link = WebDriverWait(driver, delay).until(
    EC.presence_of_element_located((By.ID, 'popup_login_link'))
)
pop_up_link.click()

pop_up_email = WebDriverWait(driver, delay).until(
    EC.presence_of_element_located((By.ID, 'popup_email'))
)
pop_up_email.clear()
pop_up_email.send_keys("dobi.perfect@gmail.com")

pop_up_password = WebDriverWait(driver, delay).until(
    EC.presence_of_element_located((By.ID, 'popup_password'))
)
pop_up_password.clear()
pop_up_password.send_keys("Perfect2024")
login_button = driver.find_element(By.ID , "popup_login_btn").click()

may_be_later = WebDriverWait(driver, delay).until(
    EC.presence_of_element_located((By.XPATH, '//button[@data-testid="may-be-later"]'))
)
may_be_later.click()
notification_dont_allow = WebDriverWait(driver, delay).until(
    EC.presence_of_element_located((By.ID, 'moe-dontallow_button'))
)
notification_dont_allow.click()

ad_button = WebDriverWait(driver, delay).until(
    EC.presence_of_element_located((By.XPATH, '//button[@data-testid="header-ads-icon"]'))
)
ad_button.click()

expire_job_count = 10000 
extracted_job_count = 33
list_data = []

job_dashboard = WebDriverWait(driver, delay).until(
    EC.presence_of_element_located((By.XPATH, '//a[contains(text(), "Go to the Jobs Dashboard")]'))
)
job_dashboard.click()
time.sleep(10)

while extracted_job_count < expire_job_count: 
    expired_jobs = WebDriverWait(driver, delay).until(
        EC.presence_of_all_elements_located((By.XPATH, '//div[contains(@class, "MuiButtonBase-root") and contains(@class, "MuiChip-root") and contains(@class, "MuiChip-sizeMedium") and contains(@class, "MuiChip-colorSecondary") and contains(@class, "MuiChip-clickable") and contains(@class, "MuiChip-clickableColorSecondary") ]'))
    )
    expired_jobs[5].click()
    # time.sleep(10)
    candidates_available = WebDriverWait(driver, delay).until(
        EC.presence_of_all_elements_located((By.XPATH, '//span[@class="MuiChip-label MuiChip-labelSmall css-1pjtbja"]'))
    )
    element = []
    for each in candidates_available:
        if "Total Candidates" in each.text: 
            if int(each.text.split(" ")[0]) != 0 : 
                element.append(each)
    if len(element) < expire_job_count : expire_job_count = len(element)
    element[extracted_job_count].click()
    print ( f" ---------->  Total Expired {expire_job_count}, Current Expired : {extracted_job_count}")
    # time.sleep(10)
    # job_dashboard = WebDriverWait(driver, delay).until(
    #     EC.presence_of_element_located((By.XPATH, '//button[@data-testid="clear-filters"]'))
    # )
    # job_dashboard.click()
    # time.sleep(10)

    job_name_element = WebDriverWait(driver, delay).until(
    EC.presence_of_element_located((By.CLASS_NAME, 'MuiTypography-root.MuiTypography-h6.MuiTypography-noWrap.css-jvgw0k')))
    job_name = job_name_element.text
    candidates_images = WebDriverWait(driver, delay).until(
        EC.presence_of_all_elements_located((By.XPATH, '//img[@class="MuiAvatar-img css-1hy9t21"]'))
    )
    # print("********************",len(candidates_images))
    candidates_images[1].click()
    temp_count = 0
    while (True):
        user_name_element = WebDriverWait(driver, delay).until(
        EC.presence_of_element_located((By.XPATH, '//h6[@data-testid="username"]')))
        user_name = user_name_element.text
        email = driver.find_element(By.XPATH, '//p[@data-testid="email-value"]').text
        phone = driver.find_element(By.XPATH, '//p[@data-testid="phone-value"]').text
        visaStatus = driver.find_element(By.XPATH, '//p[@data-testid="visaStatus-value"]').text
        gender = driver.find_element(By.XPATH, '//p[@data-testid="gender-value"]').text
        careerLevel = driver.find_element(By.XPATH, '//p[@data-testid="careerLevel-value"]').text
        desiredSalary = driver.find_element(By.XPATH, '//p[@data-testid="desiredSalary-value"]').text
        age = driver.find_element(By.XPATH, '//p[@data-testid="age-value"]').text
        locatedIn = driver.find_element(By.XPATH, '//p[@data-testid="locatedIn-value"]').text
        nationality = driver.find_element(By.XPATH, '//p[@data-testid="nationality-value"]').text
        Language = driver.find_element(By.XPATH, '//p[@data-testid="Language-value"]').text
        list_data.append([job_name,user_name,email,phone,visaStatus,gender,careerLevel,desiredSalary,age,locatedIn,nationality,Language])

        import pandas as pd
        df = pd.DataFrame(list_data,columns=["Job Name","Name","Email","Phone Number","Visa Type","Gender","Career Level","Desired Salary","Age","Located IN","Nationality","Language"])
        df.to_csv(f'data/{today}_{str.replace(job_name, "/", "")}.csv')
        button_element = driver.find_elements(By.XPATH, '//button[contains(@class, "MuiButtonBase-root") and contains(@class, "MuiButton-root") and contains(@class, "MuiButton-outlined") and contains(@class, "MuiButton-outlinedSecondary") and contains(@class, "MuiButton-sizeSmall") and contains(@class, "MuiButton-outlinedSizeSmall")]')
        if "Mui-disabled" in button_element[1].get_attribute("class"): 
            break
        else: 
            # print("Pressing Next Button")
            button_element[1].click()  
        temp_count += 1 
        if temp_count % 10 == 0 : print(job_name,temp_count)
    extracted_job_count += 1 
    if expire_job_count == 3 : break
    list_data = []        
    driver.back()
    driver.back()
    driver.back()
    
    time.sleep(20)
