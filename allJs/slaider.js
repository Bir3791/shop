function globalSlider() {
    let offset
    let sliderLine = document.querySelector('.slaider_line');
    let btn0 = document.querySelector('.btn1');
    let btn1 = document.querySelector('.btn2');
    let btn2 = document.querySelector('.btn3');
    let btn3 = document.querySelector('.btn4');
    let btn4 = document.querySelector('.btn5');


    btn0.addEventListener('mouseover', () => slider(0));
    btn1.addEventListener('mouseover', () => slider(1));
    btn2.addEventListener('mouseover', () => slider(2));
    btn3.addEventListener('mouseover', () => slider(3));
    btn4.addEventListener('mouseover', () => slider(4));

    function slider(index) {
        offset = 0
        offset = 400 * index;
        sliderLine.style.left = -offset + 'px'
    }
}

// globalSlider()