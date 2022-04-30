
let color = localStorage.getItem("mode");
const button = document.querySelector('#mode');
const titulo = document.querySelector('h1');

if(!color)
{
    color= "black";
    button.innerHTML="DARK MODE";
}
else{
    document.body.style=`background-color:${color}`;
    color === "black" ? button.innerHTML="LIGHT MODE" : button.innerHTML="DARK MODE";
}
    // if(color==="black") button.innerHTML="LIGHT MODE"; } else{ button.innerHTML="DARK MODE";}


button.addEventListener("click", ()=>{

    if(color==="black")
    {
        color="white"
        button.innerHTML="DARK MODE";
        button.setAttribute('style', `background-color: black; color: white;`);
        titulo.setAttribute('style', `color: black;`);
    }
    else{
        color="black";
        button.innerHTML="LIGHT MODE";
        button.setAttribute('style', `background-color: white; color: black;`);
        titulo.setAttribute('style', `color: white;`);
    }
    localStorage.setItem("mode", color);
    document.body.style=`background-color:${color}`;

})


    // ERROR DE MEDIA QUERIES //

/*

const head = document.querySelector('head');
const meta = document.createElement('meta');
meta.setAttribute('name', 'viewport');
meta.setAttribute('content', 'width=device-width, initial-scale=1.0');

head.appendChild(meta);

localStorage.setItem('META', meta);

*/