/*EXERCÍCIO 1 - IF...ELSE*/


ficha.avaliação_antropométrica.imc = ficha.avaliação_antropométrica.peso_atual / (ficha.avaliação_antropométrica.altura ** 2)


if(ficha.avaliação_antropométrica.imc > 25){
    document.write(`Acima do peso`)
} else{
    document.write(`Não está acima do peso`)
}

/*EXERCÍCIO 2 - IF...ELSE*/

ficha.avaliação_antropométrica.peso_desejado = Number.parseFloat(window.prompt("Qual o seu peso desejado? "));

if(ficha.avaliação_antropométrica.peso_desejado < ficha.avaliação_antropométrica.peso_atual){
    document.write("Seu objetivo é emagrecer<br>");
} else if (ficha.avaliação_antropométrica.peso_desejado > ficha.avaliação_antropométrica.peso_atual){
    document.write("Seu objetivo é ganhar massa<br>");
} else {
    document.write("Você já está no peso desejado<br>");
}

/* EXERCÍCIO 3 - IF...ELSE */

if(ficha.habitos_de_vida.sono.quantidade_de_horas < 7){
    document.write("Sono insuficiente!")
} else{
    document.write("Você está dormindo bem!")
}

/* EXERCÍCIO 4 - IF...ELSE */

if(ficha.avaliação_antropométrica.circunferência_abdominal > 102 && ficha.dados_pessoais.sexo == "masculino"){
    document.write("Risco cardiovascular!")
} else if(ficha.avaliação_antropométrica.circunferência_abdominal > 88 && ficha.genero == "feminino"){
    document.write("Risco cardiovascular!")
} else{
    document.write("Sem risco!")
}

/* EXERCÍCIO 5 - IF...ELSE */

ficha.consumo_de_agua = window.prompt("Quantos mililitros de água você bebe por dia?")

if(ficha.consumo_de_agua.quantidade_aproximada < 2){
    document.write("Consome menos que 2 litros de água por dia")
} else{
    document.write("Consome a quantidade suficiente de água")
}

/* EXERCÍCIO 6 - IF...ELSE */

document.write(ficha.avaliação_clínica_e_bioquímica.pressão_arterial > 140/90 ? "Hipertensão" : "Sem hipertensão")

/* EXERCÍCIO 7 - IF...ELSE */

document.write(ficha.habito_intestinal_frequencia_evacuatoria !== "diariamente" ? "Não evacua diariamente" : "Evacua pelo menos uma vez por dia");

/* EXERCÍCIO 8 - IF...ELSE */

document.write(ficha.avaliação_antropométrica.peso_habitual < ficha.avaliação_antropométrica.peso_atual ? "Risco de ganho recente" : "Sem risco de ganho recente");


/* EXERCÍCIO 9 - IF...ELSE */

document.write(
  ficha.avaliação_alimentar.frequencia_de_consumo.doces > ficha.avaliação_alimentar.frequencia_de_consumo.frutas
    ? "Consome mais doces do que frutas pela semana<br>"
    : "Consome mais frutas do que doces pela semana<br>"
);
/* EXERCÍCIO 10 - IF...ELSE */

document.write(ficha.historico_de_saude.triglicerides > 150 ? "Triglicerídeos acima que 150" : "Triglicerídeos abaixo de 150")