function Ex5() {
    let numero = parseInt(prompt("Digite um número: "));
    let antecessor;

    antecessor = numero - 1;

    alert(`O antecessor desse número é o número ${antecessor}`);

}

//Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor.

function Ex6() {
    let base = parseInt(prompt("Digite a base: "));
    let altura = parseInt(prompt("Digite a altura: "));
    let area;

    area = (base * altura) / 2;

    alert(`A área desse triângulo é ${area}`);
}

//Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo.

function Ex7() {
    let mes = parseInt(prompt("Digite seu mês de nascimento: "));
    let ano = parseInt(prompt("Digite sua idade: "));
    let dia = parseInt(prompt("Digite seu dia de nascimento: "));
    let idadeT, mesD, anoD;

    anoD = ano * 365;
    mesD = mes * 30;
    idadeT = anoD + mesD + dia;

    alert(`Você tem ${idadeT} dias de vida!`);

}

//Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.

function Ex8() {
    let totalEleitores = parseInt(prompt("Quantos eleitores o município teve?"));
    let votosBranco = parseInt(prompt("Quantos desses votos foram brancos? "));
    let votosNulo = parseInt(prompt("Quantos desses votos foram nulos? "));
    let votosValidos, percentB, percentN, percentV;

    votosValidos = totalEleitores - votosBranco - votosNulo;

    percentB = (votosBranco / totalEleitores) * 100;
    percentN = (votosNulo / totalEleitores) * 100;
    percentV = (votosValidos / totalEleitores) * 100;

    alert(`Porcentagem de votos brancos é de ${percentB}%`);
    alert(`Porcentagem de votos nulos é de ${percentN}%`);
    alert(`Porcentagem de votos válidos é de ${percentV}%`);

}

//Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

function Ex9() {
    let salario = parseFloat(prompt("Digite seu salário atual: "));
    let reajuste = parseFloat(prompt("Digite o percentual de reajuste: "));
    let salarioF;

    salarioF = salario + (salario * reajuste / 100);
    alert(`O seu salário reajustado será de ${salarioF}`);

}

//Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.

function Ex10() {
    let custoFab = parseFloat(prompt("Informe o custo de fabricação: "));
    let valorF;


    valorF = custoFab + (custoFab * 0.28) + (custoFab * 0.45);
    alert(`O custo final deste carro é de ${valorF}`);

}

//O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.

function Ex11() {
    let carrosVendidos = parseFloat(prompt("Informe a quantidade de carros vendidos: "));
    let valorTotal = parseFloat(prompt("Informe o valor total de carros vendidos: "));
    let comissaoFixa = parseFloat(prompt("Informe o valor da comissão fixa: "));
    let salarioFixo = parseFloat(prompt("Informe o seu salário fixo: "));
    let salarioFinal, comissaoFixaTotal, comissaoVar;


    comissaoFixaTotal = carrosVendidos * comissaoFixa;
    comissaoVar = (5 / 100) * valorTotal;

    salarioFinal = comissaoFixaTotal + comissaoVar + salarioFixo;
    alert(`O valor final é de ${salarioFinal}`);

}

//Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.

function Ex12() {
    let celsius;
    let fahrenheit = parseFloat(prompt("Digite a temperatura em graus Fahrenheit: "));;

    celsius = ((5 * fahrenheit) - 160) / 9;
    alert(`A temperatura em Celsius é ${celsius}º`);

}

//Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valorcorrespondente em graus Celsius (baseado na fórmula abaixo): C = F - 32 5 9 Observação: Para testar se a sua resposta está correta saiba que 100oC = 212F.

function Ex13() {
    let n1 = parseFloat(prompt("Escreva sua nota 1: "));
    let n2 = parseFloat(prompt("Escreva sua nota 2: "));
    let n3 = parseFloat(prompt("Escreva sua nota 3: "));
    let mediaPonderada;


    mediaPonderada = (n1 * 2 + n2 * 3 + n3 * 5) / 10;
    alert(`A média final é de ${mediaPonderada}`);

}

//Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5.

function Ex14() {
    let numero = parseInt(prompt("Digite um valor:"));


    if (numero > 10) {
        alert("O valor digitado é maior que 10");
    } else {
        alert("O valor digitado é menor que 10");
    }

}

//Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10!

function Ex15() {
    let numero = parseInt(prompt("Digite um valor:"));

    if (numero >= 0) {
        alert("O valor digitado é positivo");
    } else {
        alert("O valor digitado é negativo");
    }

}

