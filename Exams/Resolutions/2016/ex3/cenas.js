let pass = document.querySelector('#register input:nth-child(2)');
let submit = document.querySelector('#register input:nth-child(3)');
let user = document.querySelector('#register input:nth-child(1)');
let form = document.querySelector('#register');

pass.addEventListener('blur', checkPass);

form.addEventListener('click', submitvalues);

function checkPass() {
    let length = pass.value.length >= 8;

    let reg = /\w*\W+\w*/;
    let string = pass.value;
    let check = string.match(reg);
    let checkT;

    if (check == null)
        checkT = false;
    else
        checkT = true;

    let final = length && checkT;

    if (final == false) {
        pass.style.setProperty('border-color', 'red');
    }
}

function encodeForAjax(data) {
    return Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
}


const request = async() => {
    const response = await fetch('http://0.0.0.0:8080/verifyusername.php');
    const json = await response.json();
    return json;
}


function submitvalues(event) {

    let answer = await request();
    let cena = JSON.parse(answer);
    if (cena.valid == "false") {
        user.style.setProperty('border-color', 'pink');
    }

}