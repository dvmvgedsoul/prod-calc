const podr_kalendar_type = document.getElementById('podr_kalendar_type');

const kalendar_type = fetch('http://localhost:8090/p_kalendar/type')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({calendar_type}) => {
            let select = document.createElement('option');
            select.textContent = calendar_type;
            podr_kalendar_type.appendChild(select)
        })       
    })
    .catch(error => console.log(error));