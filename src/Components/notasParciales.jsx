import { useState } from "react";
import { alerta } from "../functions";

const NotasParciales = () => {
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [n3, setN3] = useState('');
    const [ResultadoNotas, setResultadoNotas] = useState('');
   
    
    const Calcular = () => { 
        if (n1.trim() === '') {
            alerta('Ingrese primer número', 'warning', 'nota1')
        } else if (n2.trim() === '') {
            alerta('Ingrese segundo número', 'warning', 'nota2')
        } else if (n3.trim() === '') {
            alerta('Ingrese tercer número', 'warning', 'nota3')
        } else {
            let a = parseInt(n1)
            let b = parseInt(n2)
            let c = parseInt(n3)
            
            let NotaFinal = a + b + c;
            setResultadoNotas(NotaFinal)
            if (a === 0 || b === 0 || c === 0) {
                alerta("Por favor ingrese todas las notas correctamente", "warning")
            } else if (a > 30 || b > 30) {
                alerta('La nota del primero o segundo parcial sobrepasa del 30%', 'warning')
            } else if (c > 40) {
                alerta('La nota del tercer parcial sobrepasa el 40%', 'warning')
            } else if (NotaFinal < 60) {
                alerta ("Reprobado");
            } else if (NotaFinal < 80) {
                alerta("Bueno");
            } else if (NotaFinal < 90) {
                alerta("Muy bueno");
            } else {
                alerta("Sobresaliente")
            }
            
        }

    }
 
    const Limpiar =() => {
        setN1 ('')
        setN2 ('')
        setN3 ('')
        setResultadoNotas ('')
       
    }

    return (
        <div className="form-control">
            <div className="row">
            <div className="mb-3 col-3">
                <label for="nota1" className="form-label">Primer Parcial (max 30%)</label>
                    <div className="col-auto">
                      <input type="number" className="form-control" id="nota1" placeholder="Ingrese primera nota parcial" value={n1} onChange={(e) =>setN1(e.target.value)} />  
                </div>    
            </div>

            <div className="mb-3 col-3">
                    <label for="nota2" className="form-label">Segundo Parcial (max 30%)</label>
                    <div className="col-auto">
                        <input type="number" className="form-control" id="nota2" placeholder="Ingrese segunda nota parcial..." value={n2}onChange={(e) =>setN2(e.target.value)}/>
                    </div>
            </div>

            <div className="mb-3 col-3">
                <label for="nota3" className="form-label">Tercer Parcial (max 40%)</label>
                    <div>
                        <input type="number" className="form-control" id="nota3" placeholder="Ingrese tecera nota parcial..." value={n3} onChange={(e) =>setN3(e.target.value)} />
                    </div> 
            </div>
        </div>
        <div className="row">
            <div className="mb-3 col-6">
                <label for="ResultadoNotas" className="form-label">Nota Final</label>
                    <div className="col-auto">
                            <input type="number" className="form-control" id="ResultadoNotas" readonly value={ResultadoNotas} onChange={(e) =>setResultadoNotas(e.target.value)} />
                </div>
            </div>
        </div>
        <div class="row">
            <div className="mb-3 col-3">
                <button onClick={() =>Calcular()} class="btn btn-success">Calcular</button>
                <button onClick={()=>Limpiar()} class="btn btn-danger">Limpiar</button>
            </div>
        </div>

        </div>
    );
}

export default NotasParciales;