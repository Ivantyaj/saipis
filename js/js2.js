var arr = [];
var params = window
.location
.search
.replace('?','')
.split('&')
.reduce(
    function(p,e){
        var a = e.split('=');
        p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
        return p;
    },
    {}
);

function setData(data) {
    var name = data['name'];
    var email = data['email'];

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

var tabt = document.getElementById("tab");
var art = document.getElementsByClassName("flex-itm");

function startFunc() {

    if (localStorage.getItem('data')){
        console.log(111);
        var oldData = localStorage.getItem('data');
        oldData = JSON.parse(oldData);
        oldData.push(params);
        localStorage.setItem('data', JSON.stringify(oldData) );

        arr = oldData;
    }else{
        console.log(1);
        localStorage.setItem('data', JSON.stringify([params]));
        arr = [params];
        console.log(arr);
    }

    for (var i = 0; i < arr.length; i++) {
        setData(arr[i]);
      }

}