let mailArray = ["ksvhgvks@gmail.com", "glav9bob@gmail.com", "65drh347@gmail.com", "ks@gmail.com"];
let blackListArray = ["ksvhgvks@gmail.com", "65drh347@gmail.com"];
let notInBL = [];


function filter(mailArray, blackListArray) {
    let notInBL = [];
    for (i of mailArray) {
        if (!blackListArray.includes(i)) {
            notInBL.push(i);
        }
    }
    return notInBL;
}
console.log(filter(mailArray, blackListArray));




function calculate(cartSum, itemsNumber, promo = null) {
    if (promo === 'ДАРИМ300') {
        if (cartSum < 300) {
            cartSum = 0;
        }
        cartSum -= 300;
    }
    if (itemsNumber >= 10) {
        cartSum -= cartSum / 100 * 5;
    }
    if (cartSum > 50000) {
        cartSum += (cartSum - 50000) - ((cartSum - 50000) / 100 * 20);
    }
    if (promo === 'СКИДКА15' && cartSum >= 20000) {
        cartSum -= cartSum / 100 * 15;
    }
    return cartSum;
}
console.log(calculate(30050, 8));