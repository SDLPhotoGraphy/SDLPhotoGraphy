const overlay = document.querySelector(".overlay");
const form  = document.querySelector("form"),
name = form.querySelector("#name"),
email = form.querySelector("#email"),
msg = form.querySelector("#msg");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    submitForm(name.value,email.value,msg.value)
})
 
function submitForm(name,email,msg){
fetch("https://formsubmit.co/ajax/de.luycker.seppe@icloud.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        Name: name,
        Email: email,
        Message: msg
    })
})
    .then(response => response.json())
    .then(data => {
        if (data.success == "true") {
            overlay.style.display="flex";
            overlay.addEventListener("click",()=>{
                overlay.style.display="none";
    
            })
            form.reset();
        }
    })
    .catch(error => console.log(error));
}