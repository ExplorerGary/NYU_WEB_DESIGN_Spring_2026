import os
import requests
import tqdm

THIS = os.path.dirname(__file__)
SAVE_DIR = os.path.join(THIS, '../img/')

data_path = os.path.join(THIS, '../data/origin_link.txt')

def read_line(line: str):
    line = line.strip()
    band, origin_link = line.split('=', 1)
    return band, origin_link

from bs4 import BeautifulSoup
import requests

def rewrite_link(origin_link: str):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                    "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Referer": "https://bandori.fandom.com/",
        "Connection": "keep-alive"
    }

    # 1. 打开 wiki 页面
    resp = requests.get(origin_link, headers=headers)
    if resp.status_code != 200:
        print(f"Failed to open page: {origin_link}")
        return None

    soup = BeautifulSoup(resp.text, "html.parser")

    original_link_tag = soup.find("a", string="Original file")

    if original_link_tag:
        href = original_link_tag.get("href")
        if href:
            
            if href.startswith("//"):
                href = "https:" + href

            if "format=original" not in href:
                if "?" in href:
                    href += "&format=original"
                else:
                    href += "?format=original"

            return href

    img_tag = soup.find("img")
    if img_tag and img_tag.get("src"):
        src = img_tag["src"]
        if src.startswith("//"):
            src = "https:" + src

        # 去掉 revision
        src = src.split("/revision")[0]

        if "format=original" not in src:
            src += "?format=original"

        return src

    print(f"Could not parse image for {origin_link}")
    return None


def download_image(band: str, new_link: str):
    if new_link is None:
        return

    headers = {
        "User-Agent": "Mozilla/5.0",
        "Referer": "https://bandori.fandom.com/"
    }

    response = requests.get(new_link, headers=headers)
    if response.status_code == 200:
        with open(os.path.join(SAVE_DIR, f'{band}.png'), 'wb') as f:
            f.write(response.content)
        print(f"Image downloaded successfully for {band}")
    else:
        print(f"Failed for {band}: {response.status_code}")

def main():
    with open(data_path, 'r') as f:
        lines = f.readlines()
    
    for line in tqdm.tqdm(lines):
        band,origin_link = read_line(line)
        new_link = rewrite_link(origin_link)
        download_image(band, new_link)

if __name__ == "__main__":
    main()