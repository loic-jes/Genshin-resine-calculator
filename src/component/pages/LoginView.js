import { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {UserPreferences} from '../UserPreferences'

class LoginView extends Component {

  static contextType = UserPreferences

  render() {

    const { setUser } = this.context
    const {preferences} = this.context

    let french
    if (preferences === "Français") {
      french = true
    } else {
      french = false
    }


    return (
      <Formik
        initialValues={{
          login: "",
          password: "",
          french
        }}
        validationSchema={Yup.object().shape({
          french: Yup.boolean(),
          login: Yup.string()
          .when("french", {
            is:false,
            then: Yup.string().email("Please type a valid email").required("Please type your registered email")
          })
          .when("french", {
            is:true,
            then: Yup.string().email("Saisir une adresse email valide").required("Saisir un identifiant")
          }),



          password: Yup.string()
          .when("french", {
            is:false,
            then: Yup.string().required("Please type your password").min(4, "Password must at least have 4 characters")
          })
          .when("french", {
            is:true,
            then: Yup.string().required("Saisir un mot de passe").min(4, "Le mot de passe doit contenir au moins 4 caractères")
          }),
          
        })}
        onSubmit={(fields) => {//TODO backend authentication JWT + PHP
          const {login, password} = fields;
          const body = JSON.stringify({ login, password });
          fetch("http://merenfrtest:8081/rest/login.php", { method: "POST", body }).then(
          // fetch("http://merenween.fr/rest/login.php", { method: "POST", body }).then(
            (response) => {
              return response.text().then((resp) => {

                console.log(resp); // TODO : Enlever


                if (resp) {
                  let user = null

                  console.log("resp", resp)

                  try {
                    user = JSON.parse(resp)

                  } catch {}
                  localStorage.setItem("user", JSON.stringify(user));
                  setUser(resp);
                } else {
                  //this.logout();
                }
              });
            }
          );
          
        }}
      >
        {({ errors, isValid, dirty, touched }) => (
          <>
            <h3 className="text-center mt-3">{preferences === "Français" ? <>Authentification</> : <>Login</>}</h3>

            <Form className="col-6 offset-3">
              <div className="form-group pb-3">
                <label htmlFor="login">E-mail</label>
                <Field
                  name="login"
                  type="text"
                  className={
                    "form-control" +
                    (errors.login && touched.login ? " is-invalid" : "")
                  }
                  autoComplete="username"
                />
                <ErrorMessage
                  name="login"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>
              <div className="form-group pb-4">
                <label htmlFor="password">{preferences === "Français" ? <>Mot de passe</> : <>Password</>}</label>
                <Field
                  name="password"
                  type="password"
                  className={
                    "form-control" +
                    (errors.password && touched.password ? " is-invalid" : "")
                  }
                  autoComplete="current-password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>

              <div className="form-group d-flex justify-content-between">
                <button type="reset" className="btn btn-secondary">
                {preferences === "Français" ? <>Effacer</> : <>Delete</>}
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!(dirty && isValid)}
                >
                  {preferences === "Français" ? <>Valider</> : <>Validate</>}
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    );
  }
}

export { LoginView };
