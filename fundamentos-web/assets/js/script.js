
/*
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let duvida = document.querySelector('#duvida')
let nomeOk = false
let emailOk = false
let duvidaOk = false

nome.style.width = '33%'
email.style.width = '33%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length <3 ){
        txtNome.innerHTML = 'Nome Inválido'
    txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = 'Nome Válido'
    txtNome.style.color = "green"
nomeOk = true    
}

}
function validaEmail(){
let txtEmail  = document.querySelector("#txtEmail")

if(email.value.indexOf('@') == -1 ||  email.value.indexOf('.') == -1 ){
    txtEmail.innerHTML = 'Email Inválido!'
    txtEmail.style.color = 'red'
} else{ 
    txtEmail.innerHTML = 'Email Válido!'
    txtEmail.style.color = 'green'
emailOk = true
}
}
function validaDuvida(){
let txtDuvida = document.querySelector('#txtDuvida')
if (duvida.value.length >= 100){
txtDuvida.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
txtDuvida.style.color = 'red'
txtDuvida.style.display = 'block'
}else {
   txtDuvida.style.display = 'none'
duvidaOk = true
}
}
function enviar(){
    if(nomeOk == true && emailOk == true && duvidaOk == true){
        alert ('Duvida enviada com sucesso!')
    } else{
        alert('Preencha o formulário corretamente antes de enviar!')
    }
}