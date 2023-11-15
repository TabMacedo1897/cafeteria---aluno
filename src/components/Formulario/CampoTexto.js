// CampoTexto.js
import './CampoTexto.css';

const CampoTexto = () => {
  return (
    <div className="campo-texto">
      <div className="campo-group">
        <label>Nome</label>
        <input placeholder="Digite o seu nome" />
      </div>
      <div className="campo-group">
        <label>Email</label>
        <input placeholder="Digite o seu email" />
      </div>
    </div>
  );
};

export default CampoTexto;
