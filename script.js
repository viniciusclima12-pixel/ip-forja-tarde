function Enviar(){
   const nome = document.getElementById('nome').value
   const assunto = document.getElementById('assunto').value
   const mensagem = `Gostaria de entrar em contato!\n\nNome: ${nome} \nAssunto: ${assunto}`
   const msg = encodeURIComponent(mensagem)
   window.open(`https://wa.me/554198412849?text=${msg}`)

   
}
  