const readlineSync = require('readline-sync');
const { validatingTable } = require('./checkInput/checkInput');
const { formatInput } = require('./formatData/formatInput/formatInput');
const { getPlayerName } = require('./getData/getPlayerName/getPlayerName');
const { getAndWriteReferences } = require('./getAndWriteFunction/getAndWrite');
const { tableInfo } = require('./data/tableInfo/tableInfo');

console.log('Script running');

let newQuery = 's';

async function App() {
    while (
        newQuery === `s` ||
        newQuery === `S` ||
        newQuery === `ss` ||
        newQuery === `SS`
    ) {
        const player = readlineSync.question(`Informe um jogador: \n`);
        const table = readlineSync.question(`Informe uma tabela: \n1 - Advanced Pitching. \n2 - Standard Fielding. \n3 - Todas as tabelas. \n`);

        const input = formatInput(player, table);

        const playerName = getPlayerName(input[0]);
        const isTableValid = validatingTable(input[1]);
        const numberOfTables = Object.keys(tableInfo).length - 1;

        if (playerName && isTableValid && input[1] === '3') {
            for (let i = 1; i <= numberOfTables; i++) {
                await getAndWriteReferences(playerName, i);
            };
            newQuery = readlineSync.question(`Fazer nova consulta? (S/N) `);
        } else if (playerName && isTableValid && input[1] !== '3') {
            await getAndWriteReferences(playerName, input[1]);
            newQuery = readlineSync.question(`Fazer nova consulta? (S/N) `);
        };
    };
};

App();