const podr_photo_format = document.getElementById('podr_photo_format');
const podr_photo_type = document.getElementById('podr_photo_type');

const photo_format = fetch('http://localhost:8090/p_photo/format')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({format}) => {
            let select = document.createElement('option');
            select.textContent = format;
            podr_photo_format.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const photo_type = fetch('http://localhost:8090/p_photo/type')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({type}) => {
            let select = document.createElement('option');
            select.textContent = type;
            podr_photo_type.appendChild(select)
        })       
    })
    .catch(error => console.log(error));





    

