


    function carregar(){ //Criar uma função
        var msg = window.document.getElementById('msg') //Criei uma variável pegando o valor do id "msg" do HTML
        var img = window.document.getElementById('imagem') //Criei uma caviável pegando o valor do id "imagem" do HTML
        var data = new Date() //Variável para pegar hora atual
        var min = data.getMinutes()
        var dia = data.getDate()
        var mes = data.getMonth()
        var ano = data.getFullYear()
        var seg = data.getSeconds()
        var hora = data.getHours() //Variável para pegar o valor da variável "data" 
        switch (mes) {
            case 1:
            m = "Janeiro"
            break
            case 2:
            m = "Fevereiro"
            break
            case 3:
            m = "Março"
            break
            case 4:
            m = "Abril"
            break
            case 5:
            m = "Maio"
            break
            case 6: 
            m = "Junho"
            break
            case 7:
            m = "Julho"
            break
            case 8:
            m = "Agosto"
            break
            case 9:
            m = "Setembro"
            break
            case 10:
            m = "Outubro"
            break
            case 11:
            m = "Novembro"
            break
            case 12:
            m = "Dezembro"
            break
            
        }   
        if (hora >= 0 && hora < 12) { //Se a hora for maior ou igual a 0 ou menor que 12...
            img.src = 'img/manha.png' //Vai mostrar essa imagem
            document.body.style.background = "#EDD4A9" //A cor de fundo vai ser essa
        } else if (hora >= 12 && hora <= 18) { //Se a hora for maior ou igual a 12 ou menor que 18...
            msg.innerHTML = `Hoje é dia ${dia} de ${m} de ${ano}.<br>Agora são ${hora} h ${min} min e ${seg} seg<br>no horário de Brasilia.<br><form style="border: 1px solid black; border-radius: 5px; margin: auto; width: 30%; box-shadow: 2px 5px 9px black;" ><strong style="color: blue; font-size: 1.5em;">${hora}:${min}:${seg}</strong></form>` //Vai aparecer está mensagem ao invés da mensagem com id "msg" que está no HTML
              img.src = 'img/tarde.png'//Vai mostrar essa imagem
              document.body.style.background = "#b9846f" //A cor de fundo vai ser essa
        } else { //Se nenhuma das opções acima for verdadeira...
            img.src = 'img/noite.png' //Vai mostrar essa imagem
            document.body.style.background = "#515154" //A cor de fundo vai ser essa
        }

    }
    
    const noStop = setInterval(carregar, 1000) //Comando para nunca para de ler o bloco
      
    