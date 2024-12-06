const menuItems = document.getElementsByClassName('menu-item');
const extraItems = document.getElementsByClassName('extras-item')
const menuContainer = document.querySelector('.menu-container')
const extrasContainer = document.querySelector('.extras-container');
const drinkItems = document.getElementsByClassName('drink-item')
const drinkSize = document.getElementsByClassName('size-item')
let selectedItems = [];
let menuItemsArray = Array.from(menuItems);
let extraItemsArray = Array.from(extraItems);
let drinkItemsArray = Array.from(drinkItems)
let drinkSizeArray = Array.from(drinkSize);
menuItemsArray.forEach((element) => {
    element.addEventListener('click', () => {
        if (element.classList[1] === 'unselected-pizza') {
            element.className = 'menu-item selected-pizza';
        } else {
            element.className = 'menu-item unselected-pizza';
        }
    });
});
extraItemsArray.forEach((element) => {
    element.addEventListener('click', () => {
        if (element.classList[1] === 'unselected-extras') {
            element.className = 'extras-item selected-extras';
        } else {
            element.className = 'extras-item unselected-extras';
        }
    });
});
drinkItemsArray.forEach((element) => {
    element.addEventListener('click', () => {
        if (element.classList[1] === 'unselected-drink') {
            element.className = 'drink-item selected-drink';
        } else {
            element.className = 'drink-item unselected-drink';
        }
    });
});
drinkSizeArray.forEach((element) => {
    element.addEventListener('click', () => {
        for(let i = 0; i < element.length; i++){
            if(element[i].classList[1] === 'selected-size-item'){
                element[i].className = 'size-item unselected-size-item'
            }
            console.log(element[i])
        }
        if (element.classList[1] === 'unselected-size-item') {
            element.className = 'size-item selected-size-item';
        } else {
            element.className = 'size-item unselected-size-item';
        }
    });
});

let fullOrder = [];
let allItems = [].concat(menuItemsArray).concat(extraItemsArray).concat(drinkItemsArray);
const allPrices = [].concat(pizzaPrice).concat(extrasPrice).concat(drinkPrice);
console.log(allItems)
const finnishButton = document.querySelector('.continue')
finnishButton.addEventListener('click', () => {
    fullOrder = [];
    allItems.forEach((element) => {
        if (
            element.classList.contains('selected-pizza') || 
            element.classList.contains('selected-extras') || 
            element.classList.contains('selected-drink')
        ) {
            const itemName = element.querySelector('p').textContent;
            const itemPrice = element.querySelector('.pizza-price, .extras-price, .drink-price')?.textContent || '';
            fullOrder.push({ name: itemName, price: itemPrice });
        }
    });
    createPaymentElement();
});