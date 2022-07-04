const vnesh_photo_format = document.getElementById('vnesh_photo_format');
const vnesh_photo_type = document.getElementById('vnesh_photo_type');

const v_photo_format = fetch('http://localhost:8090/v_photo/format')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({format}) => {
            let select = document.createElement('option');
            select.textContent = format;
            vnesh_photo_format.appendChild(select)
        })       
    })
    .catch(error => console.log(error));

const v_photo_type = fetch('http://localhost:8090/v_photo/type')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({type}) => {
            let select = document.createElement('option');
            select.textContent = type;
            vnesh_photo_type.appendChild(select)
        })       
    })
    .catch(error => console.log(error));    
