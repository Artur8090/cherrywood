const menuItems = document.getElementsByClassName('menu-item');
const menuContainer = document.querySelector('.menu-container')
const extrasContainer = document.querySelector('.extras-container');
const saveButton = document.querySelector('.continue');
let selectedItems = [];
let menuItemsArray = Array.from(menuItems);

menuItemsArray.forEach((element) => {
    element.addEventListener('click', () => {
        if (element.classList[1] === 'unselected-pizza') {
            element.className = 'menu-item selected-pizza';
        } else {
            element.className = 'menu-item unselected-pizza';
        }
    });
});

saveButton.addEventListener('click',()=>{
    for(let i = 0; i < menuItemsArray.length; i++){
        if(menuItemsArray[i].classList[1] == 'selected-pizza'){
            selectedItems.push(menuItemsArray[i].id)
        }
    }
})

