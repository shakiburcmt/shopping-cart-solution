// to reduce repeatation use function below
function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

// case total price is same for plus and minus button so here easily declare a function
function caseTotalPricePayable(newCaseNumberFromReturn) {
    const caseTotalPrice = newCaseNumberFromReturn * 59;
    const caseTotalPricePayable = document.getElementById('case-total-price');
    caseTotalPricePayable.innerText = caseTotalPrice;
}


function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);
    let newPhoneNumber;
    if (isIncrease) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumberFromReturn) {
    const phoneTotalPricePayable = document.getElementById('phone-total-price');
    phoneTotalPricePayable.innerText = newPhoneNumberFromReturn * 1219;
}


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