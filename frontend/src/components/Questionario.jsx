import React, { useState } from 'react';

//
function Questionario({ onGerarRecomendacoes }) {
    // Estado para cada campo do formulário
    const [idade, setIdade] = useState('');
    const [genero, setGenero] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [dias, setDias] = useState('');
    const [nivelAtividade, setNivelAtividade] = useState('');
    const [objetivo, setObjetivo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Agrupa todos os dados do formulário
        const formData = {
            idade: parseInt(idade),
            peso: parseFloat(peso),
            altura: parseInt(altura),
            genero,
            dias,
            nivelAtividade: parseFloat(nivelAtividade),
            objetivo,
        };

        // Envia os dados para o componente 'App'
        onGerarRecomendacoes(formData);
    };

    return (
        <section id="questionario">
            <h2>DESCUBRA O TREINO IDEAL PARA VOCÊ</h2>
            <p>Responda as perguntas abaixo para receber uma recomendação personalizada.</p>

            {/* O 'onSubmit' no formulário chama nossa função handleSubmit.
        Os 'value' e 'onChange' conectam os inputs ao nosso 'useState'.
      */}
            <form id="form-recomendacao" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="idade">Sua Idade</label>
                    <input
                        type="number"
                        id="idade"
                        min="14"
                        max="99"
                        required
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Seu Gênero</label>
                    <div className="gender-group">
                        {/* */}
                        <input
                            type="radio"
                            id="masculino"
                            name="genero"
                            value="masculino"
                            required
                            checked={genero === 'masculino'}
                            onChange={(e) => setGenero(e.target.value)}
                        />
                        <label htmlFor="masculino">Masculino</label>

                        <input
                            type="radio"
                            id="feminino"
                            name="genero"
                            value="feminino"
                            required
                            checked={genero === 'feminino'}
                            onChange={(e) => setGenero(e.target.value)}
                        />
                        <label htmlFor="feminino">Feminino</label>

                        <input
                            type="radio"
                            id="outro"
                            name="genero"
                            value="outro"
                            required
                            checked={genero === 'outro'}
                            onChange={(e) => setGenero(e.target.value)}
                        />
                        <label htmlFor="outro">Outro</label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="peso">Seu Peso (kg)</label>
                    <input
                        type="number"
                        id="peso"
                        min="30"
                        max="200"
                        required
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="altura">Sua Altura (em centímetros)</label>
                    <input
                        type="number"
                        id="altura"
                        min="100"
                        max="250"
                        required
                        placeholder="Ex: para 1,75m, digite 175"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="dias">Dias disponíveis para treinar na semana</label>
                    <select
                        id="dias"
                        required
                        value={dias}
                        onChange={(e) => setDias(e.target.value)}
                    >
                        <option value="">Selecione...</option>
                        <option value="2">2 dias</option>
                        <option value="3">3 dias</option>
                        <option value="4">4 dias</option>
                        <option value="5">5 ou mais dias</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="nivelAtividade">Seu Nível de Atividade (fora da academia)</label>
                    <select
                        id="nivelAtividade"
                        required
                        value={nivelAtividade}
                        onChange={(e) => setNivelAtividade(e.target.value)}
                    >
                        <option value="">Selecione...</option>
                        <option value="1.2">Sedentário (pouco ou nenhum exercício)</option>
                        <option value="1.375">Levemente Ativo (exercício leve 1-3 dias/semana)</option>
                        <option value="1.55">Moderadamente Ativo (exercício moderado 3-5 dias/semana)</option>
                        <option value="1.725">Muito Ativo (exercício intenso 6-7 dias/semana)</option>
                        <option value="1.9">Extremamente Ativo (trabalho físico intenso ou atleta)</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="objetivo">Seu Objetivo Principal</label>
                    <select
                        id="objetivo"
                        required
                        value={objetivo}
                        onChange={(e) => setObjetivo(e.target.value)}
                    >
                        <option value="">Selecione...</option>
                        <option value="hipertrofia">Hipertrofia (Ganho de Massa)</option>
                        <option value="forca">Força</option>
                        <option value="emagrecimento">Emagrecimento</option>
                    </select>
                </div>
                <button type="submit" className="cta-button">GERAR MINHAS RECOMENDAÇÕES</button>
            </form>
        </section>
    );
}

export default Questionario;