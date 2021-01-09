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