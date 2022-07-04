const podr_postpechat_operation = document.getElementById('podr_postpechat_operation');

const pfb_operation = fetch('http://localhost:8090/p_pfb/operation')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(({operation}) => {
            let select = document.createElement('option');
            select.textContent = operation;
            podr_postpechat_operation.appendChild(select)
        })       
    })
    .catch(error => console.log(error));