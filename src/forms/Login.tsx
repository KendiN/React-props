import React, {useState, useEffect} from 'react';

const Login = () => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = useState("");

    const [myForm, setMyForm] = useState({ bla: 1, hello: 2});

    const saveFields = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMyForm((previous) => ({
            ...previous,
            [event.target.name]: event.target.value,
        }));
    };

    useEffect(() => {
        console.log(myForm);
    }, [myForm]);

const submitForm = (event: React.FormEvent) => {
    event.preventDefault();

    console.log({ myForm });
};

return (
    <form onSubmit={submitForm}>
        <br></br>
        <br></br>
        <h1>Login</h1>
        <label htmlFor='FirstName'>First Name</label>
        <input 
            name="firstname"  
            onChange={saveFields}
       ></input>
       <label htmlFor='LastName'>Last Name</label>
       <input 
            name="lastName"  
            onChange={saveFields}
       ></input>
       <button type="submit">Submit</button>
    </form>
  );
};

export default Login;