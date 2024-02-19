const selectedSeat = [];

function handleSeatSelection(seatId) {
    if (!selectedSeat.includes(seatId)) {
        document.getElementById(seatId).classList.add('selected-seat');

        selectedSeat.push(seatId);
        handlePhoneNumber();

        document.getElementById('numberOfSeatsLeft').innerText = 40 - selectedSeat.length;
        document.getElementById('numberOfSelectedSeat').innerText = selectedSeat.length;
        document.getElementById('TotalPrice').innerText = selectedSeat.length * 550;
        document.getElementById('grandTotal').innerText = document.getElementById('TotalPrice').innerText;

        const parentElement = document.getElementById('seat-summary');
        const dynamicDiv = document.createElement('div');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        p1.innerText = seatId;
        p2.innerText = 'Economy';
        p3.innerText = '550';
        dynamicDiv.append(p1, p2, p3);
        dynamicDiv.classList.add('dynamic-li');
        parentElement.append(dynamicDiv);

        if (selectedSeat.length === 4) {
            document.getElementById('coupon-input').removeAttribute('disabled');
            document.getElementById('apply-button').removeAttribute('disabled');

            var seatElements = document.getElementsByClassName('seat');
            for (var i = 0; i < seatElements.length; i++) {
                seatElements[i].setAttribute('disabled', true);
            }
        };
    }

}

function getCoupon() {
    const givenInput = document.getElementById('coupon-input').value;
    let currentGrandTotal = document.getElementById('grandTotal').innerText;

    if (givenInput === 'NEW15') {
        currentGrandTotal = currentGrandTotal - currentGrandTotal * 0.15;
        document.getElementById('coupon-container').style.display = 'none';
        document.getElementById('totalDiscount').innerText = 330;
        document.getElementById('discount-container').classList.remove('hidden');
    } else if (givenInput === 'Couple 20') {
        currentGrandTotal = currentGrandTotal - currentGrandTotal * 0.2;
        document.getElementById('coupon-container').style.display = 'none';
        document.getElementById('totalDiscount').innerText = 440;
        document.getElementById('discount-container').classList.remove('hidden');
    };

    document.getElementById('grandTotal').innerText = currentGrandTotal;
}

function handlePhoneNumber() {

    var phoneInput = document.getElementById("phone");
    var phoneNumber = phoneInput.value;

    if (selectedSeat.length > 0 && phoneNumber !== '') {
        document.getElementById('submit-button').removeAttribute('disabled');
    } else {
        document.getElementById('submit-button').setAttribute('disabled', true);
    }
}



