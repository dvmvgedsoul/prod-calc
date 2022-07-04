const vnesh_bloknot_format = document.getElementById('vnesh_bloknot_format');
const vnesh_bloknot_paper = document.getElementById('vnesh_bloknot_paper');
const vnesh_bloknot_side = document.getElementById('vnesh_bloknot_side');

const v_bloknot_format = fetch('http://localhost:8090/v_bloknot/format')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({format}) => {
            let select = document.createElement('option');
            select.textContent = format;
            vnesh_bloknot_format.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const v_bloknot_paper = fetch('http://localhost:8090/v_bloknot/paper')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({clear_paper}) => {
            let select = document.createElement('option');
            select.textContent = clear_paper;
            vnesh_bloknot_paper.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const v_bloknot_side = fetch('http://localhost:8090/v_bloknot/side')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({short_side}) => {
            let select = document.createElement('option');
            select.textContent = short_side;
            vnesh_bloknot_side.appendChild(select)
        })       
    })
    .catch(error => console.log(error));




    

