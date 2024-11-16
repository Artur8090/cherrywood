const menuItems = document.getElementsByClassName('menu-item');

Array.from(menuItems).forEach((element) => {
    element.addEventListener('click', () => {
        if (element.classList[1] === 'unselected-pizza') {
            element.className = 'menu-item selected-pizza';
        } else {
            element.className = 'menu-item unselected-pizza';
        }
    });
});
