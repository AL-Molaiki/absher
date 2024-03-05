
// import { foodItems } from "./fooditems.js";
let foodItems=[
    {
        id:1,
        category:'المقبلات',
        name:'سلطة',
        price:500,
        image:'../media/img/food1.png'
       // image:'../media/food1.png'
    
    },

    {
        id:1,
        category:'اللحوم والدجاج',
        name:'سمك',
        price:1000,
        image:'../media/img/food4.png'
    
    },

    {
        id:1,
        category:'الاكلات الشعبية',
        name:'عصيد',
        price:400,
        image:'../media/اكلات_شعبية/ased.jpg'
    
    },

    {
        id:1,
        category:'الحلويات',
        name:'هريسة',
        price:1500,
        image:'../media/اكلات_شعبية/hq720.jpg'
    
    },

    {
        id:1,
        category:'الساندويتشات',
        name:'برجر',
        price:250,
        image:'../media/img/prjr.jpg'
    
    },

    {
        id:1,
        category:'المشروبات',
        name:'شراب الطاقة',
        price:400,
        image:'../media/img/juce2.jpg'
    
    },


    {
        id:1,
        category:'المقبلات',
        name:'مكرونة',
        price:100,
        image:'../media/img/offer3.png'
    
    },

    {
        id:1,
        category:'اللحوم والدجاج',
        name:'دجاج مشوي',
        price:2000,
        image:'../media/img/lam1.jfif'
    
    },

    {
        id:1,
        category:'الاكلات الشعبية',
        name:'فحسة',
        price:400,
        image:'../media/اكلات_شعبية/fahsa.jpeg'
    
    },

    {
        id:1,
        category:'الحلويات',
        name:'فطائر بالموز',
        price:400,
        image:'../media/img/food9.jpeg'
    
    },

    {
        id:1,
        category:'الساندويتشات',
        name:'ساندويتش لحم',
        price:1000,
        image:'../media/img/sandwich.jpg'
    
    },

    {
        id:1,
        category:'المشروبات',
        name:'عصير التوت',
        price:400,
        image:'../media/img/juce3.jpg'
    
    },

    {
        id:1,
        category:'المقبلات',
        name:'سلطة باللحم',
        price:800,
        image:'../media/img/ffffff.jpeg'
    
    },

    {
        id:1,
        category:'اللحوم والدجاج',
        name:'بروست',
        price:1000,
        image:'../media/img/lam2.jfif'
    
    },

    {
        id:1,
        category:'الاكلات الشعبية',
        name:'سلتة',
        price:400,
        image:'../media/اكلات_شعبية/salta.jpeg'
    
    },

    {
        id:1,
        category:'الحلويات',
        name:'مشبك',
        price:10,
        image:'../media/اكلات_شعبية/mshabak.png'
    
    },

    {
        id:1,
        category:'الساندويتشات',
        name:'ساندويتش بيض',
        price:400,
        image:'../media/img/egs.jpg'
    
    },

    {
        id:1,
        category:'المشروبات',
        name:'عصير بالشوكولاته',
        price:400,
        image:'../media/img/juce.jpg'
    
    },


    {
        id:1,
        category:'المقبلات',
        name:'مكرونة باللحم',
        price:1300,
        image:'../media/img/offer2.png'
    
    },

    {
        id:1,
        category:'اللحوم والدجاج',
        name:'لحم مقدد',
        price:3000,
        image:'../media/img/food7.jpeg'
    
    },

    {
        id:1,
        category:'الاكلات الشعبية',
        name:'برمة',
        price:3000,
        image:'../media/اكلات_شعبية/المأكولات-اليمنيه.jpg'
    
    },

    {
        id:1,
        category:'الحلويات',
        name:'بسكويت بالعسل',
        price:10,
        image:'../media/img/food8.jpeg'
    
    },

    {
        id:1,
        category:'الساندويتشات',
        name:'ساندويتش شوارما',
        price:250,
        image:'../media/img/ch.jpg'
    
    },

    {
        id:1,
        category:'المشروبات',
        name:'شراب الليمون',
        price:400,
        image:'../media/img/juce4.jpg'
    
    },


    {
        id:1,
        category:'المقبلات',
        name:'بيتزا',
        price:1000,
        image:'../media/img/pitza.png'
    
    },

    {
        id:1,
        category:'اللحوم والدجاج',
        name:'كباب',
        price:1000,
        image:'../media/img/kbab.jpeg'
    
    },

    {
        id:1,
        category:'الاكلات الشعبية',
        name:'بنت الصحن',
        price:400,
        image:'../media/اكلات_شعبية/bint.jpg'
    
    },

    {
        id:1,
        category:'الحلويات',
        name:'فطائر',
        price:100,
        image:'../media/img/food5.png'
    
    },

    {
        id:1,
        category:'الساندويتشات',
        name:'شيبس',
        price:250,
        image:'../media/img/chips.jpg'
        
    },

    {
        id:1,
        category:'المشروبات',
        name:'شراب الرمان',
        price:400,
        image:'../media/img/food3.png'
    
    },

    

   
];
let cartData=[];
if(localStorage.cart!=null)
    cartData=JSON.parse(localStorage.cart);



    

