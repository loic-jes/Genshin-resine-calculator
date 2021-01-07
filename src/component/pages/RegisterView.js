import { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {UserPreferences} from '../UserPreferences'
import {ApiRequest} from "../../Helpers"



class RegisterView extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Saisissez votre nom"),
          email: Yup.string()
            .email("Saisissez une adresse email valide")
            .required("Saisissez votre adresse mail"),
          password: Yup.string()
            .min(4, "Le mot de passe doit contenir au moins 4 caractères")
            .required("Saisissez un mot de passe"),
          confirmPassword: Yup.string()
            .oneOf(
              [Yup.ref("password"), null],
              "Les mots de passes ne sont pas identiques"
            )
            .required("Confirmez votre mot de passe"),
        })}
        onSubmit={(fields) => {



          const {name, email, password, confirmPassword} = fields;
          console.log(fields);


          ApiRequest({table:"user", fields:{name:name, login:email, password:password}}, "POST").then((response)=>{
            return response.text().then((text) => {
                if (text) {
                    console.log(text)
                }
            });
        })








        }}
      >
        {({ errors, isValid, dirty, touched }) => (
          <>
            <h3 className="text-center mt-3">Inscription</h3>

            <Form className="col-6 offset-3">
              <div className="form-group pb-3">
                <label htmlFor="name">Nom</label>
                <Field
                  name="name"
                  type="text"
                  className={
                    "form-control" +
                    (errors.name && touched.name ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>

              <div className="form-group pb-3">
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  type="text"
                  className={
                    "form-control" +
                    (errors.email && touched.email ? " is-invalid" : "")
                  }
                  autoComplete="username"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>

              <div className="form-group pb-3">
                <label htmlFor="password">Choisir un Mot de passe</label>
                <Field
                  name="password"
                  type="password"
                  className={
                    "form-control" +
                    (errors.password && touched.password ? " is-invalid" : "")
                  }
                  autoComplete="new-password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>
              <div className="form-group pb-4">
                <label htmlFor="confirmPassword">
                  Confirmer le Mot de passe
                </label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className={
                    "form-control" +
                    (errors.confirmPassword && touched.confirmPassword
                      ? " is-invalid"
                      : "")
                  }
                  autoComplete="new-password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>

              <div className="form-group d-flex justify-content-between">
                <button type="reset" className="btn btn-secondary">
                  Effacer
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!(dirty && isValid)}
                >
                  Valider
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    );
  }
}

export { RegisterView };
