let section = document.querySelector("#tic-tac-toe");
let gamelist = document.querySelectorAll('#tic-tac-toe > div');
let state = document.querySelector('#tic-tac-toe > p');

requestHandler(); //comment to test question 28

//question27
function encodeForAjax(data) {
    return Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
}

function requestHandler() {
    let request = new XMLHttpRequest();
    request.addEventListener('load', play);
    request.open('post', 'play.php', true);
    console.log(section.getAttribute('data-id'));
    request.send(encodeForAjax({ id: section.getAttribute('data-id') }))
}

function play() {
    let answer = JSON.parse(this.responseText);

    for (let i = 0; i < gamelist.length; i++) {
        gamelist[i].innerHTML = answer.squares[i];
    }

    state.innerHTML = answer.state;
}

//question29
function requestHandler2(position) {
    let request = new XMLHttpRequest();
    request.addEventListener('load', play);
    request.open('post', 'play.php', true);
    console.log(section.getAttribute('data-id'));
    request.send(encodeForAjax({ id: section.getAttribute('data-id') }))
}

for (let i = 0; i < gamelist.length; i++) {
    gamelist[i].addEventListener('click', function() {
        requestHandler2(i + 1);
        play();
    })
}