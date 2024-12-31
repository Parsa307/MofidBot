## MofidBot

**MofidBot** is an automated system designed to streamline the process of buying and selling on the Mofid Online platform. With MofidBot, you can define custom prices in a `.js` file for selling. Note that the selling functionality is untested, while the buying functionality has been tested and works as expected.

### How to Use

1. **Enter the Code:**
   - To use MofidBot, paste the provided code into your browser’s console.
   - If pasting doesn’t work, enable pasting by typing `allow pasting` into the console.

2. **Setup Prices:**
   - Define custom buying and selling prices in the provided `.js` file.

3. **Handle Site Renaming:**
   - **Issue:** The Mofid Online site renames elements `r1` to `r4` and `r2` to `r5` automatically each morning. This update is reverted after 8:45 AM.
   - **Solution:** 
     - **Fix Script (`Fix.py`):** This script replaces `r1` with `r4` and `r2` with `r5` to align with the site's renaming.
     - **Undo Script (`Undo.py`):** After 8:45 AM, this script reverts `r4` back to `r1` and `r5` back to `r2` to maintain consistency.
   - **Usage:**
     - **Automated Execution:** Advanced users may set up scheduled tasks or cron jobs to automatically run `Fix.py` in the morning after the site update and `Undo.py` after 8:45 AM.
     - **Manual Execution:** Alternatively, users can run the scripts manually as needed.

### Running Scripts Manually

For users who prefer or need to run the scripts manually, ensure you have the necessary prerequisites:

1. **Prerequisites:**
   - Ensure you have [Python](https://www.python.org/downloads/) installed on your system (Python 3.x recommended).
   - Verify Python installation by running `python --version` or `python3 --version` in your terminal or command prompt.

2. **Download the Scripts:**
   - Obtain the `Fix.py` and `Undo.py` scripts from the MofidBot repository or the provided source.

3. **Execute the Scripts:**
   - Open your terminal or command prompt.
   - Navigate to the directory containing the scripts using the `cd` command.
   - Run `Fix.py` to apply the necessary renaming:
     ```bash
     python Fix.py
     ```
     *Or, depending on your system:*
     ```bash
     python3 Fix.py
     ```
   - After 8:45 AM, run `Undo.py` to revert the changes:
     ```bash
     python Undo.py
     ```
     *Or, depending on your system:*
     ```bash
     python3 Undo.py
     ```

### Important Notes

- **For Educational Use:**
  - MofidBot was created primarily for educational purposes and to demonstrate automation on websites.

- **Safety Warning:**
  - If you have any concerns about the code’s safety, feel free to review it thoroughly before running.
  - Only execute code from trusted sources.
