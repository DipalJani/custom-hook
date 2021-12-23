import React from "react";
import useForm from "./UseForm";
import axios from 'axios';
const baseURL = "http://localhost:3000/registration/";
const Form = () => {
    const {values, handleChange, handleSubmit} = useForm({});

    const login = async() =>  {
        console.log(values, 'values');
        const response = await axios.post(baseURL, values)
        .then((response) => {
            localStorage.setItem("data", response.data)
            console.log(response, 'response');
        });
    }

    return(
        <div>
        <div>
          <div>
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <label className="label">First Name: </label>
                  <div>
                    <input className="input" type="text" name="FirstName" onChange={handleChange} value={values.FirstName} required />
                  </div>
                </div><br/>
                <div>
                  <label className="label">Last name: </label>
                  <div>
                    <input className="input" type="text" name="LastName" onChange={handleChange} value={values.LastName} required />
                  </div>
                </div><br/>
                <div>
                  <label className="label">Email: </label>
                  <div>
                    <input className="input" type="email" name="Email" onChange={handleChange} value={values.Email} required />
                  </div>
                </div><br/>
                <div>
                  <label className="label">Phonenumber: </label>
                  <div>
                    <input className="input" type="number" name="Phonenumber" onChange={handleChange} value={values.Phonenumber} required />
                  </div>
                </div><br/>
                <button type="submit" onClick={() => login()}>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Form;