import React from 'react';
// import { dicasAlimentares } from '../data/dicasAlimentares.js';
import { dicasAlimentares } from '../data/dicasAlimentares';


function InfoAdicional({ peso, objetivo, metas, genero }) {
    const aguaLitros = ((peso * 35) / 1000).toFixed(1);
    const dicas = dicasAlimentares[objetivo];
    let avisoGenero = null;

    if (genero === 'outro') {
        avisoGenero = (
            <p className="detalhes" style={{ fontSize: '0.8rem', color: '#a0a0a0', textAlign: 'center' }}>
                <em>*O cálculo para "Outro" é uma média das fórmulas masculina e feminina e serve como uma estimativa inicial.</em>
            </p>
        );
    }

    const metaTextoHtml = { __html: metas.texto };

    return (
        <section id="info-adicional">
            <div className="dia-treino" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
                <h3>Dicas e Metas Nutricionais</h3>

                <div className="exercicio">
                    <h4>Suas Metas Calóricas Diárias (Estimativa)</h4>
                    <p className="detalhes">Sua Taxa Metabólica Basal (calorias em repouso) é de <strong>{metas.tmb} kcal</strong>.</p>
                    <p className="detalhes">Para manter seu peso atual, você precisa de aprox. <strong>{metas.manutencao} kcal</strong> por dia.</p>
                    <p className="detalhes" dangerouslySetInnerHTML={metaTextoHtml}></p>
                    <p className="caloria-destaque">{metas.meta} kcal por dia</p>
                    {avisoGenero}
                </div>

                <div className="exercicio">
                    <h4>💧 Hidratação Diária Essencial</h4>
                    <p className="detalhes">Baseado no seu peso de <strong>{peso}kg</strong>, a recomendação de consumo é:</p>
                    <p className="caloria-destaque">{aguaLitros} litros de água por dia</p>
                </div>

                <div className="exercicio">
                    <h4>Alimentos para o Objetivo: {dicas.titulo}</h4>
                    <p>{dicas.descricao}</p>
                    <ul className="lista-alimentos">
                        {dicas.grupos.map(grupo => (
                            <li key={grupo.nome}>
                                <strong>{grupo.nome}:</strong> {grupo.alimentos}
                            </li>
                        ))}
                    </ul>
                    <p style={{ marginTop: '20px', fontSize: '0.9rem', color: '#a0a0a0' }}>
                        <em><strong>Aviso:</strong> Estas são estimativas e sugestões gerais. Para um plano alimentar personalizado e seguro, consulte um nutricionista.</em>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default InfoAdicional;