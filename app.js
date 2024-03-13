function fun(id){
    console.log(id);
    let clr = document.getElementById(id);
    if(clr.style.color === "gold") clr.style.color = "grey";
    else clr.style.color = "gold";

}
let arr =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

let count =0;
 function counter(val){
    count++;
    console.log(count);
    arr[val-1]++;
    document.querySelector('.c').innerHTML = `Your Cart:- ${count}`;



 }

const getdata = async (value)=>{
    let datas = await fetch("https://fakestoreapi.com/products");
    let jsondata = await datas.json();
    display(jsondata,value);
    
}

const display = (jsonData, value) => {
    const result = document.getElementById("resultsContainer"); 
    result.innerHTML = '';
    for (let i = 0; i < 20; i++) {
        if (value === jsonData[i].category) {
            let div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = `
                <img src="${jsonData[i].image}" alt="">
                <div class="title">${jsonData[i].title}</div>
                <div class="np">
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>(${jsonData[i].rating.count} Reviews)
                    <h3>$ ${jsonData[i].price}</h3>
                    </div>
                <div class="price">
                <h3>Price:- $ ${Math.round(jsonData[i].price - (jsonData[i].price/10))}</h3>
                <p><i class="fa-solid fa-circle"></i>In Stock</p>
                </div>
                <button class="btn" onclick="counter(${jsonData[i].id})"><i class="fa-solid fa-cart-shopping"></i>Add to Cart</button>
                <div class="fav">
                   <p><i id ="${jsonData[i].id}e"class="fa-solid fa-square" onclick = "fun(this.id)"></i>Compare</p>
                    <p><i id="${jsonData[i].id}f" class="fa-solid fa-star" onclick = "fun(this.id)"></i>Add to Favourites</p>
                </div>
            `;
            result.appendChild(div);
        } 
    }
}
document.querySelector(".buy").addEventListener("click", () => {
    console.log("Button clicked");
    let cart = document.querySelector(".page");
    console.log("Cart:", cart); 
    for (let i = 0; i < 20; i++) {
        console.log("Iteration", i); 
        if (arr[i] > 0) {
            console.log("Item added:", jsonData[i]); 
            let div = document.createElement('div');
            div.classList.add('car');
            cart.appendChild(div);
        }
    }
});


const button = document.querySelector(".buy");
    button.addEventListener('click', function() {
    window.location.href = 'www.google.com';
});