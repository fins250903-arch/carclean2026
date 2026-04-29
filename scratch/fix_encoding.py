import os

def fix_encoding(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.astro', '.tsx', '.ts', '.css')):
                file_path = os.path.join(root, file)
                try:
                    # Try reading as UTF-8
                    with open(file_path, 'rb') as f:
                        content = f.read()
                    
                    # Try to decode as utf-8, if fails, try shift-jis
                    try:
                        decoded = content.decode('utf-8')
                    except UnicodeDecodeError:
                        try:
                            decoded = content.decode('shift-jis')
                        except UnicodeDecodeError:
                            decoded = content.decode('utf-8', errors='ignore')
                    
                    # Write back as clean UTF-8
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(decoded)
                    print(f"Fixed: {file_path}")
                except Exception as e:
                    print(f"Failed: {file_path} - {e}")

fix_encoding(r'c:\Users\yu\OneDrive\Desktop\antiLP\base_template\src')
