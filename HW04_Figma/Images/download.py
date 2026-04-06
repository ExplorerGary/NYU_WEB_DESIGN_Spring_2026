import requests
import os
SAVE_PATH = os.path.dirname(__file__)
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    "Referer": "https://bandori.fandom.com/"
}
url_base = 'https://bandori.miraheze.org/wiki/Category:Band_Icons#/media/File:'
TO_DOWN = [
    "Ave Mujica icon.svg",
    "Band 1.svg",
    "Band 2.svg",
    "Band 3.svg",
    "Band 4.svg",
    "Band 5.svg",
    "Band 18.svg",
    "Band 21.svg",
    "Band 45.svg",
    "Icon afterglow.svg",
    "Icon hh w.svg",
    "Icon morfonica.svg",
    "Icon pasupare.svg",
    "Icon popipa.svg",
    "Icon ras.svg",
    "Icon roselia.svg"
]


def down(img_name):
    url = url_base + img_name
    response = requests.get(url,headers=headers)
    if response.status_code == 200:
        save_to = os.path.join(SAVE_PATH,img_name)
        with open(save_to, "wb") as f:
            f.write(response.content)
    else:
        print(f"{img_name}下载失败:", response.status_code)


if __name__ == "__main__":
    for img in TO_DOWN:
        down(img)
    print ("下载完成！")

