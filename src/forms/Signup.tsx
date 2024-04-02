import React, {useState, useEffect} from 'react';

const SignUp = () => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
        <h1>Sign Up</h1>
    <div>
        <label htmlFor='FirstName'>First Name</label>
        <input 
            name="firstname"  
            onChange={saveFields}
       ></input>
    </div>

    <div>
        <label htmlFor='LastName'>Last Name</label>
        <input 
            name="lastName"  
            onChange={saveFields}
        ></input>
    </div>
      
    <div>
    <label htmlFor='Email'>Email</label>
        <input 
            name="email"  
            onChange={saveFields}
       ></input>
    </div>
    
    <div>
    <label htmlFor='password'>Password</label>
        <input 
            name="password"  
            onChange={saveFields}
       ></input>
    </div>
    
       <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;