let ficha = {
    dados_pessoais: {
    nome_completo: "gerson",
data_de_nascimento: "30/11",
sexo: "masculino",
estado_civil:"solteiro",
profissao: "programador",
escolaridade: "ensino superior completo",
telefone: 11910910626,
email: "guilhermevilares030@gmail.com",
endereco: "rua oratorio,333"
},
queixa: {
    motivo_da_consulta: "sobrepeso",
    objetivo: "emagrecimento",
},
historico_de_saude: {
    hipertensao: true,
    diabetes: true,
    colesterol: 250,
    triglicerides: 250,
    doencas_gastrointestinais: true,
    doencas_renais: true,
    doencas_hepaticas: true,
    doencas_cardiacas: true,
    doencas_respiratorias: true,
    doencas_autoimunes: true,
    alergias: true,
    intolerancias_alimentares:true,    
},
cirurgias:{
    tipo: "bariatrica",
    data: "27/12",
},
uso_de_medicamentos:{
    nome: "dipirona",
    dose: "1 comprimido",
    frequencia: "mensalmente",
    tempo_de_uso: "3 meses",

},
uso_de_suplementos:{
    tipo: "whey",
    dose: "1 scoop",
    frequencia: "semanalmente",
    tempo_de_uso: "1 mes",

},
historico_familiar:{
    obesidade:true,
    diabetes:true,
    hipetensao:true,
    cancer:true,
    doencas_cardiacas:true,
},
habitos_de_vida:{
  sono: {
    horario_que_dorme: "22:30",
    horario_que_acorda: "7:30",
    qualidade_do_sono: "pesado",
    quantidade_de_horas: 9,

  },
  estresse:{
    nivel:"baixo",
    causas_principais: "trabalho",

  },
  uso_de_medicamentos:{
    nome: "dipirona",
    dose: "1 comprimido",
    frequencia: "mensalmente",
    tempo_de_uso: "3 meses",

},
  atividade_fisica: {
    tipo_de_exercicio: "calistenia",
    frequencia_semanal: 3,
    duracao: 30,
    intensidade: "baixa"
  },
  habito_intestinal: {

    frequencia_evacuatoria: 2,
    consistencia_das_fezes: "tipo 3",
    sintomas_associados: "nenhum",

  },
  consumo_de_agua: {
    quantidade_aproximada: "1,5 litros",

  },
  consumo_de_alcool:{
    frequencia: "1 vez por mes",
    tipo: "",
    quantidade: "2 copos"
  },
  tabagismo: {
    fuma_atualmente: false,
    fumou_anteriormente: false,
    tempo_de_uso_ou_abstinencia: null,
  }
},
 avaliação_alimentar: {
    preferencias_e_aversões: {
        alimentos_preferidos: ["maçã", "lasanha"],
        alimentos_que_não_gosta: ['abóbora'],
        alimentos_que_causam_desconforto: [],
 },   
    intolerancias_e_alergias: {
        relatadas: [],
        confirmadas_por_exame: []
    },
    rotina_alimentar: {
        cafe_da_manha: {
            horario: "9:30",
            alimentos_e_quantidades: [],
        },
        lanche_da_manha: "",
        almoço: {
            entrada: "salada",
            prato_principal: [],
            acompanhamentos: []
        },
        lanche_da_tarde: "",
        jantar: "",
        ceia: '',
        petiscos_e_beliscos_ao_longo_do_dia: "",
        consumo_de_doces: "",
        consumo_de_alimentos_ultraprocessados: "",
        frequencia_de_refeições_fora_de_casa: 3,


    },
    metodos_de_preparo: {
        metodo: "assado",
        composição: "óleo"
    },
    frequencia_de_consumo: {
        frutas: 2,
        verduras_e_legumes: 1,
        cereais_integrais: 3,
        leguminosas: 4,
        carnes_ovos_e_peixes: 5,
        laticinios: 7,
        doces: 8,
        refrigerantes_sucosIndustrializados: 11,
        fast_food: 11
    }
 },
 avaliação_antropométrica: {
    peso_atual: 87,
    altura: 1.83,
    imc: this.pesoAtual / this.altura**2,
    peso_habitual: 82,
    peso_desejado: 75,
    circunferência_abdominal: 120,
    circunferência_quadril: 100,
    circunferência_braço: 40,
    dobras_cutâneas: null,
    percentual_de_gordura_corporal: 23,
    massa_magra: 30
 },
 avaliação_clínica_e_bioquímica: {
    pressão_arterial: 140/90,
    exames_recentes: [],
 },
 expectativas_e_objetivos_do_paciente: {
    estéticos: "emagrecer",
    clínicos: "controlar colesterol",
    qualidade_de_vida: "melhorar sono",
    esportivos: "perfomance"
 }
}








