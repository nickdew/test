const sales = [
    { itemSold: 'Football', price: 19.99, dateSold: '2018-04-07', id: 'j_123' },
    { itemSold: 'Trainers', price: 159.95, dateSold: '2018-03-02', id: 't_acds1' },
    { itemSold: 'Cricket bat', price: 204.97, dateSold: '2018-04-05', id: 'j_456' },
    { itemSold: 'Rugby ball', price: 30.00, dateSold: '2017-04-22', id: 't_acds3' },
    { itemSold: 'Hockey stick', price: 54.95, dateSold: '2017-03-19', id: 'j_999' }
]


// Return the sum of the price of all properties as a single value.

let allPrices = sales.reduce(function (accumulator, item) {
    return accumulator + item.price;
}, 0).toFixed(2);

console.log(allPrices);


// Return the items which were sold in 2017.

let allItemsSoldIn2017 = sales.filter(
    (item) => item.dateSold.includes('2017')
);

console.log(allItemsSoldIn2017);


// Return an array of all of the itemsSold properties as strings, sorted alphabetically.

let allItemsSoldAlphabetically = sales.map(
    ({ itemSold }) => itemSold
).sort();

console.log(allItemsSoldAlphabetically);


// Using id as an argument, return the sale which matches the id.

let sale = id => sales.filter(
    (item) => item.id === id
);

console.log(sale('t_acds1'));