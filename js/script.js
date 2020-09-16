let post = document.getElementById("BottonPost");
let clear = document.getElementById("BottonClear");
let mark = document.getElementById("BottonMark");
let del = document.getElementById("BottonDelete");


post.addEventListener("click",TodoPost);
clear.addEventListener("click",TodoClear);
mark.addEventListener("click",TodoMark);
del.addEventListener("click",TodoDel);



function TodoPost(e){
e.preventDefault();
var todo=document.getElementById("todoTest").value;
var list=document.getElementById("todoList");

let currentList=list.innerHTML;
list.innerHTML=currentList+`<input type = "checkbox" name="todo"/> ${todo}<br> `
}
function TodoClear(e){
e.preventDefault();
var VarClear=document.getElementsByName("todo");
for(var i=0;i<VarClear.length;i++){
    VarClear[i].checked= false;
}

}
function TodoMark(e){
e.preventDefault();
var VarClear=document.getElementsByName("todo");
for(var i=0;i<VarClear.length;i++){
    VarClear[i].checked= true;
}


}
function TodoDel(e){
e.preventDefault();
var list=document.getElementById("todoList");
list.innerHTML=" ";


}