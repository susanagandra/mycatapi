import { useEffect, useState } from "react";

const Breeds = () => {
    const [setError] = useState(null);
    const [breedsCat, setBreedsCat] = useState([]);

    const url = "https://api.thecatapi.com/v1/breeds?limit=10&page=0";
    const apiKey = "live_pbbN9GvoaedvPVRnGUtbFjZaDhe5r9qpMcNDR6U3AcmaAbg8uoKVOib2R5MZJMIq";
   
    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: {
                "x-api-key": apiKey,
                "Content-Type": "application/json"
            }
          };
          

        fetch(url, requestOptions)
            .then(response => response.json())
            .then((data) => {
                setBreedsCat(data);
            })
            .catch((error) => {
                    console.error(error);
                    setError("Error images.");
            });
    });


    return (
        <div>
            <div className="gridFavorites">
                    {breedsCat.map((breeds) => (
                        <div key={breeds.id}>
                            <img src={breeds.url} alt={'cat'} />
                        </div>
                    ))}
            </div>
        </div>
    )
};

export default Breeds;