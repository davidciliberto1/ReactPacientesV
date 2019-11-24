import React, { Component } from "react";

class NuevaCita extends Component {
  state = {
      cita : {
        Mascota: '',
        Propietario: '',
        Fecha: '',
        Hora: '',
        Sintomas: '' 
      },
      error: false,
  }
  // Cuando el usuario escribe en los inputs
  
  handleChange = e => {
      console.log(e.target.name + ': ' + e.target.value);

      // Colocar lo que el usuario escribe en el state
      this.setState({
          cita: {
              ...this.state.cita,
              [e.target.name] : e.target.value
          }
      })
  }

  // Cuando el usuario envia el formulario

  handleSubmit = e => {
        e.preventDefault();

        // Extraer los valores del state 
        
        const {Mascota, Propietario, Fecha, Hora, Sintomas} = this.state.cita;

        // Validar que todos los campos esten llenos

        if(Mascota === '' || Propietario === '' || Fecha === '' || Hora === '' || Sintomas === '') {
            this.setState({
                error: true
            });

            // Detener la ejecucion 
            return;
        }

        // Agregar la cita al state de App


  }

  render() {
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Llena el formulario para nueva cita
          </h2>
          <form 
          onSubmit={this.handleSubmit}
          >

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  id="Mascota"
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  name="Mascota"
                  onChange={this.handleChange}
                  value={this.state.cita.Mascota}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Dueño Mascota"
                  name="Propietario"
                  onChange={this.handleChange}
                  value={this.state.cita.Propietario}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha </label>
              <div className="col-sm-8 col-lg-4">
                <input 
                type="date" 
                className="form-control" 
                name="Fecha" 
                onChange={this.handleChange}
                value={this.state.cita.Fecha}
                  />
              </div>
              <label className="col-sm-4 col-lg-2 col-form-label">Hora </label>
              <div className="col-sm-8 col-lg-4">
                <input 
                type="time"
                 className="form-control" 
                 placeholder="Nombre Mascota"
                 name="Hora" 
                 onChange={this.handleChange}
                 value={this.state.cita.hora}
                 />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Sintomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="Sintomas"
                  placeholder="Describe los Sintomas"
                  onChange={this.handleChange}
                  value={this.state.cita.sintomas}
                ></textarea>
              </div>
            </div>
            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Agregar Nueva Cita"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default NuevaCita;
