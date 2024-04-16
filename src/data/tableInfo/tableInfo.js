const tableInfo = {
    '1': {
        'tableName': 'Advanced Pitching',
        'elementToSelect': '#pitching_advanced tbody tr:last-child',
        'yearToSelect': '#pitching_advanced tbody tr:last-child th',
        'sheet': 'playersReferences',
        'rowIndex': 3,
        'endColumnIndex': 'W',
        'numberOfColumns': 22
    },
    '2': {
        'tableName': 'Standard Fielding',
        'elementToSelect': '#standard_fielding tbody tr:last-child',
        'yearToSelect': '#standard_fielding tbody tr:last-child th',
        'sheet': 'playersReferences',
        'rowIndex': 22,
        'endColumnIndex': 'AC',
        'numberOfColumns': 28
    },
    '3': {
        'tableName': 'All Tables'
    }
};

module.exports = { tableInfo };

