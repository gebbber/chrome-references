const {readFileSync: readFile, writeFileSync: writeFile, existsSync: exists} = require('fs');

const {chrome, batFile, listFile, newWindow} = require('./settings.js');

if (!exists(chrome)) console.log(`WARNING: Google Chrome Not Found: "${chrome}"\nGenerated BAT file may not work.\nFind 'chrome.exe' and adjust 'settings.js'`)
else console.log('Google Chrome found.');

let list = readFile(listFile).toString();

while (list.includes('\r')) list = list.replace('\r','\n');
while (list.includes('\n\n')) list = list.replace('\n\n','\n');

const links = list.split('\n')
.map(line=>line.trim())
.filter(line=>!line.startsWith('#'))
.filter(line=>line.length>0);

const command = [`"${chrome}"`];
if (newWindow) command.push('--new-window');
for (link of links) command.push(`"${link}"`);

writeFile(batFile, command.join(' '));

console.log(`${links.length} shortcuts written to "${batFile}".`);