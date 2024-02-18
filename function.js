//  find innerTextById ParseInd Convert
 function getInnerTextById(elementId){
             const collElementId = document.getElementById(elementId);
             const innerTexts = collElementId.innerText;
             const converParse =  parseFloat(innerTexts);
             
             return converParse;
 }


//  find ValueTextById 
function getValueTextById (idds){
   const collIdds = document.getElementById(idds);
   const innerValue = collIdds.value;
   const convert = parseFloat(innerValue);
   console.log(convert);
   return convert;

}

//  setInnerTextBy Id

function setInnerTextById(elementIds, value){
       const collElementsId = document.getElementById(elementIds);
       collElementsId.innerText = value;
}
// find innerTextById no Convert

 function getInnerValueNoConvert(ids){
    const collIds =  document.getElementById(ids);
    const innerTaxtFind = collIds.innerText;
    console.log(innerTaxtFind);
    return innerTaxtFind;

 }