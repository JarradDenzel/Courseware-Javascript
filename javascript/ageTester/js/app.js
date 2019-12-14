

 var myForm = document.getElementById('format');
 var message = document.getElementById('feedback');
 
 myForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    var test = (new Date() - document.getElementById("birth").valueAsDate)/(86400000);
    var standard = 7670.25;
    (test >= standard) ? message.innerHTML = "Accepted 🙂" : message.innerHTML = "Denied 🙃";
 })


