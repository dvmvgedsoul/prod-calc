const vnesh_poly2_pages = document.getElementById('vnesh_poly2_pages');

const poly2_pages = fetch('http://localhost:8090/v_poly_2/pages')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({pages}) => {
            let select = document.createElement('option');
            select.textContent = pages;
            vnesh_poly2_pages.appendChild(select)
        })       
    })
    .catch(error => console.log(error));
