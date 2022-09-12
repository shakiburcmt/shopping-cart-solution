// comment added from browser

// plus button add
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumberFromReturn = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumberFromReturn);

    calculateSubTotal();

})

// minus button add
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumberFromReturn = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumberFromReturn);

    // calculate total
    const currentCaseCost = getTextElementValueById('case-total-price');
    calculateSubTotal();
})