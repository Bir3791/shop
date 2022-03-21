renderingMainDisplay()

function renderingMainDisplay() {
    filterContainer.innerHTML = '';
    phonesEl.innerHTML = '';
    renderinPhones(phones);
    renderingFilter();
}

function cleanDisplay() {
    
}


function renderinPhones(data) {
    
    for (let i = 0; i < data.length; i++) {
        const phoneEl = document.createElement("div");
        phoneEl.classList.add('.phone');
        phoneEl.innerHTML = `
        <a href=#${data[i].id}>
            <div class="phone">
                    <div class="picture_container" >
                        <img src=${data[i].imageUrl}>
                    </div>
                    <div class="discription">
                        <h2>${data[i].name}</h2>
                        <p>${data[i].snippet}</p>
                    </div>
            </div>
        </a>
        `;
        phonesEl.appendChild(phoneEl);
    }
}