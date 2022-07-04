const vnesh_tvperepl_b7_format = document.getElementById('vnesh_tvperepl_b7_format');

const v_tvperepl_b7_format = fetch('http://localhost:8090/v_tvperepl_b7/format')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({format}) => {
            let select = document.createElement('option');
            select.textContent = format;
            vnesh_tvperepl_b7_format.appendChild(select)
        })       
    })
    .catch(error => console.log(error));
