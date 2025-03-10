console.log(`TEST`)
import fs from 'fs';
fs.writeFileSync(`./homework.txt`,`test`)

import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'homework.txt');
console.log(filePath)

fs.writeFileSync(`./homework.txt`, `"Homework 02 in Basic Node"`)

fs.appendFileSync(`./homework.txt`, `\n FINISHED!`)

const text = fs.readFileSync(filePath, 'utf-8');
console.log(text);