let form = document.querySelector('form');

form.addEventListener("click",addItem)


function addItem(e){
    e.preventDefault();
    

    let newItem = document.querySelector("input").value;

    console.log(newItem)
};
//sidebar
let send = document.querySelector('#sidebar')

send.addEventListener("submit",items)

function items(e){
e.preventDefault();

 let input= document.querySelector('input[type=text]').value;
 let mail= document.querySelector('.mail').value;
 let inp= document.querySelector('textarea').value;
console.log(input)
console.log(mail)
console.log(inp)


};