/* EXERCÍCIO 1 - DO ... WHILE */



/*let quantidadeDeAgua = ficha.avaliação_antropométrica.peso_atual * 35
do  {
    console.log(`Você bebeu 200ml de água, faltam ${quantidadeDeAgua}ml para atingir a quantidade ideal por dia!`)
    quantidadeDeAgua = quantidadeDeAgua - 200   
} while (quantidadeDeAgua > 0) {
    console.log(`Você bebeu a quantidade ideal de água por dia!`)
}
*/

/* EXERCÍCIO 2 - DO ... WHILE */

 /*ficha.habitos_de_vida.sono.quantidade_de_horas = 0;
let tempoMinimoDeSono = 8;

do {
    let tempoDormido = tempoMinimoDeSono - ficha.habitos_de_vida.sono.quantidade_de_horas
    console.log(`Você dormiu por ${ficha.habitos_de_vida.sono.quantidade_de_horas} horas, faltam ${tempoDormido} horas para atingir a quantidade ideal de sono por dia!`)
    ficha.habitos_de_vida.sono.quantidade_de_horas = ficha.habitos_de_vida.sono.quantidade_de_horas + 1
} while (ficha.habitos_de_vida.sono.quantidade_de_horas <= tempoMinimoDeSono) {
    console.log(`Você dormiu a quantidade ideal de sono por dia!`)
} */

/* EXERCÍCIO 3 - DO ... WHILE */


   /* do {
        console.log(`Sua circunferência abdominal é de ${ficha.avaliação_antropométrica.circunferência_abdominal}cm, você está acima do peso ideal!`)
        ficha.avaliação_antropométrica.circunferência_abdominal = ficha.avaliação_antropométrica.circunferência_abdominal - 1
    } while (ficha.avaliação_antropométrica.circunferência_abdominal >89 && ficha.dados_pessoais.sexo === "masculino" || ficha.avaliação_antropométrica.circunferência_abdominal > 79 && ficha.dados_pessoais.sexo === "feminino") {
        console.log(`Sua circunferência Abdominal é de ${ficha.avaliação_antropométrica.circunferência_abdominal} cm, Parabéns você atingiu um valor ideal de acordo com o seu genêro!`)
    } */

/* EXERCÍCIO 4 - DO ... WHILE */



  /*       do {
            console.log(`Seu nível de triglicerídeos é de ${ficha.historico_de_saude.triglicerides} mg/dL, você está acima do valor ideal!`)
            ficha.historico_de_saude.triglicerides = ficha.historico_de_saude.triglicerides - 5
         } while (ficha.historico_de_saude.triglicerides > 150) {
            console.log(`Seu nível de triglicerídeos é de ${ficha.historico_de_saude.triglicerides} mg/dL, Parabéns você atingiu um valor ideal!`)
         }  */

/* EXERCÍCIO 5 - DO ... WHILE */

/*

if (ficha.avaliação_alimentar.frequencia_de_consumo.frutas === 3) {
    console.log(`Você comeu ${ficha.avaliação_alimentar.frequencia_de_consumo.frutas} frutas, o ideal por dia!`)
} else {

do 

    console.log(`Você comeu ${ficha.avaliação_alimentar.frequencia_de_consumo.frutas} frutas hoje, faltam ${3 - ficha.avaliação_alimentar.frequencia_de_consumo.frutas} para atingir a quantidade ideal por dia!`),
    ficha.avaliação_alimentar.frequencia_de_consumo.frutas = ficha.avaliação_alimentar.frequencia_de_consumo.frutas + 1
    
  while (ficha.avaliação_alimentar.frequencia_de_consumo.frutas <= 2);
    console.log(`Você comeu ${ficha.avaliação_alimentar.frequencia_de_consumo.frutas} frutas, o ideal por dia!`)

} */
/* EXERCÍCIO 6 - DO ... WHILE */



