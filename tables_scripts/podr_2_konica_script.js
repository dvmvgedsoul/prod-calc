const podr_konica_format = document.getElementById('podr_konica_format');
const podr_konica_color = document.getElementById('podr_konica_color');
const podr_konica_bw_paper = document.getElementById('podr_konica_bw_paper');
const podr_konica_weight = document.getElementById('podr_konica_weight');

const konica_format = fetch('http://localhost:8090/p_konica/format')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({format}) => {
            let select = document.createElement('option');
            select.textContent = format;
            podr_konica_format.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const konica_color = fetch('http://localhost:8090/p_konica/color')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({color}) => {
            let select = document.createElement('option');
            select.textContent = color;
            podr_konica_color.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const konica_bw = fetch('http://localhost:8090/p_konica/bw_paper')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({bw_paper}) => {
            let select = document.createElement('option');
            select.textContent = bw_paper;
            podr_konica_bw_paper.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const konica_weight = fetch('http://localhost:8090/p_konica/weight')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({weight}) => {
            let select = document.createElement('option');
            select.textContent = weight;
            podr_konica_weight.appendChild(select)
        })       
    })
    .catch(error => console.log(error));




    

