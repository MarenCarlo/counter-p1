import { useState, Fragment } from 'react';

export const Contador = () => {
    /**
     * Contador de clicks
     */

    const [numero, setNumero] = useState(0);
    return (
        <Fragment>
            <div className='container my-5'>
                <h2>Contador</h2>
                {
                    numero > 0 && <h1 className='green-text'>{numero}</h1>
                }
                {
                    numero === 0 && <h1 className='white-text'>{numero}</h1>
                }
                {
                    numero < 0 && <h1 className='red-text'>{numero}</h1>
                }
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col s12'>
                    </div>
                    <div className='col s6 l4'>
                        <button className='waves-effect waves-dark btn red darken-3' onClick={() => setNumero(numero - 1)}>
                            Resta -1
                        </button>
                    </div>
                    <div className='col s6 l4'>
                        <button className='waves-effect waves-dark btn blue darken-2' onClick={() => setNumero(numero - numero)}>
                            Reiniciar
                        </button>
                    </div>
                    <div className='col s12 l4'>
                        <button className='waves-effect waves-dark btn green darken-2' onClick={() => setNumero(numero + 1)}>
                            Suma +1
                        </button>
                    </div>
                    <div className='col s12'>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}