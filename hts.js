const sideAngles = document.querySelectorAll(".input-side");
const btnHpt = document.querySelector("#Submit")
const showAns = document.querySelector("#result")

btnHpt.addEventListener("click",validateSides);

function validateSides(){
    if(Number(sideAngles[0].value)>0 && Number(sideAngles[1].value) )
    {
        console.log("All ok Buddy");
        var hypotenuse = calculateHpt(Number(sideAngles[0].value) ,Number(sideAngles[1].value))
        showAns.innerText = "Hypotenue is: "+hypotenuse + " units"; 
    }
    else{
        showAns.innerText = "Fill valid  inputs..";
    }
}
function calculateHpt(a,b)
{
    var hyp = ((a * a) + ( b * b ));
    var final = Math.sqrt(hyp);
    final = final.toFixed(2);
    return final;
}