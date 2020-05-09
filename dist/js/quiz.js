window.onload = function(){
    show(0);
}

let preguntas = [
    {
        id: 1,
        pregunta: 'Cual es mi color?',
        repuesta: 'Blanco',
        options:[
            'Azul', 'Rojo', 'Amarillo', 'Blanco'
        ]    
    },

    {
        id: 2,
        pregunta: 'Cual es mi comida?',
        repuesta: 'Fritanga',
        options:[
            'Plato Paceño', 'Silpancho', 'Lechon', 'Fritanga'
        ]    
    },

    {
        id: 3,
        pregunta: 'Cual es mi gato?',
        repuesta: 'Batman',
        options:[
            'Batman', 'Churro', 'Rocket', 'Cachuchin'
        ]    
    },

    {
        id: 4,
        pregunta: 'Cual es mi 1er nombre?',
        repuesta: 'Miguel',
        options:[
            'Jose', 'Alvaro', 'Juan', 'Miguel'
        ]    
    },

]

//falta lo de nameForm Aqui

let question_count = 0;
let point = 0;

//Funcion que se activa con boton siguiente
function next(){

    let user_answer = document.querySelector('li.option.active').innerHTML;
    //check answer by the user
    if(user_answer==preguntas[question_count].repuesta){
        console.log('Correcto!');
        point+=10;
        //para guardar los puntos en el storage
        sessionStorage.setItem('points', point);
    }
    if(question_count == preguntas.length - 1){

        //datos del timer
        sessionStorage.setItem('time', `${minutes} minutos y ${seconds} segundos`);
        clearInterval(mytime);
        location.href='end.html';
        return;
    }
    question_count++;
    show(question_count);
}

function show(count){

    let name = sessionStorage.getItem('name');
    document.querySelector('.name').innerHTML = name;

    let question = document.getElementById('questions');
    //question.innerHTML = '<h2>'+preguntas[count].pregunta+'</h2>';
    question.innerHTML = `
    <h2>Q${question_count+1}. ${preguntas[count].pregunta}</h2>
    <ul class="option_group">
    <li class="option">${preguntas[count].options[0]}</li>
    <li class="option">${preguntas[count].options[1]}</li>
    <li class="option">${preguntas[count].options[2]}</li>
    <li class="option">${preguntas[count].options[3]}</li>
    </ul>
    `;
    toggleActive();
}

function toggleActive(){

    let option = document.querySelectorAll('li.option');

    for(let i=0 ; i<option.length ; i++){
        option[i].onclick = function(){
            for(let j=0 ; j<option.length ; j++){
                if(option[j].classList.contains('active')){
                    option[j].classList.remove('active');
                }
            }
            option[i].classList.add('active');
        }
    }

}