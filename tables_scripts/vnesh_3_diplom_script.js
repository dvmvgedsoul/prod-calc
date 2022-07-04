const vnesh_diplom_color = document.getElementById('vnesh_diplom_color');

const diplom_color = fetch('http://localhost:8090/v_diplom/color')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({color}) => {
            let select = document.createElement('option');
            select.textContent = color;
            vnesh_diplom_color.appendChild(select)
        })       
    })
    .catch(error => console.log(error));
