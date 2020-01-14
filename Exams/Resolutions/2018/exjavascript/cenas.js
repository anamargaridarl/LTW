let listUL = document.querySelector("#game ul");
let list = document.querySelectorAll("#game ul>li");
let inpuText = document.querySelector('#game input[type="text"]');
let reset = document.querySelector('#game input[value="Reset"] ');
let send = document.querySelector('#game input[value="Send"] ');

//question 26
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function() {
        if (list[i].getAttribute('class') != 'used') {
            list[i].setAttribute('class', 'used');
            inpuText.value = inpuText.value + list[i].innerHTML;
        }
    })
}

//question 27
reset.addEventListener('click', resetfunction);

function resetfunction() {
    for (let i = 0; i < list.length; i++) {
        list[i].removeAttribute("class");
    }
    inpuText.value = '';
}

send.addEventListener('click', sendfunction);

//question 28
function encodeForAjax(data) {
    return Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
}

function sendfunction() {

    let request = new XMLHttpRequest()
    request.addEventListener('load', answertosend);
    request.open('post', 'is_guess_correct.php', true);
    request.send(encodeForAjax({
        guess: inpuText.value
    }));
}

function removeChildren() {
    for (let i = 0; i < list.length; i++) {
        listUL.removeChild(list[i]);
    }
}

function answertosend() {

    let answer = JSON.parse(this.responseText);

    if (answer.result == 'wrong') {
        alert('WRONG');
    } else {
        removeChildren();
        for (let i = 0; i < answer.word.length; i++) {
            let element = document.createElement('li');
            element.innerHTML = answer.word[i];
            listUL.appendChild(element);
        }
    }
}