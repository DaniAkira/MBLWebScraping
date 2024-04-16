const { google } = require('googleapis');
require('dotenv').config();


async function writeOnSheets(data, sheet, tableRowIndex, endColumnIndex) {
    const auth = new google.auth.GoogleAuth({
        keyFile: 'credentials.json',
        scopes: 'https://www.googleapis.com/auth/spreadsheets'
    });
    
    const sheets = google.sheets({
        version: 'v4',
        auth
    });
    
    const spreadsheetId = process.env.SPREADSHEETID;
    
    let firstEmptyRowIndex = tableRowIndex;
    
    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: `${sheet}!A${tableRowIndex}:${endColumnIndex}`,
        });
        const rows = response.data.values;
        
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].length === 0) {
                firstEmptyRowIndex += i; 
                break;
            };
        };
        const range = `${sheet}!A${firstEmptyRowIndex}:${endColumnIndex}`;

        await sheets.spreadsheets.values.update({
            spreadsheetId,
            range: range,
            valueInputOption: 'RAW',
            requestBody: {
                values: data,
            },
        });
        console.log('Dados escritos com sucesso.\n')
    } catch (error) {
        console.log(error);
    };
};

module.exports = { writeOnSheets };

