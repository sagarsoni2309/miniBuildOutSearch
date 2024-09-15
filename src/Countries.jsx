import { useEffect, useState} from 'react';
import CountryCard from "./CountryCard";

function Countries(){
    const API_ENDPOINT = "https://restcountries.com/v3.1/all";
    const[countries, setCountries] = useState([]);
    const[searchTerm, setSearchTerm] = useState("");
    const[filteredCountries, setFilteredCountries] = useState([]);

    useEffect(()=> {
        fetch(API_ENDPOINT).then((res)=> res.json()).then((data)=>{
            setCountries(data);

            setFilteredCountries(data);
        })
        .catch((error)=> console.error('Error fetching data:', error));
    }, []);

    useEffect(()=>{
        const results = countries.filter((country)=> country.name.common.toLowerCase().includes(searchTerm.toLowerCase()));

        setFilteredCountries(results);
    }, [searchTerm, countries]);

    return (
        <div>
            <div style={{
                display: "flex",
                justifyContent:"center",
                marginBottom:"20px",
            }}>
            <input
            type='text'
            placeholder='Search for a country...'
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
            style={{
                width: "600px",
                padding:"10px",
                marginBottom: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px", 
            }} />
            </div>
            <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
            }}>
                {filteredCountries.length > 0 ? (filteredCountries.map((country)=>(<CountryCard key={country.cca3}
                name={country.name.common}
            flagImg={country.flags.png}
        flagAltText={country.cca3 } />))
    ) : (
        <p></p>
    )}
            </div>
        </div>
    );
}

export default Countries;