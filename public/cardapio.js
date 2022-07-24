$(document).ready(function() {

let itens = {
        salsicha : {
            'img'  : 'src/assets/tradicional-salsicha.jpg',
            'nome' : 'DOG TRADICIONAL SALSICHA',
            'descrição' : 'Pão, salsicha, milho, ervilha, passas, batata palha, azeitona, ovo de codorna, queijo ralado, ketchup, maionese e mostarda.',
            'preço' : 'R$8,00'
        },
        linguiça : {
            'img'  : 'src/assets/tradicional-linguica.jpg',
            'nome' : 'DOG TRADICIONAL LINGUIÇA',
            'descrição' : 'Pão, linguiça, milho, ervilha, passas, batata palha, azeitona, ovo de codorna, queijo ralado, ketchup, maionese e mostarda.',
            'preço' : 'R$9,00'
        },
        dogao : {
            'img'  : 'src/assets/dogao.jpg',
            'nome' : 'BIG DOGÃO',
            'descrição' : 'Pão, 2 salsichas, mussarela, purê de batatas, carne moída, cheddar, milho, ervilha, passas, batata palha, azeitona, ovo de codorna, ketchup, maionese e mostarda.',
            'preço' : 'R$16,00'
        },
        comum : {
            'img'  : 'src/assets/prensado-tradicional.jpg',
            'nome' : 'PRENSADO COMUM',
            'descrição' : 'Pão, salsicha, vinagrete, milho, ervilha, batata palha, cheddar, catupiry, ketchup, maionese e mostarda.',
            'preço' : 'R$10,00'
        },
        calabresa : {
            'img'  : 'src/assets/calabresa.jpg',
            'nome' : 'PRENSADO CALABRESA',
            'descrição' : 'Pão, salsicha, calabresa, vinagrete, milho, ervilha, batata palha, cheddar, catupiry, ketchup, maionese e mostarda.',
            'preço' : 'R$11,00'
        },
        frango : {
            'img'  : 'src/assets/frango.jpg',
            'nome' : 'PRENSADO FRANGO',
            'descrição' : 'Pão, salsicha, frango desfiado, vinagrete, milho, ervilha, batata palha, cheddar, catupiry, ketchup, maionese e mostarda.',
            'preço' : 'R$12,00'
        },
        pizza : {
            'img'  : 'src/assets/pizza.jpg',
            'nome' : 'PRENSADO PIZZA',
            'descrição' : 'Pão, salsicha, mussarela, presunto, orégano, vinagrete, milho, ervilha, batata palha, cheddar, catupiry, ketchup, maionese e mostarda.',
            'preço' : 'R$12,00'
        },
        bacon : {
            'img'  : 'src/assets/bacon.jpg',
            'nome' : 'PRENSADO BACON',
            'descrição' : 'Pão, salsicha, bacon, vinagrete, milho, ervilha, batata palha, cheddar, catupiry, ketchup, maionese e mostarda.',
            'preço' : 'R$12,00'
        },
        carneSeca : {
            'img'  : 'src/assets/carne-seca.jpg',
            'nome' : 'PRENSADO CARNE SECA',
            'descrição' : 'Pão, salsicha, carne seca, vinagrete, milho, ervilha, batata palha, cheddar, catupiry, ketchup, maionese e mostarda.',
            'preço' : 'R$14,00'
        },
        camarao : {
            'img'  : 'src/assets/camarao.jpg',
            'nome' : 'PRENSADO CAMARÃO',
            'descrição' : 'Pão, salsicha, camarão, vinagrete, milho, ervilha, batata palha, cheddar, catupiry, ketchup, maionese e mostarda.',
            'preço' : 'R$14,00'
        },
        completao : {
            'img'  : 'src/assets/completao.jpg',
            'nome' : 'PRENSADÃO COMPLETÃO',
            'descrição' : 'Pão, salsicha, calabresa, frango desfiado, bacon, queijo, presunto, carne seca, camarão, vinagrete, milho, ervilha, batata palha, cheddar, catupiry, ketchup, maionese e mostarda.',
            'preço' : 'R$26,00'
        },
        nutella : {
            'img'  : 'src/assets/nutella.jpg',
            'nome' : 'PRENSADO NUTELLA C/ MORANGO',
            'descrição' : 'Pão, camada generosa de nutella e bastante morango.',
            'preço' : ' R$13,00'
        },
        banana : {
            'img'  : 'src/assets/banana.jpg',
            'nome' : 'PRENSADO BANANA C/ DOCE DE LEITE',
            'descrição' : 'Pão, mussarela, banana, doce de leite e uma pitada de canela em pó.',
            'preço' : ' R$13,00'
        },
        romeu : {
            'img'  : 'src/assets/romeu.jpg',
            'nome' : 'PRENSADO ROMEU E JULIETA',
            'descrição' : 'Pão, queijo branco e goiabada.',
            'preço' : 'R$12,00'
        },
        kuat : {
            'img'  : 'src/assets/kuat.jpg',
            'nome' : 'Kuat 2 litros',
            'descrição' : '',
            'preço' : 'R$5,50'
        },
        refrigerante : {
            'img'  : 'src/assets/refri.jpg',
            'nome' : 'Refrigerante sabores 200 ml',
            'descrição' : '',
            'preço' : 'R$3,00'
        },
        coca : {
            'img'  : 'src/assets/coca.jpg',
            'nome' : 'Mini coca 220 ml',
            'descrição' : '',
            'preço' : 'R$4,00'
        },
        guaravita : {
            'img'  : 'src/assets/guaravita.jpg',
            'nome' : 'Guaraná natural 290 ml',
            'descrição' : '',
            'preço' : 'R$2,00'
        }
}

let itensContainer = $('.itens-container')

function listItens() {

    for(let i in itens) {
        console.log(itens[i])

        itensContainer.append(`
        <div class="item-card">
            <div class="item-img">
                <img src="${itens[i].img}"/>
            </div>
            <div class="item-description">
                <h3 class="item-text">${itens[i].nome}</h3>
                <p class="item-text">${itens[i].descrição}</p>
                <h4 class="item-text item-price">${itens[i].preço}</h4>
            </div>
        </div>
        `)
    }
}

listItens()







})