/*do {
    console.log(`Você treinou por ${ficha.habitos_de_vida.atividade_fisica.duracao} minutos, faltam ${150 - ficha.habitos_de_vida.atividade_fisica.duracao} minutos para atingir a quantidade ideal da semana!`)
    ficha.habitos_de_vida.atividade_fisica.duracao = ficha.habitos_de_vida.atividade_fisica.duracao + 30
} while ( ficha.habitos_de_vida.atividade_fisica.duracao <= 120) {
    console.log(`Você treinou por ${ficha.habitos_de_vida.atividade_fisica.duracao} minutos, o ideal por semana!`)
} */

/* EXERCÍCIO 7 - DO ... WHILE */



/* do {
    console.log(`Seu peso atual é ${ficha.avaliação_antropométrica.peso_atual}kg, faltam ${ficha.avaliação_antropométrica.peso_atual- ficha.avaliação_antropométrica.peso_desejado}kg para atingir o peso desejado!`)
    ficha.avaliação_antropométrica.peso_atual = ficha.avaliação_antropométrica.peso_atual - 0.5
} while ( ficha.avaliação_antropométrica.peso_atual > ficha.avaliação_antropométrica.peso_desejado) {
    console.log(`Parabéns! Seu peso atual é ${ficha.avaliação_antropométrica.peso_atual}kg, você atingiu o peso desejado!`)
} */

/* EXERCÍCIO 8 - DO ... WHILE */

/* if (ficha.habitos_de_vida.habito_intestinal.frequencia_evacuatoria >= 1) {
    console.log("Você já foi no banheiro hoje, está ótimo")
} else {

do  {
    console.log("Você ainda não foi no banheiro, tem que ir pelo menos uma vez")
    ficha.habitos_de_vida.habito_intestinal.frequencia_evacuatoria = ficha.habitos_de_vida.habito_intestinal.frequencia_evacuatoria + 1
} while (ficha.habitos_de_vida.habito_intestinal.frequencia_evacuatoria < 1) {
    console.log("Você já foi no banheiro hoje, está ótimo")
} 
} */

/* EXERCÍCIO 9 - DO ... WHILE */

/* if (ficha.avaliação_alimentar.frequencia_de_consumo.verduras_e_legumes > 2) {
    console.log(`Você comeu ${ficha.avaliação_alimentar.frequencia_de_consumo.verduras_e_legumes} porções de vegetais na refeição, mais que o ideal  de porções por refeição!`)
} else if (ficha.avaliação_alimentar.frequencia_de_consumo.verduras_e_legumes === 2) {
    console.log(`Você comeu ${ficha.avaliação_alimentar.frequencia_de_consumo.verduras_e_legumes} porções de vegetais na refeição, o mínimo ideal de porções por refeição!`)
} else {


do {
    console.log(`Você comeu ${ficha.avaliação_alimentar.frequencia_de_consumo.verduras_e_legumes} porções de vegetais na refeição, faltam ${2 - ficha.avaliação_alimentar.frequencia_de_consumo.verduras_e_legumes} para atingir a quantidade ideal de porções por refeição!`)
    ficha.avaliação_alimentar.frequencia_de_consumo.verduras_e_legumes = ficha.avaliação_alimentar.frequencia_de_consumo.verduras_e_legumes + 1
} while (ficha.avaliação_alimentar.frequencia_de_consumo.verduras_e_legumes < 2) {
    console.log(`Você comeu ${ficha.avaliação_alimentar.frequencia_de_consumo.verduras_e_legumes} porções de vegetais na refeição, o mínimo ideal  de porções por refeição!`)
} 
} */
/* EXERCÍCIO 10 - DO ... WHILE */

 

/*do { 
    console.log(`Seu nível de colesterol total é de ${ficha.historico_de_saude.colesterol} mg/dL, você está acima do valor ideal!`)
    ficha.historico_de_saude.colesterol = ficha.historico_de_saude.colesterol - 10
} while (ficha.historico_de_saude.colesterol >= 200) {
    console.log(`Seu nível de colesterol total é de ${ficha.historico_de_saude.colesterol} mg/dL, Parabéns você atingiu um valor ideal!`)
} */


