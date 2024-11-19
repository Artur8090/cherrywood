const mainHeader = document.querySelector('#menu-container-header')
const continueButton = document.querySelector('.continue');
const backButton = document.querySelector('.back')
let slideNumber = 1;
changeSlide(slideNumber)
continueButton.addEventListener('click', () => {
    slideNumber++;
    changeSlide(slideNumber)
})
backButton.addEventListener('click', () =>{
    slideNumber--;
    changeSlide(slideNumber);
})
function changeSlide(num) {
    if(num == 1){
        menuItemContainer.style.display = 'flex';
        extrasItemContainer.style.display = 'none';
        mainHeader.innerText = 'Menu'
        backButton.style.display ='none';

    } else if(num == 2){

        menuItemContainer.style.display = 'none';
        extrasItemContainer.style.display = 'flex';
        mainHeader.innerText = 'Extras'
        backButton.style.display = 'block'
    }
}