function addToCart(){
    let img=this.parentNode.parentNode.firstChild.src;
            let name=this.parentNode.previousSibling.previousSibling.firstChild.innerText;
            let price=this.parentNode.previousSibling.previousSibling.lastChild.firstChild.innerText;
            let count=+this.parentNode.previousSibling.firstChild.value;
            // let totall=price*count;
            
        

           let cartOb={
           
            image:img,
            name:name,
            price:price,
            quantity:count
           };
        

           //to avoid repate the same of item
           let flag=false;
         let i;
          for( i=0;i<cartData.length;i++)
           if(cartData[i].name==cartOb.name){
               flag=true;
               break;
           }

            //the item already exsist
           if(flag){
               //let a= cartDataData[i].quantity;
              // let b= cartOb.quantity;
             // console.log(typeof a);
             // console.log(typeof cartData[i].quantity);
              cartData[i].quantity+=cartOb.quantity;
            //   cartData[i].price+=cartOb.price;
           }
          else{
            cartData.push(cartOb);
          } 

        
           

           //cartData.push(cartOb);
           localStorage.setItem('cart',JSON.stringify(cartData));
           //document.getElementById('cart-icon').style.transform='scale(1.5)';
           cart();

        
}//end addToCart

//document.querySelectorAll('.btn-add').forEach(item=>item.addEventListener('click',function(){alert(4444);}));

