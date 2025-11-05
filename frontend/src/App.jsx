import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Questionario from './components/Questionario';
import InfoAdicional from './components/InfoAdicional';
import ConteudoTreino from './components/ConteudoTreino';

import { treinos } from './data/treinos.js';
import { 
  calcular, 
  metas,
  recomendacaoTreinos 
} from './utils/calculos.js';

function App() {
  const [resultados, setResultados] = useState(null);
  
  const resultadosRef = useRef(null);

  const handleGerarRecomendacoes = (formData) => {
    const tmb = calcular(formData.peso, formData.altura, formData.idade, formData.genero);
    const metas = metas(tmb, formData.nivelAtividade, formData.objetivo);
    const treinoKey = recomendacaoTreinos(formData.dias);
    const treinoSelecionado = treinos[treinoKey];

    setResultados({
      metas,
      treino: treinoSelecionado,
      peso: formData.peso,
      objetivo: formData.objetivo,
      genero: formData.genero,
    });
    
    setTimeout(() => {
      if (resultadosRef.current) {
        resultadosRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <Header />
      <Questionario onGerarRecomendacoes={handleGerarRecomendacoes} />
      {resultados && (
        <div ref={resultadosRef}>
          <InfoAdicional
            peso={resultados.peso}
            objetivo={resultados.objetivo}
            metas={resultados.metas}
            genero={resultados.genero}
          />
          <ConteudoTreino 
            treino={resultados.treino} 
            objetivo={resultados.objetivo} 
          />
        </div>
      )}

      <Footer />
    </>
  );
}

export default App;