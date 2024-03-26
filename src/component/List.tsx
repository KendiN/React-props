import React, { useState } from "react";

const AnimalList = () => {
    const [newAnimal, setNewAnimal] = useState("");
    const [Animals, setAnimals] = useState(["Lion", "Elephant"]);

    const handleAddAnimal = () => {
        if (newAnimal.trim() !== "") {
            setAnimals([...Animals, newAnimal.trim()]);
            setNewAnimal("");
        }
    };

    return (
        <div>
            <h1>List of Animals</h1>
            <ul>
                {Animals.map((Animal, index) => (
                    <li key={index}>{Animal}</li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={newAnimal}
                    onChange={(e) => setNewAnimal(e.target.value)}
                    placeholder="Enter a new Animal"
                />
                <button onClick={handleAddAnimal}>Add Animal</button>
            </div>
        </div>
    );
};

export default AnimalList;
