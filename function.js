//  find innerTextById ParseInd Convert
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
// find innerTextById no Convert

 function getInnerValueNoConvert(ids){
    const collIds =  document.getElementById(ids);
    const innerTaxtFind = collIds.innerText;
    return innerTaxtFind;
 }