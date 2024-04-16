const { tableInfo } = require('../data/tableInfo/tableInfo');

function validatingTable(table) {
    for (const tableIndex in tableInfo) {
        if (tableIndex === table) {
            return true;
        };
    };
    console.log(`Tabela ${table} inválida.`);
};

module.exports = { validatingTable };