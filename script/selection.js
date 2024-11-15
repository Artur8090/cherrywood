const menuItems = document.getElementsByClassName('menu-item');

// Convert HTMLCollection to an array using Array.from()
Array.from(menuItems).forEach((element) => {
    element.addEventListener('click', () => {
        if (element.id === 'unselected-pizza') { // Use === for comparison
            element.id = 'selected-pizza';
        } else {
            element.id = 'unselected-pizza';
        }
    });
});
