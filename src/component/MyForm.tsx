import React, {useState, useEffect} from 'react';

const MyForm = () => {
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
        <label htmlFor='FirstName'>First Name</label>
        <input 
            name="firstname"  
            //onChange={(event) => setFirstName(event.target.value)}
            onChange={saveFields}
       ></input>
       <label htmlFor='FirstName'>First Name</label>
       <input 
            name="lastName"  
            //onChange={(event) => setFirstName(event.target.value)}
            onChange={saveFields}
       ></input>
       <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;