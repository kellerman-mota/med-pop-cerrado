angular.module('starter.services', [])

.factory('Plantas', function() {
  var plantas = [{
    nome:'Batata de purga',
    nomeCientifico:'Convolvulus sperculatus',
    nomePopular:`Aririçó; Batatinha amarela; Jalapão;
    Jalapa; Raiz de jericuçu; Briônia-da-américa;
    Flor de quatro horas; Ruibarbo branco.`,
    descricao:'Raiz',
    caracteristicas:`A batata de purga é um cipó que se utiliza
    de outras plantas como suporte para crescer. A rama do cipó não
    é roliça, tem a forma quadrada com quinas, não possui garras e se torce,
    alastrando-se sobre as outras plantas. A rama do cipó, quando está nova,
    é de cor verde e possui forma quadrada com quinas salientes de bordas arroxeadas.
    Quando a planta fica mais velha, suas ramas possuem cor vermelho-arroxeada e suas
    quinas se tornam mais arredondadas.`,
    propriedades:`Analgésico; Antiinflamatório; Depurativo; Diurético;
    Energético; Febrífuga; Laxante; Purgativa.`,
    indicacoes:`Congestão; Hemorragia (cerebral, pulmonar);
    Hidropsia (cardíaca, renal); Prisão de ventre;
    Edemas; Inflamações; Dor de cabeça; Febre.`,
    uso:`Chá da raiz: Coloque 2 colheres de sopa para um litro de água.
    Deixe cozinhar por cerca de 10 minutos a partir do momento
    em que se inicia a ebulição, após esse tempo. Retire do fogo e deixe repousando,
    tampada, por 10 minutos. Coe e está pronto para o uso.`,
    contraIndicacoes:`O uso desta planta não é indicado para mulheres grávidas,
    lactantes e crianças. A tradição recomenda que um remédio purgativo,
    como a batata de purga, deve ser acompanhado de dieta alimentar e repouso.`,
    img: 'Batata de Purga.jpg'
  },{
    nome:'Sucupira',
    nomeCientifico:'Pterodon emarginatus',
    nomePopular:`Sucupira Branca; Sucupira; Fava-de-Santo-Inácio; Sapupira;
    Supupira do Campo; Sebepira; Macanaíba; Paracarana.`,
    descricao:'Semente (fava).',
    caracteristicas:`Árvore rustica de porte médio com floração azulada.`,
    propriedades:`Anti-inflamatório; antibiótico; antioxidante; anti-carcinogênico; anestésico.`,
    indicacoes:`Excesso de ácido úrico; amigdalite; artrite; asma; cistos ovarianos e no útero;
    dermatoses; diabetes; dor de garganta; feridas; inflamações; reumatismo; sífilis; vermes.`,
    uso:`Chá da semente: Partir cinco sementes em quatro pedaços. Ferver um litro de água.
    Mergulhar as cinco sementes na água e ferver por dez minutos.
    Deixe esfriar e conserve na geladeira. Tomar durante o dia do preparo, intercalando com água.`,
    contraIndicacoes:`Não tomar por mais de quinze dias seguidos.
    Fazer pausa de quinze dias do tratamento.`,
    img: 'Sucupira-branca.jpg'
  }];

  return {
    todos: function() {
      return plantas;
    },
    filtrar: function(filtro) {
      if(filtro){
        var results = plantas.filter(function(p){
           return p.nome.indexOf(filtro) > -1;
        })
        return results;
      }else{
        return plantas;
      }
    }
  };
});
