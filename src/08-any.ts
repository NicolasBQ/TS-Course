(() => {
    let myDynamicVar: any = 'any';
    myDynamicVar = 8;
    myDynamicVar = {};
    myDynamicVar = true;
    myDynamicVar = [];

    // Cast 1 -> Transform a type into another type
    const rta = (myDynamicVar as string);

    // Cast 2 -> Transform a type into antoher type
    const rta2 = (<number>myDynamicVar);
})()