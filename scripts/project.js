let cart = [];
function addToCart(itemName, price) {
  cart.push({ itemName, price });
  renderCart();
}

let renderCart = () =>{
  const cartItems = $('#cartItems');
  cartItems.html("");
  let subtotal = 0;

  if (cart.length === 0) {
    cartItems.html("<li class='list-group-item'>Seu carrinho está vazio.</li>");
  } else {
    cart.forEach((item, index) => {
      subtotal += item.price;
      cartItems.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          ${item.itemName}
          <span>$${item.price.toFixed(2)}</span>
        </li>
      `;
    });
  }
  $("#cartSubtotal").html(`$${subtotal.toFixed(2)}`);
}

function emptyCart() {
  cart = [];
  renderCart();
}

//Each product
let shirt = {
    title: 'A big awesome Shirt',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies, felis id placerat bibendum, mauris arcu vestibulum erat, a lobortis dui ligula non nibh. Nulla ac tincidunt dolor, vitae auctor elit. Nunc non purus a purus malesuada malesuada. Aliquam id iaculis urna, non pellentesque lorem. Aenean ac turpis fermentum, egestas odio ut, ultricies magna. Morbi vel turpis urna. Pellentesque feugiat purus velit, sit amet imperdiet ipsum accumsan sed. Nulla id vehicula ipsum. Etiam lacinia, eros quis iaculis faucibus, nunc enim pulvinar velit,',
    price: 100;
    
}
let products =[{title: 'A big awesome Shirt', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies, felis id placerat bibendum, mauris arcu vestibulum erat, a lobortis dui ligula non nibh. Nulla ac tincidunt dolor, vitae auctor elit. Nunc non purus a purus malesuada malesuada. Aliquam id iaculis urna, non pellentesque lorem. Aenean ac turpis fermentum, egestas odio ut, ultricies magna. Morbi vel turpis urna. Pellentesque feugiat purus velit, sit amet imperdiet ipsum accumsan sed. Nulla id vehicula ipsum. Etiam lacinia, eros quis iaculis faucibus, nunc enim pulvinar velit,',price: 100}, {title: 'A big awesome Shirt', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies, felis id placerat bibendum, mauris arcu vestibulum erat, a lobortis dui ligula non nibh. Nulla ac tincidunt dolor, vitae auctor elit. Nunc non purus a purus malesuada malesuada. Aliquam id iaculis urna, non pellentesque lorem. Aenean ac turpis fermentum, egestas odio ut, ultricies magna. Morbi vel turpis urna. Pellentesque feugiat purus velit, sit amet imperdiet ipsum accumsan sed. Nulla id vehicula ipsum. Etiam lacinia, eros quis iaculis faucibus, nunc enim pulvinar velit,',price: 100}, {title: 'A big awesome Shirt', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies, felis id placerat bibendum, mauris arcu vestibulum erat, a lobortis dui ligula non nibh. Nulla ac tincidunt dolor, vitae auctor elit. Nunc non purus a purus malesuada malesuada. Aliquam id iaculis urna, non pellentesque lorem. Aenean ac turpis fermentum, egestas odio ut, ultricies magna. Morbi vel turpis urna. Pellentesque feugiat purus velit, sit amet imperdiet ipsum accumsan sed. Nulla id vehicula ipsum. Etiam lacinia, eros quis iaculis faucibus, nunc enim pulvinar velit,',price: 100}];

//add to cart
let addCart1 = $('.addProduct1');
let myArray = [];
addCart1.on('click', () =>{
    let {title, desc, price} = products;
    myArray.push(products[0]);
});





