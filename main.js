let mode = prompt("Enter light or dark ");
let btn = document.querySelector("#btn");
let body = document.querySelector("body");

let callbackfn = () => {
    if(mode==="light"){
        mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
}

btn.addEventListener("click", callbackfn);