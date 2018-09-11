// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let availableCoins = [50 , 25, 10, 5, 1];
    let coins = [];
    let leftToExchange = currency;

    if(currency <= 0) {
        return {};
    }
    else if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    for(let i = 0; i < availableCoins.length; i++) {
        coins[i] = tryExchange(availableCoins[i], leftToExchange);
        leftToExchange -= coins[i] * availableCoins[i];
    }

    return reply(coins);
}

function tryExchange(coin, currency) {
    return Math.floor(currency / coin);
}

function reply(coins) {
    let res = {};
    let names = ["H", "Q", "D", "N", "P"];
    for(let i = 0; i < coins.length; i++) {
        coins[i] != 0 ? res[names[i]] = coins[i] : false;
    }
    return res;
}
