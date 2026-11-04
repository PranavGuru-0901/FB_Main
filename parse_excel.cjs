const XLSX = require('xlsx');
const fs = require('fs');

const workbook = XLSX.readFile('FB_auction.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];
const rawData = XLSX.utils.sheet_to_json(worksheet);

const players = rawData.map((row, index) => {
  return {
    id: index + 1,
    set: `Tier ${row['Tier']}`,
    name: row['Name'],
    nationality: row['Country'],
    role: row['Main Position'],
    age: row['Age'] || 0,
    prevTeam: row['Club / Last Club'] || '',
    otherPositions: row['Other Positions'] || '',
    rating: row['EAFC Rating'] || 0,
    basePrice: row['Base Price'] || 0,
    tier: row['Tier'] || '',
    soldPrice: null,
    soldTeam: '',
    status: 'NOT AUCTIONED'
  };
});

fs.writeFileSync('src/data/players.json', JSON.stringify(players, null, 2));
console.log('Successfully wrote to players.json with new interface mapping');
