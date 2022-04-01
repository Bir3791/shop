window.addEventListener('hashchange', function () {
    location.hash.length !== 0 ? searchingPhone(location.hash.slice(1), phones) : renderingMainDisplay();
})

function searchingPhone(search, arr) {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        let name = arr[i].id;
        if (name === search) {
            tempArr.push(arr[i]);
            phonesEl.innerHTML = '';
            filterContainer.innerHTML = '';
            renderinDeteilsPhone(tempArr)
        }
    }
}

function renderinDeteilsPhone(arr) {
    const onePhone = document.createElement("div");
        onePhone.classList.add('.one_phone');
        onePhone.innerHTML = `<div class="slaider_container">
            <div class="slaider">
                <div class="slaider_line">
                    <img src="img/phones/dell-streak-7.0.jpg" class="slaider_pic" alt="">
                    <img src="img/phones/dell-streak-7.1.jpg" class="slaider_pic" alt="">
                    <img src="img/phones/dell-streak-7.2.jpg" class="slaider_pic" alt="">
                    <img src="img/phones/dell-streak-7.3.jpg" class="slaider_pic" alt="">
                    <img src="img/phones/dell-streak-7.4.jpg" class="slaider_pic" alt="">
                </div>
            </div>
        </div>
        <div class="slaider_container_btn">
            <img src="img/phones/dell-streak-7.0.jpg" class="slaider_btn btn1" alt="">
            <img src="img/phones/dell-streak-7.1.jpg" class="slaider_btn btn2" alt="">
            <img src="img/phones/dell-streak-7.2.jpg" class="slaider_btn btn3" alt="">
            <img src="img/phones/dell-streak-7.3.jpg" class="slaider_btn btn4" alt="">
            <img src="img/phones/dell-streak-7.4.jpg" class="slaider_btn btn5" alt="">
        </div>
        <div class="main-discription">
            <div class="big_name">
                <h1>${arr[0].name}</h1>
            </div>
            <div class="snippet">
                <p>${arr[0].snippet}</p>
                
            </div>
        </div>
        `
          
        mainContainer.appendChild(onePhone);
}