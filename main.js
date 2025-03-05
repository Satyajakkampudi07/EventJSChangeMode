let mode = prompt("Enter light or dark ");
let btn = document.querySelector("#btn");
let body = document.querySelector("body");

let callbackfn = () => {
    if(mode==="light"){
        mode = "dark";
        body.style.backgroundColor = "black";
        console.log(mode);
    }else{
        mode = "light";
        body.style.backgroundColor = "white";
        console.log(mode);
    }
}

btn.addEventListener("click", callbackfn);