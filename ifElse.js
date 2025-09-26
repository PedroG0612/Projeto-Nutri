
ficha.avaliação_antropométrica.imc = ficha.peso / (ficha.altura ** 2)


if(ficha.avaliação_antropométrica.imc > 25){
    document.write(`Acima do peso`)
} else{
    document.write(`Não está acima do peso`)
}

ficha.avaliação_antropométrica.peso_desejado = Number.parseInt(window.prompt("Qual o seu peso desejado? "))

if(ficha.avaliação_antropométrica.peso_desejado < ficha.avaliação_antropométrica.peso_atual){
    document.write("Seu objetivo é emagrecer")
} else if (ficha.avaliação_antropométrica.peso_desejado > ficha.avaliação_antropométrica.peso_atual){
    document.write("Seu objetivo é ganhar massa")
}

if(ficha.habitos_de_vida.sono.quantidade_de_horas < 7){
    document.write("Sono insuficiente!")
} else{
    document.write("Você está dormindo bem!")
}

if(ficha.avaliação_antropométrica.circunferência_abdominal > 102 && ficha.sexo == "masculino"){
    document.write("Risco cardiovascular!")
} else if(ficha.avaliação_antropométrica.circunferência_abdominal > 88 && ficha.genero == "feminino"){
    document.write("Risco cardiovascular!")
} else{
    document.write("Sem risco!")
}

ficha.consumo_de_agua = window.prompt("Quantos mililitros de água você bebe por dia?")

if(ficha.consumo_de_agua.quantidade_aproximada < 2){
    document.write("Consome menos que 2 litros de água por dia")
} else{
    document.write("Consome a quantidade suficiente de água")
}


document.write(ficha.avaliação_clínica_e_bioquímica.pressão_arterial > 140/90 ? "Hipertensão" : "Sem hipertensão")


document.write(ficha.habito_intestinal_frequencia_evacuatoria !== "diariamente" ? "Não evacua diariamente" : "Evacua pelo menos uma vez por dia");


document.write(ficha.avaliação_antropométrica.peso_habitual < ficha.avaliação_antropométrica.peso_atual ? "Risco de ganho recente" : "Sem risco de ganho recente");


ficha.consome.doces = 10
ficha.consome.frutas = 20

document.write(ficha.avaliação_antropométrica.frequencia_de_consumo.doces > ficha.avaliação_antropométrica.frequencia_de_consumo.frutas ? "Consome mais doces do que frutas pela semana" : "Consome mais frutas do que doces pela semana");

ficha.triglicerídeos = 170

document.write(ficha.triglicerídeos > 150 ? "Triglicerídeos acima que 150" : "Triglicerídeos abaixo de 150")