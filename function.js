 function getInnerTextById(elementId){
             const collElementId = document.getElementById(elementId);
             const innerTexts = collElementId.innerText;
             const converParseInt =  parseInt(innerTexts);
             
             return converParseInt;
 }

//  setInnerTextBy Id

function setInnerTextById(elementIds, value){
       const collElementsId = document.getElementById(elementIds);
       collElementsId.innerText = value;
}