function displayScrRecipe(){
var CupsofRice = getElementbyId("cups");
var Water = CupsofRice*1.6;
var Oliveoil = CupsofRice*.8;

    if(document.getElementById("SCR").checked=true)
    {
        document.getElementById("TextBox1").value = ("For slightly al dente rice: Combine " + String(CupsofRice) +" cups of rice with " + String(Water) +  " cups of water or broth and " + String(Oliveoil) + " Tbsp olive oil." + <br></br> +" Bring to a boil and stir once to mix. Reduce heat to low, cover with a tight-fitting lid and cook for 25 minutes." +<br></br> +"Remove from heat and let stand for 5 minutes. Fluff with a fork and serve."+<br></br>+ "For softer rice: Increase liquid by 1/2 cup and cook time by 5 minutes.");
        

    }
}

function displayWrRecipe(){
var CupsofRice = getElementbyId("cups");
var Water = CupsofRice*2;
var Oliveoil = CupsofRice;

    
document.getElementById("TextBox1").value =("Combine " + String(CupsofRice) + " cup(s) of rice with " + String(Water) + " cup(s) of water and " + String(Oliveoil) +" Tbsp olive oil."+<br></br> +"Bring to a boil, then reduce heat to the lowest setting." + <br></br> + "Cook for about 18 minutes.");


    

}

function determine(){
    if(document.getElementById("whiterice").checked=true){
        displayWrRecipe();
    }
    if(document.getElementById("SCR").checked=true){
        displayScrRecipe();
    }

}