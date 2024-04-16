const { playersNameData } = require('../../data/playerNameData/playersNameData');

function getPlayerName(player) {
    for (const playerName in playersNameData) {
        if (playerName.toLowerCase() === player.toLowerCase()) {
            return playerName;
        };
    };
    console.log('Jogador não encontrado.');
    return false;
};

module.exports = { getPlayerName };