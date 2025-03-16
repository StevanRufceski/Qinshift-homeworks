import fs from 'fs/promises';
import { dirname, join} from 'path';
import { fileURLToPath } from 'url';

//parametri za da gi koristi index.js vo integracijata so middleware
export const __dirname = dirname(fileURLToPath(import.meta.url));
export const filePath = fileName => join(__dirname, `../data/${fileName}`);

// metodi nameneti za da gi koristi book.model.js
export async function readFile(fileName) {
    const arr = await fs.readFile(filePath(fileName), 'utf-8');
    const parsedArr = JSON.parse(arr);
    return parsedArr;
}
export async function writeFile(fileName, data) {
    const stringifiedData = JSON.stringify(data, null, 2);
    await fs.writeFile(filePath(fileName), stringifiedData);
}
// metodi za da gi koristi logger.middleware.js
// export async function appendFile(filename, log) {
//     await fs.appendFile(filePath(filename), log);
// }