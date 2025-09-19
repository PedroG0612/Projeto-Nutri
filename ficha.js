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
    hipertensao: "não",
    diabetes: "não",
    colesterol: "não",
    doencas_gastrointestinais: "não",
    doencas_renais: "não",
    doencas_hepaticas: "não",
    doencas_cardiacas: "não",
    doencas_respiratorias: "não",
    doencas_autoimunes: "não",
    alergias: "não",
    intolerancias_alimentares:"não",    
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
    obesidade:"não",
    diabetes:"não",
    hipetensao:"não",
    cancer:"não",
    doencas_cardiacas: "não",
},
habitos_de_vida:{
  sono: {
    horario_que_dorme: "22:30",
    horario_que_acorda: "7:30",
    qualidade_do_sono: "pesado",
    quantidade_de_horas: "9 horas",

  },
  estresse:{
    nivel:"baixo",
    causas_principais: "trabalho",

  },uso_de_medicamentos:{
    nome: "dipirona",
    dose: "1 comprimido",
    frequencia: "mensalmente",
    tempo_de_uso: "3 meses",

},
  atividade_fisica: {
    tipo_de_exercicio: "calistenia",
    frequencia_semanal: "3 vezes",
    duracao: "30 minutos",
    intensidade: "baixa"
  },
  habito_intestinal: {
    frequencia_evacuatoria: "diariamente",
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
    fuma_atualmente: "não",
    fumou_anteriormente: "não",
    tempo_de_uso_ou_abstinencia: "não usou",
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
        frutas: 3,
        verduras_e_legumes: 3,
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