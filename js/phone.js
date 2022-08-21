// plus button add
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumberFromReturn = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumberFromReturn);

})

// minus button add
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumberFromReturn = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumberFromReturn);
})