const green = require('../assets/produtores/green.png')
const salad = require('../assets/produtores/salad.png')
const jennyJack = require('../assets/produtores/jennyjack.png')
const grow = require('../assets/produtores/grow.png')
const potager = require('../assets/produtores/potager.png')

const aspargos = require('../assets/verduras/Aspargos.png')
const tomate = require('../assets/verduras/Tomate.png')
const brocolis = require('../assets/verduras/Brócolis.png')
const batata = require('../assets/verduras/Batata.png')
const pepino = require('../assets/verduras/Pepino.png')
const abobora = require('../assets/verduras/Abóbora.png')
const cenoura = require('../assets/verduras/Cenouras.png')
const cenoura2 = require('../assets/verduras/Cenouras2.png')
const verduras = require('../assets/verduras/Verduras.png')


const gerarNumeroAleatorio = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min+1) + min)
}

export type Produtores = {
    lista: Array<TipoProdutor>
}

export type TipoProdutor = {
    id:number,
    nome: string,
    distancia: number,
    estrelas: number,
    imagem: any,
    cestas: Array<{
        detalhes: TipoDetalhes
        itens: Array<TipoItem>
    }>
}

export type TipoDetalhes = {
  nome: string,
  descricao: string,
  preco: string,
  imagem: any
}

export type TipoItem = {
  nome: string,
  imagem: any
}

const produtores: Produtores = {
    lista: [
        {
            id: 1,
            nome: 'Green',
            distancia: gerarNumeroAleatorio(5, 500),
            estrelas: gerarNumeroAleatorio(1,5),
            imagem: green,
            cestas: [
                {
                    detalhes: {
                        nome: "Brócolis e Pepino",
                        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                        preco: "R$ 40,00",
                        imagem: pepino
                    },
                    itens: [
                        {
                          nome: "Brócolis",
                          imagem: brocolis,
                        },
                        {
                          nome: "Pepino",
                          imagem: pepino,
                        },
                    ]
                },
                {
                    detalhes: {
                      nome: "Brócolis",
                      descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                      preco: "R$ 40,00",
          
                      imagem: brocolis
                    },
                    itens: [
                      {
                        nome: "Brócolis",
                        imagem: brocolis,
                      },
                    ]
                  },
            ]
        },
        {
            id: 2,
            nome: "Salad",
            imagem: salad,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5),
            cestas: [
              {
                detalhes: {
                  nome: "Salada completa",
                  descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                  preco: "R$ 40,00",
      
                  imagem: verduras
                },
                itens: [
                  {
                    nome: "Tomate",
                    imagem: tomate,
                  },
                  {
                    nome: "Brócolis",
                    imagem: brocolis,
                  },
                  {
                    nome: "Pepino",
                    imagem: pepino,
                  },
                ]
              },
              {
                detalhes: {
                  nome: "Tomate e pepino",
                  descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                  preco: "R$ 40,00",
      
                  imagem: tomate
                },
                itens: [
                  {
                    nome: "Tomate",
                    imagem: tomate,
                  },
                  {
                    nome: "Pepino",
                    imagem: pepino,
                  },
                ]
              }
            ]
          },
          {
            id: 3,
            nome: "Jenny Jack Farm",
            imagem: jennyJack,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5),
            cestas: [
              {
                detalhes: {
                  nome: "Muita Batata",
                  descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                  preco: "R$ 40,00",
      
                  imagem: batata
                },
                itens: [
                  {
                    nome: "Batata",
                    imagem: batata,
                  },
                ]
              },
              {
                detalhes: {
                  nome: "Tomate e Brócolis",
                  descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                  preco: "R$ 40,00",
      
                  imagem: brocolis
                },
                itens: [
                  {
                    nome: "Tomate",
                    imagem: tomate,
                  },
                  {
                    nome: "Brócolis",
                    imagem: brocolis,
                  },
                ]
              }
            ]
          },
          {
            id: 4,
            nome: "Grow",
            imagem: grow,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5),
            cestas: [
              {
                detalhes: {
                  nome: "Abobora e Aspargos",
                  descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                  preco: "R$ 40,00",
      
                  imagem: aspargos
                },
                itens: [
                  {
                    nome: "Abóbora",
                    imagem: abobora,
                  },
                  {
                    nome: "Aspargos",
                    imagem: aspargos,
                  }
                ]
              },
              {
                detalhes: {
                  nome: "Tomate e Abobora",
                  descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                  preco: "R$ 40,00",
      
                  imagem: abobora
                },
                itens: [
                  {
                    nome: "Tomate",
                    imagem: tomate,
                  },
                  {
                    nome: "Abóbora",
                    imagem: abobora,
                  }
                ]
              }
            ]
          },
          {
            id: 5,
            nome: "Potager",
            imagem: potager,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5),
            cestas: [
              {
                detalhes: {
                  nome: "Pepinos",
                  descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                  preco: "R$ 40,00",
      
                  imagem: pepino
                },
                itens: [
                  {
                    nome: "Pepino",
                    imagem: pepino,
                  },
                ]
              },
              {
                detalhes: {
                  nome: "Brócolis, Aspargos e Cenoura",
                  descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                  preco: "R$ 40,00",
      
                  imagem: cenoura2
                },
                itens: [
                  {
                    nome: "Brócolis",
                    imagem: brocolis,
                  },
                  {
                    nome: "Aspargos",
                    imagem: aspargos,
                  },
                  {
                    nome: "Cenoura",
                    imagem: cenoura,
                  }
                ]
              }
            ]
          },

          {
            id: 6,
            nome: "Potager",
            imagem: potager,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5),
            cestas: [
              {
                detalhes: {
                  nome: "Pepinos",
                  descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                  preco: "R$ 40,00",
      
                  imagem: pepino
                },
                itens: [
                  {
                    nome: "Pepino",
                    imagem: pepino,
                  },
                ]
              },
              {
                detalhes: {
                  nome: "Brócolis, Aspargos e Cenoura",
                  descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                  preco: "R$ 40,00",
      
                  imagem: cenoura2
                },
                itens: [
                  {
                    nome: "Brócolis",
                    imagem: brocolis,
                  },
                  {
                    nome: "Aspargos",
                    imagem: aspargos,
                  },
                  {
                    nome: "Cenoura",
                    imagem: cenoura,
                  }
                ]
              }
            ]
          },
          {
            id: 7,
            nome: "Potager",
            imagem: potager,
            distancia: gerarNumeroAleatorio(1, 500),
            estrelas: gerarNumeroAleatorio(1, 5),
            cestas: [
              {
                detalhes: {
                  nome: "Pepinos",
                  descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                  preco: "R$ 40,00",
      
                  imagem: pepino
                },
                itens: [
                  {
                    nome: "Pepino",
                    imagem: pepino,
                  },
                ]
              },
              {
                detalhes: {
                  nome: "Brócolis, Aspargos e Cenoura",
                  descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
                  preco: "R$ 40,00",
      
                  imagem: cenoura2
                },
                itens: [
                  {
                    nome: "Brócolis",
                    imagem: brocolis,
                  },
                  {
                    nome: "Aspargos",
                    imagem: aspargos,
                  },
                  {
                    nome: "Cenoura",
                    imagem: cenoura,
                  }
                ]
              }
            ]
          }
    ]
}

export default produtores