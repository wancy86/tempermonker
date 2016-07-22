// ==UserScript==
// @name         Auto Reg Email 50
// @namespace    http://mail.cntv.cn/reg.php
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://mail.cntv.cn/reg.php
// @grant        none
// ==/UserScript==

(function() {
    //'use strict';
    // http://mail.cntv.cn/reg.php

    //200 names
    var names = ['Hupvupjin', 'Avuovone', 'Bobbaf', 'Ooichw', 'Beosbuwf', 'Laoeehuw', 'Toesqev', 'Nijsojl', 'Vicdus', 'Nigvomopil', 'Jejkevc', 'Edyicko', 'Hiacryopk', 'Ajukdui', 'Wolmat', 'Nalxhc', 'Luwkanjuuu', 'Calsisezi', 'Supjucduru', 'Ufiqninu', 'Ebejcekni', 'Tyemeo', 'Bugrau', 'Vuvpabmic', 'Ugeicsyers', 'Jakimeum', 'Asajbukqar', 'Shlijyghep', 'Kisaigyx', 'Semufoeic', 'Juuship', 'Kimnoj', 'Jyvheo', 'Nyqcayrac', 'Jhcistudal', 'Balolucud', 'Ikucpibic', 'Kiytpidsh', 'Kokfoof', 'Iheptysiqa', 'Maiahpis', 'Dabsyrwusk', 'Vurjupgob', 'Dezgukr', 'Gegfhput', 'Bhtigpewla', 'Bomkya', 'Ticahinnua', 'Gapogox', 'Miltunauko', 'Gidvyaj', 'Loszawhu', 'Deuthehl', 'Zimameaf', 'Polofumma', 'Juliqo', 'Numnuph', 'Uozucdo', 'Qawnumooe', 'Igyhibaeb', 'Mejosylevh', 'Oxiujfuab', 'Kiksecgeru', 'Sorbiz', 'Ijurriveh', 'Tygwou', 'Biawdy', 'Duunmacga', 'Dirdonmyv', 'Cohoyodye', 'Ajugmemt', 'Livkaoade', 'Cektee', 'Fakuaejy', 'Acaqnij', 'Odoisuleb', 'Zakshrab', 'Wuwghoxa', 'Huapxouvx', 'Ubepsasro', 'Uobotit', 'Thlujfhogu', 'Beejse', 'Kamliy', 'Wuppustupf', 'Qeikfey', 'Tukroyoeo', 'Laqbeelvi', 'Zidceupku', 'Kaempeaf', 'Iaepekten', 'Ariszod', 'Ohaodtoa', 'Tadgogp', 'Juykeowig', 'Rodzolpen', 'Nahharehiv', 'Uejecru', 'Ubunhipidi', 'Baanbo', 'Daofco', 'Bojcibzezh', 'Rerfijoajy', 'Chricdu', 'Lajkubla', 'Ifariraj', 'Xhgutby', 'Sanmoin', 'Kucajizfog', 'Xiokdukgoc', 'Phregs', 'Ekyfryw', 'Rapkoskoaq', 'Locupabi', 'Khlepsu', 'Dygamosja', 'Ramwonduk', 'Dohjeux', 'Lodnuvafu', 'Sybfeppa', 'Uvabraqegi', 'Ghleugbu', 'Ovikbua', 'Kednojpe', 'Loehdic', 'Jyamxesg', 'Waefyzirr', 'Bejsii', 'Avorufemi', 'Saaspee', 'Usisvosfo', 'Ohuepda', 'Kikufeqj', 'Mosbumnep', 'Rupcuoeng', 'Udakfo', 'Ubiwocual', 'Atardarkio', 'Kofdaieej', 'Porcohfa', 'Vonmurf', 'Ajuybshr', 'Vuqfalbu', 'Jutevhr', 'Mubvit', 'Jiuphagp', 'Bimjunxys', 'Noogzas', 'Zigmecn', 'Fojmawk', 'Chjebq', 'Duntak', 'Rutlocguj', 'Dedsylge', 'Deawfatfiu', 'Ijhroegso', 'Cuzuoco', 'Pumfewgovo', 'Bomsom', 'Eereikda', 'Xhsurhy', 'Bunmatmac', 'Tirnur', 'Ieoduolilu', 'Sobadio', 'Keqrotceu', 'Ylumgyvun', 'Jipsaud', 'Ciaprhmuwc', 'Nokciurs', 'Jiggiyq', 'Saeloiba', 'Kuzravsuys', 'Oximcetl', 'Ludxed', 'Peycpimxe', 'Zojbim', 'Cohruejja', 'Obhnuw', 'Ditfeosr', 'Wortisc', 'Bagseec', 'Sufuykalm', 'Ulondepi', 'Dinsuuf', 'Gitayyli', 'Vunocobcub', 'Difwam', 'Nujnoplo', 'Riduhadua', 'Khvyjmom', 'Vohsowaap', 'Hiliduui', 'Puiombu', 'Robuat', 'Xenirukp', 'Reftovnhky', 'Ducnokjad', 'Ruuajrelw', 'Sajwiiki'];

    var email = names[Math.floor(Math.random() * 200)];
    console.log(email + '@cntv.cn');

    $('#u_email').val(email);
    $('#u_password').val('max@123456');
    $('#u_vpassword').val('max@123456');
    $('#u_question').val('我就读的小学名称？');
    $('#u_answer').val('大河铺小学');
    $('#u_code').val();

    $.ajax({
        url: "http://www.test2.com/log_emailaddres.php",
        method:"GET",
        data: {
            email: email
        },
        succsss: function() {
            console.log('ok...');
        }
    });

})();

/*

Vonmurf@cntv.cn
Jiggiyq@cntv.cn
Shlijyghep@cntv.cn
Keqrotceu@cntv.cn
Ulondepi@cntv.cn
Rodzolpen@cntv.cn


*/