const puppeteer = require('puppeteer');
const { tableInfo } = require('../data/tableInfo/tableInfo');
const { getPlayerUrl } = require('../getData/getPlayerUrl/getPlayerUrl');
const { getReferences, getYear } = require('../getData/getReferences/getData');
const { formatReferences } = require('../formatData/formatReferences/formatReferences');
const { writeOnSheets } = require('../writeOnSheets/writeOnSheets');

async function getAndWriteReferences(playerName, tableIndex) {
    const playerUrl = await getPlayerUrl(playerName);

    const {
        tableName,
        elementToSelect,
        yearToSelect,
        sheet,
        rowIndex,
        endColumnIndex,
        numberOfColumns
    } = tableInfo[tableIndex];

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    try {
        await page.goto(`${playerUrl}`, { timeout: 1000 });
    } catch (error) {
    };

    const year = await getYear(page, yearToSelect);
    const selectedElements = await getReferences(page, elementToSelect, numberOfColumns);

    if (!selectedElements) {
        console.log(`Jogador não tem a tabela ${tableName}.`);
        await browser.close();
    } else {
        const formattedData = formatReferences(playerName, year, selectedElements);
        console.log(`o valores de ${tableName} de ${playerName}:\n${formattedData}`);
        await writeOnSheets(formattedData, sheet, rowIndex, endColumnIndex);
        await browser.close();
    };
};

module.exports = { getAndWriteReferences };