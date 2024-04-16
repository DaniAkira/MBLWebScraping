async function getReferences(page, elementToSelect, numberOfColumns) {
    const selectedElement = await page.evaluate((elementToSelect, numberOfColumns) => {
        const rowElements = document.querySelector(elementToSelect);
        if (rowElements) {
            const data = [];
            for (let i = 0; i <= numberOfColumns; i++) {
                const tdElement = rowElements.querySelector(`td:nth-child(${i})`);
                if (tdElement) {
                    const cellText = tdElement.textContent.trim() || '-';
                    data.push(cellText);
                };
            };
            return data
        } else {
            return false;
        };
    }, elementToSelect, numberOfColumns);
    return selectedElement ? selectedElement : false;
};

async function getYear(page, elementToSelect) {
    const selectedElement = await page.evaluate((elementToSelect) => {
        const year = document.querySelector(elementToSelect);
        return year ? year.textContent : '-';
    }, elementToSelect);
    return selectedElement;
};


module.exports = { getReferences, getYear };