//Ler um valor e informar se ele é negativo ou positivo.

function Ex16() {
    let quantidade = parseInt(prompt("Digite o número de maçãs compradas:"));
    let custoTotal;


    if (quantidade < 12) {
        custoTotal = quantidade * 1.30;
    } else {
        custoTotal = quantidade * 1.00;
    }

    alert("O custo total da compra é: R$", custoTotal.toFixed(2));

}

//As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra.


function Ex17() {
    let nota1 = parseFloat(prompt("Digite a nota da primeira avaliação:"));
    nota2 = parseFloat(prompt("Digite a nota da segunda avaliação:"));
    let media;

    media = (nota1 + nota2) / 2;

    alert(` média do aluno é:  ${media.toFixed(2)}`);

    if (media >= 6) {
        alert("O aluno foi aprovado!");
    } else {
        alert("O aluno não foi aprovado.");
    }

}

//Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada.

function Ex18() {
    let anoNasc = parseInt(prompt("Qual é o seu ano de nascimento?"));
    let anoAtual = parseInt(prompt("Em que ano estamos?"));
    let idade;

    idade = anoAtual - anoNasc;

    if (idade >= 16) {
        alert(`Você é elegível para votar, pois tem ${idade} anos.`);
    } else {
        alert(`Você tem  ${idade} anos, portanto não pode votar.`);
    }

}

//Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).

function Ex19() {
    let valor1 = parseFloat(prompt("Digite um valor:"));
    let valor2 = parseFloat(prompt("Digite outro valor:"));
    let maiorDeles;


    if (valor1 > valor2) {
        maiorDeles = valor1;
    } else {
        maiorDeles = valor2;
    }

    alert(`O maior valor é ${maiorDeles}`);

}

//Leia dois valores e informe qual o maior deles.

function Ex20() {
    let valor1 = parseFloat(prompt("Digite um valor:"));
    let valor2 = parseFloat(prompt("Digite outro valor:"));
    let maior, menor;

    if (valor1 > valor2) {
        menor = valor2;
        maior = valor1;
    } else {
        menor = valor1;
        maior = valor2;
    }

    alert(`Os valores em ordem crescente são ${menor} e ${maior}`);

}

//Leia dois valores e retorne-os em ordem crescente

function Ex21() {
    let inicioHr = parseInt(prompt("Informe a hora de início do jogo:"));
    let fimHr = parseInt(prompt("Informe a hora do fim do jogo:"));
    let duracao;

    if (inicioHr > fimHr) {
        duracao = (24 - inicioHr) + fimHr;
    } else {
        duracao = fimHr - inicioHr;
    }

    alert(`O jogo de Xadrez durou ${duracao} horas.`);

}

//Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.

function Ex22() {
    let horasTrabalhadas = parseInt(prompt("Digite o número de horas trabalhadas no mês:"));
    let salarioHora = parseFloat(prompt("Digite o quanto você ganha por hora:"));
    let salarioTotal, salarioIntermediario, horasExtras, porcentagemExtra, porcentagemTotal;


    if (horasTrabalhadas < 161) {
        salarioTotal = horasTrabalhadas * salarioHora;
        alert(`O valor a ser recebido é ${salarioTotal}`);
    } else {
        porcentagemExtra = salarioHora * 0.5;
        horasExtras = horasTrabalhadas - 160;
        porcentagemTotal = horasExtras * porcentagemExtra;
        salarioIntermediario = salarioHora * horasTrabalhadas + porcentagemTotal;
        alert(`O valor a ser recebido com hora extra é ${salarioIntermediario}`);
    }

}

//A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas(considere que o mês possua 4 semanas exatas).

function Ex24() {
    let salarioFixo = parseFloat(prompt("Informe seu salário fixo: "));
    let vendas = parseFloat(prompt("Informe seu total de vendas mensal: "));
    let salarioTotal, comissao;

    if (vendas <= 1500) {
        comissao = vendas * 0.3;
        salarioTotal = comissao + salarioFixo;
    } else {
        comissao = vendas * 0.5;
        salarioTotal = comissao + salarioFixo;
    }

    alert(`O seu salário mensal foi de ${salarioTotal}`);

}

//Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que ultrapassar este valor, calcular e escrever o seu salário total.

