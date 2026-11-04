import * as XLSX from 'xlsx';
import * as fs from 'fs';

const workbook = XLSX.readFile('FB_auction.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(worksheet);

fs.writeFileSync('src/data/players.json', JSON.stringify(data, null, 2));
console.log('Successfully wrote to players.json');
