 const collBtn = document.getElementById('buttons').querySelectorAll('button');
 
 let count = 0;
 let redius = 8;


 for (const iterator of collBtn) {
           iterator.addEventListener('click', function(event){
                 const value = event.target.classList.add('bg-green-500', 'text-white');

                //  sum and redus area start
                 count ++;
                 redius --;

                 

                 setInnerTextById("sums", count);
                setInnerTextById('low-count', redius);


                // sum and radus area end
                    


                // append chaild area start




                 
                 
           })
 }
 