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
console.log(arr[0].name)
renderinPhones(arr)
}