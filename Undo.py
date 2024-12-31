#!/usr/bin/env python3

def undo_files():
    """
    Opens Buy.js and Sale.js, replaces :r4: with :r1:,
    and :r5: with :r2:. Overwrites the original files.
    """
    files_to_undo = ["Buy.js", "Sale.js"]
    
    for file_name in files_to_undo:
        try:
            with open(file_name, "r", encoding="utf-8") as f:
                contents = f.read()
            
            # Perform replacements
            contents = contents.replace(":r4:", ":r1:")
            contents = contents.replace(":r5:", ":r2:")
            
            # Write back to the same file
            with open(file_name, "w", encoding="utf-8") as f:
                f.write(contents)
                
            print(f"{file_name} has been successfully updated.")
        
        except FileNotFoundError:
            print(f"Error: {file_name} not found.")
        except Exception as e:
            print(f"An error occurred while updating {file_name}: {e}")

if __name__ == "__main__":
    undo_files()

