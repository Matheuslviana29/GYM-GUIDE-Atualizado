export function calcular(peso, altura, idade, genero){
    const calculoBase = 10 * peso + 6.25 * altura - 5 * idade;

    if(genero == "masculino"){
        return calculoBase + 5;
    }
    else if(genero == "feminino"){
        return calculoBase - 161;
    }else{
        return calculoBase - 78;
    }
}

export function metas(nivelAtividade, objetivo, tmb){
    const manutencaoCalorica = tmb * nivelAtividade;
    let metaCalorica;
    let textoMeta;
    
    if(objetivo == "emagrecer"){
        metaCalorica = manutencaoCalorica - 400;
        textoMeta = 'Para o seu objetivo de <strong>Emagrecimento</strong>, sua meta é de:';
    }else{
        metaCalorica = manutencaoCalorica + 400;
        textoMeta = 'Para o seu objetivo de <strong>Hipertrofia</strong>, sua meta é de:'
    }
        return {
        tmb: Math.round(tmb),
        manutencao: Math.round(caloriasManutencao),
        meta: Math.round(metaCalorica),
        texto: textoMeta
    };
}

export function recomendacaoTreinos(dias){
    if(dias == "2"){
        return "ab"
    }

    if(dias == "3"){
        return "abc"
    }

    if(dias == "4"){
        return "abcd"
    }

    if(dias == "5"){
        return "abcde"
    }
    return "ab";
}