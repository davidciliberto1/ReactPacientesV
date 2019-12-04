import React, { Component } from "react";
import "./bootstrap.min.css";
import Header from "./components/header";
import NuevaCita from "./components/NuevaCita";
import ListaCitas from "./components/ListaCitas";
import Cita from "./components/cita";


class App extends Component {
    state = {
        citas: []
    }
    crearNuevaCita = datos => {
       // Copiar el State actual

      const citas = [...this.state.citas, datos];
       console.log(datos);
       // Agregar el nuevo state

        this.setState({
            citas 
        })
       }

       // Cuando la aplicacion carga

       componentDidMount() {
            const citasLS = localStorage.getItem('citas');
            if (citasLS) {
                this.setState({
                    citas: JSON.parse(citasLS)
                })
            }
       }

       // Cuando eliminamos o agregamos nueva cita

       componentDidUpdate() {
           localStorage.setItem('citas', JSON.stringify(this.state.citas));
       }

       // Eliminar citas del State

       eliminarCita = id => {
          
        // tomar una copia del State 

        const citasActuales = [...this.state.citas];

        // Utilizar filter para sacar el elemento @id del arreglo

        const citas = citasActuales.filter(Cita => Cita.id !== id )

        // Actualizar el State

        this.setState({
            citas
        })

       }

    render() {
        return (
            <div className="container" >
            <Header titulo="Administrador Pacientes Veterinaria" />
            <div className="row" >
                <div className="col-md-10 mx-auto" >
                    <NuevaCita 
                    crearNuevaCita = {this.crearNuevaCita}
                     />
                    </div> 
                    <div className="mt-5 col-md-10 mx-auto">
                        <ListaCitas 
                        citas={this.state.citas}
                        eliminarCita={this.eliminarCita}
                        />
                    </div>
                </div>
            </div>
 );
                    }
                }
                
export default App;

