//pegar o input

//Se for Sim, mostrar as categorias disponiveis, perguntar qual a categoria que ela escolhe

//Se for não, mostrar todos os livros em ordem crescente pela quantidade de páginas

const livros = require('./database')

const readline = require('readline-sync')

const entradaInicial = readline.question(
  'Deseja buscar um livro por categoria? S/N '
)

if (entradaInicial.toLocaleUpperCase() === 'S') {
  console.log('Essas são as categorias disponíveis')
  console.log(
    'Produtividade',
    '/ História brasileira',
    '/ Américas',
    '/ Tecnologia'
  )

  const entradaCategoria = readline.question('Qual categoria voce escolhe: ')

  const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

  console.table(retorno)
} else {
  const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
  console.log('Essas são todas as categorias diponíveis:')
  console.table(livrosOrdenados)
}
