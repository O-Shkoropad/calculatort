function myFunction(clickedId) {
    document.calc.result.value= document.calc.result.value +clickedId;
 }
function Clear() {
    document.calc.result.value="";
}
function compute() {
    try{
    let inp=eval(document.calc.result.value);
    document.calc.result.value=inp;
    }catch(err){
           // document.calc.result.value="Bad Input!!";
    }
}