import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function DeterminarParImpar() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const definirParImpar = () => {
    const num = parseInt(numero);
    if (!isNaN(num)) {
      if (num % 2 === 0) {
        setResultado(`${num} es un número par.`);
      } else {
        setResultado(`${num} es un número impar.`);
      }
    } else {
      setResultado('Por favor, ingrese un número válido, no se admiten letras ni el campo vacío.');
    }
  };

  const reiniciarFormulario = () => {
    setNumero('');
    setResultado('');
  };

  return (
    <div className="container">
      <h1 className='text-center'>VALIDADOR DE NÚMEROS PARES O IMPARES</h1>
      <div className='form-group'>
      <input className='form-control col-md-12'
        type="number"
        placeholder="Ingrese un número"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />
      </div>
      <br/>
      <button className='btn btn-danger col-md-6' type='button' onClick={reiniciarFormulario}>Reiniciar</button>
      <button className='btn btn-primary col-md-6' type='button' onClick={definirParImpar}>Validar</button>
      <div className='resultado'>{resultado}</div>
    </div>
  );
}

export default DeterminarParImpar;
