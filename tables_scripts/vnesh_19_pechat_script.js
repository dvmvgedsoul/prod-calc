const vnesh_pechat_color = document.getElementById('vnesh_pechat_color');

const v_pechat_color = fetch('http://localhost:8090/v_pechat/color')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({color}) => {
            let select = document.createElement('option');
            select.textContent = color;
            vnesh_pechat_color.appendChild(select)
        })       
    })
    .catch(error => console.log(error));
