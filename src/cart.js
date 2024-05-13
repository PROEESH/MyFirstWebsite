let label = document.getElementById('label');
let shoppingCart = document.getElementById('shopping-cart');
let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = ()=>{
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0);
    console.log("calculation function is running");
};

calculation();


let generateCartItems = ()=>{
    if(basket.length !== 0){
        return (shoppingCart.innerHTML=basket.map((x)=>{
            let {id,item} = x;
            return `            
            <div> 
                <img width= "100" src="תמונת שמיים.jpg"  alt = "aaaa רעותי" ></img>
            <h2>fewfwfw </h2>
            </div>`;
        }).join(""));

    }
    else{
        label.innerHTML = `<h2> cecece</h2>
        <a href="index.html"> 
            <button class="homeBtn">back home</button>
        </a>
        `;
    };
};

generateCartItems();