const listImage = document.querySelector('.list-images')
const imgs = document.getElementsByTagName('img')
const btnLeft =document.querySelector('.btn-left')
const btnRight =document.querySelector('.btn-right')
const length = imgs.length
let current = 0
const hamslide = ()=> {
        if (current == length - 1) {
        current = 0
        let width = imgs[0]. offsetWidth
        listImage.style.transform = `translateX(0px)`
    } else {
    current ++
    let width = imgs[0]. offsetWidth
    listImage.style.transform = `translateX(${width * -1 * current}px)`
   }
}

   setInterval(hamslide, 4000)

btnRight.addEventListener('click', () =>{
    hamslide()

})
btnLeft.addEventListener('click', () => {
    if (current == 0) {
        current = length - 1
        let width = imgs[0]. offsetWidth
        listImage.style.transform = `translateX(${width * -1 *current}px)`
    } else {
    current ++
    let width = imgs[0]. offsetWidth
    listImage.style.transform = `translateX(${width * -1 * current}px)`
}


})