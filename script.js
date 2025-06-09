const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', checkBoxes)
checkBoxes();

function checkBoxes() {

    const width = window.innerWidth;
    const height = window.innerHeight;
    
    let triggerHeight;
    
    if (width <= 480) {
        triggerHeight = Math.min(height * 0.8, 400); 
    } else if (width <= 768) {
        triggerHeight = Math.min(height * 0.75, 500); 
    } else {
        triggerHeight = height / 1.34; 
    }
    
   

    boxes.forEach(box=>{
        const boxTop = box.getBoundingClientRect().top
        
        if (boxTop < triggerHeight) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        } 
    })
}