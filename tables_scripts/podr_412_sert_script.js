const podr_sert_type = document.getElementById('podr_sert_type');

const sert_type = fetch('http://localhost:8090/p_sert/type')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({cert_type}) => {
            let select = document.createElement('option');
            select.textContent = cert_type;
            podr_sert_type.appendChild(select)
        })       
    })
    .catch(error => console.log(error));