const opening=document.getElementById("opening");
const envelope=document.getElementById("envelope");
const openCta=document.getElementById("openCta");
const continueBtn=document.getElementById("continueBtn");
function openLetter(){opening.classList.add("open")}
envelope.addEventListener("click",openLetter);
openCta.addEventListener("click",openLetter);
continueBtn.addEventListener("click",()=>document.getElementById("portrait").scrollIntoView({behavior:"smooth"}));
