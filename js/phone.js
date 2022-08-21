function getTextElementValueById(elementId) {
    const cost = document.getElementById(elementId);
    const costString = cost.innerText;
    const costTotal = parseInt(costString);
    return costTotal;
}

function calculateSubTotal() {
    // calculate total
    const currentPhoneCost = getTextElementValueById('phone-total-price');
    const currentCaseCost = getTextElementValueById('case-total-price');
    const currentSubTotal = currentPhoneCost + currentCaseCost;
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = currentSubTotal;
}

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