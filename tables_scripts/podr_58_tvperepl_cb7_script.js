const podr_tvperepl_cb7_format = document.getElementById('podr_tvperepl_cb7_format');

const tvperepl_cb7_format = fetch('http://localhost:8090/p_tvperepl_cb7/format')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({format}) => {
            let select = document.createElement('option');
            select.textContent = format;
            podr_tvperepl_cb7_format.appendChild(select)
        })       
    })
    .catch(error => console.log(error));
