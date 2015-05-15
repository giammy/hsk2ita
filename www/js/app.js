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

      var pages = $scope.navi.getPages();
      /*
      console.log("pages.length=%i", pages.length);
      console.log("pages = %s", pages);
      */
      
      if (pages.length > 3) {
 	pages[pages.length - 2].destroy();
      }

      $scope.navi.pushPage('detail.html', {title : selectedItem.title});

    };

    $scope.showReplaceRandomDetail = function() {
      var selectedItem = $data.items[Math.floor(Math.random() * 153)];
      $data.selectedItem = selectedItem;
      /* $scope.navi.replacePage('detail.html', {title : selectedItem.title}); */

      var pages = $scope.navi.getPages();      
      if (pages.length > 3) {
 	pages[pages.length - 2].destroy();
      }
      
      $scope.navi.pushPage('detail.html', {title : selectedItem.title});
      /* $scope.navi.resetToPage('detail.html', {title : selectedItem.title}); */
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
{ idx: '0', pidx: '302', nidx: '1', title: '爱', label: 'ài', desc: 'amore; amare; piacere; affetto', image: 'love.jpg' },
{ idx: '1', pidx: '0', nidx: '2', title: '八', label: 'bā', desc: 'otto; 8', image: '8.png' },
{ idx: '2', pidx: '1', nidx: '3', title: '爸爸', label: 'bàba', desc: 'papà (informale)', image: 'dad.png' },
{ idx: '3', pidx: '2', nidx: '4', title: '杯子', label: 'bēizi', desc: 'tazza; coppa; bicchiere', image: 'cup.png' },
{ idx: '4', pidx: '3', nidx: '5', title: '北京', label: 'Běijīng', desc: 'Pechino; Beijing', image: 'beijing.jpg' },
{ idx: '5', pidx: '4', nidx: '6', title: '本', label: 'běn', desc: '[cl per libri, periodici, file]; radice di una pianta; origine; base', image: 'clbook.jpeg' },
{ idx: '6', pidx: '5', nidx: '7', title: '不客气', label: 'bùkèqi', desc: 'prego; brusco; rude', image: 'youarewelcome.jpeg' },
{ idx: '7', pidx: '6', nidx: '8', title: '不', label: 'bù', desc: 'no (usato prima di verbi); non (usato prima di nomi; aggettivi)', image: 'not.png' },
{ idx: '8', pidx: '7', nidx: '9', title: '菜', label: 'cài', desc: 'cibo; verdura', image: 'vegetables.png' },
{ idx: '9', pidx: '8', nidx: '10', title: '茶', label: 'chá', desc: 'the; pianta del the', image: 'tea.jpg' },
{ idx: '10', pidx: '9', nidx: '11', title: '吃', label: 'chī', desc: 'mangiare; pranzare; cancellare; distruggere; assorbire', image: 'eat.png' },
{ idx: '11', pidx: '10', nidx: '12', title: '出租车', label: 'chūzūchē', desc: 'taxi', image: 'taxi.jpg' },
{ idx: '12', pidx: '11', nidx: '13', title: '打电话', label: 'dǎdiànhuà', desc: 'telefonare; fare una telefonata', image: 'phone.png' },
{ idx: '13', pidx: '12', nidx: '14', title: '大', label: 'dà', desc: 'grande; enorme; largo; ampio', image: 'large.png' },
{ idx: '14', pidx: '13', nidx: '15', title: '的', label: 'de', desc: 'di; particella strutturale, collega nome e attributo descrittivo o possessivo', image: 'of.jpg' },
{ idx: '15', pidx: '14', nidx: '16', title: '点', label: 'diǎn', desc: 'punto; goccia; uno dei tratti dei caratteri cinesi; un poco; classificatore per piccole quantità indeterminate', image: 'blank-image.png' },
{ idx: '16', pidx: '15', nidx: '17', title: '电脑', label: 'diànnǎo', desc: 'computer', image: 'computer.jpg' },
{ idx: '17', pidx: '16', nidx: '18', title: '电视', label: 'diànshì', desc: 'TV; televisione', image: 'tv.jpg' },
{ idx: '18', pidx: '17', nidx: '19', title: '电影', label: 'diànyǐng', desc: 'film', image: 'film.jpg' },
{ idx: '19', pidx: '18', nidx: '20', title: '东西', label: 'dōngxi', desc: 'cosa in generale', image: 'things.jpg' },
{ idx: '20', pidx: '19', nidx: '21', title: '都', label: 'dōu', desc: 'tutti; entrambi; del tutto', image: 'blank-image.png' },
{ idx: '21', pidx: '20', nidx: '22', title: '读', label: 'dú', desc: 'leggere; studiare; leggere parole', image: 'read.jpg' },
{ idx: '22', pidx: '21', nidx: '23', title: '对不起', label: 'duìbuqǐ', desc: 'mi spiace; scusami; per favore', image: 'blank-image.png' },
{ idx: '23', pidx: '22', nidx: '24', title: '多', label: 'duō', desc: 'molto; tanti; numerosi', image: 'blank-image.png' },
{ idx: '24', pidx: '23', nidx: '25', title: '多少', label: 'duōshao', desc: 'quanto; numero; quantità', image: 'blank-image.png' },
{ idx: '25', pidx: '24', nidx: '26', title: '儿子', label: 'érzi', desc: 'figlio', image: 'son.png' },
{ idx: '26', pidx: '25', nidx: '27', title: '二', label: 'èr', desc: 'due; 2', image: 'two.png' },
{ idx: '27', pidx: '26', nidx: '28', title: '饭馆', label: 'fànguǎn', desc: 'ristorante', image: 'restaurant.jpg' },
{ idx: '28', pidx: '27', nidx: '29', title: '飞机', label: 'fēijī', desc: 'aereo', image: 'aircraft.png' },
{ idx: '29', pidx: '28', nidx: '30', title: '分钟', label: 'fēnzhōng', desc: 'minuto', image: 'minutes.jpg' },
{ idx: '30', pidx: '29', nidx: '31', title: '高兴', label: 'gāoxìng', desc: 'felice; allegro', image: 'happy.png' },
{ idx: '31', pidx: '30', nidx: '32', title: '个', label: 'gè', desc: '[classificatore generico]; individuo; questo', image: 'blank-image.png' },
{ idx: '32', pidx: '31', nidx: '33', title: '工作', label: 'gōngzuò', desc: 'lavoro; costruzione; compito', image: 'work.jpg' },
{ idx: '33', pidx: '32', nidx: '34', title: '狗', label: 'gǒu', desc: 'cane', image: 'dog.jpg' },
{ idx: '34', pidx: '33', nidx: '35', title: '汉语', label: 'Hànyǔ', desc: 'la lingua Cinese', image: 'china.png' },
{ idx: '35', pidx: '34', nidx: '36', title: '好', label: 'hǎo', desc: 'bene; buono; proprio; indica completamento', image: 'good.jpg' },
{ idx: '36', pidx: '35', nidx: '37', title: '喝', label: 'hē', desc: 'bere; gridare un comando', image: 'drink.jpg' },
{ idx: '37', pidx: '36', nidx: '38', title: '和', label: 'hé', desc: 'e; assieme con; con; unione', image: 'blank-image.png' },
{ idx: '38', pidx: '37', nidx: '39', title: '很', label: 'hěn', desc: 'molto; parecchio', image: 'blank-image.png' },
{ idx: '39', pidx: '38', nidx: '40', title: '后面', label: 'hòumiàn', desc: 'dietro; dopo; più tardi', image: 'back.jpg' },
{ idx: '40', pidx: '39', nidx: '41', title: '回', label: 'huí', desc: 'ritornare; rispondere; [classificatore per atti di commedie]', image: 'goback.jpg' },
{ idx: '41', pidx: '40', nidx: '42', title: '会', label: 'huì', desc: 'potere; esser possibile; essere in grado di', image: 'blank-image.png' },
{ idx: '42', pidx: '41', nidx: '43', title: '火车站', label: 'huǒchēzhàn', desc: 'stazione ferroviaria', image: 'station.jpg' },
{ idx: '43', pidx: '42', nidx: '44', title: '几', label: 'jǐ', desc: 'alcuni; quanti?', image: 'blank-image.png' },
{ idx: '44', pidx: '43', nidx: '45', title: '家', label: 'jiā', desc: 'casa; famiglia; [classificatore per aziende]', image: 'home.png' },
{ idx: '45', pidx: '44', nidx: '46', title: '叫', label: 'jiào', desc: 'chiamare; chiamarsi; chiedere', image: 'blank-image.png' },
{ idx: '46', pidx: '45', nidx: '47', title: '今天', label: 'jīntiān', desc: 'oggi; ora; al momento', image: 'blank-image.png' },
{ idx: '47', pidx: '46', nidx: '48', title: '九', label: 'jiǔ', desc: 'nove; 9', image: 'nine.png' },
{ idx: '48', pidx: '47', nidx: '49', title: '开', label: 'kāi', desc: 'aprire; iniziare; accendere;', image: 'open.png' },
{ idx: '49', pidx: '48', nidx: '50', title: '看', label: 'kàn', desc: 'vedere; guardare; leggere (in silenzio); pensare', image: 'see.png' },
{ idx: '50', pidx: '49', nidx: '51', title: '看见', label: 'kànjiàn', desc: 'vedere; dare una occhiata', image: 'see.png' },
{ idx: '51', pidx: '50', nidx: '52', title: '块', label: 'kuài', desc: 'pezzo; blocco; [classificatore per articoli di vestiario; pezzi di torta]', image: 'blank-image.png' },
{ idx: '52', pidx: '51', nidx: '53', title: '来', label: 'lái', desc: 'venire; arrivare', image: 'blank-image.png' },
{ idx: '53', pidx: '52', nidx: '54', title: '老师', label: 'lǎoshī', desc: 'maestro; insegnante', image: 'teacher.jpg' },
{ idx: '54', pidx: '53', nidx: '55', title: '了', label: 'le', desc: '[particella modale]; [indicatore di azione completata]', image: 'blank-image.png' },
{ idx: '55', pidx: '54', nidx: '56', title: '冷', label: 'lěng', desc: 'freddo', image: 'cold.jpg' },
{ idx: '56', pidx: '55', nidx: '57', title: '里', label: 'lǐ', desc: 'in; dentro; interno', image: 'blank-image.png' },
{ idx: '57', pidx: '56', nidx: '58', title: '零', label: 'líng', desc: 'zero; 0;', image: 'zero.png' },
{ idx: '58', pidx: '57', nidx: '59', title: '六', label: 'liù', desc: 'sei; 6', image: 'six.png' },
{ idx: '59', pidx: '58', nidx: '60', title: '妈妈', label: 'māma', desc: 'mamma', image: 'mother.jpg' },
{ idx: '60', pidx: '59', nidx: '61', title: '吗', label: 'ma', desc: '[particella interrogativa]', image: 'blank-image.png' },
{ idx: '61', pidx: '60', nidx: '62', title: '买', label: 'mǎi', desc: 'comprare; acquistare', image: 'buy.jpg' },
{ idx: '62', pidx: '61', nidx: '63', title: '猫', label: 'māo', desc: 'gatto', image: 'cat.jpg' },
{ idx: '63', pidx: '62', nidx: '64', title: '没', label: 'méi', desc: 'non; [prefisso negativo per verbi]', image: 'blank-image.png' },
{ idx: '64', pidx: '63', nidx: '65', title: '没关系', label: 'méiguānxi', desc: 'non importa', image: 'blank-image.png' },
{ idx: '65', pidx: '64', nidx: '66', title: '米饭', label: 'mǐfàn', desc: 'riso (bollito)', image: 'rice.jpg' },
{ idx: '66', pidx: '65', nidx: '67', title: '明天', label: 'míngtiān', desc: 'domani', image: 'blank-image.png' },
{ idx: '67', pidx: '66', nidx: '68', title: '名字', label: 'míngzi', desc: 'nome (di persona o cosa)', image: 'blank-image.png' },
{ idx: '68', pidx: '67', nidx: '69', title: '哪', label: 'nǎ', desc: 'quale? come?', image: 'blank-image.png' },
{ idx: '69', pidx: '68', nidx: '70', title: '哪儿', label: 'nǎr', desc: 'dove?', image: 'blank-image.png' },
{ idx: '70', pidx: '69', nidx: '71', title: '那', label: 'nà', desc: 'quello; allora; in quel caso', image: 'blank-image.png' },
{ idx: '71', pidx: '70', nidx: '72', title: '那儿', label: 'nàr', desc: 'lì', image: 'blank-image.png' },
{ idx: '72', pidx: '71', nidx: '73', title: '呢', label: 'ne', desc: '[particella interrogativa]', image: 'blank-image.png' },
{ idx: '73', pidx: '72', nidx: '74', title: '能', label: 'néng', desc: 'potere; essere capace di; abilità; capacità; aver la possibilità di', image: 'blank-image.png' },
{ idx: '74', pidx: '73', nidx: '75', title: '你', label: 'nǐ', desc: 'tu (informale)', image: 'blank-image.png' },
{ idx: '75', pidx: '74', nidx: '76', title: '年', label: 'nián', desc: 'anno', image: 'blank-image.png' },
{ idx: '76', pidx: '75', nidx: '77', title: '女儿', label: 'nǚ ér', desc: 'figlia', image: 'daughter.jpg' },
{ idx: '77', pidx: '76', nidx: '78', title: '朋友', label: 'péngyou', desc: 'amico', image: 'friend.jpg' },
{ idx: '78', pidx: '77', nidx: '79', title: '漂亮', label: 'piàoliang', desc: 'bella; carina', image: 'beautiful.jpg' },
{ idx: '79', pidx: '78', nidx: '80', title: '苹果', label: 'píngguǒ', desc: 'mela', image: 'apple.jpg' },
{ idx: '80', pidx: '79', nidx: '81', title: '七', label: 'qī', desc: 'sette; 7', image: 'seven.png' },
{ idx: '81', pidx: '80', nidx: '82', title: '钱', label: 'qián', desc: 'soldi; moneta', image: 'money.jpg' },
{ idx: '82', pidx: '81', nidx: '83', title: '前面', label: 'qiánmiàn', desc: 'davanti; di fronte; che precede', image: 'blank-image.png' },
{ idx: '83', pidx: '82', nidx: '84', title: '请', label: 'qǐng', desc: 'chiedere; invitare; prego', image: 'blank-image.png' },
{ idx: '84', pidx: '83', nidx: '85', title: '去', label: 'qù', desc: 'andare', image: 'blank-image.png' },
{ idx: '85', pidx: '84', nidx: '86', title: '热', label: 'rè', desc: 'caldo; scaldare', image: 'hot.png' },
{ idx: '86', pidx: '85', nidx: '87', title: '人', label: 'rén', desc: 'persona; uomo; gente', image: 'people.jpg' },
{ idx: '87', pidx: '86', nidx: '88', title: '认识', label: 'rènshi', desc: 'capire; sapere; riconoscere; essere familiari con', image: 'blank-image.png' },
{ idx: '88', pidx: '87', nidx: '89', title: '日', label: 'rì', desc: 'sole; giorno; data; giorno del mese', image: 'sun.png' },
{ idx: '89', pidx: '88', nidx: '90', title: '三', label: 'sān', desc: 'tre; 3', image: 'three.png' },
{ idx: '90', pidx: '89', nidx: '91', title: '商店', label: 'shāngdiàn', desc: 'negozio', image: 'store.jpg' },
{ idx: '91', pidx: '90', nidx: '92', title: '上', label: 'shàng', desc: 'sopra', image: 'on.jpg' },
{ idx: '92', pidx: '91', nidx: '93', title: '上午', label: 'shàngwǔ', desc: 'mattino', image: 'morning.jpg' },
{ idx: '93', pidx: '92', nidx: '94', title: '少', label: 'shǎo', desc: 'poco; alcuni', image: 'blank-image.png' },
{ idx: '94', pidx: '93', nidx: '95', title: '谁', label: 'shéi', desc: 'chi?', image: 'blank-image.png' },
{ idx: '95', pidx: '94', nidx: '96', title: '什么', label: 'shénme', desc: 'qualcosa; cosa?', image: 'blank-image.png' },
{ idx: '96', pidx: '95', nidx: '97', title: '十', label: 'shí', desc: 'dieci; 10', image: 'ten.png' },
{ idx: '97', pidx: '96', nidx: '98', title: '时候', label: 'shíhou', desc: 'tempo; periodo; intervallo di tempo', image: 'time.jpg' },
{ idx: '98', pidx: '97', nidx: '99', title: '是', label: 'shì', desc: 'essere; si', image: 'blank-image.png' },
{ idx: '99', pidx: '98', nidx: '100', title: '书', label: 'shū', desc: 'libro; lettera', image: 'book.jpg' },
{ idx: '100', pidx: '99', nidx: '101', title: '水', label: 'shuǐ', desc: 'acqua; fiume; liquido', image: 'water.jpg' },
{ idx: '101', pidx: '100', nidx: '102', title: '水果', label: 'shuǐguǒ', desc: 'frutta', image: 'fruit.png' },
{ idx: '102', pidx: '101', nidx: '103', title: '睡觉', label: 'shuìjiào', desc: 'andare a letto; dormire', image: 'sleep.png' },
{ idx: '103', pidx: '102', nidx: '104', title: '说话', label: 'shuōhuà', desc: 'parlare; dire; raccontare storie', image: 'speak.jpg' },
{ idx: '104', pidx: '103', nidx: '105', title: '四', label: 'sì', desc: 'quattro; 4', image: 'four.png' },
{ idx: '105', pidx: '104', nidx: '106', title: '岁', label: 'suì', desc: 'anno; [class.per anno]', image: 'blank-image.png' },
{ idx: '106', pidx: '105', nidx: '107', title: '他', label: 'tā', desc: 'egli', image: 'he.jpg' },
{ idx: '107', pidx: '106', nidx: '108', title: '她', label: 'tā', desc: 'ella', image: 'blank-image.png' },
{ idx: '108', pidx: '107', nidx: '109', title: '太', label: 'tài', desc: 'troppo; molto; estremamente', image: 'blank-image.png' },
{ idx: '109', pidx: '108', nidx: '110', title: '天气', label: 'tiānqì', desc: 'tempo atmosferico', image: 'weather.jpg' },
{ idx: '110', pidx: '109', nidx: '111', title: '听', label: 'tīng', desc: 'ascoltare; sentire; obbedire', image: 'blank-image.png' },
{ idx: '111', pidx: '110', nidx: '112', title: '同学', label: 'tóngxué', desc: 'compagno di classe', image: 'classmate.jpg' },
{ idx: '112', pidx: '111', nidx: '113', title: '喂', label: 'wèi', desc: 'pronto (al telefono)', image: 'blank-image.png' },
{ idx: '113', pidx: '112', nidx: '114', title: '我', label: 'wǒ', desc: 'io', image: 'i.jpg' },
{ idx: '114', pidx: '113', nidx: '115', title: '我们', label: 'wǒmen', desc: 'noi', image: 'we.jpg' },
{ idx: '115', pidx: '114', nidx: '116', title: '五', label: 'wǔ', desc: 'cinque, 5', image: 'five.png' },
{ idx: '116', pidx: '115', nidx: '117', title: '喜欢', label: 'xǐhuan', desc: 'piacere', image: 'blank-image.png' },
{ idx: '117', pidx: '116', nidx: '118', title: '下', label: 'xià', desc: 'sotto; basso; dopo', image: 'under.png' },
{ idx: '118', pidx: '117', nidx: '119', title: '下午', label: 'xiàwǔ', desc: 'pomeriggio', image: 'afternoon.jpg' },
{ idx: '119', pidx: '118', nidx: '120', title: '下雨', label: 'xiàyǔ', desc: 'piovere; piovoso', image: 'rain.png' },
{ idx: '120', pidx: '119', nidx: '121', title: '先生', label: 'xiānsheng', desc: 'signore; maestro; marito', image: 'blank-image.png' },
{ idx: '121', pidx: '120', nidx: '122', title: '现在', label: 'xiànzài', desc: 'ora; adesso; al momento', image: 'now.jpg' },
{ idx: '122', pidx: '121', nidx: '123', title: '想', label: 'xiǎng', desc: 'pensare; credere; supporre', image: 'think.jpg' },
{ idx: '123', pidx: '122', nidx: '124', title: '小', label: 'xiǎo', desc: 'piccolo; giovane', image: 'blank-image.png' },
{ idx: '124', pidx: '123', nidx: '125', title: '小姐', label: 'xiǎojiě', desc: 'giovane signora; signorina', image: 'blank-image.png' },
{ idx: '125', pidx: '124', nidx: '126', title: '些', label: 'xiē', desc: 'alcuni', image: 'blank-image.png' },
{ idx: '126', pidx: '125', nidx: '127', title: '写', label: 'xiě', desc: 'scrivere', image: 'write.jpg' },
{ idx: '127', pidx: '126', nidx: '128', title: '谢谢', label: 'xièxie', desc: 'grazie; ringraziare', image: 'blank-image.png' },
{ idx: '128', pidx: '127', nidx: '129', title: '星期', label: 'xīngqī', desc: 'settimana', image: 'blank-image.png' },
{ idx: '129', pidx: '128', nidx: '130', title: '学生', label: 'xuésheng', desc: 'studente; scolaro', image: 'student.jpg' },
{ idx: '130', pidx: '129', nidx: '131', title: '学习', label: 'xuéxí', desc: 'studiare; imparare', image: 'blank-image.png' },
{ idx: '131', pidx: '130', nidx: '132', title: '学校', label: 'xuéxiào', desc: 'scuola', image: 'school.jpg' },
{ idx: '132', pidx: '131', nidx: '133', title: '一', label: 'yī', desc: 'uno; 1; singolo', image: 'one.png' },
{ idx: '133', pidx: '132', nidx: '134', title: '衣服', label: 'yīfu', desc: 'vestito', image: 'clothes.jpg' },
{ idx: '134', pidx: '133', nidx: '135', title: '医生', label: 'yīshēng', desc: 'dottore', image: 'doctor.jpg' },
{ idx: '135', pidx: '134', nidx: '136', title: '医院', label: 'yīyuàn', desc: 'ospedale', image: 'hospital.jpg' },
{ idx: '136', pidx: '135', nidx: '137', title: '椅子', label: 'yǐzi', desc: 'sedia', image: 'chair.jpg' },
{ idx: '137', pidx: '136', nidx: '138', title: '有', label: 'yǒu', desc: 'avere; esserci; esistere', image: 'blank-image.png' },
{ idx: '138', pidx: '137', nidx: '139', title: '月', label: 'yuè', desc: 'mese; luna', image: 'month.jpg' },
{ idx: '139', pidx: '138', nidx: '140', title: '在', label: 'zài', desc: 'in; esistere; [indica azione in corso]', image: 'blank-image.png' },
{ idx: '140', pidx: '139', nidx: '141', title: '再见', label: 'zàijiàn', desc: 'arrivederci; ci vediamo', image: 'blank-image.png' },
{ idx: '141', pidx: '140', nidx: '142', title: '怎么', label: 'zěnme', desc: 'come; cosa; perché', image: 'blank-image.png' },
{ idx: '142', pidx: '141', nidx: '143', title: '怎么样', label: 'zěnmeyàng', desc: 'in che modo; come va', image: 'blank-image.png' },
{ idx: '143', pidx: '142', nidx: '144', title: '这', label: 'zhè', desc: 'questo', image: 'blank-image.png' },
{ idx: '144', pidx: '143', nidx: '145', title: '这儿', label: 'zhèr', desc: 'qui', image: 'blank-image.png' },
{ idx: '145', pidx: '144', nidx: '146', title: '中国', label: 'Zhōngguó', desc: 'Cina', image: 'china.png' },
{ idx: '146', pidx: '145', nidx: '147', title: '中午', label: 'zhōngwǔ', desc: 'mezzogiorno', image: 'noon.png' },
{ idx: '147', pidx: '146', nidx: '148', title: '住', label: 'zhù', desc: 'vivere; abitare; stare; resiedere', image: 'blank-image.png' },
{ idx: '148', pidx: '147', nidx: '149', title: '桌子', label: 'zhuōzi', desc: 'tavolo; scrivania', image: 'table.jpg' },
{ idx: '149', pidx: '148', nidx: '150', title: '字', label: 'zì', desc: 'lettera; carattere; parola', image: 'word.png' },
{ idx: '150', pidx: '149', nidx: '151', title: '昨天', label: 'zuótiān', desc: 'ieri', image: 'blank-image.png' },
{ idx: '151', pidx: '150', nidx: '152', title: '坐', label: 'zuò', desc: 'sedersi; prendere (un mezzo)', image: 'sit.png' },
{ idx: '152', pidx: '151', nidx: '153', title: '做', label: 'zuò', desc: 'fare; produrre; scrivere; comporre; diventare', image: 'work.jpg' },
{ idx: '153', pidx: '152', nidx: '154', title: '吧', label: 'ba', desc: 'particella modale, utilizzata a fine frase per chiedere una conferma o esprimere una esortazione', image: 'blank-image.png' },
{ idx: '154', pidx: '153', nidx: '155', title: '白', label: 'bái', desc: 'bianco, luminoso', image: 'zzwhitesnowy.jpg' },
{ idx: '155', pidx: '154', nidx: '156', title: '百', label: 'bǎi', desc: 'cento; 100', image: 'zz100.jpg' },
{ idx: '156', pidx: '155', nidx: '157', title: '帮助', label: 'bāngzhù', desc: 'aiutare, assistere; aiuto', image: 'zztohelptoassistaidassistance.jpg' },
{ idx: '157', pidx: '156', nidx: '158', title: '报纸', label: 'bàozhǐ', desc: 'quotidiano; giornale', image: 'zznewspaperjournal.jpg' },
{ idx: '158', pidx: '157', nidx: '159', title: '比', label: 'bǐ', desc: 'confrontare; in confronto a', image: 'zzcompareincomparisonto.jpg' },
{ idx: '159', pidx: '158', nidx: '160', title: '别', label: 'bié', desc: 'lasciare; partire; non devi', image: 'zztoleavenotother.jpg' },
{ idx: '160', pidx: '159', nidx: '161', title: '长', label: 'cháng', desc: 'lungo; lunghezza', image: 'zzlonglength.jpg' },
{ idx: '161', pidx: '160', nidx: '162', title: '唱歌', label: 'chàngge', desc: 'cantare', image: 'zzsing.jpg' },
{ idx: '162', pidx: '161', nidx: '163', title: '出', label: 'chū', desc: 'uscire; andare oltre; cl. per opere teatrali', image: 'zzexit.jpg' },
{ idx: '163', pidx: '162', nidx: '164', title: '穿', label: 'chuān', desc: 'indossare', image: 'zztoweartodress.jpg' },
{ idx: '164', pidx: '163', nidx: '165', title: '船', label: 'chuán', desc: 'barca; nave', image: 'zzship.jpg' },
{ idx: '165', pidx: '164', nidx: '166', title: '次', label: 'cì', desc: 'volta', image: 'zztimes.jpg' },
{ idx: '166', pidx: '165', nidx: '167', title: '从', label: 'cóng', desc: 'da; proviene da', image: 'zzfrom.jpg' },
{ idx: '167', pidx: '166', nidx: '168', title: '错', label: 'cuò', desc: 'sbagliato; complesso; colpa', image: 'zzwrong.jpg' },
{ idx: '168', pidx: '167', nidx: '169', title: '打篮球', label: 'dǎlánqiú', desc: 'pallacanestro', image: 'zzbasketball.jpg' },
{ idx: '169', pidx: '168', nidx: '170', title: '大家', label: 'dàjiā', desc: 'maestro; tutti', image: 'zzeveryone.jpg' },
{ idx: '170', pidx: '169', nidx: '171', title: '但是', label: 'dànshì', desc: 'ma; però', image: 'zzbut.jpg' },
{ idx: '171', pidx: '170', nidx: '172', title: '到', label: 'dào', desc: 'a; arrivare a', image: 'zzto.jpg' },
{ idx: '172', pidx: '171', nidx: '173', title: '得', label: 'de', desc: 'particella', image: 'zzpart.jpg' },
{ idx: '173', pidx: '172', nidx: '174', title: '等', label: 'děng', desc: 'grado; tipo; aspettare', image: 'zztowait.jpg' },
{ idx: '174', pidx: '173', nidx: '175', title: '等等', label: 'dìdi', desc: 'fratello minore', image: 'zzyoungerbrother.jpg' },
{ idx: '175', pidx: '174', nidx: '176', title: '弟一', label: 'dìyī', desc: 'il primo', image: 'zzthefirst.jpg' },
{ idx: '176', pidx: '175', nidx: '177', title: '懂', label: 'dǒng', desc: 'capire; comprendere', image: 'zztounderstand.jpg' },
{ idx: '177', pidx: '176', nidx: '178', title: '房间', label: 'fángjiān', desc: 'stanza', image: 'zzroom.jpg' },
{ idx: '178', pidx: '177', nidx: '179', title: '非常', label: 'fēicháng', desc: 'molto; straordinario; insolito', image: 'zzvery.jpg' },
{ idx: '179', pidx: '178', nidx: '180', title: '服务员', label: 'fúwùyuán', desc: 'commesso; cameriere', image: 'zzattendant.jpg' },
{ idx: '180', pidx: '179', nidx: '181', title: '高', label: 'gāo', desc: 'alto, di persone o cose; di alto livello', image: 'zzhigh.jpg' },
{ idx: '181', pidx: '180', nidx: '182', title: '告诉', label: 'gàosu', desc: 'dire; raccontare; far conoscere', image: 'zztotell.jpg' },
{ idx: '182', pidx: '181', nidx: '183', title: '哥哥', label: 'gēge', desc: 'fratello maggiore', image: 'zzolderbrother.jpg' },
{ idx: '183', pidx: '182', nidx: '184', title: '给', label: 'gěi', desc: 'dare; lasciare', image: 'zztogive.jpg' },
{ idx: '184', pidx: '183', nidx: '185', title: '公共汽车', label: 'gōnggòngqìchē', desc: 'autobus', image: 'bus.jpg' },
{ idx: '185', pidx: '184', nidx: '186', title: '公斤', label: 'gōngjīn', desc: 'kg', image: 'zzkg.jpg' },
{ idx: '186', pidx: '185', nidx: '187', title: '公司', label: 'gōngsī', desc: 'compagnia; azienda', image: 'zzcompany.jpg' },
{ idx: '187', pidx: '186', nidx: '188', title: '贵', label: 'guì', desc: 'costoso; prezioso', image: 'zzexpensive.jpg' },
{ idx: '188', pidx: '187', nidx: '189', title: '过', label: 'guo', desc: 'azione nel passato; attraversare; andare oltre', image: 'zzpast.jpg' },
{ idx: '189', pidx: '188', nidx: '190', title: '还', label: 'hái', desc: 'anche; e inoltre', image: 'zzalso.jpg' },
{ idx: '190', pidx: '189', nidx: '191', title: '孩子', label: 'háizi', desc: 'bambino', image: 'zzchildren.jpg' },
{ idx: '191', pidx: '190', nidx: '192', title: '好吃', label: 'hǎochī', desc: 'buono da mangiare', image: 'zzdelicious.jpg' },
{ idx: '192', pidx: '191', nidx: '193', title: '号', label: 'hào', desc: 'numero', image: 'zznumber.jpg' },
{ idx: '193', pidx: '192', nidx: '194', title: '黑', label: 'hēi', desc: 'nero', image: 'zzblack.jpg' },
{ idx: '194', pidx: '193', nidx: '195', title: '红', label: 'hóng', desc: 'rosso', image: 'zzred.jpg' },
{ idx: '195', pidx: '194', nidx: '196', title: '欢迎', label: 'huānyíng', desc: 'dare il benvenuto; essere ricevuti bene', image: 'zztowelcome.jpg' },
{ idx: '196', pidx: '195', nidx: '197', title: '回答', label: 'huídá', desc: 'rispondere', image: 'zztoanswer.jpg' },
{ idx: '197', pidx: '196', nidx: '198', title: '机场', label: 'jīchǎng', desc: 'aereoporto', image: 'zzairport.jpg' },
{ idx: '198', pidx: '197', nidx: '199', title: '鸡蛋', label: 'jīdàn', desc: 'uovo di gallina', image: 'zzchickensegg.jpg' },
{ idx: '199', pidx: '198', nidx: '200', title: '件', label: 'jiàn', desc: 'class. per pezzo', image: 'zzclpieces.jpg' },
{ idx: '200', pidx: '199', nidx: '201', title: '教室', label: 'jiàoshì', desc: 'classe di scuola', image: 'zzclassroom.jpg' },
{ idx: '201', pidx: '200', nidx: '202', title: '姐姐', label: 'jiějie', desc: 'sorella maggiore', image: 'zzoldersister.jpg' },
{ idx: '202', pidx: '201', nidx: '203', title: '介绍', label: 'jièshào', desc: 'presentare; presentarsi', image: 'zztointroduce.jpg' },
{ idx: '203', pidx: '202', nidx: '204', title: '进', label: 'jìn', desc: 'entrare; ricevere', image: 'zztoenter.jpg' },
{ idx: '204', pidx: '203', nidx: '205', title: '近', label: 'jìn', desc: 'vicino', image: 'zznear.jpg' },
{ idx: '205', pidx: '204', nidx: '206', title: '就', label: 'jiù', desc: 'e quindi', image: 'zzandso.jpg' },
{ idx: '206', pidx: '205', nidx: '207', title: '觉得', label: 'juéde', desc: 'pensare', image: 'zztothink.jpg' },
{ idx: '207', pidx: '206', nidx: '208', title: '咖啡', label: 'kāfēi', desc: 'caffè', image: 'zzcoffee.jpg' },
{ idx: '208', pidx: '207', nidx: '209', title: '开始', label: 'kāishǐ', desc: 'iniziare', image: 'zztostart.jpg' },
{ idx: '209', pidx: '208', nidx: '210', title: '考试', label: 'kǎoshì', desc: 'esame', image: 'zzexamination.jpg' },
{ idx: '210', pidx: '209', nidx: '211', title: '可能', label: 'kěnéng', desc: 'forse', image: 'zzmaybe.jpg' },
{ idx: '211', pidx: '210', nidx: '212', title: '可以', label: 'kěyǐ', desc: 'potere', image: 'zzcan.jpg' },
{ idx: '212', pidx: '211', nidx: '213', title: '课', label: 'kè', desc: 'lezione', image: 'zzclass.jpg' },
{ idx: '213', pidx: '212', nidx: '214', title: '快', label: 'kuài', desc: 'veloce', image: 'zzfast.jpg' },
{ idx: '214', pidx: '213', nidx: '215', title: '快乐', label: 'kuàilè', desc: 'felice', image: 'zzhappy.jpg' },
{ idx: '215', pidx: '214', nidx: '216', title: '累', label: 'lèi', desc: 'stanco', image: 'zztired.jpg' },
{ idx: '216', pidx: '215', nidx: '217', title: '离', label: 'lí', desc: 'da', image: 'zzfrom.jpg' },
{ idx: '217', pidx: '216', nidx: '218', title: '两', label: 'liǎng', desc: 'due; 2', image: 'zz2.jpg' },
{ idx: '218', pidx: '217', nidx: '219', title: '路', label: 'lù', desc: 'strada', image: 'zzroad.jpg' },
{ idx: '219', pidx: '218', nidx: '220', title: '旅游', label: 'lǚyóu', desc: 'viaggiare', image: 'zztravel.jpg' },
{ idx: '220', pidx: '219', nidx: '221', title: '卖', label: 'mài', desc: 'vendere', image: 'zztosell.jpg' },
{ idx: '221', pidx: '220', nidx: '222', title: '慢', label: 'màn', desc: 'lento', image: 'zzslow.jpg' },
{ idx: '222', pidx: '221', nidx: '223', title: '忙', label: 'máng', desc: 'indaffarato', image: 'zzbusy.jpg' },
{ idx: '223', pidx: '222', nidx: '224', title: '每', label: 'měi', desc: 'ciscuno', image: 'zzeach.jpg' },
{ idx: '224', pidx: '223', nidx: '225', title: '妹妹', label: 'mèimei', desc: 'sorella minore', image: 'zzsister.jpg' },
{ idx: '225', pidx: '224', nidx: '226', title: '门', label: 'mén', desc: 'porta; cancello', image: 'zzdoor.jpg' },
{ idx: '226', pidx: '225', nidx: '227', title: '男人', label: 'nánrén', desc: 'uomo (maschio)', image: 'zzmen.jpg' },
{ idx: '227', pidx: '226', nidx: '228', title: '您', label: 'nín', desc: 'tu (forma di rispetto)', image: 'zzyou.jpg' },
{ idx: '228', pidx: '227', nidx: '229', title: '牛奶', label: 'niúnǎi', desc: 'latte', image: 'zzmilk.jpg' },
{ idx: '229', pidx: '228', nidx: '230', title: '女人', label: 'nǚrén', desc: 'donna', image: 'zzwomen.jpg' },
{ idx: '230', pidx: '229', nidx: '231', title: '旁边', label: 'pángbiān', desc: 'vicino a', image: 'zznext.jpg' },
{ idx: '231', pidx: '230', nidx: '232', title: '跑步', label: 'pǎobù', desc: 'correre', image: 'zztorun.jpg' },
{ idx: '232', pidx: '231', nidx: '233', title: '便宜', label: 'piànyí', desc: 'economico', image: 'zzcheap.jpg' },
{ idx: '233', pidx: '232', nidx: '234', title: '票', label: 'piào', desc: 'biglietto', image: 'zzticket.jpg' },
{ idx: '234', pidx: '233', nidx: '235', title: '妻子', label: 'qīzi', desc: 'moglie', image: 'zzwife.jpg' },
{ idx: '235', pidx: '234', nidx: '236', title: '起床', label: 'qǐchuáng', desc: 'alzarsi dal letto', image: 'zztogetup.jpg' },
{ idx: '236', pidx: '235', nidx: '237', title: '千', label: 'qiān', desc: 'mille; 1000', image: 'zz1000.jpg' },
{ idx: '237', pidx: '236', nidx: '238', title: '晴', label: 'qíng', desc: 'chiaro', image: 'zzclear.jpg' },
{ idx: '238', pidx: '237', nidx: '239', title: '去年', label: 'qùnián', desc: 'anno scorso', image: 'zzlastyear.jpg' },
{ idx: '239', pidx: '238', nidx: '240', title: '让', label: 'ràng', desc: 'lasciare', image: 'zzlet.jpg' },
{ idx: '240', pidx: '239', nidx: '241', title: '上班', label: 'shàngbān', desc: 'andare al lavoro', image: 'zztogotoworktobeonduty.jpg' },
{ idx: '241', pidx: '240', nidx: '242', title: '身体', label: 'shēntǐ', desc: 'corpo', image: 'zzbody.jpg' },
{ idx: '242', pidx: '241', nidx: '243', title: '生病', label: 'shēngbìng', desc: 'ammalato', image: 'zzsick.jpg' },
{ idx: '243', pidx: '242', nidx: '244', title: '生日', label: 'shēngrì', desc: 'compleanno', image: 'zzbirthday.jpg' },
{ idx: '244', pidx: '243', nidx: '245', title: '时间', label: 'shíjiān', desc: 'tempo', image: 'zztime.jpg' },
{ idx: '245', pidx: '244', nidx: '246', title: '事情', label: 'shìqing', desc: 'cose', image: 'zzthings.jpg' },
{ idx: '246', pidx: '245', nidx: '247', title: '手表', label: 'shǒubiǎo', desc: 'guardare', image: 'zzwatch.jpg' },
{ idx: '247', pidx: '246', nidx: '248', title: '手机', label: 'shǒujī', desc: 'cellulare', image: 'zzmobile.jpg' },
{ idx: '248', pidx: '247', nidx: '249', title: '送', label: 'sòng', desc: 'mandare', image: 'zztosend.jpg' },
{ idx: '249', pidx: '248', nidx: '250', title: '所以', label: 'suǒyǐ', desc: 'così', image: 'zzso.jpg' },
{ idx: '250', pidx: '249', nidx: '251', title: '它', label: 'tā', desc: 'esso', image: 'zzit.jpg' },
{ idx: '251', pidx: '250', nidx: '252', title: '踢足球', label: 'tīzúqiú', desc: 'calcio (lo sport)', image: 'zzfootball.jpg' },
{ idx: '252', pidx: '251', nidx: '253', title: '题', label: 'tí', desc: 'problema', image: 'zzproblem.jpg' },
{ idx: '253', pidx: '252', nidx: '254', title: '跳舞', label: 'tiàowǔ', desc: 'danzare', image: 'zztodance.jpg' },
{ idx: '254', pidx: '253', nidx: '255', title: '外', label: 'wài', desc: 'fuori', image: 'zzoutside.jpg' },
{ idx: '255', pidx: '254', nidx: '256', title: '完', label: 'wán', desc: 'dopo', image: 'zzafter.jpg' },
{ idx: '256', pidx: '255', nidx: '257', title: '玩', label: 'wán', desc: 'giocare; divertirsi', image: 'zztoplay.jpg' },
{ idx: '257', pidx: '256', nidx: '258', title: '晚上', label: 'wǎnshang', desc: 'sera', image: 'zznight.jpg' },
{ idx: '258', pidx: '257', nidx: '259', title: '为什么', label: 'wèishénme', desc: 'perché', image: 'zzwhy.jpg' },
{ idx: '259', pidx: '258', nidx: '260', title: '问', label: 'wèn', desc: 'chiedere', image: 'zztoask.jpg' },
{ idx: '260', pidx: '259', nidx: '261', title: '问题', label: 'wèntí', desc: 'problema', image: 'zzproblem.jpg' },
{ idx: '261', pidx: '260', nidx: '262', title: '西瓜', label: 'xīguā', desc: 'cocomero', image: 'zzwatermelon.jpg' },
{ idx: '262', pidx: '261', nidx: '263', title: '希望', label: 'xīwàng', desc: 'sperare', image: 'zztohope.jpg' },
{ idx: '263', pidx: '262', nidx: '264', title: '洗', label: 'xǐ', desc: 'lavare', image: 'zztowash.jpg' },
{ idx: '264', pidx: '263', nidx: '265', title: '想', label: 'xiǎng', desc: 'pensare', image: 'zztothink.jpg' },
{ idx: '265', pidx: '264', nidx: '266', title: '向', label: 'xiàng', desc: 'a', image: 'zzto.jpg' },
{ idx: '266', pidx: '265', nidx: '267', title: '小时', label: 'xiǎoshí', desc: 'ora', image: 'zzhour.jpg' },
{ idx: '267', pidx: '266', nidx: '268', title: '笑', label: 'xiào', desc: 'ridere', image: 'zztolaugh.jpg' },
{ idx: '268', pidx: '267', nidx: '269', title: '新', label: 'xīn', desc: 'nuovo', image: 'zznew.jpg' },
{ idx: '269', pidx: '268', nidx: '270', title: '姓', label: 'xìng', desc: 'cognome', image: 'zzsurname.jpg' },
{ idx: '270', pidx: '269', nidx: '271', title: '休息', label: 'xiūxi', desc: 'riposare', image: 'zztorest.jpg' },
{ idx: '271', pidx: '270', nidx: '272', title: '雪', label: 'xuě', desc: 'neve', image: 'zzsnow.jpg' },
{ idx: '272', pidx: '271', nidx: '273', title: '颜色', label: 'yánsè', desc: 'colore', image: 'zzcolor.jpg' },
{ idx: '273', pidx: '272', nidx: '274', title: '眼睛', label: 'yǎnjing', desc: 'occhi', image: 'zzeyes.jpg' },
{ idx: '274', pidx: '273', nidx: '275', title: '羊肉', label: 'yángròu', desc: 'agnello', image: 'zzlamb.jpg' },
{ idx: '275', pidx: '274', nidx: '276', title: '药', label: 'yào', desc: 'medicina', image: 'zzmedicine.jpg' },
{ idx: '276', pidx: '275', nidx: '277', title: '要', label: 'yào', desc: 'volere', image: 'zzwant.jpg' },
{ idx: '277', pidx: '276', nidx: '278', title: '也', label: 'yě', desc: 'anche', image: 'zzalso.jpg' },
{ idx: '278', pidx: '277', nidx: '279', title: '已经', label: 'yǐjing', desc: 'già', image: 'zzalready.jpg' },
{ idx: '279', pidx: '278', nidx: '280', title: '一起', label: 'yīqǐ', desc: 'con', image: 'zzwith.jpg' },
{ idx: '280', pidx: '279', nidx: '281', title: '意思', label: 'yìsi', desc: 'significato', image: 'zzmeaning.jpg' },
{ idx: '281', pidx: '280', nidx: '282', title: '阴', label: 'yīn', desc: 'yin', image: 'zzyin.jpg' },
{ idx: '282', pidx: '281', nidx: '283', title: '因为', label: 'yīnwei', desc: 'perché', image: 'zzbecause.jpg' },
{ idx: '283', pidx: '282', nidx: '284', title: '游泳', label: 'yóuyǒng', desc: 'nuotare', image: 'zztoswim.jpg' },
{ idx: '284', pidx: '283', nidx: '285', title: '右边', label: 'yòubian', desc: 'destra', image: 'zzright.jpg' },
{ idx: '285', pidx: '284', nidx: '286', title: '鱼', label: 'yú', desc: 'pesce', image: 'zzfish.jpg' },
{ idx: '286', pidx: '285', nidx: '287', title: '元', label: 'yuán', desc: 'valuta; soldi', image: 'zzyuan.jpg' },
{ idx: '287', pidx: '286', nidx: '288', title: '远', label: 'yuǎn', desc: 'lontano', image: 'zzfar.jpg' },
{ idx: '288', pidx: '287', nidx: '289', title: '运动', label: 'yùndòng', desc: 'movimento', image: 'zzmovement.jpg' },
{ idx: '289', pidx: '288', nidx: '290', title: '再', label: 'zài', desc: 'di nuovo', image: 'zzagain.jpg' },
{ idx: '290', pidx: '289', nidx: '291', title: '早上', label: 'zǎoshang', desc: 'mattina', image: 'zzmorning.jpg' },
{ idx: '291', pidx: '290', nidx: '292', title: '张', label: 'zhāng', desc: 'classificatore per carta', image: 'zzclpaper.jpg' },
{ idx: '292', pidx: '291', nidx: '293', title: '丈夫', label: 'zhàngfū', desc: 'marito', image: 'zzhusband.jpg' },
{ idx: '293', pidx: '292', nidx: '294', title: '找', label: 'zhǎo', desc: 'trovare', image: 'zztofind.jpg' },
{ idx: '294', pidx: '293', nidx: '295', title: '着', label: 'zhe', desc: 'di', image: 'zzof.jpg' },
{ idx: '295', pidx: '294', nidx: '296', title: '真', label: 'zhēn', desc: 'vero', image: 'zztrue.jpg' },
{ idx: '296', pidx: '295', nidx: '297', title: '正在', label: 'zhèngzài', desc: 'azione in corso', image: 'zzingform.jpg' },
{ idx: '297', pidx: '296', nidx: '298', title: '知道', label: 'zhīdao', desc: 'conoscere', image: 'zztoknow.jpg' },
{ idx: '298', pidx: '297', nidx: '299', title: '准备', label: 'zhǔnbèi', desc: 'preparare', image: 'zztoprepare.jpg' },
{ idx: '299', pidx: '298', nidx: '300', title: '自行车', label: 'zìxíngchē', desc: 'bicicletta', image: 'zzbicycle.jpg' },
{ idx: '300', pidx: '299', nidx: '301', title: '走', label: 'zǒu', desc: 'andare', image: 'zztogo.jpg' },
{ idx: '301', pidx: '300', nidx: '302', title: '最', label: 'zuì', desc: 'il più', image: 'zzthemost.jpg' },
{ idx: '302', pidx: '301', nidx: '0', title: '左边', label: 'zuǒbiān', desc: 'sinistra', image: 'zzleft.jpg' }

      ]; 
      
      return data;
  });
})();
