let cart=[];
let totalPrice=0;

function addToCart(productName,price)
{
    cart.push({name: productName,price:price});
    totalPrice+=price;
    document.getElementById("cart-count").innerText = cart.length;
}

const cartModal= document.getElementById("cart-modal");
const viewCartBtn= document.getElementById("cart-btn");
const closeCartBtn= document.getElementById("close-cart");
const checkOutBtn= document.getElementById("checkout-btn");

viewCartBtn.addEventListener("click",()=>{
    updateCartModal();
        cartModal.style.display="flex";    
})

closeCartBtn.addEventListener("click",()=>{
    cartModal.style.display="none";
})

checkOutBtn.addEventListener("click",()=>{
    if(cart.length===0){
    alert("cart is empty");
    return;
    }
   
    alert(`checkout successful! Total price : $${totalPrice.toFixed(2)}`);
    cart=[];
    totalPrice=0;
    document.getElementById("cart-count").innerText=0;
    cartModal.style.display="none";
    
})


function updateCartModal(){
    const cartItemsDiv= document.getElementById("cart-items");
    cartItemsDiv.innerHTML="";

cart.forEach ((item,index)=>{
    const p=document.createElement("p");
    p.innerText=`${item.name} - $${item.price}`;
     cartItemsDiv.appendChild(p);
    
    const removeBtn=document.createElement("button");
    removeBtn.innerText="Remove";
    removeBtn.className="remove-btn";
     p.appendChild(removeBtn);
    removeBtn.addEventListener("click",()=>removeItem(index));
  
   
    
})

document.getElementById("total-price").innerText=`Total: $${totalPrice.toFixed(2)}`;
}


function removeItem(index){
    totalPrice-=cart[index].price;
    cart.splice(index,1);
    document.getElementById("cart-count").innerText=cart.length;
    
    updateCartModal();
}