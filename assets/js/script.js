// A jQuery function to move the page down to the search section once the user clicks on the header cta button
// I spent some time figuring this out but eventually I got my answer here: https://stackoverflow.com/questions/2238368/how-to-make-a-button-redirect-to-another-page-using-jquery-or-just-javascript
$(document).ready(function(){
    $("#hdr-cta-btn").click(function(){
        window.location="#blah";
    });
});   


// Creating a function which will slide through the images on my header
const headImgs = document.getElementById('header-imgs');

const img = document.querySelectorAll('#header-imgs img');

let idx = 0

let interval = setInterval(run, 10000)

function run(){
    idx++

    changeImage()
}
function changeImage(){
    if(idx > img.length -1){
        idx = 0
    } else if(idx < 0){
        idx = img.length -1;
    }
    headImgs.style.transform = `translateX(${-idx * 100}vw)`
}
function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 5000)
}