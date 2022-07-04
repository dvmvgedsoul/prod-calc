const podr_zachet_format = document.getElementById('podr_zachet_format');
const podr_zachet_qty = document.getElementById('podr_zachet_qty');

const zachet_format = fetch('http://localhost:8090/p_zachet/format')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({format}) => {
            let select = document.createElement('option');
            select.textContent = format;
            podr_zachet_format.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const zachet_qty = fetch('http://localhost:8090/p_zachet/maxqty')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({quantity}) => {
            let select = document.createElement('option');
            select.textContent = quantity;
            podr_zachet_qty.appendChild(select)
        })       
    })
    .catch(error => console.log(error));





    

