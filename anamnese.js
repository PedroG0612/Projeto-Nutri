/* EXERCÍCIO 1 - DO ... WHILE */


let quantidadeDeAgua = ficha.avaliação_antropométrica.peso_atual * 35
do  {
    document.write(`Você bebeu 200ml de água, faltam ${quantidadeDeAgua}ml para atingir a quantidade ideal por dia!<br>`)
    quantidadeDeAgua = quantidadeDeAgua - 200   
} while (quantidadeDeAgua > 0) 
    document.write(`Você bebeu a quantidade ideal de água por dia!<br>`)


/* EXERCÍCIO 2 - DO ... WHILE */


ficha.habitos_de_vida.sono.quantidade_de_horas = 0;
let tempoMinimoDeSono = 8;

do {
    let tempoDormido = tempoMinimoDeSono - ficha.habitos_de_vida.sono.quantidade_de_horas
    document.write(`Você dormiu por ${ficha.habitos_de_vida.sono.quantidade_de_horas} horas, faltam ${tempoDormido} horas para atingir a quantidade ideal de sono por dia!<br>`)
    ficha.habitos_de_vida.sono.quantidade_de_horas = ficha.habitos_de_vida.sono.quantidade_de_horas + 1
} while (ficha.habitos_de_vida.sono.quantidade_de_horas <= tempoMinimoDeSono) {
    document.write(`Você dormiu a quantidade ideal de sono por dia!<br>`)
}


/* EXERCÍCIO 3 - DO ... WHILE */

do {
    document.write(`Sua circunferência abdominal é de ${ficha.avaliação_antropométrica.circunferência_abdominal}cm, você está acima do peso ideal!<br>`)
    ficha.avaliação_antropométrica.circunferência_abdominal = ficha.avaliação_antropométrica.circunferência_abdominal - 1
} while (ficha.avaliação_antropométrica.circunferência_abdominal >89 && ficha.dados_pessoais.sexo === "masculino" || ficha.avaliação_antropométrica.circunferência_abdominal > 79 && ficha.dados_pessoais.sexo === "feminino") {
    document.write(`Sua circunferência Abdominal é de ${ficha.avaliação_antropométrica.circunferência_abdominal} cm, Parabéns você atingiu um valor ideal de acordo com o seu genêro!<br>`)
}


/* EXERCÍCIO 4 - DO ... WHILE */

do {
    document.write(`Seu nível de triglicerídeos é de ${ficha.historico_de_saude.triglicerides} mg/dL, você está acima do valor ideal!<br>`)
    ficha.historico_de_saude.triglicerides = ficha.historico_de_saude.triglicerides - 5
} while (ficha.historico_de_saude.triglicerides > 150) {
    document.write(`Seu nível de triglicerídeos é de ${ficha.historico_de_saude.triglicerides} mg/dL, Parabéns você atingiu um valor ideal!<br>`)
}


/* EXERCÍCIO 5 - DO ... WHILE */

if (ficha.avaliação_alimentar.frequencia_de_consumo.frutas === 3) {
    document.write(`Você comeu ${ficha.avaliação_alimentar.frequencia_de_consumo.frutas} frutas, o ideal por dia!<br>`)
} else {
    do {
        document.write(`Você comeu ${ficha.avaliação_alimentar.frequencia_de_consumo.frutas} frutas hoje, faltam ${3 - ficha.avaliação_alimentar.frequencia_de_consumo.frutas} para atingir a quantidade ideal por dia!<br>`)
        ficha.avaliação_alimentar.frequencia_de_consumo.frutas = ficha.avaliação_alimentar.frequencia_de_consumo.frutas + 1
    } while (ficha.avaliação_alimentar.frequencia_de_consumo.frutas <= 2);
    document.write(`Você comeu ${ficha.avaliação_alimentar.frequencia_de_consumo.frutas} frutas, o ideal por dia!<br>`)
}


/* EXERCÍCIO 6 - DO ... WHILE */

