import cv2
import numpy as np

def main(path):
    img = cv2.imread(path)
    
    if img is None:
        print(f"Error: Could not load image from '{path}'. Check the file path and integrity.")
        return

    # 目标颜色 (BGR format)
    the_final_red = img[0, 0]  # read the 0,0 pixel value from the image
    nyu_violet = np.array([140, 6, 87])  # BGR format: (B, G, R)
    
    # 创建掩码来找到匹配的像素
    mask = cv2.inRange(img, the_final_red, the_final_red)
    
    # 替换匹配的像素为NYU紫色
    img[mask != 0] = nyu_violet

    cv2.imwrite("output.png", img)

if __name__ == "__main__":
    path = 'input.jpeg'
    main(path)
