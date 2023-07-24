(() => {
    // ALIAS
    type UserID = string | number | boolean;

    let userID: UserID;
    userID = 2;
    userID = '5t';

    // Select a type and its methods
    const greetings = (userID: UserID) => {
        if(typeof userID === 'string') {
            console.log(`string: ${userID.toLocaleUpperCase()}`);
        } else if(typeof userID === 'number') {
            console.log(`number: ${userID.toFixed(1)}`);
        } else {
            console.log(`boolean: ${userID}`);
        }
    }

    greetings('hello world');
    greetings(12.45454);

    // Literal Types
    type Size = 'S' | 'M' | 'L' | 'XL';
    let shirtSize: Size;
    shirtSize = 'L';
    shirtSize = 'XL';
})()