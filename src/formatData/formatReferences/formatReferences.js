function formatReferences(player, year, data) {
    const formattedArray = [[player, year, ...data]];
    return formattedArray;
};

module.exports = { formatReferences };