const sideAngles = document.querySelectorAll(".input-side");
const btnHpt = document.querySelector("#Submit")
const showAns = document.querySelector("#result")

let links = document.querySelectorAll(".pages a");
let bodyId = document.querySelector("body").id;
 
for(let link of links){
    if(link.dataset.active == bodyId){
        link.classList.add("active");
    }
}


btnHpt.addEventListener("click",validateSides);

function validateSides(){
    if(Number(sideAngles[0].value)>0 && Number(sideAngles[1].value) )
    {
        console.log("All ok Buddy");
        var hypotenuse = calculateHpt(Number(sideAngles[0].value) ,Number(sideAngles[1].value))
        showAns.innerText = "Hypotenue is: "+hypotenuse + " units"; 
    }
    else{
        showAns.innerText = "Fill valid  inputs. ( Make sure inputs are not negatives) ";
    }
}
function calculateHpt(a,b)
{
    var hyp = ((a * a) + ( b * b ));
    var final = Math.sqrt(hyp);
    final = final.toFixed(2);
    return final;
}
