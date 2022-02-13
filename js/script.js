const imgOne = document.querySelector('#img1');
const imgTwo = document.querySelector('#img2');
const imgThree = document.querySelector('#img3');
const imgFour = document.querySelector('#img4');
const imgSix = document.querySelector('#img6');
const imgSeven = document.querySelector('#img7');
const imgEight = document.querySelector('#img8');
const imgNine = document.querySelector('#img9');

imgOne.addEventListener('click', (event) => {
  event.preventDefault();
  alert(`Atendimentos medicos otimizados lidando com o bem estar 
dos nossos pacientes.`);
});

imgTwo.addEventListener('click', (event) => {
  event.preventDefault();
  alert(`Nossa especialidade principal a fisioterapia, trata as 
dificuldades funcionais e cineticas do nosso corpo, prevenindo
distúrbios de orgãos e sistemas.`);
});

imgThree.addEventListener('click', (event) => {
  event.preventDefault();
  alert(`A hidroterapia tem como objetivo principal a prevenção 
a recuperação de lesões e para pacientes com artrite, também muito é 
muito utilizada por gestante e idosos para ajudar no tratamento de algumas
doencas.`);
});

imgFour.addEventListener('click', (event) => {
  event.preventDefault();
  alert(`Atividade terapêutica preparada para uma piscina aquecida,
a fisioterapia aquática ajuda na reabilitação do paciente utilizando
os beneficios e efeitos fisiologicos da agua.`);
});

imgSix.addEventListener('click', (event) => {
  event.preventDefault();
  alert(`Como principal responsavel pela boa alimentação temos nutricionistas
que além de ajudar na boa alimentação dos nossos pacientes para fins
esteticos ou para adequar a sua alimentação.`);
});

imgSeven.addEventListener('click', (event) => {
  event.preventDefault();
  alert(`Tratando dos comportamentos humanos a psicologia estuda a mente e o
comportamento humano com o objetivo de explicar e orientar a mudança
de comportamento humanos.`);
});

imgEight.addEventListener('click', (event) => {
  event.preventDefault();
  alert(`Como principal estudo do sistema estomatognático, 
a odontologia trata de doenças e desordens dos dentes e gengivas
e pode até mesmo agir na parte estetica modificando cor e formato dos dentes.`);
});

imgNine.addEventListener('click', (event) => {
  event.preventDefault();
  alert(`Checando a saude dos nossos pacientes temos exames
laboratoriais que são realizados na nossa clinica
para confirmação de alguma patologia`);
});
