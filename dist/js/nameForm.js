function submitForm(e){
    e.preventDefault();
    let name = document.forms['welcome_form']['name'].value;

    //Storage player name en Application/SessionStorage
    sessionStorage.setItem('name', name);

    location.href='quiz.html';
    console.log(name);
}