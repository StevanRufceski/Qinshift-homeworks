import fs from 'fs/promises';
import{dirname, join} from 'path';
import { fileURLToPath } from 'url';

export const __dirname = dirname (fileURLToPath(import.meta.url));
export const filePath = fileName => join(__dirname, '../data/tasks.json')

export async function readFile(fileName){
    const array = await fs.readFile(filePath(fileName), 'utf-8');
    const parsedArray = JSON.parse(array);
    return parsedArray
}
export async function writeFile(fileName, data){
    const stringifiedData = JSON.stringify(data, null, 2)
    await fs.writeFile(filePath(fileName), stringifiedData);
}

