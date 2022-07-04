const podr_bloknot_format = document.getElementById('podr_bloknot_format');
const podr_bloknot_paper = document.getElementById('podr_bloknot_paper');
const podr_bloknot_side = document.getElementById('podr_bloknot_side');

const bloknot_format = fetch('http://localhost:8090/p_bloknot/format')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({format}) => {
            let select = document.createElement('option');
            select.textContent = format;
            podr_bloknot_format.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const bloknot_paper = fetch('http://localhost:8090/p_bloknot/paper')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({clear_paper}) => {
            let select = document.createElement('option');
            select.textContent = clear_paper;
            podr_bloknot_paper.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const bloknot_side = fetch('http://localhost:8090/p_bloknot/side')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({short_side}) => {
            let select = document.createElement('option');
            select.textContent = short_side;
            podr_bloknot_side.appendChild(select)
        })       
    })
    .catch(error => console.log(error));




    

