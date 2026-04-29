import chardet
import os

file_path = r"c:\Users\yu\OneDrive\Desktop\antiLP\base_template\src\components\sections\Benefits.astro"
with open(file_path, 'rb') as f:
    raw_data = f.read()
    result = chardet.detect(raw_data)
    print(f"Encoding: {result['encoding']}")
