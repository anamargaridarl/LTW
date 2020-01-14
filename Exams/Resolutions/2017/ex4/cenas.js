let elements = document.querySelector('#photos');
let image = elements.querySelector(".large");
let listimages = elements.querySelectorAll("ul li img");
let list = elements.querySelector("ul");
let link = elements.querySelector("a.load");

link.addEventListener('click', addImages);

for (let i = 0; i < listimages.length; i++) {
    let img = listimages[i];
    img.addEventListener('click', function() { updateImage(img) });
}

function updateImage(img) {
    let src = img.src;
    console.log(image.src);
    image.src = src;
}

function addImages() {

    let request = new XMLHttpRequest();
    request.addEventListener('load', addImagesAux);
    request.open("get", "getrandomimages.php", true);
    request.send();
}

function addImagesAux() {
    let newImages = JSON.parse(this.responseText);
    console.log(newImages);

    for (let i = 0; i < newImages.length; i++) {
        let img = newImages[i];
        let li = document.createElement('li');
        li.innerHTML = '<img src="' + img + '">';
        list.appendChild(li);
    }
}