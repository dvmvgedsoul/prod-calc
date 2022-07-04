const vnesh_brochure_pages = document.getElementById('vnesh_brochure_pages');

const v_brochure_pages = fetch('http://localhost:8090/v_brochure/pages')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({pages}) => {
            let select = document.createElement('option');
            select.textContent = pages;
            vnesh_brochure_pages.appendChild(select)
        })       
    })
    .catch(error => console.log(error));
