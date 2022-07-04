const podr_udost_format = document.getElementById('podr_udost_format');

const udost_format = fetch('http://localhost:8090/p_udost/format')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({format}) => {
            let select = document.createElement('option');
            select.textContent = format;
            podr_udost_format.appendChild(select)
        })       
    })
    .catch(error => console.log(error));