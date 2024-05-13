let shop = document.getElementById("shop");



let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = (cat) => {
    shop.innerHTML= (cat?shopItemsData.filter((x)=>x.category===cat):shopItemsData).map((x,cat)=>
        {
      let{id,name,price,desc,img,category} = x
      if(category === cat)
        {
            console.log(5);
            return `<h1>aaaa</h1>`; 
        }
      let search = basket.find((x)=>x.id===id) || []
      return `
      <div id = product-id-${id} class="item">
              <img width= "220" src="תמונת שמיים.jpg"  alt = "h" ></img>
              <div class="details">
                  <h3>${name}</h3>
                  <div class="price-quantity">
                      <h2>50 ILS</h2>
                      <div class="buttons">
                          <i onclick="decrement(${id})" class="bi bi-dash"></i>
                          <div id = ${id} class="quantity">${search.item=== undefined? 0:search.item}</div>
                          <i onclick="increment(${id})" class="bi bi-plus"></i>
                      </div>
                  </div>
              </div>
          </div>
          `; //add desc after name <p>${desc}</p>
  }).join("");
    };

generateShop();

let increment = (id)=>{ // why .id is object and not the value inside id
    selectedItem = id;
    console.log("increment",selectedItem.id);
    let search = basket.find((x)=>x.id===selectedItem.id)
    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1
        });
    }
    else{
        search.item  += 1;

    }
    localStorage.setItem("data",JSON.stringify(basket));
    console.log(basket);
    update(selectedItem.id);
}
let decrement = (id)=>{
    selectedItem = id;
    console.log("decrement",id);
    let search = basket.find((x)=>x.id===selectedItem.id) 
    if(search === undefined)return;
    if(search.item === 0)return;
    else{
        search.item  -= 1;
    }
    console.log(basket)
    update(selectedItem.id);
    basket = basket.filter((x)=>x.item !== 0);
    localStorage.setItem("data",JSON.stringify(basket));

}
let update = (id)=>{
    console.log("update functon is running", id);
    let search = basket.find((x)=> x.id === id);
    document.getElementById(id).innerHTML = search.item; //changing the amount of item
    calculation();
};

let calculation = ()=>{
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0);
    console.log("calculation function is running");
};

calculation();

let test = ()=>{
    console.log(1);
}


