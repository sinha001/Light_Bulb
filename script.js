let btn = document.querySelector("#toggleBtn");
let bulb = document.querySelector("img");

btn.addEventListener('click',(e)=>{
    if(btn.innerText.includes("On")){
        bulb.src="images/bulb-on.png";
        btn.innerText = "Turn Off";
    }
    else{
        bulb.src="images/bulb_off.png";
        btn.innerText = "Turn On";
    }
});