function findAndShowPhoneDetails(search, arr) {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        let name = arr[i].id;
        if (name === search) {
            tempArr.push(arr[i]);
            phonesEl.innerHTML = '';
            filterContainer.innerHTML = '';
            renderinDeteilsPhone(tempArr);
        }
    }
}

function renderinDeteilsPhone(arr) {
    const onePhone = document.createElement("div");
        onePhone.classList.add('.one_phone');
        onePhone.innerHTML = `<div class="slaider_container">
            <div class="slaider">
                <div class="slaider_line"></div>
            </div>
        </div>
        <div class="slaider_container_btn"></div>
        <div class="main-discription">
            <div class="big_name">
                <h1>${arr[0].name}</h1>
            </div>
            <div class="snippet">
                <p>${arr[0].snippet}</p>
                
            </div>
        </div>
        `
    onePhoneContainer.appendChild(onePhone);
    imagesForSlayderBtn(arr);
    imagesForSlayder(arr)
}

