para iniciar o projeto:

**na pasta do projeto**
npm init -y
npm install express nodemon mongoose

No arquivo 'package.json', incluir em scripts a linha:
"start": "nodemon ./'nome do arquivo.js' localhost 3005"
#quando der npm start 'nome do arquivo', ele iniciar o arquivo

Fazer uma configuração inicial
Precisamos chamar os pacotes
então, por padrão, o arquivo index.js tem:

//configuracao inicial

const express = require('express')
const app = express()

//forma de ler JSON
app.use{
	express.urlenconded({
	  extended: true,
	}),
}

app.use(express.json())


//rota inicial / endpoint
//rota inicial para poder acessar no postman e testar 
app.get('/', (req,res)=>{
	res.json({message: 'oi express!'})
})

//entregar uma porta
//entregar uma porta para saber onde a gente pode acessar a aplicacao, para ter acesso ao código
app.listen(3005)
