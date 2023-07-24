(() => {
    let userID: string | number;
    userID = 2;
    userID = '5t';

    // Select a type and its methods
    const greetings = (myValue: string | number) => {
        if(typeof myValue === 'string') {
            console.log(`string: ${myValue.toLocaleUpperCase()}`);
        } else {
            console.log(`number: ${myValue.toFixed(1)}`);
        }
    }

    greetings('hello world');
    greetings(12.45454)
})()