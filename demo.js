  // phone count and pricing

  const increaseElement = document.getElementById("increase");
  increaseElement.addEventListener("click", function(){
   const casePrice = document.getElementById("case-price");
   const phoneCount = document.getElementById("phone-count");
   phoneCount.value = parseInt(phoneCount.value) + 1;


   const phonePrice = document.getElementById("phone-price");
   phonePrice.innerText = + phoneCount.value * 1219;


   
 
   const totalPrice = document.getElementById("total-price");
   totalPrice.innerText = parseInt(casePrice.innerText) + parseInt(phonePrice.innerText);
   
   const taxArea = document.getElementById("tax-amount");
   taxArea.innerText = parseFloat(totalPrice.innerText) * .15;
   const standardTax = parseFloat(taxArea.innerText);
 


   const grandTotal = document.getElementById("grand-total");
   grandTotal.innerText = standardTax + totalPrice.innerText;
  

  })
  const decreaseElement = document.getElementById("decrease");
  decreaseElement.addEventListener("click", function(){
     const casePrice = document.getElementById("case-price");
   const phoneCount = document.getElementById("phone-count");
     if (phoneCount.value <=0 ) {
        phoneCount.value = 0;
        
     } else {
      phoneCount.value = parseInt(phoneCount.value) -1 ;
        
     }

     const phonePrice = document.getElementById("phone-price");
     phonePrice.innerText = phoneCount.value * 1219;




     const totalPrice = document.getElementById("total-price");
   totalPrice.innerText = parseInt(casePrice.innerText) + parseInt(phonePrice.innerText);

   const taxArea = document.getElementById("tax-amount");
   taxArea.innerText = parseFloat(totalPrice.innerText) * .15;
   const standardTax = parseFloat(taxArea.innerText);
  

   const grandTotal = document.getElementById("grand-total");
   grandTotal.innerText = standardTax + totalPrice.innerText;

   

  })

//   Case count and pricing
const caseIncrease = document.getElementById("case-increase");
caseIncrease.addEventListener("click", function(){
   const phonePrice = document.getElementById("phone-price");
   const caseCount = document.getElementById("case-count");
   caseCount.value = parseInt(caseCount.value) + 1;

   // Case price
   const casePrice = document.getElementById("case-price");
   casePrice.innerText = caseCount.value* 59;




   const totalPrice = document.getElementById("total-price");
   totalPrice.innerText = parseInt(casePrice.innerText) + parseInt(phonePrice.innerText);

   const taxArea = document.getElementById("tax-amount");
   taxArea.innerText = parseFloat(totalPrice.innerText) * .15;
   const standardTax = parseFloat(taxArea.innerText);
  

   const grandTotal = document.getElementById("grand-total");
   grandTotal.innerText = standardTax + totalPrice.innerText;
   

})



const caseDecrease = document.getElementById("case-decrease");
caseDecrease.addEventListener("click", function(){
   const phonePrice = document.getElementById("phone-price");
   const caseCount = document.getElementById("case-count");
   if (caseCount.value <= 0) {
      caseCount.value = 0;
      
   } else {
      caseCount.value = parseInt(caseCount.value) -1;
   }


   const casePrice = document.getElementById("case-price");
   casePrice.innerText = caseCount.value * 59 


   
   const totalPrice = document.getElementById("total-price");
   totalPrice.innerText = parseInt(casePrice.innerText) + parseInt(phonePrice.innerText);

   const taxArea = document.getElementById("tax-amount");
   taxArea.innerText = parseFloat(totalPrice.innerText) * .15;
   const standardTax = parseFloat(taxArea.innerText);
   



   const grandTotal = document.getElementById("grand-total");
   grandTotal.innerText = standardTax + totalPrice.innerText;

   
 
})
// total price

   




