var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

const dbop = require('./tables_operations/podr_1_xerox_ops');
const dbop2 = require('./tables_operations/podr_2_konica_ops');
const dbop3 = require('./tables_operations/podr_3_tirazh_ops');
const dbop4 = require('./tables_operations/podr_41_plakat_ops');
const dbop5 = require('./tables_operations/podr_42_booklet_ops');
const dbop6 = require('./tables_operations/podr_44_list_ops');
const dbop7 = require('./tables_operations/podr_45_bloknot_ops');
const dbop8 = require('./tables_operations/podr_46_zachet_ops');
const dbop9 = require('./tables_operations/podr_47_stud_ops');
const dbop10 = require('./tables_operations/podr_48_udost_ops');
const dbop11 = require('./tables_operations/podr_49_diplom_ops');
const dbop12 = require('./tables_operations/podr_411_kalendar_ops');
const dbop13 = require('./tables_operations/podr_412_sert_ops');
const dbop14 = require('./tables_operations/podr_413_brochure_ops');
const dbop15 = require('./tables_operations/podr_51_pfb_ops');
const dbop16 = require('./tables_operations/podr_52_photo_ops');
const dbop17 = require('./tables_operations/podr_53_rezka_ops');
const dbop18 = require('./tables_operations/podr_54_termperepl_ops');
const dbop19 = require('./tables_operations/podr_55_pruzhperepl_ops');
const dbop20 = require('./tables_operations/podr_56_tvperepl_ops');
const dbop21 = require('./tables_operations/podr_57_tvperepl_b7_ops');
const dbop22 = require('./tables_operations/podr_58_tvperepl_cb7_ops');
const dbop_1 = require('./tables_operations/vnesh_1_poly_ops');
const dbop_2 = require('./tables_operations/vnesh_2_poly_ops');
const dbop_3 = require('./tables_operations/vnesh_3_diplom_ops');
const dbop_4 = require('./tables_operations/vnesh_4_tvperepl_ops');
const dbop_5 = require('./tables_operations/vnesh_5_tvperepl_b7_ops');
const dbop_6 = require('./tables_operations/vnesh_6_tvperepl_cb7_ops');
const dbop_7 = require('./tables_operations/vnesh_7_sert_ops');
const dbop_8 = require('./tables_operations/vnesh_8_kalend_ops');
const dbop_9 = require('./tables_operations/vnesh_11_photo_ops');
const dbop_10 = require('./tables_operations/vnesh_12_bloknot_ops');
const dbop_11 = require('./tables_operations/vnesh_14_brochure_ops');
const dbop_12 = require('./tables_operations/vnesh_15_tisn_ops');
const dbop_13 = require('./tables_operations/vnesh_16_potetr_ops');
const dbop_14 = require('./tables_operations/vnesh_17_disk_ops');
const dbop_15 = require('./tables_operations/vnesh_18_pozdr_ops');
const dbop_16 = require('./tables_operations/vnesh_19_pechat_ops');

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', router);

var port = process.env.PORT || 8090
app.listen(port);
console.log('API is running at ' + port);


router.route('/p_xerox').get((req, res) => {
    dbop.getPaperXerox().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_xerox').post((req, res) => {
    dbop.getPaperXeroxPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/p_xerox/format').get((req, res) => {
    dbop.getPaperXeroxFormat().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_xerox/color').get((req, res) => {
    dbop.getPaperXeroxColor().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_xerox/bw_paper').get((req, res) => {
    dbop.getPaperXeroxBW().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_xerox/weight').get((req, res) => {
    dbop.getPaperXeroxWeight().then(result => {
        res.json(result[0]);
    })
})


