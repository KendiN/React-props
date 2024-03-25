import react from 'react';
import City from "./City";

const Country = ({continent}: ContinentProps) => {
    return <City continent={continent} />;
}

export default Country;