const vnesh_kalend_type = document.getElementById('vnesh_kalend_type');

const v_kalend_type = fetch('http://localhost:8090/v_kalend/type')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({type}) => {
            let select = document.createElement('option');
            select.textContent = type;
            vnesh_kalend_type.appendChild(select)
        })       
    })
    .catch(error => console.log(error));
