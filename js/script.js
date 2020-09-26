let post= $("#BottonPost").on("click", TodoPost);
let clear= $("#BottonClear").on("click", TodoClear);
let mark= $("#BottonMark").on("click", TodoMark);
let del= $("#BottonDelete").on("click", TodoDel);




function TodoPost(e){
e.preventDefault();
var todo= $("#todoTest").val();
var list= $("#todoList").append(`<input type = "checkbox" name="todo"/> ${todo}<br> `)
}
function TodoClear(e){
e.preventDefault();

var VarClear= $("[name='todo']");
for(var i=0;i<VarClear.length;i++){
    VarClear[i].checked= false;
}

}
function TodoMark(e){
e.preventDefault();
var VarClear= $("[name='todo']");
for(var i=0;i<VarClear.length;i++){
    VarClear[i].checked= true;
}


}
function TodoDel(e){
e.preventDefault();
var list= $("#todoList").html(" ");


}