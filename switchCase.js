


switch(ficha.habitos_de_vida.estresse.nivel){
    case "Alto":
        document.write("Requer descansar mais, se alimentar melhor e beber mais água")
    break
    case "médio":
        document.write("Descansar um pouco mais")
    break
    case "baixo":
        document.write("Descansar um pouco")
    break
}

switch(ficha.habitos_de_vida.atividade_fisica.tipo_de_exercicio){
    case "musculação":
        document.write("Faz musculação")
    break
    
    case "corrida":
        document.write("Pratica corrida")
    break

    default:
        document.write("nenhuma")
        break
}


switch(ficha.avaliação_alimentar.metodos_de_preparo.metodo){
    case "frito":
        document.write("Prefere frito")
    break

    case "assado":
        document.write("Prefere assado")
    break

    case "grelhado":
        document.write("Prefere grelhado")
} 


switch(ficha.habitos_de_vida.sono.qualidade_do_sono){
    case "leve":
        document.write("Qualidade de sono leve")
    break

    case "Regular":
        document.write("Qualidade de sono regular")
    break

    case "Bom":
        document.write("Qualidade de sono Bom")
}



switch(ficha.habito_intestinal.consistencia_das_fezes){
    case 1:
        document.write("Tipo 1: Caroços duros e separados, como nozes (difícil de passar).")
    break

    case 2:
        document.write("Tipo 2: Forma de salsicha, mas granuloso.")
    break

    case 3: 
        document.write("Tipo 3: Como uma salsicha, mas com fissuras na superfície.")
    break

    case 4:
        document.write("Tipo 4: Como uma salsicha ou serpente, suave e macio.")
    break

    case 5:
        document.write("Tipo 5: Bolhas suaves com bordas nítidas (que passam facilmente).")
    break

    case 6:
        document.write("Tipo 6: Peças fofas com bordas em pedaços.")
    break

    case 7: 
    document.write("Tipo 7: Aquoso, sem partes sólidas, inteiramente líquido.")
    break


    default:
        document.write("Tipo inválido")
}


switch(true){
    case ficha.avaliação_antropométrica.imc < 19:
        document.write("Abaixo do peso!")
    break

    case ficha.avaliação_antropométrica.imc > 19 && ficha.avaliação_antropométrica.imc < 25:
        document.write("Peso Normal")
    break

    case ficha.avaliação_antropométrica.imc > 25 && ficha.avaliação_antropométrica.imc < 30:
        document.write("Sobrepeso")
    break

    case ficha.avaliação_antropométrica.imc > 30 && ficha.avaliação_antropométrica.imc < 35:
        document.write("Obesidade Grau I")
    break

    case ficha.avaliação_antropométrica.imc > 35 && ficha.avaliação_antropométrica.imc < 40:
        document.write("Obesidade de Grau II")
    break

    case ficha.avaliação_antropométrica.imc >= 40:
        document.write("Obesidade de Grau III( Obesidade Grave )")
    break
    }


switch(ficha.suplementos.usados){
    case "whey":
        document.write("Suplemento: Whey")
    break

    case "creatina":
        document.write("Suplemento: Creatina")
    break

    case "vitaminaC":
        document.write("Suplemento: Vitamina C")
    break


    default:
        document.write("Suplemento não reconhecido!")
    break
}


switch(ficha.avaliação_alimentar.rotina_alimentar.tipos_de_refeições_fora_de_casa[0]){
    case "lanche":
        document.write("Refeição fora de casa: Lanche")
    break

    case "self-service":
        document.write("Refeição fora de casa: Self-service")
    break
    
    
    case "fast food":
        document.write("Refeição fora de casa: Fast-food")
    break


    default:
        document.write("Refeição não reconhecida!")
    break
}


switch(true){
    case ficha.atividade_fisica.frequencia_semanal = 0:
        document.write("Sedentário")
    break


    case ficha.atividade_fisica.frequencia_semanal == 1 || ficha.atividade_fisica.frequencia_semanal == 2:
        document.write("Leve")
    break

    case ficha.atividade_fisica.frequencia_semanal >= 3 && ficha.atividade_fisica.frequencia_semanal <= 5:
        document.write("Moderado")
    break

    case ficha.atividade_fisica.frequencia_semanal == 6 || ficha.atividade_fisica.frequencia_semanal == 7:
        document.write("Intenso")
    break

}


let estadoCivil = "solteiro"


switch(estadoCivil){

}


