function formatInput(player, table) {
    const formattedPlayer = player.trim();
    const formattedTable = table.trim();
    return [formattedPlayer, formattedTable];
};

module.exports = { formatInput };