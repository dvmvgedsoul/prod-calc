const podr_xerox_format = document.getElementById('podr_xerox_format');
const podr_xerox_color = document.getElementById('podr_xerox_color');
const podr_xerox_bw_paper = document.getElementById('podr_xerox_bw_paper');
const podr_xerox_weight = document.getElementById('podr_xerox_weight');

const xerox_format = fetch('http://localhost:8090/p_xerox/format')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({format}) => {
            let select = document.createElement('option');
            select.textContent = format;
            podr_xerox_format.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const xerox_color = fetch('http://localhost:8090/p_xerox/color')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({color}) => {
            let select = document.createElement('option');
            select.textContent = color;
            podr_xerox_color.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const xerox_bw = fetch('http://localhost:8090/p_xerox/bw_paper')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({bw_paper}) => {
            let select = document.createElement('option');
            select.textContent = bw_paper;
            podr_xerox_bw_paper.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const xerox_weight = fetch('http://localhost:8090/p_xerox/weight')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({weight}) => {
            let select = document.createElement('option');
            select.textContent = weight;
            podr_xerox_weight.appendChild(select)
        })       
    })
    .catch(error => console.log(error));




    