router.route('/p_konica').get((req, res) => {
    dbop2.getPaperKonica().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_konica').post((req, res) => {
    dbop2.getPaperKonicaPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/p_konica/format').get((req, res) => {
    dbop2.getPaperKonicaFormat().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_konica/color').get((req, res) => {
    dbop2.getPaperKonicaColor().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_konica/bw_paper').get((req, res) => {
    dbop2.getPaperKonicaBW().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_konica/weight').get((req, res) => {
    dbop2.getPaperKonicaWeight().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_tirazh').get((req, res) => {
    dbop3.getPodrTirazh().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_tirazh').post((req, res) => {
    dbop3.getPodrTirazhPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/p_tirazh/format').get((req, res) => {
    dbop3.getPodrTirazhFormat().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_tirazh/color').get((req, res) => {
    dbop3.getPodrTirazhColor().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_tirazh/print_run').get((req, res) => {
    dbop3.getPodrTirazhPrintRun().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_tirazh/bw_paper').get((req, res) => {
    dbop3.getPodrTirazhBW().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_tirazh/weight').get((req, res) => {
    dbop3.getPodrTirazhWeight().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_plakat').get((req, res) => {
    dbop4.getPodrPlakat().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_plakat').post((req, res) => {
    dbop4.getPodrPlakatPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/p_plakat/format').get((req, res) => {
    dbop4.getPodrPlakatFormat().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_plakat/color').get((req, res) => {
    dbop4.getPodrPlakatColor().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_booklet').get((req, res) => {
    dbop5.getPodrBooklet().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_booklet').post((req, res) => {
    dbop5.getPodrBookletPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/p_booklet/format').get((req, res) => {
    dbop5.getPodrBookletFormat().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_booklet/color').get((req, res) => {
    dbop5.getPodrBookletColor().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_booklet/weight').get((req, res) => {
    dbop5.getPodrBookletWeight().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_list').get((req, res) => {
    dbop6.getPodrList().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_list').post((req, res) => {
    dbop6.getPodrListPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/p_list/format').get((req, res) => {
    dbop6.getPodrListFormat().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_list/color').get((req, res) => {
    dbop6.getPodrListColor().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_list/weight').get((req, res) => {
    dbop6.getPodrListWeight().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_bloknot').get((req, res) => {
    dbop7.getPodrBloknot().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_bloknot').post((req, res) => {
    dbop7.getPodrBloknotPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/p_bloknot/format').get((req, res) => {
    dbop7.getPodrBloknotFormat().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_bloknot/paper').get((req, res) => {
    dbop7.getPodrBloknotPaper().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_bloknot/side').get((req, res) => {
    dbop7.getPodrBloknotSide().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_zachet').get((req, res) => {
    dbop8.getPodrZachet().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_zachet').post((req, res) => {
    dbop8.getPodrZachetPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/p_zachet/format').get((req, res) => {
    dbop8.getPodrZachetFormat().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_zachet/maxqty').get((req, res) => {
    dbop8.getPodrZachetMaxQty().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_stud').get((req, res) => {
    dbop9.getPodrStud().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_stud').post((req, res) => {
    dbop9.getPodrStudPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/p_stud/format').get((req, res) => {
    dbop9.getPodrStudFormat().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_stud/maxqty').get((req, res) => {
    dbop9.getPodrStudMaxQty().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_udost').get((req, res) => {
    dbop10.getPodrUdost().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_udost').post((req, res) => {
    dbop10.getPodrUdostPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/p_udost/format').get((req, res) => {
    dbop10.getPodrUdostFormat().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_diplom').get((req, res) => {
    dbop11.getPodrDiplom().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_diplom').post((req, res) => {
    dbop11.getPodrDiplomPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/p_diplom/format').get((req, res) => {
    dbop11.getPodrDiplomFormat().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_diplom/endpaper').get((req, res) => {
    dbop11.getPodrDiplomEndpaper().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_kalendar').get((req, res) => {
    dbop12.getPodrKalendar().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_kalendar').post((req, res) => {
    dbop12.getPodrKalendarPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/p_kalendar/type').get((req, res) => {
    dbop12.getPodrKalendarType().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_sert').get((req, res) => {
    dbop13.getPodrSert().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_sert').post((req, res) => {
    dbop13.getPodrSertPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/p_sert/type').get((req, res) => {
    dbop13.getPodrSertType().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_brochure').get((req, res) => {
    dbop14.getPodrBrochure().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_brochure').post((req, res) => {
    dbop14.getPodrBrochurePrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/p_brochure/format').get((req, res) => {
    dbop14.getPodrBrochureFormat().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_brochure/pages').get((req, res) => {
    dbop14.getPodrBrochurePages().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_pfb').get((req, res) => {
    dbop15.getPodrPFB().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_pfb').post((req, res) => {
    dbop15.getPodrPFBPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/p_pfb/operation').get((req, res) => {
    dbop15.getPodrPFBOperation().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_photo').get((req, res) => {
    dbop16.getPodrPhoto().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_photo').post((req, res) => {
    dbop16.getPodrPhotoPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/p_photo/format').get((req, res) => {
    dbop16.getPodrPhotoFormat().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_photo/type').get((req, res) => {
    dbop16.getPodrPhotoType().then(result => {
        res.json(result[0]);
    })
})


