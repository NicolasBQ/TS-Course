(() => {
    const myNull: null = null;
    const myUndifined: undefined = undefined;

    let myNumber: number | null = null;
    myNumber = 89;

    let myString: string | undefined = undefined;
    myString = 'Hello World';

    const hi = (name: string | null) => {
        let hello = 'Hello ';

        if(name) {
            hello += name;
        } else {
            hello += 'nobody';
        }

        console.log(hello);
    }

    const hiV2 = (name: string | null) => {
        let hello = name?.toLocaleLowerCase() || 'nobody';
        console.log(hello);
    }

    hi('Nicolas');
    hi(null);

})()