do {
    document.write(`Você treinou por ${ficha.habitos_de_vida.atividade_fisica.duracao} minutos, faltam ${150 - ficha.habitos_de_vida.atividade_fisica.duracao} minutos para atingir a quantidade ideal da semana!<br>`)
    ficha.habitos_de_vida.atividade_fisica.duracao = ficha.habitos_de_vida.atividade_fisica.duracao + 30
} while ( ficha.habitos_de_vida.atividade_fisica.duracao <= 120) {
    document.write(`Você treinou por ${ficha.habitos_de_vida.atividade_fisica.duracao} minutos, o ideal por semana!<br>`)
}


/* EXERCÍCIO 7 - DO ... WHILE */

do {
    document.write(`Seu peso atual é ${ficha.avaliação_antropométrica.peso_atual}kg, faltam ${ficha.avaliação_antropométrica.peso_atual - ficha.avaliação_antropométrica.peso_desejado}kg para atingir o peso desejado!<br>`)
    ficha.avaliação_antropométrica.peso_atual = ficha.avaliação_antropométrica.peso_atual - 0.5
} while ( ficha.avaliação_antropométrica.peso_atual > ficha.avaliação_antropométrica.peso_desejado) {
    document.write(`Parabéns! Seu peso atual é ${ficha.avaliação_antropométrica.peso_atual}kg, você atingiu o peso desejado!<br>`)
}


/* EXERCÍCIO 8 - DO ... WHILE */

if (ficha.habitos_de_vida.habito_intestinal.frequencia_evacuatoria >= 1) {
    document.write("Você já foi no banheiro hoje, está ótimo<br>")
} else {
    do {
        document.write("Você ainda não foi no banheiro, tem que ir pelo menos uma vez<br>")
        ficha.habitos_de_vida.habito_intestinal.frequencia_evacuatoria = ficha.habitos_de_vida.habito_intestinal.frequencia_evacuatoria + 1
    } while (ficha.habitos_de_vida.habito_intestinal.frequencia_evacuatoria < 1) {
        document.write("Você já foi no banheiro hoje, está ótimo<br>")
    }
}


/* EXERCÍCIO 9 - DO ... WHILE */

if (ficha.avaliação_alimentar.frequencia_de_consumo.verduras_e_legumes > 2) {
    document.write(`Você comeu ${ficha.avaliação_alimentar.frequencia_de_consumo.verduras_e_legumes} porções de vegetais na refeição, mais que o ideal  de porções por refeição!<br>`)
} else if (ficha.avaliação_alimentar.frequencia_de_consumo.verduras_e_legumes === 2) {
    document.write(`Você comeu ${ficha.avaliação_alimentar.frequencia_de_consumo.verduras_e_legumes} porções de vegetais na refeição, o mínimo ideal de porções por refeição!<br>`)
} else {
    do {
        document.write(`Você comeu ${ficha.avaliação_alimentar.frequencia_de_consumo.verduras_e_legumes} porções de vegetais na refeição, faltam ${2 - ficha.avaliação_alimentar.frequencia_de_consumo.verduras_e_legumes} para atingir a quantidade ideal de porções por refeição!<br>`)
        ficha.avaliação_alimentar.frequencia_de_consumo.verduras_e_legumes = ficha.avaliação_alimentar.frequencia_de_consumo.verduras_e_legumes + 1
    } while (ficha.avaliação_alimentar.frequencia_de_consumo.verduras_e_legumes < 2) {
        document.write(`Você comeu ${ficha.avaliação_alimentar.frequencia_de_consumo.verduras_e_legumes} porções de vegetais na refeição, o mínimo ideal  de porções por refeição!<br>`)
    }
}


/* EXERCÍCIO 10 - DO ... WHILE */

do { 
    document.write(`Seu nível de colesterol total é de ${ficha.historico_de_saude.colesterol} mg/dL, você está acima do valor ideal!<br>`)
    ficha.historico_de_saude.colesterol = ficha.historico_de_saude.colesterol - 10
} while (ficha.historico_de_saude.colesterol >= 200) {
    document.write(`Seu nível de colesterol total é de ${ficha.historico_de_saude.colesterol} mg/dL, Parabéns você atingiu um valor ideal!<br>`)
}
