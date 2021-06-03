# CSS Box Model

The Box Model is a term used in CSS which describes a box that wraps around every HTML element. It contains the following:

- Content - The contents of the box, e.g. image or text
- Padding - Wraps around the content
- Border - Wraps around the content and padding
- Margin - Outermost layer - Wraps around the content, padding and border

## Example

View the responsive layout to see an example.

# JS exercise

```
const sales = [
    { itemSold: “Football”, price: 19.99, dateSold: ‘2018-04-07’, id: ‘j_123’ },
    { itemSold: “Trainers”, price: 159.95, dateSold: ‘2018-03-02’, id: ‘t_acds1’ },
    { itemSold: “Cricket bat”, price: 204.97, dateSold: `‘2018-04-05’, id: ‘j_456’},
    { itemSold: “Rugby ball”, price: 30.00, dateSold: ‘2017-04-22’, id: ‘t_acds3’ },
    { itemSold: “Hockey stick”, price: 54.95, dateSold: ‘2017-03-19’, id: ‘j_999’ }
]
```

1. Return the sum of the price of all properties as a single value.

```
let allPrices = sales.reduce(function (accumulator, item) {
    return accumulator + item.price;
}, 0).toFixed(2);
```

2. Return the items which were sold in 2017.

```
let allItemsSoldIn2017 = sales.filter(
    (item) => item.dateSold.includes('2017')
);
```

3. Return an array of all of the itemsSold properties as strings, sorted alphabetically.

```
let allItemsSoldAlphabetically = sales.map(
    ({ itemSold }) => itemSold
).sort();
```

4. Using id as an argument, return the sale which matches the id.

```
let sale = id => sales.filter(
    (item) => item.id === id
);
```

# Replicate layout

Kept the layout simple and the colours should be familiar!

## HTML

Used semantic tags where appropriate for the HTML structure and components.

## CSS

Used ITCSS (Inverted Triangle CSS), which helps to organise my CSS in a way to better deal with global namespace, cascade and specificity. Alongside ITCSS I've used BEM (Block, Element, Modifier) to help with naming conventions. Using this methodology should ensure the CSS is maintainable and scaleable.

Used a combination of CSS Grid to create the main responsive layout, and Flexbox to help with the Header layout.

Used CSS variables for the colours which offers powerful native management, e.g. dark/light themes.

## Accessibility

By using native elements and adding aria attributes where necessary the page should adhere to WCAG ensuring keyboard and screen reader accessibility.

## Webpack

Used Webpack to compile and minify the JS and CSS. It also offers hot reloading to speed up development and many other benefits.

To view page run `npx webpack serve`.