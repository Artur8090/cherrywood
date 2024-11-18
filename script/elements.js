

const menuItemContainer = document.querySelector('.menu-item-container')
const pizzaName = ['Pepperoni', 'Margharita', 'The Gamble', 'Hawaii', 'Tomato Empire', 'Mushroom Kingdom'];
const pizzaPrice = [100000,101020,102324,1043324,1043244,'∞']
const pizzaIngredients = [[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15],[16,17,18]]
function createPizzaElement(pizzaElementArray, pizzaPriceArray) {
    for (let i = 0; i < pizzaElementArray.length; i++) {
        menuItemContainer.innerHTML += `
                <div class="menu-item unselected-pizza"  id='${pizzaName[i].toLowerCase()}'>
                        <p class="pizza-name">${pizzaElementArray[i]}</p>
                        <p class="pizza-ingredient">${ingredientToStr(pizzaIngredients[i])}</p>
                            <img src="${'/img/Pizza' + (i + 1) + '.png'}" alt="${pizzaName[i]}" class="pizza-img">
                        <p class="pizza-price">${pizzaPriceArray[i]}:-</p>
                </div>`
    }
}
createPizzaElement(pizzaName,pizzaPrice)

function ingredientToStr(ingArr){
    let ingStr = ``;
    for(let i = 0; i < ingArr.length; i++){
        if(i+1!=ingArr.length){
            ingStr += `${ingArr[i]},`
        } else{
            ingStr +=`${ingArr[i]}`
        }
    }
    return ingStr;
}


const extrasItemContainer = document.querySelector('.extras-item-container')
const extrasName = ['Cheese','Tomatos','Mushrooms','Olives','Pepperonies','Bacon'];
const extrasPrice = [20,20,20,20,20,20];
function createExtrasElement(extrasElementArray, extrasPriceArray){
    for(let i = 0; i < extrasElementArray.length; i++){
        extrasItemContainer.innerHTML += `
        <div class="extras-item unselected-extras"  id='${extrasName[i].toLowerCase()}'>
                <p class="extras-name">Extra ${extrasElementArray[i]}</p>
                    <img src="${'/img/extras' + (i + 1) + '.png'}" alt="${extrasName[i]}" class="extras-img">
                <p class="pizza-price">${extrasPriceArray[i]}:-</p>
        </div>`
    }
}
createExtrasElement(extrasName,extrasPrice)