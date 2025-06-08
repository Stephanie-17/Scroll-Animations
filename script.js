const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',checkBoxes)
checkBoxes();

function checkBoxes() {
    const triggerHeight =  innerHeight/1.34;
    boxes.forEach(box=>{
        const boxTop = box.getBoundingClientRect().top
        
        if (boxTop < triggerHeight) {
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        } 
    })
}