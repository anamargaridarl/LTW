let elements = document.querySelector('#photos');
let image = elements.querySelector(".large");
let listimages = elements.querySelectorAll("ul li img");

function updateImage(img) {
    let src = img.src;
    console.log(image.src);
    image.src = src;
}

for (let i = 0; i < listimages.length; i++) {
    let img = listimages[i];
    img.addEventListener('click', function() { updateImage(img) });
}