// document.addEventListener("DOMContentLoaded",
//     function(event){
//         function sayHello(event){
//             this.textContent = "Said it!";
//             var name = document.getElementById("name").value;
//             var message = "<h2>Helo " + name + "!</h2>";
//             document.getElementById("content").innerHTML = message;
//             if (name == "student"){
//                 var title = document.querySelector("#title").textContent;
//                 title += "loves HCI Class!";
//                 document.querySelector("h1").textContent = title;
//             }
//             if (name === "Paul"){
//                 document.getElementById("content").textContent = "Testing for Paul";
//             }
//         }
//         document.querySelector("button").addEventListener("click", sayHello);
//     }
// )

function ValidateEmail(inputText){
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputText.value.match(mailformat)){
        alert("Email successfully recorded");
        document.form1.text1.focus();
        return true;
    }else{
        alert("Invalid email address");
        document.form1.text1.focus();
        return false;
    }
}