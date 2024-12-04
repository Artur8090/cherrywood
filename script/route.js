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
        drinkItemContainer.style.display = 'none'
        mainHeader.innerText = 'Menu'
        continueButton.style.display = 'block'
        backButton.style.display ='none';
        paymentItemContainer.style.display = 'none'

    } else if(num == 2){

        menuItemContainer.style.display = 'none';
        drinkItemContainer.style.display = 'none'
        extrasItemContainer.style.display = 'flex';
        mainHeader.innerText = 'Extras'
        continueButton.style.display = 'block'
        backButton.style.display = 'block'   
        paymentItemContainer.style.display = 'none'
    }else if(num == 3){

        menuItemContainer.style.display = 'none';
        drinkItemContainer.style.display = 'flex'
        extrasItemContainer.style.display = 'none';
        mainHeader.innerText = 'Drinks'
        continueButton.style.display = 'block'
        backButton.style.display = 'block'
        paymentItemContainer.style.display = 'none'
    } else if(num == 4){
        menuItemContainer.style.display = 'none';
        drinkItemContainer.style.display = 'none'
        extrasItemContainer.style.display = 'none';
        mainHeader.innerText = 'Payment'
        continueButton.style.display = 'none'
        paymentItemContainer.style.display = 'flex'
    }
}
