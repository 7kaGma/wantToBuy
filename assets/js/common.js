"use strict"; 
  /*カートに入れる*/ 
  const btn = document.querySelectorAll(".btn");

  btn.forEach(function(element){
    element.addEventListener('click',function(){
      let frame= this.parentNode;
      let key= frame.id;
      console.log(key);

      let value={};
      let item = frame.querySelector(".item").textContent;
      value['item'] = item;
      let image = frame.querySelector(".image").getAttribute('src');
      value['image'] = image;
      let price = frame.querySelector(".priceNumber").textContent;
      value['price'] = price;
      console.dir(value);
      localStorage.setItem(key,JSON.stringify(value));

      element.classList.add("hidden");
      frame.querySelector(".cancel").classList.add("appear");
      location.reload();
    })
  })

/*キャンセル*/
  const cancel = document.querySelectorAll(".cancel");
  cancel.forEach(function(element){
    element.addEventListener('click',function(){
      let frame= this.parentNode;
      let key= frame.id;
      console.log(key);
      
      localStorage.removeItem(key);

      element.classList.remove("appear");
      frame.querySelector(".btn").classList.remove("hidden");
      location.reload();
    })
  })

  /*submit*/
  document.querySelector(".submit").addEventListener('click',function(){
    localStorage.clear();
    location.reload();
  })

let valueId=[];


let judgeframe = document.querySelectorAll(".origin"); // ループの外で一度だけ取得

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let valueInput = localStorage.getItem(key);
    let value = JSON.parse(valueInput);
    /*フレームの生成*/
    let divFrame = document.createElement("div");
    divFrame.className = "frame";

    let itemtag = document.createElement("h3");
    itemtag.className = "item";
    itemtag.textContent = value.item;

    let imageBox = document.createElement("figure");
    imageBox.className = "imageBox";

    let imageElement = document.createElement("img");
    imageElement.className = "image";
    imageElement.src = value.image;

    let priceCard = document.createElement("p");
    priceCard.className = "price";
    priceCard.textContent = `${value.price}円`;

    imageBox.appendChild(imageElement);
    divFrame.appendChild(itemtag);
    divFrame.appendChild(imageBox);
    divFrame.appendChild(priceCard);
    document.getElementById("shoppingBasket").appendChild(divFrame);

    valueId.push(value.item);
}

judgeframe.forEach(function(element) {
    let itemName = element.querySelector(".item").textContent; // テキスト内容を取得する
    let btnName = element.querySelector(".btn");
    let cancelName = element.querySelector(".cancel");

    if (valueId.includes(itemName)) {
        btnName.classList.add("hidden");
        cancelName.classList.add("appear");
    }
});

