const menuItems = document.getElementsByClassName('menu-item');
const extraItems = document.getElementsByClassName('extras-item')
const menuContainer = document.querySelector('.menu-container')
const extrasContainer = document.querySelector('.extras-container');
const saveButton = document.querySelector('.continue');
let selectedItems = [];
let menuItemsArray = Array.from(menuItems);
let extraItemsArray = Array.from(extraItems);
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

saveButton.addEventListener('click',()=>{
    for(let i = 0; i < menuItemsArray.length; i++){
        if(menuItemsArray[i].classList[1] == 'selected-pizza'){
            selectedItems.push(menuItemsArray[i].id)
        }
    }
    for(let i = 0; i < extraItemsArray; i++){
        if(extraItemsArray[i].classList[1] == 'selected-extras'){
            selectedItems.push(extraItemsArray[i].id)
        }
    }
    console.log(selectedItems)
})

