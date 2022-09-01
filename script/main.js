//dark mode toggle
/*
const toggle = document.getElementById('toggle');
const containers = document.getElementsByClassName('home');


toggle.addEventListener('click', function() {
    this.classList.toggle('uil-sun');
    this.classList.toggle('uil-moon');

});


function colors() {
    if (toggle.className == '.uil.uil-moon') {
        containers.classList.add('dark-mode');
    } else if (toggle.className == '.uil.uil-sun') {
        containers.classList.remove('dark-mode');
    } else {
        containers.classList.remove('dark-mode');
    };
}
colors();
*/

//order card
var open = document.getElementById('open-order');
var close = document.getElementById('close-order');
var order = document.getElementsByClassName('ordersC');
console.log(order);
open.addEventListener('click', function() {
    cardO();
});
close.addEventListener('click', function() {
    cardC();
});

function cardO() {
    for (var ordersC of order) {
        ordersC.classList.add('card-remove');
    }
};

function cardC() {
    for (var ordersC of order) {
        ordersC.classList.remove('card-remove');
    }
};