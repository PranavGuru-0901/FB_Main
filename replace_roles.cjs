const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/const batters = squadPlayers\.filter\(p => p\.role\.toLowerCase\(\)\.includes\('batter'\) && !p\.role\.toLowerCase\(\)\.includes\('wk'\)\)\.length;/g, "const attackers = squadPlayers.filter(p => ['ST', 'CF', 'LW', 'RW'].includes(p.role)).length;");

content = content.replace(/const bowlers = squadPlayers\.filter\(p => p\.role\.toLowerCase\(\)\.includes\('bowler'\)\)\.length;/g, "const midfielders = squadPlayers.filter(p => ['CM', 'CDM', 'CAM', 'LM', 'RM'].includes(p.role)).length;");

content = content.replace(/const allRounders = squadPlayers\.filter\(p => p\.role\.toLowerCase\(\)\.includes\('all-rounder'\)\)\.length;/g, "const defenders = squadPlayers.filter(p => ['CB', 'LB', 'RB', 'LWB', 'RWB'].includes(p.role)).length;");

content = content.replace(/const wks = squadPlayers\.filter\(p => p\.role\.toLowerCase\(\)\.includes\('wk'\)\)\.length;/g, "const goalkeepers = squadPlayers.filter(p => p.role === 'GK').length;");

content = content.replace(/\{batters\}/g, "{attackers}");
content = content.replace(/\{bowlers\}/g, "{midfielders}");
content = content.replace(/\{allRounders\}/g, "{defenders}");
content = content.replace(/\{wks\}/g, "{goalkeepers}");

content = content.replace(/BATTERS/g, "ATTACKERS");
content = content.replace(/BOWLERS/g, "MIDFIELDERS");
content = content.replace(/ALL-ROUNDERS/g, "DEFENDERS");
content = content.replace(/WK(?!-)/g, "GK");

// role filters
content = content.replace(/<option value="Batter">Batter<\/option>/g, '<option value="ST">ST</option>\n<option value="LW">LW</option>\n<option value="RW">RW</option>');
content = content.replace(/<option value="Bowler">Bowler<\/option>/g, '<option value="CM">CM</option>\n<option value="CDM">CDM</option>\n<option value="CAM">CAM</option>');
content = content.replace(/<option value="All-rounder">All-rounder<\/option>/g, '<option value="CB">CB</option>\n<option value="LB">LB</option>\n<option value="RB">RB</option>');
content = content.replace(/<option value="WK-Batter">WK-Batter<\/option>/g, '<option value="GK">GK</option>');

fs.writeFileSync('src/App.tsx', content);
console.log("App.tsx role labels updated");
