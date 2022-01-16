# chrome-references v0.0.3

## Windows 10 (-ish?) Reference Shortcut Creator for Google Chrome.

Creates a BAT file to open a specific set of tabs in a new Chrome window.

Allows you to quickly open all of your reference material and have the tabs in the same order when you start your work.

Neither this package nor its author is associated with Google or Google Chrome in any official capacity, or any of the websites used in the below example. Please visit those websites at your own risk.

---

## Usage

1. Place a list of desired reference material in `references.conf`:

```conf
# Tailwind CSS
https://tailwindcss.com/docs/responsive-design
https://nerdcave.com/tailwind-cheat-sheet
https://davidpiesse.github.io/tailwind-md-colours/

# Font Awesome free icons
https://fontawesome.com/v5.15/icons?s=regular,solid&m=free
```

2. Ensure that `settings.js` points to the correct location for `chrome.exe`. Other settings can be adjusted too and are self-explanatory:

```javascript
module.exports = {
    chrome: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    batFile: "./references.bat",
    listFile: "./references.conf",
    newWindow: true
}
```

3. Use `npm run build` to build `references.bat` in the current folder:

```batch
"C:\Program Files\Google\Chrome\Application\chrome.exe" --new-window "https://tailwindcss.com/docs/responsive-design" "https://nerdcave.com/tailwind-cheat-sheet" "https://davidpiesse.github.io/tailwind-md-colours/" "https://fontawesome.com/v5.15/icons?s=regular,solid&m=free"
```

The BAT file can be run to open a new Chrome window with the desired tabs.

## Adding a Desktop Shortcut

If you would like to add a shortcut on your desktop, the following only needs to be done once, and then the BAT file can be updated and rebuilt with new reference materials.

Note: Make sure this package (or at least the generated BAT file) has a permanent home on your file system before creating the shortcut.

1. In Windows Explorer, locate `references.bat`. Right-click and select 'Copy'.

2. Go to the desired location (e.g., your Desktop) and right-click and choose 'Paste Shortcut'.

3. Rename the shortcut link as desired.

4. If desired, change the icon. Right-click the shortcut link and choose 'Properties', followed by 'Change Icon...'.

5. You'll likely get a warning that the file has not stored any icons. Click Ok.

6. Choose a system icon, or click 'Browse' and locate `chrome.exe` and borrow one of its icons. (Again, you only need to do this the first time, and updates to the BAT file won't affect the desktop shortcut.)

Double-click the icon to open a new Chrome window with all your desired reference material. 

In order to update your references, or add more, etc., add to the `references.conf` file and run `npm run build` again.