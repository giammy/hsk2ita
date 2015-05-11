(function(){
  'use strict';
  var module = angular.module('app', ['onsen']);

  module.controller('AppController', function($scope, $data) {
    $scope.doSomething = function() {
      ons.notification.alert({message: 'Hello, World!'});
    };
  });

  module.controller('DetailController', function($scope, $data) {
    $scope.item = $data.selectedItem;

    $scope.backReset = function(index) {
	var pages = $scope.navi.getPages();
	var i = 1;
	/* console.log("pages.length=%i", pages.length); */
	while (pages.length > 2) {
 	  pages[pages.length - 1].destroy();
	}
	$scope.navi.popPage();
    };

    $scope.showReplaceDetail = function(index) {
      var selectedItem = $data.items[index];
      $data.selectedItem = selectedItem;
      /*      $scope.navi.replacePage('detail.html', {title : selectedItem.title}); */
      /*      $scope.navi.popPage(); */
      $scope.navi.pushPage('detail.html', {title : selectedItem.title});
    };

    $scope.showReplaceRandomDetail = function() {
      var selectedItem = $data.items[Math.floor(Math.random() * 153)];
      $data.selectedItem = selectedItem;
      /* $scope.navi.replacePage('detail.html', {title : selectedItem.title}); */
      $scope.navi.pushPage('detail.html', {title : selectedItem.title});
    };

  });

  module.controller('MasterController', function($scope, $data) {
    $scope.items = $data.items;  
    
    $scope.showDetail = function(index) {
      var selectedItem = $data.items[index];
      $data.selectedItem = selectedItem;
      $scope.navi.pushPage('detail.html', {title : selectedItem.title});
    };
  });

  module.factory('$data', function() {
      var data = {};
      
      data.items = [

{ idx: '0', pidx: '302', nidx: '1', title: '爱', label: 'ài', desc: 'amore; amare; piacere; affetto' },
{ idx: '1', pidx: '0', nidx: '2', title: '八', label: 'bā', desc: 'otto; 8' },
{ idx: '2', pidx: '1', nidx: '3', title: '爸爸', label: 'bàba', desc: 'papà (informale)' },
{ idx: '3', pidx: '2', nidx: '4', title: '杯子', label: 'bēizi', desc: 'tazza; coppa; bicchiere' },
{ idx: '4', pidx: '3', nidx: '5', title: '北京', label: 'Běijīng', desc: 'Pechino; Beijing' },
{ idx: '5', pidx: '4', nidx: '6', title: '本', label: 'běn', desc: '[cl per libri, periodici, file]; radice di una pianta; origine; base' },
{ idx: '6', pidx: '5', nidx: '7', title: '不客气', label: 'bùkèqi', desc: 'prego; brusco; rude' },
{ idx: '7', pidx: '6', nidx: '8', title: '不', label: 'bù', desc: 'no (usato prima di verbi); non (usato prima di nomi; aggettivi)' },
{ idx: '8', pidx: '7', nidx: '9', title: '菜', label: 'cài', desc: 'cibo; verdura' },
{ idx: '9', pidx: '8', nidx: '10', title: '茶', label: 'chá', desc: 'the; pianta del the' },
{ idx: '10', pidx: '9', nidx: '11', title: '吃', label: 'chī', desc: 'mangiare; pranzare; cancellare; distruggere; assorbire' },
{ idx: '11', pidx: '10', nidx: '12', title: '出租车', label: 'chūzūchē', desc: 'taxi' },
{ idx: '12', pidx: '11', nidx: '13', title: '打电话', label: 'dǎdiànhuà', desc: 'telefonare; fare una telefonata' },
{ idx: '13', pidx: '12', nidx: '14', title: '大', label: 'dà', desc: 'grande; enorme; largo; ampio' },
{ idx: '14', pidx: '13', nidx: '15', title: '的', label: 'de', desc: 'di; particella strutturale, collega nome e attributo descrittivo o possessivo' },
{ idx: '15', pidx: '14', nidx: '16', title: '点', label: 'diǎn', desc: 'punto; goccia; uno dei tratti dei caratteri cinesi; un poco; classificatore per piccole quantità indeterminate' },
{ idx: '16', pidx: '15', nidx: '17', title: '电脑', label: 'diànnǎo', desc: 'computer' },
{ idx: '17', pidx: '16', nidx: '18', title: '电视', label: 'diànshì', desc: 'TV; televisione' },
{ idx: '18', pidx: '17', nidx: '19', title: '电影', label: 'diànyǐng', desc: 'film' },
{ idx: '19', pidx: '18', nidx: '20', title: '东西', label: 'dōngxi', desc: 'cosa in generale' },
{ idx: '20', pidx: '19', nidx: '21', title: '都', label: 'dōu', desc: 'tutti; entrambi; del tutto' },
{ idx: '21', pidx: '20', nidx: '22', title: '读', label: 'dú', desc: 'leggere; studiare; leggere parole' },
{ idx: '22', pidx: '21', nidx: '23', title: '对不起', label: 'duìbuqǐ', desc: 'mi spiace; scusami; per favore' },
{ idx: '23', pidx: '22', nidx: '24', title: '多', label: 'duō', desc: 'molto; tanti; numerosi' },
{ idx: '24', pidx: '23', nidx: '25', title: '多少', label: 'duōshao', desc: 'quanto; numero; quantità' },
{ idx: '25', pidx: '24', nidx: '26', title: '儿子', label: 'érzi', desc: 'figlio' },
{ idx: '26', pidx: '25', nidx: '27', title: '二', label: 'èr', desc: 'due; 2' },
{ idx: '27', pidx: '26', nidx: '28', title: '饭馆', label: 'fànguǎn', desc: 'ristorante' },
{ idx: '28', pidx: '27', nidx: '29', title: '飞机', label: 'fēijī', desc: 'aereo' },
{ idx: '29', pidx: '28', nidx: '30', title: '分钟', label: 'fēnzhōng', desc: 'minuto' },
{ idx: '30', pidx: '29', nidx: '31', title: '高兴', label: 'gāoxìng', desc: 'felice; allegro' },
{ idx: '31', pidx: '30', nidx: '32', title: '个', label: 'gè', desc: '[classificatore generico]; individuo; questo' },
{ idx: '32', pidx: '31', nidx: '33', title: '工作', label: 'gōngzuò', desc: 'lavoro; costruzione; compito' },
{ idx: '33', pidx: '32', nidx: '34', title: '狗', label: 'gǒu', desc: 'cane' },
{ idx: '34', pidx: '33', nidx: '35', title: '汉语', label: 'Hànyǔ', desc: 'la lingua Cinese' },
{ idx: '35', pidx: '34', nidx: '36', title: '好', label: 'hǎo', desc: 'bene; buono; proprio; indica completamento' },
{ idx: '36', pidx: '35', nidx: '37', title: '喝', label: 'hē', desc: 'bere; gridare un comando' },
{ idx: '37', pidx: '36', nidx: '38', title: '和', label: 'hé', desc: 'e; assieme con; con; unione' },
{ idx: '38', pidx: '37', nidx: '39', title: '很', label: 'hěn', desc: 'molto; parecchio' },
{ idx: '39', pidx: '38', nidx: '40', title: '后面', label: 'hòumiàn', desc: 'dietro; dopo; più tardi' },
{ idx: '40', pidx: '39', nidx: '41', title: '回', label: 'huí', desc: 'ritornare; rispondere; [classificatore per atti di commedie]' },
{ idx: '41', pidx: '40', nidx: '42', title: '会', label: 'huì', desc: 'potere; esser possibile; essere in grado di' },
{ idx: '42', pidx: '41', nidx: '43', title: '火车站', label: 'huǒchēzhàn', desc: 'stazione ferroviaria' },
{ idx: '43', pidx: '42', nidx: '44', title: '几', label: 'jǐ', desc: 'alcuni; quanti?' },
{ idx: '44', pidx: '43', nidx: '45', title: '家', label: 'jiā', desc: 'casa; famiglia; [classificatore per aziende]' },
{ idx: '45', pidx: '44', nidx: '46', title: '叫', label: 'jiào', desc: 'chiamare; chiamarsi; chiedere' },
{ idx: '46', pidx: '45', nidx: '47', title: '今天', label: 'jīntiān', desc: 'oggi; ora; al momento' },
{ idx: '47', pidx: '46', nidx: '48', title: '九', label: 'jiǔ', desc: 'nove; 9' },
{ idx: '48', pidx: '47', nidx: '49', title: '开', label: 'kāi', desc: 'aprire; iniziare; accendere;' },
{ idx: '49', pidx: '48', nidx: '50', title: '看', label: 'kàn', desc: 'vedere; guardare; leggere (in silenzio); pensare' },
{ idx: '50', pidx: '49', nidx: '51', title: '看见', label: 'kànjiàn', desc: 'vedere; dare una occhiata' },
{ idx: '51', pidx: '50', nidx: '52', title: '块', label: 'kuài', desc: 'pezzo; blocco; [classificatore per articoli di vestiario; pezzi di torta]' },
{ idx: '52', pidx: '51', nidx: '53', title: '来', label: 'lái', desc: 'venire; arrivare' },
{ idx: '53', pidx: '52', nidx: '54', title: '老师', label: 'lǎoshī', desc: 'maestro; insegnante' },
{ idx: '54', pidx: '53', nidx: '55', title: '了', label: 'le', desc: '[particella modale]; [indicatore di azione completata]' },
{ idx: '55', pidx: '54', nidx: '56', title: '冷', label: 'lěng', desc: 'freddo' },
{ idx: '56', pidx: '55', nidx: '57', title: '里', label: 'lǐ', desc: 'in; dentro; interno' },
{ idx: '57', pidx: '56', nidx: '58', title: '零', label: 'líng', desc: 'zero; 0;' },
{ idx: '58', pidx: '57', nidx: '59', title: '六', label: 'liù', desc: 'sei; 6' },
{ idx: '59', pidx: '58', nidx: '60', title: '妈妈', label: 'māma', desc: 'mamma' },
{ idx: '60', pidx: '59', nidx: '61', title: '吗', label: 'ma', desc: '[particella interrogativa]' },
{ idx: '61', pidx: '60', nidx: '62', title: '买', label: 'mǎi', desc: 'comprare; acquistare' },
{ idx: '62', pidx: '61', nidx: '63', title: '猫', label: 'māo', desc: 'gatto' },
{ idx: '63', pidx: '62', nidx: '64', title: '没', label: 'méi', desc: 'non; [prefisso negativo per verbi]' },
{ idx: '64', pidx: '63', nidx: '65', title: '没关系', label: 'méiguānxi', desc: 'non importa' },
{ idx: '65', pidx: '64', nidx: '66', title: '米饭', label: 'mǐfàn', desc: 'riso (bollito)' },
{ idx: '66', pidx: '65', nidx: '67', title: '明天', label: 'míngtiān', desc: 'domani' },
{ idx: '67', pidx: '66', nidx: '68', title: '名字', label: 'míngzi', desc: 'nome (di persona o cosa)' },
{ idx: '68', pidx: '67', nidx: '69', title: '哪', label: 'nǎ', desc: 'quale? come?' },
{ idx: '69', pidx: '68', nidx: '70', title: '哪儿', label: 'nǎr', desc: 'dove?' },
{ idx: '70', pidx: '69', nidx: '71', title: '那', label: 'nà', desc: 'quello; allora; in quel caso' },
{ idx: '71', pidx: '70', nidx: '72', title: '那儿', label: 'nàr', desc: 'lì' },
{ idx: '72', pidx: '71', nidx: '73', title: '呢', label: 'ne', desc: '[particella interrogativa]' },
{ idx: '73', pidx: '72', nidx: '74', title: '能', label: 'néng', desc: 'potere; essere capace di; abilità; capacità; aver la possibilità di' },
{ idx: '74', pidx: '73', nidx: '75', title: '你', label: 'nǐ', desc: 'tu (informale)' },
{ idx: '75', pidx: '74', nidx: '76', title: '年', label: 'nián', desc: 'anno' },
{ idx: '76', pidx: '75', nidx: '77', title: '女儿', label: 'nǚ ér', desc: 'figlia' },
{ idx: '77', pidx: '76', nidx: '78', title: '朋友', label: 'péngyou', desc: 'amico' },
{ idx: '78', pidx: '77', nidx: '79', title: '漂亮', label: 'piàoliang', desc: 'bella; carina' },
{ idx: '79', pidx: '78', nidx: '80', title: '苹果', label: 'píngguǒ', desc: 'mela' },
{ idx: '80', pidx: '79', nidx: '81', title: '七', label: 'qī', desc: 'sette; 7' },
{ idx: '81', pidx: '80', nidx: '82', title: '钱', label: 'qián', desc: 'soldi; moneta' },
{ idx: '82', pidx: '81', nidx: '83', title: '前面', label: 'qiánmiàn', desc: 'davanti; di fronte; che precede' },
{ idx: '83', pidx: '82', nidx: '84', title: '请', label: 'qǐng', desc: 'chiedere; invitare; prego' },
{ idx: '84', pidx: '83', nidx: '85', title: '去', label: 'qù', desc: 'andare' },
{ idx: '85', pidx: '84', nidx: '86', title: '热', label: 'rè', desc: 'caldo; scaldare' },
{ idx: '86', pidx: '85', nidx: '87', title: '人', label: 'rén', desc: 'persona; uomo; gente' },
{ idx: '87', pidx: '86', nidx: '88', title: '认识', label: 'rènshi', desc: 'capire; sapere; riconoscere; essere familiari con' },
{ idx: '88', pidx: '87', nidx: '89', title: '日', label: 'rì', desc: 'sole; giorno; data; giorno del mese' },
{ idx: '89', pidx: '88', nidx: '90', title: '三', label: 'sān', desc: 'tre; 3' },
{ idx: '90', pidx: '89', nidx: '91', title: '商店', label: 'shāngdiàn', desc: 'negozio' },
{ idx: '91', pidx: '90', nidx: '92', title: '上', label: 'shàng', desc: 'sopra' },
{ idx: '92', pidx: '91', nidx: '93', title: '上午', label: 'shàngwǔ', desc: 'mattino' },
{ idx: '93', pidx: '92', nidx: '94', title: '少', label: 'shǎo', desc: 'poco; alcuni' },
{ idx: '94', pidx: '93', nidx: '95', title: '谁', label: 'shéi', desc: 'chi?' },
{ idx: '95', pidx: '94', nidx: '96', title: '什么', label: 'shénme', desc: 'qualcosa; cosa?' },
{ idx: '96', pidx: '95', nidx: '97', title: '十', label: 'shí', desc: 'dieci; 10' },
{ idx: '97', pidx: '96', nidx: '98', title: '时候', label: 'shíhou', desc: 'tempo; periodo; intervallo di tempo' },
{ idx: '98', pidx: '97', nidx: '99', title: '是', label: 'shì', desc: 'essere; si' },
{ idx: '99', pidx: '98', nidx: '100', title: '书', label: 'shū', desc: 'libro; lettera' },
{ idx: '100', pidx: '99', nidx: '101', title: '水', label: 'shuǐ', desc: 'acqua; fiume; liquido' },
{ idx: '101', pidx: '100', nidx: '102', title: '水果', label: 'shuǐguǒ', desc: 'frutta' },
{ idx: '102', pidx: '101', nidx: '103', title: '睡觉', label: 'shuìjiào', desc: 'andare a letto; dormire' },
{ idx: '103', pidx: '102', nidx: '104', title: '说话', label: 'shuōhuà', desc: 'parlare; dire; raccontare storie' },
{ idx: '104', pidx: '103', nidx: '105', title: '四', label: 'sì', desc: 'quattro; 4' },
{ idx: '105', pidx: '104', nidx: '106', title: '岁', label: 'suì', desc: 'anno; [class.per anno]' },
{ idx: '106', pidx: '105', nidx: '107', title: '他', label: 'tā', desc: 'egli' },
{ idx: '107', pidx: '106', nidx: '108', title: '她', label: 'tā', desc: 'ella' },
{ idx: '108', pidx: '107', nidx: '109', title: '太', label: 'tài', desc: 'troppo; molto; estremamente' },
{ idx: '109', pidx: '108', nidx: '110', title: '天气', label: 'tiānqì', desc: 'tempo atmosferico' },
{ idx: '110', pidx: '109', nidx: '111', title: '听', label: 'tīng', desc: 'ascoltare; sentire; obbedire' },
{ idx: '111', pidx: '110', nidx: '112', title: '同学', label: 'tóngxué', desc: 'compagno di classe' },
{ idx: '112', pidx: '111', nidx: '113', title: '喂', label: 'wèi', desc: 'pronto (al telefono)' },
{ idx: '113', pidx: '112', nidx: '114', title: '我', label: 'wǒ', desc: 'io' },
{ idx: '114', pidx: '113', nidx: '115', title: '我们', label: 'wǒmen', desc: 'noi' },
{ idx: '115', pidx: '114', nidx: '116', title: '五', label: 'wǔ', desc: 'cinque, 5' },
{ idx: '116', pidx: '115', nidx: '117', title: '喜欢', label: 'xǐhuan', desc: 'piacere' },
{ idx: '117', pidx: '116', nidx: '118', title: '下', label: 'xià', desc: 'sotto; basso; dopo' },
{ idx: '118', pidx: '117', nidx: '119', title: '下午', label: 'xiàwǔ', desc: 'pomeriggio' },
{ idx: '119', pidx: '118', nidx: '120', title: '下雨', label: 'xiàyǔ', desc: 'piovere; piovoso' },
{ idx: '120', pidx: '119', nidx: '121', title: '先生', label: 'xiānsheng', desc: 'signore; maestro; marito' },
{ idx: '121', pidx: '120', nidx: '122', title: '现在', label: 'xiànzài', desc: 'ora; adesso; al momento' },
{ idx: '122', pidx: '121', nidx: '123', title: '想', label: 'xiǎng', desc: 'pensare; credere; supporre' },
{ idx: '123', pidx: '122', nidx: '124', title: '小', label: 'xiǎo', desc: 'piccolo; giovane' },
{ idx: '124', pidx: '123', nidx: '125', title: '小姐', label: 'xiǎojiě', desc: 'giovane signora; signorina' },
{ idx: '125', pidx: '124', nidx: '126', title: '些', label: 'xiē', desc: 'alcuni' },
{ idx: '126', pidx: '125', nidx: '127', title: '写', label: 'xiě', desc: 'scrivere' },
{ idx: '127', pidx: '126', nidx: '128', title: '谢谢', label: 'xièxie', desc: 'grazie; ringraziare' },
{ idx: '128', pidx: '127', nidx: '129', title: '星期', label: 'xīngqī', desc: 'settimana' },
{ idx: '129', pidx: '128', nidx: '130', title: '学生', label: 'xuésheng', desc: 'studente; scolaro' },
{ idx: '130', pidx: '129', nidx: '131', title: '学习', label: 'xuéxí', desc: 'studiare; imparare' },
{ idx: '131', pidx: '130', nidx: '132', title: '学校', label: 'xuéxiào', desc: 'scuola' },
{ idx: '132', pidx: '131', nidx: '133', title: '一', label: 'yī', desc: 'uno; 1; singolo' },
{ idx: '133', pidx: '132', nidx: '134', title: '衣服', label: 'yīfu', desc: 'vestito' },
{ idx: '134', pidx: '133', nidx: '135', title: '医生', label: 'yīshēng', desc: 'dottore' },
{ idx: '135', pidx: '134', nidx: '136', title: '医院', label: 'yīyuàn', desc: 'ospedale' },
{ idx: '136', pidx: '135', nidx: '137', title: '椅子', label: 'yǐzi', desc: 'sedia' },
{ idx: '137', pidx: '136', nidx: '138', title: '有', label: 'yǒu', desc: 'avere; esserci; esistere' },
{ idx: '138', pidx: '137', nidx: '139', title: '月', label: 'yuè', desc: 'mese; luna' },
{ idx: '139', pidx: '138', nidx: '140', title: '在', label: 'zài', desc: 'in; esistere; [indica azione in corso]' },
{ idx: '140', pidx: '139', nidx: '141', title: '再见', label: 'zàijiàn', desc: 'arrivederci; ci vediamo' },
{ idx: '141', pidx: '140', nidx: '142', title: '怎么', label: 'zěnme', desc: 'come; cosa; perché' },
{ idx: '142', pidx: '141', nidx: '143', title: '怎么样', label: 'zěnmeyàng', desc: 'in che modo; come va' },
{ idx: '143', pidx: '142', nidx: '144', title: '这', label: 'zhè', desc: 'questo' },
{ idx: '144', pidx: '143', nidx: '145', title: '这儿', label: 'zhèr', desc: 'qui' },
{ idx: '145', pidx: '144', nidx: '146', title: '中国', label: 'Zhōngguó', desc: 'Cina' },
{ idx: '146', pidx: '145', nidx: '147', title: '中午', label: 'zhōngwǔ', desc: 'mezzogiorno' },
{ idx: '147', pidx: '146', nidx: '148', title: '住', label: 'zhù', desc: 'vivere; abitare; stare; resiedere' },
{ idx: '148', pidx: '147', nidx: '149', title: '桌子', label: 'zhuōzi', desc: 'tavolo; scrivania' },
{ idx: '149', pidx: '148', nidx: '150', title: '字', label: 'zì', desc: 'lettera; carattere; parola' },
{ idx: '150', pidx: '149', nidx: '151', title: '昨天', label: 'zuótiān', desc: 'ieri' },
{ idx: '151', pidx: '150', nidx: '152', title: '坐', label: 'zuò', desc: 'sedersi; prendere (un mezzo)' },
{ idx: '152', pidx: '151', nidx: '153', title: '做', label: 'zuò', desc: 'fare; produrre; scrivere; comporre; diventare' },
{ idx: '153', pidx: '152', nidx: '154', title: '吧', label: 'ba', desc: 'particella modale, utilizzata a fine frase per chiedere una conferma o esprimere una esortazione' },
{ idx: '154', pidx: '153', nidx: '155', title: '白', label: 'bái', desc: 'bianco, luminoso' },
{ idx: '155', pidx: '154', nidx: '156', title: '百', label: 'bǎi', desc: 'cento; 100' },
{ idx: '156', pidx: '155', nidx: '157', title: '帮助', label: 'bāngzhù', desc: 'aiutare, assistere; aiuto' },
{ idx: '157', pidx: '156', nidx: '158', title: '报纸', label: 'bàozhǐ', desc: 'quotidiano; giornale' },
{ idx: '158', pidx: '157', nidx: '159', title: '比', label: 'bǐ', desc: 'confrontare; in confronto a' },
{ idx: '159', pidx: '158', nidx: '160', title: '别', label: 'bié', desc: 'lasciare; partire; non devi' },
{ idx: '160', pidx: '159', nidx: '161', title: '长', label: 'cháng', desc: 'lungo; lunghezza' },
{ idx: '161', pidx: '160', nidx: '162', title: '唱歌', label: 'chàngge', desc: 'cantare' },
{ idx: '162', pidx: '161', nidx: '163', title: '出', label: 'chū', desc: 'uscire; andare oltre; cl. per opere teatrali' },
{ idx: '163', pidx: '162', nidx: '164', title: '穿', label: 'chuān', desc: 'indossare' },
{ idx: '164', pidx: '163', nidx: '165', title: '船', label: 'chuán', desc: 'barca; nave' },
{ idx: '165', pidx: '164', nidx: '166', title: '次', label: 'cì', desc: 'volta' },
{ idx: '166', pidx: '165', nidx: '167', title: '从', label: 'cóng', desc: 'da; proviene da' },
{ idx: '167', pidx: '166', nidx: '168', title: '错', label: 'cuò', desc: 'sbagliato' },
{ idx: '168', pidx: '167', nidx: '169', title: '打篮球', label: 'dǎlánqiú', desc: 'pallacanestro' },
{ idx: '169', pidx: '168', nidx: '170', title: '大家', label: 'dàjiā', desc: 'tutti' },
{ idx: '170', pidx: '169', nidx: '171', title: '但是', label: 'dànshì', desc: 'ma; però' },
{ idx: '171', pidx: '170', nidx: '172', title: '到', label: 'dào', desc: 'a; arrivare a' },
{ idx: '172', pidx: '171', nidx: '173', title: '得', label: 'de', desc: 'particella' },
{ idx: '173', pidx: '172', nidx: '174', title: '等', label: 'děng', desc: 'aspettare' },
{ idx: '174', pidx: '173', nidx: '175', title: '等等', label: 'dìdi', desc: 'fratello minore' },
{ idx: '175', pidx: '174', nidx: '176', title: '弟弟', label: 'dìyī', desc: 'il primo' },
{ idx: '176', pidx: '175', nidx: '177', title: '懂', label: 'dǒng', desc: 'capire' },
{ idx: '177', pidx: '176', nidx: '178', title: '房间', label: 'fángjiān', desc: 'stanza' },
{ idx: '178', pidx: '177', nidx: '179', title: '非常', label: 'fēicháng', desc: 'molto' },
{ idx: '179', pidx: '178', nidx: '180', title: '服务员', label: 'fúwùyuán', desc: 'commesso' },
{ idx: '180', pidx: '179', nidx: '181', title: '高', label: 'gāo', desc: 'alto' },
{ idx: '181', pidx: '180', nidx: '182', title: '告诉', label: 'gàosu', desc: 'dire; raccontare' },
{ idx: '182', pidx: '181', nidx: '183', title: '哥哥', label: 'gēge', desc: 'fratello maggiore' },
{ idx: '183', pidx: '182', nidx: '184', title: '给', label: 'gěi', desc: 'dare; a' },
{ idx: '184', pidx: '183', nidx: '185', title: '公共汽车', label: 'gōnggòngqìchē', desc: 'autobus' },
{ idx: '185', pidx: '184', nidx: '186', title: '公斤', label: 'gōngjīn', desc: 'kg' },
{ idx: '186', pidx: '185', nidx: '187', title: '公司', label: 'gōngsī', desc: 'compagnia' },
{ idx: '187', pidx: '186', nidx: '188', title: '贵', label: 'guì', desc: 'costoso' },
{ idx: '188', pidx: '187', nidx: '189', title: '过', label: 'guo', desc: 'passato' },
{ idx: '189', pidx: '188', nidx: '190', title: '还', label: 'hái', desc: 'anche' },
{ idx: '190', pidx: '189', nidx: '191', title: '孩子', label: 'háizi', desc: 'bambino' },
{ idx: '191', pidx: '190', nidx: '192', title: '好吃', label: 'hǎochī', desc: 'buono da mangiare' },
{ idx: '192', pidx: '191', nidx: '193', title: '号', label: 'hào', desc: 'numero' },
{ idx: '193', pidx: '192', nidx: '194', title: '黑', label: 'hēi', desc: 'nero' },
{ idx: '194', pidx: '193', nidx: '195', title: '红', label: 'hóng', desc: 'rosso' },
{ idx: '195', pidx: '194', nidx: '196', title: '欢迎', label: 'huānyíng', desc: 'dare il benvenuto' },
{ idx: '196', pidx: '195', nidx: '197', title: '回答', label: 'huídá', desc: 'rispondere' },
{ idx: '197', pidx: '196', nidx: '198', title: '机场', label: 'jīchǎng', desc: 'aereoporto' },
{ idx: '198', pidx: '197', nidx: '199', title: '鸡蛋', label: 'jīdàn', desc: 'uovo' },
{ idx: '199', pidx: '198', nidx: '200', title: '件', label: 'jiàn', desc: 'class. per pezzo' },
{ idx: '200', pidx: '199', nidx: '201', title: '教室', label: 'jiàoshì', desc: 'classe di scuola' },
{ idx: '201', pidx: '200', nidx: '202', title: '姐姐', label: 'jiějie', desc: 'sorella maggiore' },
{ idx: '202', pidx: '201', nidx: '203', title: '介绍', label: 'jièshào', desc: 'presentare; presentarsi' },
{ idx: '203', pidx: '202', nidx: '204', title: '进', label: 'jìn', desc: 'entrare' },
{ idx: '204', pidx: '203', nidx: '205', title: '近', label: 'jìn', desc: 'vicino' },
{ idx: '205', pidx: '204', nidx: '206', title: '就', label: 'jiù', desc: 'e quindi' },
{ idx: '206', pidx: '205', nidx: '207', title: '觉得', label: 'juéde', desc: 'pensare' },
{ idx: '207', pidx: '206', nidx: '208', title: '咖啡', label: 'kāfēi', desc: 'caffè' },
{ idx: '208', pidx: '207', nidx: '209', title: '开始', label: 'kāishǐ', desc: 'iniziare' },
{ idx: '209', pidx: '208', nidx: '210', title: '考试', label: 'kǎoshì', desc: 'esame' },
{ idx: '210', pidx: '209', nidx: '211', title: '可能', label: 'kěnéng', desc: 'forse' },
{ idx: '211', pidx: '210', nidx: '212', title: '可以', label: 'kěyǐ', desc: 'potere' },
{ idx: '212', pidx: '211', nidx: '213', title: '课', label: 'kè', desc: 'lezione' },
{ idx: '213', pidx: '212', nidx: '214', title: '快', label: 'kuài', desc: 'veloce' },
{ idx: '214', pidx: '213', nidx: '215', title: '快乐', label: 'kuàilè', desc: 'felice' },
{ idx: '215', pidx: '214', nidx: '216', title: '累', label: 'lèi', desc: 'stanco' },
{ idx: '216', pidx: '215', nidx: '217', title: '离', label: 'lí', desc: 'da' },
{ idx: '217', pidx: '216', nidx: '218', title: '两', label: 'liǎng', desc: 'due; 2' },
{ idx: '218', pidx: '217', nidx: '219', title: '路', label: 'lù', desc: 'strada' },
{ idx: '219', pidx: '218', nidx: '220', title: '旅游', label: 'lǚyóu', desc: 'viaggiare' },
{ idx: '220', pidx: '219', nidx: '221', title: '卖', label: 'mài', desc: 'vendere' },
{ idx: '221', pidx: '220', nidx: '222', title: '慢', label: 'màn', desc: 'lento' },
{ idx: '222', pidx: '221', nidx: '223', title: '忙', label: 'máng', desc: 'indaffarato' },
{ idx: '223', pidx: '222', nidx: '224', title: '每', label: 'měi', desc: 'ciscuno' },
{ idx: '224', pidx: '223', nidx: '225', title: '妹妹', label: 'mèimei', desc: 'sorella inferiore' },
{ idx: '225', pidx: '224', nidx: '226', title: '门', label: 'mén', desc: 'porta; cancello' },
{ idx: '226', pidx: '225', nidx: '227', title: '男人', label: 'nánrén', desc: 'uomo (maschio)' },
{ idx: '227', pidx: '226', nidx: '228', title: '您', label: 'nín', desc: 'tu (forma di rispetto)' },
{ idx: '228', pidx: '227', nidx: '229', title: '牛奶', label: 'niúnǎi', desc: 'latte' },
{ idx: '229', pidx: '228', nidx: '230', title: '女人', label: 'nǚrén', desc: 'donna' },
{ idx: '230', pidx: '229', nidx: '231', title: '旁边', label: 'pángbiān', desc: 'vicino a' },
{ idx: '231', pidx: '230', nidx: '232', title: '跑步', label: 'pǎobù', desc: 'correre' },
{ idx: '232', pidx: '231', nidx: '233', title: '便宜', label: 'piànyí', desc: 'economico' },
{ idx: '233', pidx: '232', nidx: '234', title: '票', label: 'piào', desc: 'biglietto' },
{ idx: '234', pidx: '233', nidx: '235', title: '妻子', label: 'qīzi', desc: 'moglie' },
{ idx: '235', pidx: '234', nidx: '236', title: '起床', label: 'qǐchuáng', desc: 'alzarsi dal letto' },
{ idx: '236', pidx: '235', nidx: '237', title: '千', label: 'qiān', desc: 'mille; 1000' },
{ idx: '237', pidx: '236', nidx: '238', title: '晴', label: 'qíng', desc: 'chiaro' },
{ idx: '238', pidx: '237', nidx: '239', title: '去年', label: 'qùnián', desc: 'anno scorso' },
{ idx: '239', pidx: '238', nidx: '240', title: '让', label: 'ràng', desc: 'lasciare' },
{ idx: '240', pidx: '239', nidx: '241', title: '上班', label: 'shàngbān', desc: 'andare al lavoro' },
{ idx: '241', pidx: '240', nidx: '242', title: '身体', label: 'shēntǐ', desc: 'corpo' },
{ idx: '242', pidx: '241', nidx: '243', title: '生病', label: 'shēngbìng', desc: 'ammalato' },
{ idx: '243', pidx: '242', nidx: '244', title: '生日', label: 'shēngrì', desc: 'compleanno' },
{ idx: '244', pidx: '243', nidx: '245', title: '时间', label: 'shíjiān', desc: 'tempo' },
{ idx: '245', pidx: '244', nidx: '246', title: '事情', label: 'shìqing', desc: 'cose' },
{ idx: '246', pidx: '245', nidx: '247', title: '手表', label: 'shǒubiǎo', desc: 'guardare' },
{ idx: '247', pidx: '246', nidx: '248', title: '手机', label: 'shǒujī', desc: 'cellulare' },
{ idx: '248', pidx: '247', nidx: '249', title: '送', label: 'sòng', desc: 'mandare' },
{ idx: '249', pidx: '248', nidx: '250', title: '所以', label: 'suǒyǐ', desc: 'così' },
{ idx: '250', pidx: '249', nidx: '251', title: '它', label: 'tā', desc: 'esso' },
{ idx: '251', pidx: '250', nidx: '252', title: '踢足球', label: 'tīzúqiú', desc: 'calcio (lo sport)' },
{ idx: '252', pidx: '251', nidx: '253', title: '题', label: 'tí', desc: 'problema' },
{ idx: '253', pidx: '252', nidx: '254', title: '跳舞', label: 'tiàowǔ', desc: 'danzare' },
{ idx: '254', pidx: '253', nidx: '255', title: '外', label: 'wài', desc: 'fuori' },
{ idx: '255', pidx: '254', nidx: '256', title: '完', label: 'wán', desc: 'dopo' },
{ idx: '256', pidx: '255', nidx: '257', title: '玩', label: 'wán', desc: 'giocare; divertirsi' },
{ idx: '257', pidx: '256', nidx: '258', title: '晚上', label: 'wǎnshang', desc: 'sera' },
{ idx: '258', pidx: '257', nidx: '259', title: '为什么', label: 'wèishénme', desc: 'perché' },
{ idx: '259', pidx: '258', nidx: '260', title: '问', label: 'wèn', desc: 'chiedere' },
{ idx: '260', pidx: '259', nidx: '261', title: '问题', label: 'wèntí', desc: 'problema' },
{ idx: '261', pidx: '260', nidx: '262', title: '西瓜', label: 'xīguā', desc: 'cocomero' },
{ idx: '262', pidx: '261', nidx: '263', title: '希望', label: 'xīwàng', desc: 'sperare' },
{ idx: '263', pidx: '262', nidx: '264', title: '洗', label: 'xǐ', desc: 'lavare' },
{ idx: '264', pidx: '263', nidx: '265', title: '想', label: 'xiǎng', desc: 'pensare' },
{ idx: '265', pidx: '264', nidx: '266', title: '向', label: 'xiàng', desc: 'a' },
{ idx: '266', pidx: '265', nidx: '267', title: '小时', label: 'xiǎoshí', desc: 'ora' },
{ idx: '267', pidx: '266', nidx: '268', title: '笑', label: 'xiào', desc: 'ridere' },
{ idx: '268', pidx: '267', nidx: '269', title: '新', label: 'xīn', desc: 'nuovo' },
{ idx: '269', pidx: '268', nidx: '270', title: '姓', label: 'xìng', desc: 'cognome' },
{ idx: '270', pidx: '269', nidx: '271', title: '休息', label: 'xiūxi', desc: 'riposare' },
{ idx: '271', pidx: '270', nidx: '272', title: '雪', label: 'xuě', desc: 'neve' },
{ idx: '272', pidx: '271', nidx: '273', title: '颜色', label: 'yánsè', desc: 'colore' },
{ idx: '273', pidx: '272', nidx: '274', title: '眼睛', label: 'yǎnjing', desc: 'occhi' },
{ idx: '274', pidx: '273', nidx: '275', title: '羊肉', label: 'yángròu', desc: 'agnello' },
{ idx: '275', pidx: '274', nidx: '276', title: '药', label: 'yào', desc: 'medicina' },
{ idx: '276', pidx: '275', nidx: '277', title: '要', label: 'yào', desc: 'volere' },
{ idx: '277', pidx: '276', nidx: '278', title: '也', label: 'yě', desc: 'anche' },
{ idx: '278', pidx: '277', nidx: '279', title: '已经', label: 'yǐjing', desc: 'già' },
{ idx: '279', pidx: '278', nidx: '280', title: '一起', label: 'yīqǐ', desc: 'con' },
{ idx: '280', pidx: '279', nidx: '281', title: '意思', label: 'yìsi', desc: 'significato' },
{ idx: '281', pidx: '280', nidx: '282', title: '阴', label: 'yīn', desc: 'Yin' },
{ idx: '282', pidx: '281', nidx: '283', title: '因为', label: 'yīnwei', desc: 'perché' },
{ idx: '283', pidx: '282', nidx: '284', title: '游泳', label: 'yóuyǒng', desc: 'nuotare' },
{ idx: '284', pidx: '283', nidx: '285', title: '右边', label: 'yòubian', desc: 'destra' },
{ idx: '285', pidx: '284', nidx: '286', title: '鱼', label: 'yú', desc: 'pesce' },
{ idx: '286', pidx: '285', nidx: '287', title: '元', label: 'yuán', desc: 'valuta; soldi' },
{ idx: '287', pidx: '286', nidx: '288', title: '远', label: 'yuǎn', desc: 'lontano' },
{ idx: '288', pidx: '287', nidx: '289', title: '运动', label: 'yùndòng', desc: 'movimento' },
{ idx: '289', pidx: '288', nidx: '290', title: '再', label: 'zài', desc: 'di nuovo' },
{ idx: '290', pidx: '289', nidx: '291', title: '早上', label: 'zǎoshang', desc: 'mattina' },
{ idx: '291', pidx: '290', nidx: '292', title: '张', label: 'zhāng', desc: 'classificatore per carta' },
{ idx: '292', pidx: '291', nidx: '293', title: '丈夫', label: 'zhàngfū', desc: 'marito' },
{ idx: '293', pidx: '292', nidx: '294', title: '找', label: 'zhǎo', desc: 'trovare' },
{ idx: '294', pidx: '293', nidx: '295', title: '着', label: 'zhe', desc: 'di' },
{ idx: '295', pidx: '294', nidx: '296', title: '真', label: 'zhēn', desc: 'vero' },
{ idx: '296', pidx: '295', nidx: '297', title: '正在', label: 'zhèngzài', desc: 'azione in corso' },
{ idx: '297', pidx: '296', nidx: '298', title: '知道', label: 'zhīdao', desc: 'conoscere' },
{ idx: '298', pidx: '297', nidx: '299', title: '准备', label: 'zhǔnbèi', desc: 'preparare' },
{ idx: '299', pidx: '298', nidx: '300', title: '自行车', label: 'zìxíngchē', desc: 'bicicletta' },
{ idx: '300', pidx: '299', nidx: '301', title: '走', label: 'zǒu', desc: 'andare' },
{ idx: '301', pidx: '300', nidx: '302', title: '最', label: 'zuì', desc: 'il più' },
{ idx: '302', pidx: '301', nidx: '0', title: '左边', label: 'zuǒbiān', desc: 'sinistra' }

      ]; 
      
      return data;
  });
})();
