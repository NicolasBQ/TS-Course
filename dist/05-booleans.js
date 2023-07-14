"use strict";
(() => {
    // Inferencia
    let isEnable = true;
    // Explicíto 
    let isUp = false;
    console.log('isUp', isUp);
    isUp = true;
    console.log('isUp', isUp);
    const random = Math.random();
    console.log('random', random);
    isUp = random > 0.5;
    console.log('isUp', isUp);
    // Objeto Boolean
    const myBoolean = false; // Mala Práctica
    const myBoolean2 = true; // Buena Práctica
})();
