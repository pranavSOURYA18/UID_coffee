let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Caffe Americano',
		description: '<br/>Rich in flavour,full-bodied espresso with hot water in true ...',
        image: '1.PNG',
        price: 231.00
    },
    {
        id: 2,
        name: 'Cold Coffee',
		description: '<br/>Our signature rich in flavour espresso blended with delicate...',
        image: '2.PNG',
        price: 294
    },
    {
        id: 3,
        name: 'Java Chip Frappuccino',
		description: '<br/>We blend mocha sauce and Frappuccino® chips with Frappuccino...',
        image: '3.PNG',
        price: 309
    },
    {
        id: 4,
        name: 'Double Chocolate Chip Frappuccino',
		description: '<br/>Rich mocha-flavored sauce meets up ...',
        image: '4.PNG',
        price: 231
    },
    {
        id: 5,
        name: 'Doppio Espresso',
		description: '<br/>Our smooth signature Espresso Roast and its caramelly sweetn...',
        image: '5.PNG',
        price: 252
    },
    {
        id: 6,
        name: 'Cappuccino',
		description: '<br/>Dark, Rich in flavour espresso lies in wait under a smoothed...',
        image: '6.PNG',
        price: 204
    },
    {
        id: 7,
        name: 'Chocolate Cortado',
		description: '<br/>A perfect espresso shot and mocha sauce, topped with steamed...',
        image: '7.PNG',
        price: 231
    },
    {
        id: 8,
        name: 'Caramel Macchiato',
		description: '<br/>Freshly steamed milk with vanilla-flavored syrup is marked ...',
        image: '8.PNG',
        price: 231
    },
    {
        id: 9,
        name: 'Blueberry Muffin',
		description: '<br/>Buttery vanilla cake with berries dusted with granulated sug...',
        image: '9.PNG',
        price: 305
    },
    {
        id: 10,
        name: 'Banana Chocolate Loaf Cake',
		description: '<br/>English tea cake with rich taste of banana ..',
        image: '10.PNG',
        price: 315
    },
    {
        id: 11,
        name: 'Egg White and Chicken In Multigrain Croiss',
		description: '<br/>Fluffy egg white omlette and chicken ...',
        image: '11.PNG',
        price: 351.75
    },
    {
        id: 12,
        name: 'Pepper Chicken Wrap',
		description: '<br/>Spicy chicken filling with egg and hints of curry leaves and...',
        image: '12.PNG',
        price: 252.00 
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
			<div class="description">${value.description}</div>
            <div class="price">Rs ${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
function placeorder()
{
    window.location.href = "order-success.html";
}