router.route('/p_rezka').get((req, res) => {
    dbop17.getPodrRezka().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_rezka').post((req, res) => {
    dbop17.getPodrRezkaPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/p_rezka/format').get((req, res) => {
    dbop17.getPodrRezkaFormat().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_rezka/weight').get((req, res) => {
    dbop17.getPodrRezkaWeight().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_rezka/pages').get((req, res) => {
    dbop17.getPodrRezkaPages().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_termperepl').get((req, res) => {
    dbop18.getPodrTermperepl().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_termperepl').post((req, res) => {
    dbop18.getPodrTermpereplPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/p_termperepl/format').get((req, res) => {
    dbop18.getPodrTermpereplFormat().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_termperepl/pages').get((req, res) => {
    dbop18.getPodrTermpereplPages().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_pruzhperepl').get((req, res) => {
    dbop19.getPodrPruzhperepl().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_pruzhperepl').post((req, res) => {
    dbop19.getPodrPruzhpereplPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/p_pruzhperepl/format').get((req, res) => {
    dbop19.getPodrPruzhpereplFormat().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_pruzhperepl/pages').get((req, res) => {
    dbop19.getPodrPruzhpereplPages().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_tvperepl').get((req, res) => {
    dbop20.getPodrTvperepl().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_tvperepl').post((req, res) => {
    dbop20.getPodrTvpereplPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/p_tvperepl/format').get((req, res) => {
    dbop20.getPodrTvpereplFormat().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_tvperepl_b7').get((req, res) => {
    dbop21.getPodrTvpereplB7().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_tvperepl_b7').post((req, res) => {
    dbop21.getPodrTvpereplB7Price(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/p_tvperepl_b7/format').get((req, res) => {
    dbop21.getPodrTvpereplB7Format().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_tvperepl_cb7').get((req, res) => {
    dbop22.getPodrTvpereplCB7().then(result => {
        res.json(result[0]);
    })
})

router.route('/p_tvperepl_cb7').post((req, res) => {
    dbop22.getPodrTvpereplCB7Price(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/p_tvperepl_cb7/format').get((req, res) => {
    dbop22.getPodrTvpereplCB7Format().then(result => {
        res.json(result[0]);
    })
})


router.route('/v_poly_1').get((req, res) => {
    dbop_1.getVneshPoly1().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_poly_1').post((req, res) => {
    dbop_1.getVneshPoly1TotalPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/v_poly_2').get((req, res) => {
    dbop_2.getVneshPoly2().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_poly_2').post((req, res) => {
    dbop_2.getVneshPoly2TotalPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/v_poly_2/pages').get((req, res) => {
    dbop_2.getVneshPoly2Pages().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_diplom').get((req, res) => {
    dbop_3.getVneshDiplom().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_diplom').post((req, res) => {
    dbop_3.getVneshDiplomTotalPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/v_diplom/color').get((req, res) => {
    dbop_3.getVneshDiplomColor().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_tvperepl').get((req, res) => {
    dbop_4.getVneshTvperepl().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_tvperepl').post((req, res) => {
    dbop_4.getVneshTvpereplTotalPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/v_tvperepl/format').get((req, res) => {
    dbop_4.getVneshTvpereplFormat().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_tvperepl_b7').get((req, res) => {
    dbop_5.getVneshTvpereplB7().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_tvperepl_b7').post((req, res) => {
    dbop_5.getVneshTvpereplB7TotalPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/v_tvperepl_b7/format').get((req, res) => {
    dbop_5.getVneshTvpereplB7Format().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_tvperepl_cb7').get((req, res) => {
    dbop_6.getVneshTvpereplCB7().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_tvperepl_cb7').post((req, res) => {
    dbop_6.getVneshTvpereplCB7TotalPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/v_tvperepl_cb7/format').get((req, res) => {
    dbop_6.getVneshTvpereplCB7Format().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_sert').get((req, res) => {
    dbop_7.getVneshSert().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_sert').post((req, res) => {
    dbop_7.getVneshSertTotalPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/v_kalend').get((req, res) => {
    dbop_8.getVneshKalend().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_kalend').post((req, res) => {
    dbop_8.getVneshKalendTotalPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/v_kalend/type').get((req, res) => {
    dbop_8.getVneshKalendType().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_photo').get((req, res) => {
    dbop_9.getVneshPhoto().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_photo').post((req, res) => {
    dbop_9.getVneshPhotoTotalPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/v_photo/format').get((req, res) => {
    dbop_9.getVneshPhotoFormat().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_photo/type').get((req, res) => {
    dbop_9.getVneshPhotoType().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_bloknot').get((req, res) => {
    dbop_10.getVneshBloknot().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_bloknot').post((req, res) => {
    dbop_10.getVneshBloknotPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/v_bloknot/format').get((req, res) => {
    dbop_10.getVneshBloknotFormat().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_bloknot/paper').get((req, res) => {
    dbop_10.getVneshBloknotPaper().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_bloknot/side').get((req, res) => {
    dbop_10.getVneshBloknotSide().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_brochure').get((req, res) => {
    dbop_11.getVneshBrochure().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_brochure').post((req, res) => {
    dbop_11.getVneshBrochurePrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/v_brochure/pages').get((req, res) => {
    dbop_11.getVneshBrochurePages().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_tisn').get((req, res) => {
    dbop_12.getVneshTisn().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_tisn').post((req, res) => {
    dbop_12.getVneshTisnPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/v_potetr').get((req, res) => {
    dbop_13.getVneshPotetr().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_potetr').post((req, res) => {
    dbop_13.getVneshPotetrPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/v_disk').get((req, res) => {
    dbop_14.getVneshDisk().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_disk').post((req, res) => {
    dbop_14.getVneshDiskPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/v_pozdr').get((req, res) => {
    dbop_15.getVneshPozdr().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_pozdr').post((req, res) => {
    dbop_15.getVneshPozdrPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/v_pechat').get((req, res) => {
    dbop_16.getVneshPechat().then(result => {
        res.json(result[0]);
    })
})

router.route('/v_pechat').post((req, res) => {
    dbop_16.getVneshPechatPrice(req.body).then(result => {
        res.json(result[0].length !== 0 ? result[0][0]: {price: 'товар с данными критериями отсутствует'});
    })
})

router.route('/v_pechat/color').get((req, res) => {
    dbop_16.getVneshPechatColor().then(result => {
        res.json(result[0]);
    })
})