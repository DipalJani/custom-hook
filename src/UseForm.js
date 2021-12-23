import { useState } from "react";

const useForm = () => {
    const[values, setValues] = useState({
        FirstName: "",
        LastName: "",
        Phonenumber: "",
        Email: "",
        Status: "ACTIVE"

    });

    const handleSubmit = (event) => {
     event.preventDefault();
      
    };

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({...values, [event.target.name]: event.target.value}));
    };

    return{
        values,
        handleSubmit,
        handleChange,
    }
};

export default useForm;