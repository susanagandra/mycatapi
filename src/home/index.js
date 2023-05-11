import { useEffect, useState } from "react";


const Home = () => {
    const [setError] = useState(null);
    const [imageCat, setImageCat] = useState([]);

    const apiKey = "live_pbbN9GvoaedvPVRnGUtbFjZaDhe5r9qpMcNDR6U3AcmaAbg8uoKVOib2R5MZJMIq";
    const url = "https://api.thecatapi.com/v1/images/search?limit";


    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: {
                "x-api-key": apiKey,
                "Content-Type": "application/json"
            }
            
        };

        fetch(url, requestOptions)
            .then((response) => {
                    if (!response.ok) throw Error("not ok")
                    return response;
                })
            .then(response => { return response.json() })
            .then((data) => {
                    if (data) {
                        setImageCat(data);
                    }
            })
            .catch((error) => {
                    console.error(error);
                    setError("Error images.");
            });
        }, []);

 
    return (
        <div>
            <br></br>
            <header> Wealcome to the Cat's API </header>
            <br></br>
            <div className="maincontent">
                    {imageCat.map((imageCat) => (
                        <div key={imageCat.id}>
                            <img key={imageCat.id} src={imageCat.url} alt={imageCat.id} />
                        </div>
            
                    ))}
            </div>
        </div>
    )
};

export default Home;