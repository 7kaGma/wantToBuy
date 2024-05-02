"use strict";
  /*データを取得する関数*/
 
  function dataGet(){
    document.querySelectorAll(".frame")
  }
  /*ボタンアクション*/ 
  const btn = document.querySelectorAll(".btn");
  console.log(btn);

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
    })
  })
