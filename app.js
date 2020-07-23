// current currency 
let currency_triger = document.getElementById('currency');

// all price show 
let price_one = document.querySelector('.main__price.one')
let price_two = document.querySelector('.main__price.two')
let price_three = document.querySelector('.main__price.three')

// all price value 
let price_one_value = parseInt(price_one.innerText);
let price_two_value = parseInt(price_two.innerText);
let price_three_value = parseInt(price_three.innerText);

// all sign 
let sign_one = document.querySelector('.sign.one')
let sign_two = document.querySelector('.sign.two')
let sign_three = document.querySelector('.sign.three')


currency_triger.addEventListener('change', calculateAll);

// all converter function 

function calculateAll() {
    calculate(currency_triger, price_one_value, price_one, sign_one);
    calculate(currency_triger, price_two_value, price_two, sign_two);
    calculate(currency_triger, price_three_value, price_three, sign_three);
}

// main coverter function 

function calculate(cc, cr, cshow, cSign) {

    let bdtP = cr;

    if(cc.value == 'usd') {
        
        let newPrice = cr / 80;
        cshow.innerText = newPrice.toFixed(2);
        cSign.innerText = "$"

    } 
    else if ( cc.value == 'euro') {

        let newPrice = cr / 98;
        cshow.innerText = newPrice.toFixed(2);
        cSign.innerText = "€";

    } else if(cc.value == 'bdt') {

        let newPrice = cr;
        cshow.innerText = newPrice;
        cSign.innerText = "‎৳";

    }
}


