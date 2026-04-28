import os

directory = 'src/components/sections'
for filename in os.listdir(directory):
    if filename.endswith('.astro') or filename.endswith('.tsx'):
        filepath = os.path.join(directory, filename)
        try:
            # Try reading with current likely broken encoding (UTF-16 or Shift-JIS or just garbage)
            # Actually, PowerShell default is usually UTF-16 for Set-Content in some cases or the system CP.
            # But I'll try to read as UTF-8 first, then fallback.
            with open(filepath, 'rb') as f:
                content = f.read()
            
            # Identify encoding
            # If it's PowerShell Set-Content, it might be UTF-16 LE with BOM or just bytes.
            # I'll just try to decode and re-encode.
            
            # Actually, I'll use a simpler approach: 
            # I know my previous edits were UTF-8, but PowerShell might have saved as something else.
            # I'll just rewrite them with the content I expect or just try to fix the bytes.
            
            pass
        except:
            pass

# Since I don't want to risk more corruption, I'll just restore the key ones manually.