function cart(){
    let total=0;
    document.getElementById('table-body').innerHTML='';


    cartData.forEach(item=>{
        total+=item.quantity*item.price;

        /** <img src='${item.image}'> */


        let row=`
        <tr>
        
        <td  >
        <button class="fa-regula delete_icon"  >
        <i class="fa-regular fa-trash-can" ></i>
        </button>
        <img src='${item.image}'></td>
        <td>  ${item.name}</td>
        <td class="cart-td">
        <button class="increas">+</button>

       <span> ${item.quantity}</span>
       <button class="decrease">-</button>
        </td>
        <td>  ${item.price + " ر.ي"}</td>
        <td>  ${item.price*item.quantity+ " ر.ي"}</td>
        
        </tr>
        `;
    
        document.getElementById('table-body').innerHTML+=row;
        document.getElementById('Tcounter').innerText=cartData.length;
       
        
    });

    document.getElementById('Tcost').innerText=total+' ر.ي';
    document.querySelector('#total').innerText=total+' ر.ي';
    document.querySelector('#total2').innerText=total+' ر.ي';
    document.querySelector('#final-total').innerText=total+500+' ر.ي';

    document.querySelectorAll('.increas ').forEach(item=>item.addEventListener('click',update));
    document.querySelectorAll('.decrease ').forEach(item=>item.addEventListener('click',update));
    document.querySelectorAll('.delete_icon').forEach(item=>item.addEventListener('click',delete_product));

    




   

    
    

}//end cart function





    
function loadFoodItems(cateName,cateData){
    cateData.map(item=>{


        let item_box=document.createElement('div');
        item_box.setAttribute('class','item-box');

        let img=document.createElement('img');
        img.setAttribute('src',item.image);

        let info=document.createElement('div');
        info.setAttribute('class','info');
         
        let item_name=document.createElement('p');
        item_name.setAttribute('class','item-name');

        item_name.innerText=item.name;

        let itme_price=document.createElement('p');
        let spann=document.createElement('span');
        spann.innerText=item.price;
        itme_price.appendChild(spann);
        

        itme_price.setAttribute('class','item-price');
        itme_price.innerHTML=`<span>${spann.innerText}</span> ر.ي`;
        info.append(item_name);
        info.append(itme_price);
    

        let quantity=document.createElement('div');
        quantity.setAttribute('class','quantity');

        let qty=document.createElement('input');
        qty.setAttribute('type','text');
        
        qty.setAttribute('readonly','readonly');
        qty.setAttribute('class','qty');
        qty.setAttribute('name','qty');
        qty.setAttribute('value','1');

        let plus_sign=document.createElement('i');
        plus_sign.setAttribute('class','fa-sharp fa-solid fa-circle-plus plus-sign');
       // plus_sign.setAttribute('class','plus-sign');


        let minus_sign=document.createElement('i');
        minus_sign.setAttribute('class','fa-sharp fa-solid fa-circle-minus minus-sign');
       // minus_sign.setAttribute('class','minus-sign');

        plus_sign.addEventListener('click',function(){
            qty.value++;


        })

        minus_sign.addEventListener('click',function(){
            
            if(qty.value>1) qty.value--;


        })


        quantity.appendChild(qty);
        quantity.appendChild(plus_sign);
        quantity.appendChild(minus_sign);

        let add=document.createElement('div');
        add.setAttribute('class','add');

        let btn_add=document.createElement('button');
        btn_add.setAttribute('class','btn-add');

        btn_add.innerText='اضافة للسلة';

        add.appendChild(btn_add);
         btn_add.addEventListener('click',addToCart);

        item_box.appendChild(img);
        item_box.appendChild(info);
        item_box.appendChild(quantity);
        item_box.appendChild(add);

        cateName.appendChild(item_box);

    });

}

cart();


function loadFoodFromFile(){
    let appetizers=document.getElementById('appetizers');
    let meatChecken=document.getElementById('meat-chicken');
    let drinks=document.getElementById('drinks');
    let popular_food=document.getElementById('popular-food');
    let sandwitch=document.getElementById('sandwitch');
    let candy=document.getElementById('candy');

    let appetizersData=foodItems.filter(item=> item.category=='المقبلات');
    let meatCheckenData=foodItems.filter(item=> item.category=='اللحوم والدجاج');
    let drinksData=foodItems.filter(item=> item.category=='المشروبات');
    let popular_foodData=foodItems.filter(item=> item.category=='الاكلات الشعبية');
    let sandwitchData=foodItems.filter(item=> item.category=='الساندويتشات');
    let candyData=foodItems.filter(item=> item.category=='الحلويات');

    /*<div id="item-box">
                        <img src="media/cash.png" alt="">
                        <div id="info">
                            <p id="item-name">دجاج شواية دحاجة</p>
                            <p id="item-price">2000 ر ي</p>
                        </div>
                        <div class="quantity">
                            <input type="text" name="qty" id="qty" value="1" >
                            <i class="fa-sharp fa-solid fa-circle-plus" id="plus-sign" ></i>
                            <i class="fa-sharp fa-solid fa-circle-minus" id="minus-sign"  ></i>
                        </div>
                        <div class="add">
                                <button id="btn-add" >اضافة للسلة</button>
                        </div>
                    </div>
 */

   loadFoodItems(appetizers,appetizersData);

    loadFoodItems(meatChecken,meatCheckenData);
    loadFoodItems(popular_food,popular_foodData);
    loadFoodItems(drinks,drinksData);
    loadFoodItems(sandwitch,sandwitchData);
    loadFoodItems(candy,candyData);

}//end loadFoodItems function

