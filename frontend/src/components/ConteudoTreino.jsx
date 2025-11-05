import React from 'react';

//
function ConteudoTreino({ treino, objetivo }) {
    if (!treino) return null; // Não renderiza nada se não houver treino

    // Capitaliza o objetivo
    const objetivoCapitalizado = objetivo.charAt(0).toUpperCase() + objetivo.slice(1);

    return (
        <main id="conteudo-treino">
            <p style={{ textAlign: 'center', color: '#a0a0a0', fontSize: '1.1rem' }}>
                Com base no seu objetivo de <strong>{objetivoCapitalizado}</strong>, esta é a sua recomendação de treino:
            </p>
            <h2>{treino.titulo}</h2>
            <p>{treino.descricao}</p>

            {/* */}
            {treino.dias.map((dia) => (
                <div key={dia.dia} className="dia-treino">
                    <h3>{dia.dia}</h3>
                    {dia.exercicios.map((ex) => (
                        <div key={ex.nome} className="exercicio">
                            <h4>{ex.nome}</h4>
                            <p className="detalhes">
                                Séries: <strong>{ex.series}</strong> | Repetições: <strong>{ex.repeticoes}</strong>
                            </p>
                            <p>{ex.instrucao}</p>
                        </div>
                    ))}
                </div>
            ))}
        </main>
    );
}

export default ConteudoTreino;