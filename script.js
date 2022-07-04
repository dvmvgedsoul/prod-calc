const urls = {
    'podr_xerox_options' : 'p_xerox',
    'podr_konica_options' : 'p_konica',
    'podr_tirazh_options' : 'p_tirazh',
    'podr_plakat_options' : 'p_plakat',
    'podr_booklet_options' : 'p_booklet',
    'podr_list_options' : 'p_list',
    'podr_bloknot_options' : 'p_bloknot',
    'podr_zachet_options' : 'p_zachet',
    'podr_stud_options' : 'p_stud',
    'podr_udost_options' : 'p_udost',
    'podr_diplom_options' : 'p_diplom',
    'podr_kalendar_options' : 'p_kalendar',
    'podr_sert_options' : 'p_sert',
    'podr_brochure_options' : 'p_brochure',
    'podr_postpechat_options' : 'p_pfb',
    'podr_photo_options' : 'p_photo',
    'podr_rezka_options' : 'p_rezka',
    'podr_termperepl_options' : 'p_termperepl',
    'podr_pruzhperepl_options' : 'p_pruzhperepl',
    'podr_tvperepl_options' : 'p_tvperepl',
    'podr_tvperepl_b7_options' : 'p_tvperepl_b7',
    'podr_tvperepl_cb7_options' : 'p_tvperepl_cb7',
    'vnesh_poly1_options' : 'v_poly_1',
    'vnesh_poly2_options' : 'v_poly_2',
    'vnesh_diplom_options' : 'v_diplom',
    'vnesh_tvperepl_options' : 'v_tvperepl',
    'vnesh_tvperepl_b7_options' : 'v_tvperepl_b7',
    'vnesh_tvperepl_cb7_options' : 'v_tvperepl_cb7',
    'vnesh_sert_options' : 'v_sert',
    'vnesh_kalend_options' : 'v_kalend',
    'vnesh_photo_options' : 'v_photo',
    'vnesh_bloknot_options' : 'v_bloknot',
    'vnesh_brochure_options' : 'v_brochure',
    'vnesh_tisn_options' : 'v_tisn',
    'vnesh_potetr_options' : 'v_potetr',
    'vnesh_disk_options' : 'v_disk',
    'vnesh_pozdr_adres_options' : 'v_pozdr',
    'vnesh_pechat_options' : 'v_pechat',
}

function getPrice(id) {
    const form = document.getElementById(id)
    let formData = {};
    for (let i = 0; i < form.elements.length - 2; i++) {
        formData[form.elements[i].name]  = form.elements[i].value
    }
    console.log(formData);
    const response = fetch(`http://localhost:8090/${urls[id]}`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" }
    })
        .then(res => res.json())
        .then(data => {
            const totalprice = typeof data['price'] == 'number' ? (data['price'] * form.elements['qty'].value).toFixed(2) : data['price'];
            const elem_price = document.getElementById('price');      
            elem_price.innerText = data['price'];
            const elem_totalprice = document.getElementById('total_price');
            elem_totalprice.innerText = totalprice;
        })
        .catch(error => console.log(error));
    
}

const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
        form.onsubmit = (event) => {
        event.preventDefault();
        getPrice(form.id);
        };
    });