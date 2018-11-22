
    function validateForm() {
        var x = document.forms["myForm"]["name"].value;
        var regexp = /^[а-яА-ЯЁё-і]+$/;
        if (!regexp.test(x)) {
            alert("Имя должно содержать только русские буквы");
            window.location.reload();
            return false;
        }
        return true;
    }

    function goMail() {
        if(validateForm()){
            //alert("TRUE");
            //getData();
        }

    }

    function getData() {
        var name = document.getElementById("inputName").value;
        var email = document.getElementById("inputEmail").value;

        var table = document.getElementById("tab");
        var row = document.createElement("tr");
        table.appendChild(row);

        var td1 = document.createElement("td");
        var td2 = document.createElement("td");

        row.appendChild(td1);
        row.appendChild(td2);

        td1.innerHTML = name;
        td2.innerHTML = email;
    }

var form = document.getElementsByName("myForm");
var tab = document.getElementById("tab");

form.submit.addEventListener("click", sendRequest);

function sendRequest(event){
     
    event.preventDefault();
    var formData = new FormData(form);
    var request = new XMLHttpRequest();
    request.open("GET", form.action);
    request.send(formData);

}
