function btnClick(val){
    document.getElementById("view").value+=val;
}

function clearClick(){
    document.getElementById("view").value=" ";
}

function equalClick(){
    var text=document.getElementById("view").value;
    var result=eval(text);
    document.getElementById("view").value=result;
}