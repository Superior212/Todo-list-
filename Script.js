var allTodo = [];

function saveTodo() {
if (userInput.value =="") {
    outPut.innerHTML+= `KINDLY INPUT YOUR TODO`
    outPut.style.color =`red`
}else{

    date =new Date
    allObject= { data :userInput.value, time:date, done : false};
    allTodo.push(allObject)
    userInput.value ="";
    console.log(allTodo);
    showMyTodo();
}
};

function showMyTodo() {
    disHTML ="";
    for (let i = 0; i < allTodo.length; i++) {
        disHTML += `<div  class="drop-shadow-lg border-4 text-3xl font-bold">${allTodo[i].data} <br> ${allTodo[i].time} </div><br>`
        if (allTodo[i].done) {
            disHTML += `<button class="bg-green-900 border-4 px-4 text-white" onclick="done()" disabled>DONE</button>`
        } else{
            disHTML += `<button class="bg-red-900 border-4 px-4 text-white" onclick="markasdone(${i})">MARK AS DONE</button>`
        }
        disHTML +=`<br>`
        disHTML += `<button class="bg-red-400 border-4 px-4 text-white" onclick="deleteindex(${i})">DELETE</button>`
    }
    outPut.innerHTML = disHTML
}

function deleteAlltodo(){
    allTodo=[];
    showMyTodo();
    console.log(allTodo);
}
function markasdone(index) {
    allTodo[index].done = true
    showMyTodo();
};

function deleteindex(ind) {
    allTodo.splice(ind,1)
    showMyTodo();
}
