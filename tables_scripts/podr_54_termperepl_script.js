const podr_termperepl_format = document.getElementById('podr_termperepl_format');
const podr_termperepl_pages = document.getElementById('podr_termperepl_pages');

const termperepl_format = fetch('http://localhost:8090/p_termperepl/format')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({format}) => {
            let select = document.createElement('option');
            select.textContent = format;
            podr_termperepl_format.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const termperepl_pages = fetch('http://localhost:8090/p_termperepl/pages')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({pages}) => {
            let select = document.createElement('option');
            select.textContent = pages;
            podr_termperepl_pages.appendChild(select)
        })       
    })
    .catch(error => console.log(error));





    

