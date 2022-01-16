# chrome-references v0.0.1

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
    listFile: "./references.txt",
    newWindow: true
}
```

3. Use `npm run build` to build `references.bat` in the current folder:

```batch
"C:\Program Files\Google\Chrome\Application\chrome.exe" --new-window "https://tailwindcss.com/docs/responsive-design" "https://nerdcave.com/tailwind-cheat-sheet" "https://davidpiesse.github.io/tailwind-md-colours/" "https://fontawesome.com/v5.15/icons?s=regular,solid&m=free"
```

4. In Windows Explorer, right-click `references.bat` and select 'Copy'. Go to the desired location and right-click and choose 'Paste Shortcut'.

5. Go to the desired location, and right-click and choose 'Paste shortcut'.

6. Rename the shortcut file, and choose an icon.
  - BAT files don't have associated icons, so you will need to pull one from another file. By default I would suggest locating `chrome.exe` and using one of its icons. Luckily if you rebuild the BAT file with new documents, you won't have to set the shortcut up again.
  
Double-click the icon to open a new Chrome window with all your desired reference material. If you add to the `references.conf` file and run `npm run build` again and have followed the above, you won't need to adjust the shortcut link.