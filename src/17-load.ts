import _ from 'lodash';

const data = [
    {
        username: 'nicolas',
        rol: 'admin'
    },
    {
        username: 'valentina',
        rol: 'seller'
    },
    {
        username: 'david',
        rol: 'seller'
    },
    {
        username: 'carla',
        rol: 'customer'
    },
];


const rta = _.groupBy(data, (item) => item.rol);
console.log(rta);