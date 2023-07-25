(() => {
    const calcTotal = (prices: number[]): number => {
        let initial = 0;
        const total = prices.reduce((accum, currentVal) => accum + currentVal, initial);

        return total;
    }

    const printTotal = (prices: number[]): void => {
        const rta = calcTotal(prices);
        console.log(`El precio total es ${rta}`);
    }

    printTotal([1, 2, 3]);

})()