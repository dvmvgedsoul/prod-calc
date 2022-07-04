const podr_list_format = document.getElementById('podr_list_format');
const podr_list_color = document.getElementById('podr_list_color');
const podr_list_weight = document.getElementById('podr_list_weight');

const list_format = fetch('http://localhost:8090/p_list/format')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({format}) => {
            let select = document.createElement('option');
            select.textContent = format;
            podr_list_format.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const list_color = fetch('http://localhost:8090/p_list/color')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({color}) => {
            let select = document.createElement('option');
            select.textContent = color;
            podr_list_color.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const list_weight = fetch('http://localhost:8090/p_list/weight')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({weight}) => {
            let select = document.createElement('option');
            select.textContent = weight;
            podr_list_weight.appendChild(select)
        })       
    })
    .catch(error => console.log(error));




    

