let ficha = {
    dados_pessoais: {
    nome_completo: window.prompt("Nome Completo"),
data_de_nascimento: window.prompt("Data de nascimento"),
sexo: window.prompt("Sexo"),
estado_civil: window.prompt("Estado civil"),
profissao: window.prompt("Profissão"),
escolaridade: window.prompt("Escolaridade"),
telefone: window.prompt("Telefone"),
email: window.prompt("E-mail"),
endereco: window.prompt("Endereço")
},
queixa: {
    motivo_da_consulta: window.prompt("Motivo da consulta"),
    objetivo: window.prompt("Qual o seu Objetivo"),
},
historico_de_saude: {
    hipertensao: window.prompt("Possui hipertensão ?"),
    diabetes: window.prompt("Possui diabetes?"),
    colesterol: window.prompt("Qual o valor do seu colesterol, em números?"),
    triglicerides: Number.parseInt(window.prompt("Qual o valor do seu triglicerídeos, em números?")),
    doencas_gastrointestinais: window.prompt("Possui doenças gastrointestinais?"),
    doencas_renais: window.prompt("Possui doenças renais?"),
    doencas_hepaticas: window.prompt("Possui doenças hepaticas?"),
    doencas_cardiacas: window.prompt("Possui doenças cardiacas?"),
    doencas_respiratorias: window.prompt("Possui doenças respiratorias?"),
    doencas_autoimunes: window.prompt("Possui doenças autoimunes?"),
    alergias: window.prompt("Possui alergias?"),
    intolerancias_alimentares:window.prompt("Possui alguma intolerancia alimentar?"),    
},
cirurgias:{
    tipo: window.prompt("Fez alguma cirurgia?"),
    data: window.prompt("Se fez, quando foi?"),
},

uso_de_suplementos:{
    tipo: window.prompt("Usa algum suplemento?"),
    dose: Number.parseInt(window.prompt("quantas doses costuma tomar, em número?")),
    frequencia: window.prompt("Qual a frequência?"),
    tempo_de_uso: Number.parseInt(window.prompt("Tempo de uso, em número:")),

},
historico_familiar:{
    obesidade:window.prompt("Tem parente com obesidade?"),
    diabetes:window.prompt("Tem parente com diabetes?"),
    hipertensao:window.prompt("Tem parente com hipertensão?"),
    cancer:window.prompt("Tem parente com câncer?"),
    doencas_cardiacas: window.prompt("Tem parente com doenças cardiacas?"),
},
habitos_de_vida:{
  sono: {
    horario_que_dorme: window.prompt("Qual horário você dorme?"),
    horario_que_acorda: window.prompt("Qual horario você acorda?"),
    qualidade_do_sono: window.prompt("Qual a qualidade do seu sono?"),
    quantidade_de_horas: Number.parseInt(window.prompt("Quantas horas você dorme, em número?")),

  },
  estresse:{
    nivel:window.prompt("Possui algum nivel de estresse?"),
    causas_principais: window.prompt("Qual a causa do seu estresse?"),

  },
  atividade_fisica: {
    tipo_de_exercicio:window.prompt("Faz algum tipo de exercicio fisíco?"),
    frequencia_semanal: window.prompt("Qual a frequência que você se exercita?"),
    duracao: Number.parseInt(window.prompt("Quanto tempo você passa se exercitando, em números?")),
    intensidade: window.prompt("Qual a intensidade que você se exercita?")
  },
  habito_intestinal: {
    frequencia_evacuatoria: Number.parseInt(window.prompt("Quantas vezes que você evacua no dia, em números ?")),
    consistencia_das_fezes: window.prompt("Qual a consistência das suas fezes?"),
    sintomas_associados:window.prompt("Possui algum desconforto enquanto evacua?"),

  },
  consumo_de_agua: {
    quantidade_aproximada: window.prompt("Quantos litros de água você consome?"),

  },
  consumo_de_alcool:{
    frequencia: window.prompt("Quantas vezes você faz o consumo de álcool?"),
    tipo: window.prompt("Qual o tipo de bebida alcoólica que você consome?"),
    quantidade: window.prompt("Quantos copos você consome?")
  },
  tabagismo: {
    fuma_atualmente: window.prompt("Fuma atualmente?"),
    fumou_anteriormente: window.prompt("Fumou anteriormente?"),
    tempo_de_uso_ou_abstinencia: window.prompt("Qual o tempo de uso ou de abstinência?"),
  }
},
 avaliação_alimentar: {
    preferencias_e_aversões: {
        alimentos_preferidos: window.prompt("Quais são seus alimentos preferidos?"),
        alimentos_que_não_gosta: window.prompt("Quais são os alimentos que você menos gosta?"),
        alimentos_que_causam_desconforto:window.prompt("Quais são os alimentos que te causam desconforto?"),
 },   
    intolerancias_e_alergias: {
        relatadas: window.prompt("Possui alguma intolerância ou alergia?"),
        confirmadas_por_exame: window.prompt("Possui laudo médico?")
    },
    rotina_alimentar: {
        cafe_da_manha: {
            horario: window.prompt("Qual o horário que você toma café da manhã?"),
            alimentos_e_quantidades: window.prompt("Oque você consome no café da manhã?"),
        },
        lanche_da_manha: window.prompt("Oque você consome no lanche da manhã?"),
        almoço: {
            entrada: window.prompt("Oque você consome de entrada no almoço?"),
            prato_principal: window.prompt("Qual o prato principal do seu almoço?"),
            acompanhamentos: window.prompt("Quais os acompanhamentos do seu almoço?")
        },
        lanche_da_tarde: window.prompt("Oque você consome no lanche da tarde?"),
        jantar: window.prompt("Oque você consome no jantar?"),
        ceia: window.prompt("Oque você consome na ceia?"),
        petiscos_e_beliscos_ao_longo_do_dia: window.prompt("Você consome petiscos ao longo do dia?"),
        consumo_de_doces: window.prompt("você consome doces?"),
        consumo_de_alimentos_ultraprocessados: window.prompt("Você consome alimentos ultraprocessados?"),
        frequencia_de_refeições_fora_de_casa: Number.parseInt(window.prompt("Quantas refeições você faz fora de casa, em números?")),


    },
    metodos_de_preparo: {
        metodo: window.prompt("Você prefere alimentos Fritos, Assados ou cozidos?"),
        composição: window.prompt("Faz o uso de óleo ou gorduras?")
    },
    frequencia_de_consumo: {
        frutas: Number.parseInt(window.prompt("Quantas vezes no dia você consome frutas, em números?")),
        verduras_e_legumes: Number.parseInt(window.prompt("Quantas vezes no dia você consome verduras ou legumes, em números?")),
        leguminosas: Number.parseInt(window.prompt("Quantas vezes no dia você consome comidas leguminosas, em números?")),
        carnes_ovos_e_peixes: Number.parseInt(window.prompt("Quantas vezes você consome no dia carnes, ovos e peixes, em números?")),
        laticinios: Number.parseInt(window.prompt("Quantas vezes você consome no dia laticinios, em números?")),
        doces: Number.parseInt(window.prompt("Quantas vezes você consome no dia doces, em números?")),
        refrigerantes_sucosIndustrializados: Number.parseInt(window.prompt("Quantas vezes você consome no dia refrigerantes ou sucos industrializados, em números?")),
        fast_food: Number.parseInt(window.prompt("Quantas vezes você consome no dia fast foods, em números?"))
    }
 },
 avaliação_antropométrica: {
    peso_atual: Number.parseInt(window.prompt("Qual o seu peso atual, em quilos?")),
    altura: Number.parseInt(window.prompt("Qual a sua altura, em centímetros?")),
    peso_habitual: Number.parseInt(window.prompt("Qual o seu peso habitual, em quilos?")),
    peso_desejado: Number.parseInt(window.prompt("Qual o seu peso desejado, em quilos?")),
    circunferência_abdominal: Number.parseInt(window.prompt("Qual a sua circunfêrencia abdominal, em centímetros?")),
    circunferência_quadril: Number.parseInt(window.prompt("Qual a circunfêrencia do seu quadril, em centímetros?")),
    circunferência_braço: Number.parseInt(window.prompt("Qual a circunfêrencia do seu braço, em centímetros?")),
    dobras_cutâneas: window.prompt("Você possui dobras cutâneas?"),
    percentual_de_gordura_corporal: window.prompt("Qual o seu percentual de gordura?"),
    massa_magra: window.prompt("Qual o seu índice de massa magra?")
 },
 avaliação_clínica_e_bioquímica: {
    pressão_arterial: window.prompt("Qual a sua pressão arterial?"),
    exames_recentes: window.prompt("Fez algum exame recente?"),
 },
 expectativas_e_objetivos_do_paciente: {
    estéticos: window.prompt("Possui algum objetivo estético?"),
    clínicos: window.prompt("Possui algum objetivo clinico?"),
    qualidade_de_vida: window.prompt("Possui algum objetivo para melhorar a qualidade de vida?"),
    esportivos: window.prompt("Possui algum objetivo esportivo?")
 }
}