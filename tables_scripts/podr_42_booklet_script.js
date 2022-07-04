const podr_booklet_format = document.getElementById('podr_booklet_format');
const podr_booklet_color = document.getElementById('podr_booklet_color');
const podr_booklet_weight = document.getElementById('podr_booklet_weight');

const booklet_format = fetch('http://localhost:8090/p_booklet/format')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({format}) => {
            let select = document.createElement('option');
            select.textContent = format;
            podr_booklet_format.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const booklet_color = fetch('http://localhost:8090/p_booklet/color')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({color}) => {
            let select = document.createElement('option');
            select.textContent = color;
            podr_booklet_color.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const booklet_weight = fetch('http://localhost:8090/p_booklet/weight')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({weight}) => {
            let select = document.createElement('option');
            select.textContent = weight;
            podr_booklet_weight.appendChild(select)
        })       
    })
    .catch(error => console.log(error));




    

