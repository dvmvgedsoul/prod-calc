const vnesh_tvperepl_format = document.getElementById('vnesh_tvperepl_format');

const v_tvperepl_format = fetch('http://localhost:8090/v_tvperepl/format')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({format}) => {
            let select = document.createElement('option');
            select.textContent = format;
            vnesh_tvperepl_format.appendChild(select)
        })       
    })
    .catch(error => console.log(error));
