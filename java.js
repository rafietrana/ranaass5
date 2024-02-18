 const collBtn = document.getElementById('buttons').querySelectorAll('button');
 
 let count = 0;
 let redius = 8;
 let priceSum = 0;


 for (const iterator of collBtn) {
           iterator.addEventListener('click', function(event){

            
                 const value = event.target.classList.add('bg-green-500', 'text-white');

                //  sum and redus area start
                 count ++;
                 redius --;
                 

               
                 

                 setInnerTextById("sums", count);
                setInnerTextById('low-count', redius);


                // sum and radus area end
                    
                 const findInnnerText = event.target.innerText;
            
                  

                 const collParentNode = document.getElementById('setValue');
                  
                 

                 const p =document.createElement('p');


                 p.innerText = findInnnerText +'----------------------' + 'Economoy' + '----------------' + '550';

                 collParentNode.appendChild(p);





                // append chaild area start



            //     total price and grand total price set area

              priceSum = priceSum + 550;
             const findTotalInner =  getInnerTextById('total');
             const updateValue = priceSum + findTotalInner;


             const collParent = document.getElementById('total');

             collParent.innerText = updateValue;


             const collGrandParent = document.getElementById('grand');

               const stor =   collGrandParent.innerText = updateValue;
             
           })
 }


 function btnClick(){
      const collInputs  =document.getElementById('inputs');
      const collInputsValue = collInputs.value;
        



      if(collInputsValue === "NEW15"){
            const collElementsIds = document.getElementById('grand');

            const innerText  = collElementsIds.innerText;
            const convertInt = parseInt(innerText);
            


            const discount = convertInt * 15/100;
            
            collElementsIds.innerText = parseInt(discount);


 
      }



    else if(collInputsValue === "Couple 20"){
            const collElementsIds = document.getElementById('grand');

            const innerText  = collElementsIds.innerText;
            const convertInt = parseInt(innerText);
            


            const discount = convertInt * 20/100;
            
            collElementsIds.innerText = parseInt(discount);


 
      }


      else{
            alert('this coupon is wrong');
      }
      
 }
 