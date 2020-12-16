import React, { Component } from 'react';
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from 'yup';


class BlocInitialInput extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {intervalHandler:""}

    }

/**
 * Vérifie qu'on a bien tapé un chiffre au bon format : 0 <= x < 160, puis met à jour le state de la page ResinCalculator
 * @param {String} input Nombre
 */
    handleChange(e) {

        if (!isNaN(e.target.value)) {

            if (e.target.value > 160 || e.target.value < 0) {
                alert("Le chiffre doit être compris entre 0 et 160");
                this.props.onValueChange("");
            } else {
                this.props.onValueChange(e.target.value);
            }
            
        }


        //TODO : Si l'utilisateur change x fois l'input, x timers sont lancés et le décompte va x fois trop vite
        clearInterval(this.state.intervalHandler);

         let billy = setInterval(()=> {

          this.setState({intervalHandler: billy})


            if (e.target.value >= 160) {
                console.log("Full résine !");
                clearInterval(billy);
                clearInterval(this.state.intervalHandler);
            } else {    
              this.props.onValueChange(Number(e.target.value)+1);
            }
    
            console.log(this.props.value);
         
    
        }, 480)
    }

    
    render() {
        const value = this.props.value;



        return (

            <>

            {/* <Formik
              initialValues={{resin: {value}}}
              validationSchema={Yup.object().shape({
                resin: Yup.number()
                  .min(0, "doit être compris entre 0 et 160")
                  .max(160, "doit être compris entre 0 et 160"),
                        
              })}

            >
              {({ errors, isValid, dirty, touched }) => (
                <>
      
                  <Form className="col-6 offset-3">
                    <div className="form-group pb-3">
                      <label htmlFor="resin">Votre stock actuel de résine (sur /160)</label>
                      <Field
                        name="resin"
                        type="number"
                        className={
                          "form-control" +
                          (errors.resin && touched.resin ? " is-invalid" : "")
                        }
                        autoComplete="username"


                      />
                      <ErrorMessage
                        name="resin"
                        component="div"
                        className="invalid-feedback position-absolute"
                      />
                    </div>
                    
      
                  </Form>
                </>
              )}
            </Formik> */}


            <fieldset>
                <label> Votre stock actuel de résine (sur /160) &nbsp; </label>
                <input value={value} onChange={this.handleChange} type="number"/>
                <input type="submit" name="valider" value="Valider" id="validate" />
            </fieldset>

            </>
          );
    }
}

export {BlocInitialInput};