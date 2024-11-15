const menuItemContainer = document.querySelector('.menu-item-container')
const pizzaName = ['Pepperoni', 'Margharita', 'The Gamble', 'Hawaii', 'Tomato Empire', 'Mushroom Kingdom'];
const pizzaPrice = [100,101,102,103,104,105]
function createPizzaElement(pizzaElementArray, pizzaPriceArray) {
    for (let i = 0; i < pizzaElementArray.length; i++) {
        menuItemContainer.innerHTML += `
                <div class="menu-item" id='unselected-pizza'>
                        <p class="pizza-name">${pizzaElementArray[i]}</p>
                            <img src="${'/img/Pizza' + (i + 1) + '.png'}" alt="${pizzaName[i]}" class="pizza-img">
                        <p class="pizza-price">${pizzaPriceArray[i]}:-</p>
                </div>`
    }
}
createPizzaElement(pizzaName,pizzaPrice)
