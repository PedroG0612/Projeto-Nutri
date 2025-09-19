
ficha.avaliação_antropométrica.imc = ficha.peso / (ficha.altura ** 2)


if(ficha.avaliação_antropométrica.imc > 25){
    console.log(`Acima do peso`)
} else{
    console.log(`Não está acima do peso`)
}

ficha.avaliação_antropométrica.peso_desejado = Number.parseInt(window.prompt("Qual o seu peso desejado? "))

if(ficha.avaliação_antropométrica.peso_desejado < ficha.avaliação_antropométrica.peso_atual){
    console.log("Seu objetivo é emagrecer")
} else if (ficha.avaliação_antropométrica.peso_desejado > ficha.avaliação_antropométrica.peso_atual){
    console.log("Seu objetivo é ganhar massa")
}

if(ficha.habitos_de_vida.sono.quantidade_de_horas < 7){
    console.log("Sono insuficiente!")
} else{
    console.log("Você está dormindo bem!")
}


ficha.genero = window.prompt("Qual o seu gênero?")


if(ficha.avaliação_antropométrica.circunferência_abdominal > 102 && ficha.sexo == "masculino"){
    console.log("Risco cardiovascular!")
} else if(ficha.avaliação_antropométrica.circunferência_abdominal > 88 && ficha.genero == "feminino"){
    console.log("Risco cardiovascular!")
} else{
    console.log("Sem risco!")
}

ficha.consumo_de_agua = window.prompt("Quantos mililitros de água você bebe por dia?")

if(ficha.consumo_de_agua.quantidade_aproximada < 2){
    console.log("Consome menos que 2 litros de água por dia")
} else{
    console.log("Consome a quantidade suficiente de água")
}


document.write(ficha.avaliação_clínica_e_bioquímica.pressão_arterial > 140/90 ? "Hipertensão" : "Sem hipertensão")


document.write(ficha.habito_intestinal_frequencia_evacuatoria !== "diariamente" ? "Não evacua diariamente" : "Evacua pelo menos uma vez por dia");


ficha.avaliação_antropométrica.peso_atual = 76

document.write(ficha.pesoHabitual < ficha.peso ? "Risco de ganho recente" : "Sem risco de ganho recente");

ficha.consome

ficha.consome.doces = 10
ficha.consome.frutas = 20

document.write(ficha.consome.doces > ficha.consome.frutas ? "Consome mais doces do que frutas pela semana" : "Consome mais frutas do que doces pela semana");

ficha.triglicerídeos = 170

document.write(ficha.triglicerídeos > 150 ? "Triglicerídeos acima que 150" : "Triglicerídeos abaixo de 150")