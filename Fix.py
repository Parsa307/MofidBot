#!/usr/bin/env python3

def fix_files():
    """
    Opens Buy.js and Sale.js, replaces :r1: with :r4:,
    and :r2: with :r5:. Overwrites the original files.
    """
    files_to_fix = ["Buy.js", "Sale.js"]
    
    for file_name in files_to_fix:
        try:
            with open(file_name, "r", encoding="utf-8") as f:
                contents = f.read()
            
            # Perform replacements
            contents = contents.replace(":r1:", ":r4:")
            contents = contents.replace(":r2:", ":r5:")
            
            # Write back to the same file
            with open(file_name, "w", encoding="utf-8") as f:
                f.write(contents)
                
            print(f"{file_name} has been successfully updated.")
        
        except FileNotFoundError:
            print(f"Error: {file_name} not found.")
        except Exception as e:
            print(f"An error occurred while updating {file_name}: {e}")

if __name__ == "__main__":
    fix_files()
