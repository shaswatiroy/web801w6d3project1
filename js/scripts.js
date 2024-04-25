const images = [
    { id:"img_1", src: "images/swim1.jpeg", alt: "Diving into a new adventure!", caption: "Diving into a new adventure!", infoText: "Three enthusiastic children wearing colorful swimming dresses and goggles, striking confident swimming poses by the poolside. Their bright smiles and eager expressions capture the joy and excitement of learning to swim. Their playful energy radiates a sense of adventure and readiness to dive into the world of swimming lessons."},
    { id:"img_2", src: "images/swim2.jpeg", alt: "Floating like a pro", caption: "Floating like a pro", infoText: "Children practicing floating techniques with the help of flotation devices, learning to relax and trust the water."},
    { id:"img_3", src: "images/swim3.jpeg", alt: "Guided by Expert Hands", caption: "Guided by Expert Hands", infoText: "An experienced swimming instructor is gently assisting a young child in the pool. With a supportive hand on the child's back, the instructor is helping them float and gain confidence in the water. This reflects the nurturing and safe learning environment provided by the instructor. It's a heartwarming moment that highlights the importance of personalized guidance in swimming lessons."},
    { id:"img_3", src: "images/swim4.jpeg", alt: "Guided by Expert Hands", caption: "Guided by Expert Hands", infoText: "An experienced swimming instructor is gently assisting a young child in the pool. With a supportive hand on the child's back, the instructor is helping them float and gain confidence in the water. This reflects the nurturing and safe learning environment provided by the instructor. It's a heartwarming moment that highlights the importance of personalized guidance in swimming lessons."},
    { id:"img_5", src: "images/swim5.jpeg", alt: "Swimming is fun!", caption: "Swimming is fun!", infoText: "Children laughing and playing games in the water during their swimming lesson, enjoying the thrill of learning to swim with their friends."},
    { id:"img_7", src: "images/swim7.jpeg", alt: "From Beginner to Expert!", caption: "From Beginner to Expert!", infoText: "A confident child, once a beginner, now showcasing advanced swimming skills in the pool. With smooth strokes and effortless glides, they demonstrate mastery over the water."},
    { id:"img_8", src: "images/swim8.jpeg", alt: "Smiles All Around!", caption: "Smiles All Around!", infoText: "A joyful child is beaming with happiness after a successful and enjoyable swimming session. Their wet hair and bright eyes reflect the fun they've had in the water. "},
    { id:"img_9", src: "images/swim9.jpeg", alt: "Taking the First Splash!", caption: "Taking the First Splash!", infoText: "A supportive swimming instructor is encouraging a group of beginners to take their first steps into the water. With reassuring gestures and words of encouragement, the instructor helps alleviate any apprehension the beginners might have. The image captures the pivotal moment of overcoming fear and taking the plunge."},
];

let galleryHTML = images.map(image => 
    `<li class="photo"><a href="#/" class="lightbox-toggle">
    <img id="${image.id}"src="${image.src}" alt="${image.alt}"></a>
    <caption>${image.caption}</caption>
    <div class="description">Learn More</div></li>`
).join('');
document.querySelector('#gallery_list').innerHTML = galleryHTML;

var descriptionElements = document.getElementsByClassName('description');
var closeLink = document.getElementById('closeLink');
var infoBox = document.getElementById('infoBox');
var infoCaption = document.getElementById('infoCaption');
var infoText = document.getElementById('infoText');

for(let i = 0; i < descriptionElements.length; i++) {
    descriptionElements[i].addEventListener('click', function(e) {
        infoCaption.innerText = images[i].caption;
        infoText.innerText = images[i].infoText;
        infoBox.style.display = 'block';
    });
}

closeLink.addEventListener('click', function(e) {
    e.preventDefault();
    infoBox.style.display = 'none';
});

/* JQuery */
$(document).ready(function(){
    /* Open lightbox on button click */
    $('.lightbox-toggle img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        //Get text content in attribute
        var imageID = $(this).attr('id').split('img_')[1]; //or var altvalue = $(this).attr('alt');
        var img = $(`.photo:nth-child(${imageID}) img`).clone(); //Duplicate DOM element
        $('.box').append(img); //Insert duplicated element in another element
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });
});