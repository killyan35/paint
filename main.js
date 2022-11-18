
function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);
    console.log(getSelectedColor());
}

function getSelectedColor()
{
    if(sessionStorage.getItem("selectedColor"))
    {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(palette)
{
    let colors = palette;
 
    let divs = document.querySelectorAll("body > header > div")
    for(let i = 0; i < divs.length; i++)
    {
        divs[i].style.backgroundColor = colors[i];
    }
}


window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80", "#C62828", "#263238",
    "#FFEE58", "#FF6F00", "#9E9E9E","#000000" ,"#C0CA33" ,"#0D47A1"]);
    let divs = document.querySelectorAll("body > header > div")
    for(let i = 0; i < divs.length; i++)
    {
        divs[i].addEventListener("click", selectColor);
    };
    //etape 2
    let divs1 = document.querySelectorAll("main div > div")
     for(let i = 0; i < divs1.length; i++)
    {
        divs1[i].addEventListener("click", function()
        {
            if (divs1[i].style.backgroundColor==false)
            {
                let color = getSelectedColor();
                divs1[i].style.backgroundColor=color;
            }
            else
            {
                divs1[i].style.backgroundColor="";
            }
        })};
    let colors = document.querySelectorAll("body >header div >input[type='color']")
    let divs2 = document.querySelectorAll("body header div")
    for(let i = 0; i < colors.length; i++)
    {
        colors[i].addEventListener("change", function(event)
        {
        divs2[i].style.backgroundColor=event.target.value;
    })};
    let numbers = document.querySelectorAll("body >header div >input[type='number']")
});