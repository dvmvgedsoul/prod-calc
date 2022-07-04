const podr_rezka_format = document.getElementById('podr_rezka_format');
const podr_rezka_weight = document.getElementById('podr_rezka_weight');
const podr_rezka_pages = document.getElementById('podr_rezka_pages');

const rezka_format = fetch('http://localhost:8090/p_rezka/format')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({format}) => {
            let select = document.createElement('option');
            select.textContent = format;
            podr_rezka_format.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const rezka_weight = fetch('http://localhost:8090/p_rezka/weight')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({weight}) => {
            let select = document.createElement('option');
            select.textContent = weight;
            podr_rezka_weight.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const rezka_pages = fetch('http://localhost:8090/p_rezka/pages')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({pages}) => {
            let select = document.createElement('option');
            select.textContent = pages;
            podr_rezka_pages.appendChild(select)
        })       
    })
    .catch(error => console.log(error));




    

