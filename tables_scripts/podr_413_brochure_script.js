const podr_brochure_format = document.getElementById('podr_brochure_format');
const podr_brochure_pages = document.getElementById('podr_brochure_pages');

const brochure_format = fetch('http://localhost:8090/p_brochure/format')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({format}) => {
            let select = document.createElement('option');
            select.textContent = format;
            podr_brochure_format.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const brochure_pages = fetch('http://localhost:8090/p_brochure/pages')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({pages}) => {
            let select = document.createElement('option');
            select.textContent = pages;
            podr_brochure_pages.appendChild(select)
        })       
    })
    .catch(error => console.log(error));





    

