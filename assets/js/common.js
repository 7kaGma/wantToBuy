"use strict";
  /*データを取得する関数*/
 
  function dataGet(){
    document.querySelectorAll(".frame")
  }
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
    })
  })

  /*submit*/
  document.querySelector(".submit").addEventListener('click',function(){
    localStorage.clear();
  })
