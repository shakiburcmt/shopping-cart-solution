// call function with return for plus button and calculate total payable price
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumberFromReturn = updateCaseNumber(true);
    caseTotalPricePayable(newCaseNumberFromReturn);
    calculateSubTotal();
})

// call function with return for minus button and calculate total payable price
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumberFromReturn = updateCaseNumber(false);
    caseTotalPricePayable(newCaseNumberFromReturn);
    calculateSubTotal();
})