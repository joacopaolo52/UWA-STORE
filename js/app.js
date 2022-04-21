
let color = localStorage.getItem("mode");
const button = document.querySelector('#mode');

if(!color)
{
    color= "black";
    button.innerHTML="DARK MODE";
}
else{
    document.body.style=`background-color:${color}`;
    color === "black" ? button.innerHTML="LIGHT MODE" : button.innerHTML="DARK MODE";
    // if(color==="black")
    // {
    //     button.innerHTML="LIGHT MODE";
    // }
    // else{
    //     button.innerHTML="DARK MODE";
    // }
}


button.addEventListener("click", ()=>{

    if(color==="black")
    {
        color="white"
        button.innerHTML="DARK MODE";
        button.setAttribute('style', `background-color: black; color: white;`)
        for (let i = 1; i <= 18; i++) {
            let producto = document.querySelector(`.galeria__a${i}`);
            // producto.setAttribute('style', `box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.7);`);
        }
    }
    else{
        color="black";
        button.innerHTML="LIGHT MODE";
        button.setAttribute('style', `background-color: white; color: black;`)
        for (let i = 1; i <= 18; i++) {
            let producto = document.querySelector(`.galeria__a${i}`);
            // producto.setAttribute('style', `box-shadow: 10px 10px 10px 10px rgba(255, 255, 255, .7);`);
        }
    }
    localStorage.setItem("mode", color);
    document.body.style=`background-color:${color}`;

})