function Ex25() {
    let numeroConta = parseFloat(prompt("Informe o número da sua conta: "));
    let saldo = parseFloat(prompt("Informe seu saldo em conta atual: "));
    let debito = parseFloat(prompt("Escreva o valor em débito: "));
    let credito = parseFloat(prompt("Escreva o valor de crédito: "));
    let saldoAtual;

    saldoAtual = (saldo - debito) + credito;

    if (saldoAtual >= 0) {
        alert(`Seu saldo atual é positivo, de R$${saldoAtual}`);
    } else {
        alert(`Seu saldo atual é negativo, de R$${saldoAtual}`);
    }

}

//Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.

function Ex26() {
    let qntdAtual = parseInt(prompt("Informe a quantidade atual de produtos no estoque: "));
    let qntdMax = parseInt(prompt("Informe a quantidade máxima de produtos no estoque: "));
    let qntdMin = parseInt(prompt("Informe a quantidade mínima de produtos no estoque: "));
    let qntdMedia;

    qntdMedia = (qntdMax + qntdMin) / 2;

    if (qntdAtual >= qntdMedia) {
        alert("Não efetuar compra");
    } else {
        alert("Efetuar compra");
    }

}

//Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar compra'.

function Ex27() {
    let valor = parseInt(prompt("Digite um valor:"));

    if (valor < 0) {
        alert("O valor digitado é Negativo");
    } else {
        if (valor === 0) {
            alert("O valor digitado é 0, portanto é neutro");
        } else {
            alert("O valor digitado é positivo");
        }
    }

}

//Ler um valor e escrever se é positivo, negativo ou zero.

function Ex28() {
    let valor1 = parseInt(prompt("Digite o primeiro valor:"));
    let valor2 = parseInt(prompt("Digite o segundo valor:"));
    let valor3 = parseInt(prompt("Digite o terceiro valor:"));
    let maior;


    if (valor1 > valor2 && valor1 > valor3) {
        maior = valor1;
        alert(`${valor1} é o maior valor.`);
    } else if (valor2 > valor1 && valor2 > valor3) {
        maior = valor2;
        alert(`${valor2} é o maior valor.`);
    } else {
        maior = valor3;
        alert(`${valor3} é o maior valor.`);
    }

}

//Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

function Ex29() {
    let v1 = parseInt(prompt("Digite o primeiro valor:"));
    let v2 = parseInt(prompt("Digite o segundo valor:"));
    let v3 = parseInt(prompt("Digite o terceiro valor:"));
    let soma;


    if (v1 > v2 && v1 > v3) {
        soma = v1;
        if (v2 > v3) {
            soma += v2;
        } else {
            soma += v3;
        }
    } else if (v2 > v1 && v2 > v3) {
        soma = v2;
        if (v1 > v3) {
            soma += v1;
        } else {
            soma += v3;
        }
    } else {
        soma = v3;
        if (v1 > v2) {
            soma += v1;
        } else {
            soma += v2;
        }
    }

    alert(`A soma dos dois maiores valores é: ${soma}`);

}

//Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores

function Ex30() {
    let valor1 = parseInt(prompt("Digite um valor:"));
    let valor2 = parseInt(prompt("Digite um segundo valor:"));
    let valor3 = parseInt(prompt("Digite um terceiro valor:"));
    let primeiro, segundo, terceiro;


    if (valor1 > valor2 && valor2 > valor3) {
        primeiro = valor1;
        segundo = valor2;
        terceiro = valor3;
    } else if (valor1 > valor3 && valor3 > valor2) {
        primeiro = valor1;
        segundo = valor3;
        terceiro = valor2;
    } else if (valor2 > valor1 && valor1 > valor3) {
        primeiro = valor2;
        segundo = valor1;
        terceiro = valor3;
    } else if (valor2 > valor3 && valor3 > valor1) {
        primeiro = valor2;
        segundo = valor3;
        terceiro = valor1;
    } else if (valor3 > valor1 && valor1 > valor2) {
        primeiro = valor3;
        segundo = valor1;
        terceiro = valor2;
    } else if (valor3 > valor2 && valor2 > valor1) {
        primeiro = valor3;
        segundo = valor2;
        terceiro = valor1;
    }

    alert(`Em ordem crescente ${terceiro}, ${segundo}, ${primeiro}`);

}

//Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem crescente.

function Ex31() {
    let lado1 = parseInt(prompt("Digite um valor:"));
    let lado2 = parseInt(prompt("Digite outro valor:"));
    let lado3 = parseInt(prompt("Digite mais um valor:"));
    let soma;

    soma = lado1 + lado2 + lado3;

    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        alert("É um triângulo");
    } else {
        alert("Não é um triângulo");
    }

}

//Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados.

function Ex32() {
    let time1 = prompt("Digite o nome do primeiro time:");
    let gol1 = parseInt(prompt("Agora informe quantos gols esse time marcou na partida:"));
    let time2 = prompt("Digite o nome do segundo time:");
    let gol2 = parseInt(prompt("Agora informe quantos gols esse time marcou na partida:"));



    if (gol1 > gol2) {
        alert(`O vencedor da partida foi o time ${time1}!`);
    } else if (gol2 > gol1) {
        alert(`O vencedor da partida foi o time ${time2}!`);
    } else {
        alert("Empate!");
    }

}

//Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.

function Ex33() {
    let litrosVend = parseFloat(prompt("Informe quantos litros você comprou:"));
    let tipoCombustivel = prompt("Informe qual foi o tipo de combustível que você abasteceu: G para gasolina e A para álcool");
    let aPagar;


    if (tipoCombustivel.toUpperCase() === "G") {
        if (litrosVend <= 20) {
          aPagar = (litrosVend * 3.30) - 0.03;
          alert(`O total a pagar é: R$${aPagar.toFixed(2)}`);
        } else {
          aPagar = (litrosVend * 3.30) - 0.05;
          alert(`O total a pagar é: R$${aPagar.toFixed(2)}`);
        }
      } else if (tipoCombustivel.toUpperCase() === "A") {
        if (litrosVend <= 20) {
          aPagar = (litrosVend * 2.90) - 0.04;
          alert(`O total a pagar é: R$${aPagar.toFixed(2)}`);
        } else {
          aPagar = (litrosVend * 2.90) - 0.06;
          alert(`O total a pagar é: R$${aPagar.toFixed(2)}`);
        }
      }
}

//Um posto está vendendo combustíveis com a seguinte tabela de descontos: Álcool: até 20 litros, desconto de 3% por litro acima de 20 litros, desconto de 5% por litro Gasolina: até 20 litros, desconto de 4% por litro acima de 20 litros, desconto de 6% por litro Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.

function Ex36() {
    let idadeHomem1 = parseInt(prompt("Digite a idade do primeiro homem: "));
    let idadeHomem2 = parseInt(prompt("Digite a idade do segundo homem: "));
    let idadeMulher1 = parseInt(prompt("Digite a idade da primeira mulher: "));
    let idadeMulher2 = parseInt(prompt("Digite a idade da segunda mulher: "));
    let soma, produto;

    
    if (idadeHomem1 > idadeHomem2 || idadeMulher1 > idadeMulher2) {
    soma = idadeHomem1 + idadeMulher2;
    produto = idadeHomem2 * idadeMulher1;
    alert(`O maior número é: ${soma}`);
    alert(`O produto é: ${produto}`);
    } else {
    soma = idadeHomem2 + idadeMulher1;
    produto = idadeHomem1 * idadeMulher2;
    alert(`A soma das idades do homem mais velho com a mulher mais nova é: ${soma}`);
    alert(`O produto das idades do homem mais novo com a mulher mais velha é: ${produto}`);
    }
}

//Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma das idades do homem mais velho     com a mulher mais nova, e o produto das idades do homem mais novo com a mulher mais velha.

function Ex37(){
    let kgMorango = parseFloat(prompt("Digite a quantidade de morangos que você comprou, em kg:"));
    let kgMaca = parseFloat(prompt("Digite a quantidade de maçãs que você comprou, em kg:"));
    let total, valorMorango, valorMaca, desconto;

    
    if (kgMorango <= 5) {
    valorMorango = kgMorango * 2.50;
    } else {
    valorMorango = kgMorango * 2.20;
    }
    
    if (kgMaca <= 5) {
    valorMaca = kgMaca * 1.80;
    } else {
    valorMaca = kgMaca * 1.50;
    }
    
    total = valorMorango + valorMaca;
    
    if (kgMorango + kgMaca > 8 || total > 25) {
    desconto = total * 0.10;
    total = total - desconto;
    }
    
   alert(`O valor da compra foi de: R$${total.toFixed(2)}.`);
}

//Uma fruteira está vendendo frutas com a seguinte tabela de preços: Até 5 Kg Acima de 5 Kg Morango R$ 2,50 por Kg R$ 2,20 por Kg Maçã R$ 1,80 por Kg R$ 1,50 por Kg Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.

