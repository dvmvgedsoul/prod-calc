const podr_tirazh_format = document.getElementById('podr_tirazh_format');
const podr_tirazh_color = document.getElementById('podr_tirazh_color');
const podr_tirazh_print_run = document.getElementById('podr_tirazh_print_run');
const podr_tirazh_bw_paper = document.getElementById('podr_tirazh_bw_paper');
const podr_tirazh_weight = document.getElementById('podr_tirazh_weight');

const tirazh_format = fetch('http://localhost:8090/p_tirazh/format')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({format}) => {
            let select = document.createElement('option');
            select.textContent = format;
            podr_tirazh_format.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const tirazh_color = fetch('http://localhost:8090/p_tirazh/color')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({color}) => {
            let select = document.createElement('option');
            select.textContent = color;
            podr_tirazh_color.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const tirazh_print_run = fetch('http://localhost:8090/p_tirazh/print_run')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({print_run}) => {
            let select = document.createElement('option');
            select.textContent = print_run;
            podr_tirazh_print_run.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const tirazh_bw = fetch('http://localhost:8090/p_tirazh/bw_paper')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({bw_paper}) => {
            let select = document.createElement('option');
            select.textContent = bw_paper;
            podr_tirazh_bw_paper.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const tirazh_weight = fetch('http://localhost:8090/p_tirazh/weight')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({weight}) => {
            let select = document.createElement('option');
            select.textContent = weight;
            podr_tirazh_weight.appendChild(select)
        })       
    })
    .catch(error => console.log(error));




    

