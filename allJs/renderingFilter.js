renderingFilter();

function renderingFilter() {
    const filters = document.createElement("div");
    filters.classList.add('.filter');
    filters.innerHTML = `<span>Search</span> 
        <input id="input" type="text">
        <span>Sort by</span>
        <select name="" id="filter">
            <option value="Newest">Newest</option>
            <option value="Alphabet">Alphabet</option>
        </select>
    `
    mainContainer.insertBefore(filters, phonesEl);
    let inputEl = document.getElementById('input');
    inputEl.addEventListener('input', function (e) {
        console.log(e.target.value);
    });

    let selectEl = document.getElementById('filter');
    selectEl.addEventListener('change', function (e) {
        selectEl = (e.target.value === 'Newest') ?  sortByAge(phones) : sortByAlpabet(phones);
    })
}

function sortByAge(arr) {
    const temp = JSON.parse(JSON.stringify(arr));
    let rezutl = temp.sort(function (a, b) {
        if (a['age'] < b['age']) return -1;
    })
    phonesEl.innerHTML = '';
    renderinPhones(rezutl);
}

function sortByAlpabet(arr) {
    const temp = JSON.parse(JSON.stringify(arr));
    let rezutl = temp.sort(function (a, b) {
        if (a['name'] < b['name']) return -1;
    })
    phonesEl.innerHTML = '';
   renderinPhones(rezutl);
}