loadFoodFromFile();

document.getElementsByClassName('cart')[0].onclick=function(){
    
    document.getElementById('cart-page').classList.toggle('cart-toggle');
    document.getElementById('food-items').classList.toggle('cart-toggle');
    //document.getElementById('cart-page')[0].classList.remove('cart-toggle');
    
}




function update(){
    let name=this.parentNode.previousSibling.previousSibling.innerText;
    let count=this.parentNode.children[1];
    let totall=this.parentNode.parentNode.children[4];
    for(let i=0;i<cartData.length;i++){
        if(cartData[i].name==name){

            if(this.innerHTML=='+'){
                cartData[i].quantity=cartData[i].quantity+1;
                count.innerText=cartData[i].quantity;

            }
            else{
                if(cartData[i].quantity>1){
                    cartData[i].quantity=cartData[i].quantity-1;
                    count.innerText=cartData[i].quantity;
                }
                else{
                    
                    cartData.splice(i,1);
                }
            }
           
        }
    }

    cart();
    localStorage.setItem('cart',JSON.stringify(cartData));
   
//console.log(name,count,totall);


}


let btnUp=document.getElementById('btn-up');

window.onscroll=function(){
    if(scrollY>=600)
        btnUp.style.display='block';
    else btnUp.style.display='none';
    
};

btnUp.onclick=function(){
    window.scrollTo({
        top:0,
        
        behavior:"smooth"

    });

};


document.querySelectorAll('.btn-add').forEach(item=>item.addEventListener('click',popup));
function popup(){
    let name=this.parentNode.parentNode.children[1].firstChild;
    name.style.color='blue !important';
    console.log(this.parentNode.parentNode.children[1].firstChild.innerText);
    let overlay=document.createElement('div');
    overlay.className='popup-overlay';
    document.body.append(overlay);

    let popupBox =document.createElement('div');
    popupBox.className='popup-box';

    let close=document.createElement('span')
    close.className='close-popup';
    close.innerText='x';

    let img=document.createElement('img');
    img.src='./media/correct.png';
   
    let text=document.createElement('h2');
    text.innerHTML=`تم اضافة المنتج <span>(${name.innerText})</span> الى السلة بنجاح `;
    popupBox.appendChild(close);
    popupBox.appendChild(text);
   popupBox.appendChild(img);
    document.body.appendChild(popupBox);

    close.addEventListener('click',function(e){
        this.parentNode.remove();
        document.querySelector('.popup-overlay').remove();

    });
}
// document.querySelectorAll('#delete_icon').forEach(item=>item.addEventListener('onclick',fun_icon));

//start delete prodect
// function fun_icon(){
//     let del=document.getElementById('delete_icon');
    // del.style.backgroundColor='red';
//     localStorage.removeItem('card');

//     localStorage.clear();
// }


function delete_product(){
    let name=this.parentNode.parentNode.children[1].innerText;
    console.log(this.parentNode.parentNode.children[1].innerText)

    
    for(let i=0;i<cartData.length;i++){
        if(cartData[i].name==name){

                    cartData.splice(i,1);
                
            }
           
    

}

cart();
    localStorage.setItem('cart',JSON.stringify(cartData));

    document.getElementById('Tcounter').innerText=cartData.length;

}

// let dell=document.getElementById('delete_icon');
// dell.onmouseenter=function(){
//     // localStorage.clear();
//     alert(4333);}

// dell.addEventListener("click",function(){
//     // localStorage.clear();
//     alert(4333);
// })
