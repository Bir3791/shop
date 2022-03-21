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
        let inputValue = e.target.value
        searchingList(inputValue, phones)
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

function searchingList(search, arr) {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        let name = arr[i].name.toLowerCase();
        let snippet = arr[i].snippet.toLowerCase();
        if (name.includes(search.toLowerCase()) || snippet.includes(search.toLowerCase())) {
            tempArr.push(arr[i]);
        }
    }
    phonesEl.innerHTML = '';
    renderinPhones(tempArr)
}

// function searchingList(search, arr) {
//     let tempArr = arr.filter(function (item) {
//         let name = item.name.toLowerCase();
//         let snippet = item.snippet.toLowerCase();
//         return name.includes(search.toLowerCase());
//         // return snippet.includes(search.toLowerCase());
//     });
//     phonesEl.innerHTML = '';
//     renderinPhones(tempArr);
// }