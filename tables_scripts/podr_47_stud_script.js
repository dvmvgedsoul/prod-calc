const podr_stud_format = document.getElementById('podr_stud_format');
const podr_stud_qty = document.getElementById('podr_stud_qty');

const stud_format = fetch('http://localhost:8090/p_stud/format')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({format}) => {
            let select = document.createElement('option');
            select.textContent = format;
            podr_stud_format.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const stud_qty = fetch('http://localhost:8090/p_stud/maxqty')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({quantity}) => {
            let select = document.createElement('option');
            select.textContent = quantity;
            podr_stud_qty.appendChild(select)
        })       
    })
    .catch(error => console.log(error));





    

