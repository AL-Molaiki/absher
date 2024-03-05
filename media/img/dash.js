
let foodItems=[
    {
        id:1,
        category:'المقبلات',
        name:'سلطة',
        price:500,
        image:'../media/img/food1.png'
    
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
        image:'../media/images project/lam1.jfif'
    
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
        image:'../media/images project/sandwich.jpg'
    
    },

    {
        id:1,
        category:'المشروبات',
        name:'عصير التوت',
        price:400,
        image:'../media/images project/juce3.jpg'
    
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
        image:'../media/images project/lam2.jfif'
    
    },

    {
        id:1,
        category:'الاكلات الشعبية',
        name:'سلتة',
        price:400,
        image:'../media/اكلات_شعبية/images (2).jpeg'
    
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
        image:'../media/images project/egs.jpg'
    
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
        image:'../media/images project/ch.jpg'
    
    },

    {
        id:1,
        category:'المشروبات',
        name:'شراب الليمون',
        price:400,
        image:'../media/images project/juce4.jpg'
    
    },


    {
        id:1,
        category:'المقبلات',
        name:'بيتزا',
        price:1000,
        image:'../media/images project/pitza.png'
    
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
        image:'../media/اكلات_شعبية/images (2).jpg'
    
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
        image:'../media/images project/chips.jpg'
        
    },

    {
        id:1,
        category:'المشروبات',
        name:'شراب الرمان',
        price:400,
        image:'../media/img/food3.png'
    
    },

    

   
];

function load(){
  let table=document.querySelector('tbody');
  let c=1;
  foodItems.forEach(element => {
    let t=`
    <tr>
    <td>${c++}</td>
    <td> <img src=${element.image}> </td>
    <td>${element.name}</td>
    <td>${element.category}</td>
    <td>${element.price} ر.ي</td>
    <td><a href=""
      class="btn btn-sm btn-primary">تعديل</a> 
      
      <a
      href=""
      class="btn btn-sm btn-danger">حذف</a></td>
  </tr>
    
    
    
    `;

    table.innerHTML+=t;


    
  });
}

load();