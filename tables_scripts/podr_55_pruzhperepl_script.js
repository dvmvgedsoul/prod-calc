const podr_pruzhperepl_format = document.getElementById('podr_pruzhperepl_format');
const podr_pruzhperepl_pages = document.getElementById('podr_pruzhperepl_pages');

const pruzhperepl_format = fetch('http://localhost:8090/p_pruzhperepl/format')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({format}) => {
            let select = document.createElement('option');
            select.textContent = format;
            podr_pruzhperepl_format.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const pruzhperepl_pages = fetch('http://localhost:8090/p_pruzhperepl/pages')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({pages}) => {
            let select = document.createElement('option');
            select.textContent = pages;
            podr_pruzhperepl_pages.appendChild(select)
        })       
    })
    .catch(error => console.log(error));





    

