const { playersNameData } = require('../../data/playerNameData/playersNameData');

function getPlayerUrl(player) {
    for (const PlayerName in playersNameData) {
        if (PlayerName.toLowerCase() === player.toLowerCase()) {
            return playersNameData[PlayerName];
        }
    }
    return false;
};

module.exports = { getPlayerUrl };