function slider(index) {
        let sliderLine = document.querySelector('.slaider_line');
        offset = 0
        offset = 400 * index;
        sliderLine.style.left = -offset + 'px'
    }

    function imagesForSlayder(arr) {
        for (let i = 0; i < arr[0].images.length; i++) {
            let imgForSlyider = document.createElement('img');
            imgForSlyider.setAttribute("src", `${arr[0].images[i]}`);
            let itemImg = document.querySelector('.slaider_line');
            itemImg.appendChild(imgForSlyider);
            }
}

function imagesForSlayderBtn(arr) {
    for (let i = 0; i < arr[0].images.length; i++) {
        let imgForSlyiderBtn = document.createElement('img');
        imgForSlyiderBtn.setAttribute("src", `${arr[0].images[i]}`);
        imgForSlyiderBtn.classList.add('slaider_btn')
        imgForSlyiderBtn.addEventListener('mouseover', () => slider(`${i}`))
        imgForSlyiderBtn.classList.add(`btn${[i]}`)
        let itemImgBtn = document.querySelector('.slaider_container_btn');
        itemImgBtn.appendChild(imgForSlyiderBtn);
        }
}