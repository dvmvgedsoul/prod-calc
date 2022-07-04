const podr_diplom_format = document.getElementById('podr_diplom_format');
const podr_diplom_endpaper = document.getElementById('podr_diplom_endpaper');

const diplom_format = fetch('http://localhost:8090/p_diplom/format')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({format}) => {
            let select = document.createElement('option');
            select.textContent = format;
            podr_diplom_format.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const diplom_endpaper = fetch('http://localhost:8090/p_diplom/endpaper')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({endpaper}) => {
            let select = document.createElement('option');
            select.textContent = endpaper;
            podr_diplom_endpaper.appendChild(select)
        })       
    })
    .catch(error => console.log(error));





    

