

const menuItemContainer = document.querySelector('.menu-item-container')
const pizzaName = ['Pepperoni', 'Margharita', 'The Gamble', 'Hawaii', 'Tomato Empire', 'Mushroom Kingdom'];
const pizzaPrice = [120, 100, 9999, 120, 150, 160]
const pizzaIngredients = [['Pepperoni ', 'Mozarella ', 'Parmesan'], ['Mozarella', 'Black Olives'], ['?'], ['Mozarella', 'Pineapple', 'Chicken'], ['Tomato', 'Mozarella', 'Beef'], ['Champignon', 'Mozarella', 'Bellpeppers']]
function createPizzaElement(pizzaElementArray, pizzaPriceArray) {
    for (let i = 0; i < pizzaElementArray.length; i++) {
        menuItemContainer.innerHTML += `
                <div class="menu-item unselected-pizza"  id='${pizzaName[i].toLowerCase()}'>
                        <p class="pizza-name">${pizzaElementArray[i]}</p>
                        <p class="pizza-ingredient">Ingredients: ${ingredientToStr(pizzaIngredients[i])}</p>
                            <img src="${'img/pizzaImg/Pizza' + (i + 1) + '.png'}" alt="${pizzaName[i]}" class="pizza-img">
                        <p class="pizza-price">${pizzaPriceArray[i]}</p>
                </div>`
    }
}
createPizzaElement(pizzaName, pizzaPrice)

function ingredientToStr(ingArr) {
    let ingStr = ``;
    for (let i = 0; i < ingArr.length; i++) {
        if (i + 1 != ingArr.length) {
            ingStr += `${ingArr[i]},`
        } else {
            ingStr += `${ingArr[i]}`
        }
    }
    return ingStr;
}


const extrasItemContainer = document.querySelector('.extras-item-container')
const extrasName = ['Parmesan', 'Mozarella', 'Mushrooms', 'Olives', 'Pepperonies', 'Bacon', 'Bellpeppers', 'Tomatos', '1', '2', '3', '4'];
const extrasPrice = [20000, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20];
function createExtrasElement(extrasElementArray, extrasPriceArray) {
    for (let i = 0; i < extrasElementArray.length; i++) {
        extrasItemContainer.innerHTML += `
        <div class="extras-item unselected-extras"  id='${extrasElementArray[i].toLowerCase()}'>
                <p class="extras-name">Extra ${extrasElementArray[i]}</p>
                    <img src="${'img/extraImg/extras' + (i + 1) + '.png'}" alt="${extrasElementArray[i]}" class="extras-img">
                <p class="extras-price">${extrasPriceArray[i]}</p>
        </div>`
    }
}
createExtrasElement(extrasName, extrasPrice)
const drinkItemContainer = document.querySelector('.drinks-item-container')
const drinkName = ['Coca Cola', 'Pepsi', 'Sprite', 'Fanta', 'DrPepper', 'Mountain-dew', 'Orange-juice',  'Apple-juice'];
const drinkPrice = [20, 20, 20, 20, 20, 20, 20, 20];


function createDrinksElement(drinkElementArray, drinkPriceArray) {
    for (let i = 0; i < drinkElementArray.length; i++) {
        let dividedDrinkName = drinkElementArray[i].split('-').join(' ');
        drinkItemContainer.innerHTML += `
        <div class="drink-item unselected-drink" id='${drinkElementArray[i].toLowerCase()}'>
            <p class="drink-name">${dividedDrinkName}</p>
            <img src="${'img/drinkImg/drink' + (i + 1) + '.png'}" alt="${drinkElementArray[i]}" class="drink-img">
            <p class="drink-price">${drinkPriceArray[i]}</p>
            <div class="drink-size">
                <label class="size-item">
                    <input type="radio" class="size-radio" name="${drinkElementArray[i]}options"/>
                    <span class="size-name">S</span>
                </label>
                <label class="size-item">
                    <input type="radio" class="size-radio" name="${drinkElementArray[i]}options"/>
                    <span class="size-name">M</span>
                </label>
                <label class="size-item">
                    <input type="radio" class="size-radio" name="${drinkElementArray[i]}options"/>
                    <span class="size-name">L</span>
                </label>
            </div>
        </div>`;
    }
}
createDrinksElement(drinkName, drinkPrice);
const paymentItemContainer = document.querySelector('.payment-item-container');
function createPaymentElement(){
    paymentItemContainer.innerHTML = '';
    for(let i = 0; i < fullOrder.length; i++){
        paymentItemContainer.innerHTML+= `
        <div class='payment-item'> 
            <p class='order-item-name'>${fullOrder[i].name}</p>
            <p class='order-item-price'>${fullOrder[i].price}</p>
        </div>
        `
    }
    paymentItemContainer.innerHTML += `
    <div class='total-price-container'>
        <p class='total-text'>Total:</p>
        <p class='total-price'>${priceSum(fullOrder)}</p>
    </div>
    `
}
function priceSum(arr){
    let fullPrice = 0;
    for(let i = 0; i < arr.length; i++){
        fullPrice += parseInt(arr[i].price);
    }
    return fullPrice;
}

