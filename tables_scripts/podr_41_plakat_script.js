const podr_plakat_format = document.getElementById('podr_plakat_format');
const podr_plakat_color = document.getElementById('podr_plakat_color');

const plakat_format = fetch('http://localhost:8090/p_plakat/format')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({format}) => {
            let select = document.createElement('option');
            select.textContent = format;
            podr_plakat_format.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const plakat_color = fetch('http://localhost:8090/p_plakat/color')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({color}) => {
            let select = document.createElement('option');
            select.textContent = color;
            podr_plakat_color.appendChild(select)
        })       
    })
    .catch(error => console.log(error));
