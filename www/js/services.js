angular.module('starter.services', [])

.factory('Plantas', function() {
  var plantas = [{
    id:1,
    nome:'Batata de purga',
    nomeCientifico:'Convolvulus sperculatus',
    nomePopular:'Aririçó; Batatinha amarela; Jalapão; Jalapa; Raiz de jericuçu; Briônia-da-américa; Flor de quatro horas; Ruibarbo branco.',
    descricao:'Raiz',
    caracteristicas:'A batata de purga é um cipó que se utiliza de outras plantas como suporte para crescer. A rama do cipó não é roliça, tem a forma quadrada com quinas, não possui garras e se torce, alastrando-se sobre as outras plantas. A rama do cipó, quando está nova, é de cor verde e possui forma quadrada com quinas salientes de bordas arroxeadas. Quando a planta fica mais velha, suas ramas possuem cor vermelho-arroxeada e suas quinas se tornam mais arredondadas.',
    propriedades:'Analgésico; Antiinflamatório; Depurativo; Diurético; Energético; Febrífuga; Laxante; Purgativa.',
    indicacoes:'Congestão; Hemorragia (cerebral, pulmonar); Hidropsia (cardíaca, renal); Prisão de ventre; Edemas; Inflamações; Dor de cabeça; Febre.',
    uso:'Chá da raiz: Coloque 2 colheres de sopa para um litro de água. Deixe cozinhar por cerca de 10 minutos a partir do momento em que se inicia a ebulição, após esse tempo. Retire do fogo e deixe repousando, tampada, por 10 minutos. Coe e está pronto para o uso.',
    contraIndicacoes:'O uso desta planta não é indicado para mulheres grávidas, lactantes e crianças. A tradição recomenda que um remédio purgativo, como a batata de purga, deve ser acompanhado de dieta alimentar e repouso.',
    img: 'Batata de Purga.jpg'
  },{
    id:2,
    nome:'Sucupira',
    nomeCientifico:'Pterodon emarginatus',
    nomePopular:'Sucupira Branca; Sucupira; Fava-de-Santo-Inácio; Sapupira; Supupira do Campo; Sebepira; Macanaíba; Paracarana.',
    descricao:'Semente (fava).',
    caracteristicas:'Árvore rustica de porte médio com floração azulada.',
    propriedades:'Anti-inflamatório; antibiótico; antioxidante; anti-carcinogênico; anestésico.',
    indicacoes:'Excesso de ácido úrico; amigdalite; artrite; asma; cistos ovarianos e no útero; dermatoses; diabetes; dor de garganta; feridas; inflamações; reumatismo; sífilis; vermes.',
    uso:'Chá da semente: Partir cinco sementes em quatro pedaços. Ferver um litro de água. Mergulhar as cinco sementes na água e ferver por dez minutos. Deixe esfriar e conserve na geladeira. Tomar durante o dia do preparo, intercalando com água.',
    contraIndicacoes:'Não tomar por mais de quinze dias seguidos. Fazer pausa de quinze dias do tratamento.',
    img: 'Sucupira-branca.jpg'
  },{
    id:3,
    nome:'Barbatimão',
    nomeCientifico:'Stryphnodendron adstringens (Mart) Coville',
    nomePopular:' Barbatimão-verdadeiro; Barba-de-timan; Casca-da-mocidade; Ubatima; Casca-da-virgindade; Iba-timão; Ibatimô; Chorãozinho-roxo.',
    descricao:'Casca',
    caracteristicas:'Árvore com aproximadamente cinco metros de altura com caule e troncos tortos, poucas folhas e casca com aspecto rugoso',
    propriedades:'Anti-inflamatória; Antimicrobiana; Antibacteriana; Antioxidante; Analgésica; Anti-hipertensivo; Antiparasitária; Tônica; Desinfetante; Diabética; Diurética; Coagulante.',
    indicacoes:'Feridas de HPV; Doenças e infecções da pele; Pressão alta; Corrimento vaginal; Gonorreia; Diarréia; Hemorragia e feridas com hemorragias; Malária; Problemas no fígado ou nos rins; Inchaço e hematomas na pele; Queimaduras na pele; Dores de garganta; Diabetes; Conjuntivite; Gastrite.',
    uso:'Chá da casca: Duas colheres de sopa de casca triturada para um litro de água. Ferva a casca por dez minutos na água. Retire do fogo e deixe tampado por dez minutos. Coe. Tomar de duas a tres xicaras por dia. Uso externo: Coloque 1 colher de sopa da casca em 1 litro de água morna, para uso sob a forma de banhos, gargarejos, lavagens vaginais.',
    contraIndicacoes:'O Barbatimão está contraindicado para mulheres grávidas e para mulheres amamentando. Além disso, também está contraindicado para pacientes com problemas graves no estômago, como úlceras ou câncer no estômago.',
    img: 'Barbatimao.jpg'
  },{
    id:4,
    nome:'Pata de Vaca',
    nomeCientifico:'Bauhinia foticata',
    nomePopular:'Bauínia; Miroró; Mororó; Pata-de-boi; Pata-de-burro; Unha-de-anta; Unha-de-vaca.',
    descricao:'Cascas; Folhas; Flores.',
    caracteristicas:'Árvore com aproximadamente seis metros com tronco espinhoso. Suas folhas com base arredondas, são responsáveis pela associação com a pata do animal. Suas flores são brancas, raramente avermelhadas.',
    propriedades:'Analgésico; Vermífugo; Depurativo; Laxante; Purgativo; Cicatrizante; Hipoglicêmico.',
    indicacoes:'Diabetes; Diarréias; Insuficiência urinária; Prisão de ventre; Urina solta; Poliúria; Cálculos na bexiga ou rins; Hipertensão arterial; Hemofilia; Anemia; Obesidade; doenças urinárias e do coração.',
    uso:'Chá da erva: Adicione duas colheres (sopa) de erva para um litro de água, deixando-os no fogo até entrar em ebulição. Em seguida, tire a panela do fogo e deixe-a (tampada) repousando por 10 minutos. Coe e beba. Tomar entre duas a três xícaras ao dia.',
    contraIndicacoes:'O consumo do chá dessa planta é contraindicado para mulheres gestantes ou em fase de amamentação, pacientes com crises de hiperglicemia e com doenças crônicas.',
    img: 'Pata de Vaca.jpg'
  },{
    id:5,
    nome:'Velame',
    nomeCientifico:'Croton campestris',
    nomePopular:'Croton-campestre; Velame-do-mato; Velame do campo de minas; Velame-do-Campo.',
    descricao:'Folhas; Raiz.',
    caracteristicas:'Arbusto todo coberto por penugem amarelada, curta e macia, de 2 a 3m de altura, folhas alternadas, ovais, denteadas; Flores brancas nas extremidades, pubescentes, aromáticas, dispostas em espigas no ápice da planta.',
    propriedades:'Depurativo; Desobstruente; Diurético.',
    indicacoes:'Afecção da pele; Artrite; Blenorragia crônica; Eczema; Gota úrica; Sífilis; Herpes; Impingem; Palpitação do coração; Pele; Reumatismo; Vesícula.',
    uso:'Chá da Erva: Ferva duas colheres de sopa da erva em um litro de água por dois minutos e desligue o fogo. Abafe o chá por dez minutos e coe em seguida. Consuma de duas a três xicaras por dia. Uso Externo: Fazer compressas com o chá para problemas de pele.',
    contraIndicacoes:'Não encontrado contra-indicações nas leituras pesquisadas.',
    img: 'Velame.JPG'
  },{
    id:6,
    nome:'Algodãozinho',
    nomeCientifico:'Cochlospermum orinocense (Kunth) Steud',
    nomePopular:'Paineira barriguda amarela; Algodãozinho-amarelo; Barriguda-amarela',
    descricao:'Folhas; Flores; Batata; Fruto.',
    caracteristicas:'Planta de talos compridos, que pode ou não formar touceiras. Normalmente, os talos da planta adulta variam de 1 a 3 metros de altura por 1 a 3 centímetros de diâmetro.',
    propriedades:'Diurético; Antiinflamatório; Analgésico; Depurativo.',
    indicacoes:'Mioma no útero; Coceiras; Manchas na pele; Menstruação desregulada; Doenças sexualmente transmissíveis; Reumatismo; Gastrite e úlcera; Impigem;  Inchaço das pernas.',
    uso:'Polvilho: A batata fresca do algodãozinho deve primeiramente ser lavada, descascada e ralada. Em seguida, mistura-se água à massa ralada, mexe-se bem e côa-se num pano de algodão. Ao final da filtração, esfrega-se a massa contra o pano, torcendo-o bem forte, para que o polvilho se solte. O coado deve ser colocado em repouso para que o polvilho misturado à baba da batata se assente. Depois que o polvilho se assentar ao fundo da vasilha, retira-se a água sem que ela fique turva e, coloca-se o polvilho para secar. A água retirada pode ser aproveitada para fazer garrafada.  Chá das folhas: Utilize duas colheres de sopa da planta para um litro de água mineral. Deixe ferver por cerca de dez minutos. Coe e beba o chá, de preferência morno, três vezes ao dia. Uso Externo: O fruto é usado para tratar impigem. Ele deve ser cortado ao meio e esfregado no local da impigem. Outra forma é assar o fruto e aplicar a água que solta dele no local afetado.',
    contraIndicacoes:'O uso desta planta não é indicado para mulheres grávidas e crianças.',
    img: 'Algodaozinho.jpg'
  },{
    id:7,
    nome:'Pacari',
    nomeCientifico:'Lafoensia pacari',
    nomePopular:'Dedaleiro; Pacari; Pacuri; Mangabeira-brava; Dedal; Copinho; Louro-da-serra; Pau-de-bicho.',
    descricao:'Folhas; Entrecasca.',
    caracteristicas:'Árvore que atinge em média 4 metros de altura. O seu tronco cresce reto até aproximadamente 2 metros, quando a árvore solta os seus galhos. A copa da árvore é formada por galhos salteados e distanciados e, entre os galhos maiores, existem muitos galhos curtos e finos.',
    propriedades:'Coagulante; Cicatrizante; Antioxidante; Anti-úlcera gástrica; Antiinflamatório.',
    indicacoes:'Úlcera gástrica, gastrite, ferimentos, inflamação do útero, transtornos da vesícula biliar, emagrecimento e urticária.',
    uso:'Para o tratamento de gastrite ou úlcera, a pacari é usada na forma de chá, tintura ou garrafada. Já para o tratamento de feridas na pele, ela é usada na forma de banhos e pomada. As folhas e a entrecasca devem ser sempre usadas secas. Chá da Erva: A quantidade de casca a ser colocada num copo de água fria deverá ser do mesmo tamanho da última falange do dedo mínimo do doente. Deixe descansar por uma hora. Coe e consuma frio. Uso Externo: Colocar três colheres da erva em um litro de água fria e deixar descansar por uma hora e coe. Banhe ferimentos e ulceras na pele.',
    contraIndicacoes:'O uso interno desta planta não é indicado para mulheres grávidas e crianças.',
    img: 'Pacari.jpg'
  },{
    id:8,
    nome:'Buriti',
    nomeCientifico:'Mauritia flexuosa',
    nomePopular:'Buriti; Miriti',
    descricao:'Fruto',
    caracteristicas:'Árvore com até 30 metros de altura e ter um caule com espessura de até 50 cm de diâmetro. A espécie habita terrenos alagáveis e brejos de várias formações, sendo encontrada com muita freqüência nas veredas, importante fitofisionomia do Cerrado.',
    propriedades:'Cicatrizante; Antiinflamatório.',
    indicacoes:'Repelente de insetos;  Furúnculos; Frieiras; Coceiras; Picada de insetos; Hematomas provenientes de pancadas e em manchas roxas; Úlcera varicosa;  Sangramento de gengiva; Tosse; Gripe; Asma.',
    uso:'Óleo: Para se fazer o azeite, o buriti pode ser coletado logo após cair da palmeira ou depois que ele estiver pubado. O buriti pubado é aquele que permanece no chão por alguns dias e fica mole, espumando, azedo, fermentado e meio apodrecido.O buriti pubado rende mais azeite. Entretanto, a cor do azeite é mais escura e sua qualidade é inferior. Quanto mais maduro estiver o buriti, mais óleo ele rende.Por outro lado, o buriti caído recentemente da palmeira rende menos azeite, mas esse é de melhor qualidade e a sua cor é mais cristalina.Após a coleta, os buritis devem ser bem lavados e colocados de molho por um período de 10 a 12 horas, para que sua escama e sua polpa amoleçam.Quando os buritis estão amolecidos, são colocados no pilão e socados, até formar uma massa. A massa deve ser coada em peneira grossa, acrescida de água e levada ao fogo para ferver. Com a fervura, o azeite sobe para a superfície da água, é retirado com uma colher e colocado em outra panela. Esse azeite, ainda contém água, e por isso é levado novamente ao fogo para ser apurado, ou seja, para que seja evaporada toda água nele contida. O azeite se for bem apurado não tem data de vencimento, podendo ser guardado por até 10 anos, sem que rance ou sem que mude o gosto. Entretanto, quando colocado em uma vasilha molhada ou misturado com outra substância, mesmo estando bem apurado, ele pode rançar.Para preparar o azeite e obter um bom rendimento, é necessário observar os dias da lua. O azeite deve ser preparado quatro dias antes ou quatro dias depois da lua cheia; pois se preparado nos dias de lua cheia, ele não rende.',
    contraIndicacoes:'O uso interno desta planta não é indicado para mulheres grávidas.',
    img: 'Buriti_frutos.jpg'
  },{
    id:9,
    nome:'Pé-de-perdiz',
    nomeCientifico:'Croton antisyphiliticus',
    nomePopular:'Canela-de-perdiz; Alcanforeira; Cajuraca; Curraleira; Cristal-da-serra; Minuano.',
    descricao:'Raiz',
    caracteristicas:'Mede em torno de 30 a 40 centímetros. Geralmente, ela é encontrada em grupos ou formando moitas, mas pode também ser encontrada sozinha.Os raizeiros afirmam que existem dois tipos de pé de perdiz: a planta fêmea ou lisa e a planta macho ou peluda.',
    propriedades:'Antiinflamatório; Depurativo.',
    indicacoes:'Infecções; Reumatismo; Infecção do útero e ovário; Estimula gravidez; Regula menstruação e limpa o útero, após o parto; Inflamação da próstata.',
    uso:'Chá da raiz: Coloque 1 colher de sopa para meio litro de água. Leve ao fogo e deixe ferver por 10 minutos. Beber o meio litro o dia todo.',
    contraIndicacoes:'O uso desta planta não é indicado para mulheres grávidas e crianças.',
    img: 'Pe-de-Perdiz.jpeg'
  },{
    id:10,
    nome:'Ipê-Roxo',
    nomeCientifico:'Tabebuia avellanedae',
    nomePopular:'Piúva; Pau-darco; Piúna; Ipê-roxo-grande; Ipê-de-minas; Piúna-roxa',
    descricao:'Entrecasca.',
    caracteristicas:'O ipê-roxo é uma árvore de copa alta que mede aproximadamente 20 metros de altura.',
    propriedades:'Adstringente; Analgésico; Antiblenorrágica; Antimicrobiana; Antiinflamatória; Antiinfecciosa; Antitumoral; Antinevrálgica; Antissifilítica; Antibactericida; Antifungo; Depurativa; Diurético.',
    indicacoes:'Inflamações; Câncer de útero e próstata, Infecção dos rins; Problemas de pele; Doenças do coração; Derrame; Pressão alta; Prisão de ventre; Inflamação do fígado; Doenças sexualmente transmissíveis; Coceiras; Alergia; Anemia; Diabete; Colite; Estimulante do sistema imunológico; Fungos; Garganta; Inflamação artrítica; Leucemia; Lúpus; Mal de Parkson; Malária; Osteomielite; Problemas respiratórios; Psoríase; Queimaduras; Úlcera.',
    uso:'Chá da entrecasca seca: Acrescente duas colheres de sopa das cascas da árvore a um litro de água. Deixe cozinhar por aproximadamente 10 minutos, contando a partir do momento em que se inicia a ebulição. Após esse tempo, retire do fogo e deixe repousando, com o recipiente tampado, por cerca de 10 minutos. Coe e o chá está pronto para ser consumido. Tome de 2 a 3 xícaras do chá ao dia.',
    contraIndicacoes:'O uso desta planta não é indicado para crianças, mulheres grávidas ou para mulheres que estejam no período de menstruação. Quando se faz o uso da garrafada ou do chá do ipê-roxo, recomenda-se fazer dieta alimentar, evitando comer alimentos gordurosos.',
    img: 'ipe-roxo.jpg'
  }];

  function todos(){
    return plantas.sort(function(a, b){
      if(a.nome < b.nome) return -1;
      if(a.nome > b.nome) return 1;
      return 0
    });
  }

  function replaceSpecialChars(str){
    str = str.replace(/[ÀÁÂÃÄÅ]/,"A");
    str = str.replace(/[àáâãäå]/,"a");
    str = str.replace(/[ÈÉÊË]/,"E");
    str = str.replace(/[èéê]/,"e");
    str = str.replace(/[Ç]/,"C");
    str = str.replace(/[ç]/,"c");
    // o resto
    return str.replace(/[^a-z0-9]/gi,'');
  }

  return {
    todos: function() {
      return todos();
    },
    filtrarPorPlanta: function(filtro) {
      if(filtro){
        var results = plantas.filter(function(p){
          var filtroToCompare = replaceSpecialChars(filtro).toUpperCase();
          var nomeToCompare = replaceSpecialChars(p.nome).toUpperCase();
          return nomeToCompare.indexOf(filtroToCompare) > -1;
        });
        return results;
      }else{
        return todos();
      }
    },
    filtrarPorSintoma: function(filtro) {
      if(filtro){
        var results = plantas.filter(function(p){
          var filtroToCompare = replaceSpecialChars(filtro).toUpperCase();
          var indicacoesToCompare = replaceSpecialChars(p.indicacoes).toUpperCase();
          return indicacoesToCompare.indexOf(filtroToCompare) > -1;
        });
        return results;
      }else{
        return todos();
      }
    },
    get: function(id) {
      var results = plantas.filter(function(p){
        return p.id == id;
      });
      return results[0];
    }
  };
});
