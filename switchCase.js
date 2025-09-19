let estresse = "Alto"


switch(estresse){
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

let tipoDeAtividadeFisica = "musculação"

switch(tipoDeAtividadeFisica){
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


let metodoDePreparo = "assado"

switch(metodoDePreparo){
    case "frito":
        document.write("Prefere frito")
    break

    case "assado":
        document.write("Prefere assado")
    break

    case "grelhado":
        document.write("Prefere grelhado")
}

let qualidadeSono = "Bom"

switch(qualidadeSono){
    case "leve":
        document.write("Qualidade de sono leve")
    break

    case "Regular":
        document.write("Qualidade de sono regular")
    break

    case "Bom":
        document.write("Qualidade de sono Bom")
}

let fezesConsistencia = 3

switch(fezesConsistencia){
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


let peso = 70
let altura = 1.79

let imc = peso / altura**2

switch(true){
    case imc < 19:
        document.write("Abaixo do peso!")
    break

    case imc > 19 && imc < 25:
        document.write("Peso Normal")
    break

    case imc > 25 && imc < 30:
        document.write("Sobrepeso")
    break

    case imc > 30 && imc < 35:
        document.write("Obesidade Grau I")
    break

    case imc > 35 && imc < 40:
        document.write("Obesidade de Grau II")
    break

    case imc >= 40:
        document.write("Obesidade de Grau III( Obesidade Grave )")
    break
    }


let tipoSuplemento = "creatina"

switch(tipoSuplemento){
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


let refeicaoTipo = "fast food"

switch(refeicaoTipo){
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


let frequenciaExercicioSemanal = 3


switch(true){
    case frequenciaExercicioSemanal = 0:
        document.write("Sedentário")
    break


    case frequenciaExercicioSemanal == 1 || frequenciaExercicioSemanal == 2:
        document.write("Leve")
    break

    case frequenciaExercicioSemanal >= 3 && frequenciaExercicioSemanal <= 5:
        document.write("Moderado")
    break

    case frequenciaExercicioSemanal == 6 || frequenciaExercicioSemanal == 7:
        document.write("Intenso")
    break

}


let estadoCivil = "solteiro"


switch(estadoCivil){

}


