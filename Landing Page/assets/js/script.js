let nome = window.document.getElementById('nome')
let area = document.querySelector('#area')
let vilao = document.querySelector('#vilao')
let nomeOk = false
let areaOk = false
let vilaoOk = false

nome.style.width = '50%'
area.style.width = '50%' 

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
function validaArea(){
let txtEmail  = document.querySelector("#txtArea")

if(area.value.length <3){
    txtArea.innerHTML = 'Area Inválida!'
    txtArea.style.color = 'red'
} else{ 
    txtArea.innerHTML = 'Area Válida!'
    txtArea.style.color = 'green'
areaOk = true
}
}


function enviar(){
    if(nomeOk == true && areaOk == true){
        alert ('Denuncia enviada com sucesso!')
    } else{
        alert('Preencha o formulário corretamente antes de enviar!')
    }
}