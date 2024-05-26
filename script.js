// var sliderImg = document.querySelector('.slider-img');
// var images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
// var i = 0;

// function prev(){
//     if(i <= 0) i = images.length;    
//     i--;
//     setImg();             
// }

// function next(){
//     if(i >= images.length-1) i = -1;
//     i++;
//     setImg();             
// }

// function setImg(){
//     sliderImg.setAttribute('src', "images/" + images[i]);
// }



document.addEventListener('DOMContentLoaded', () => {
    const sliderImg = document.getElementById('slider-img');
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
    let i = 0;

    document.getElementById('prev-btn').addEventListener('click', () => {
        if (i <= 0) i = images.length;    
        i--;
        setImg();
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        if (i >= images.length - 1) i = -1;
        i++;
        setImg();
    });

    function setImg() {
        sliderImg.setAttribute('src', 'images/' + images[i]);
    }
});
