const phonesEl = document.querySelector('.phones'),
      mainContainer = document.querySelector('.mainContainer') 


function renderingFilter() {
    const filters = document.createElement("div");
    filters.classList.add('.filter');
    filters.innerHTML = `<input type="text" placeholder="search">
        <select name="" id="">
            <option value="age">Age</option>
            <option value="alphabet">Alphabet</option>
        </select>
    `
    mainContainer.insertBefore(filters, phonesEl);
}

renderingFilter()
function renderinPhones(data) {
    
    for (let i = 0; i < data.length; i++) {
        const phoneEl = document.createElement("div");
        phoneEl.classList.add('.phone');
        phoneEl.innerHTML = `
        <div class="phone">
            <a href="motorola-xoom-with-wi-fi">
                    <div class="picture_container" >
                        <img src=${data[i].imageUrl}>
                    </div>
                    <div class="discription">
                        <h2>${data[i].name}</h2>
                        <p>${data[i].snippet}</p>
                    </div>
                </a>
        </div>
        `;
        phonesEl.appendChild(phoneEl);
    }
}

 renderinPhones(phones)