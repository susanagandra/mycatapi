import { useEffect, useState } from "react";


const CatImage = (event) => {
    const [setError] = useState(null);
    const [imageCat, setImageCat] = useState([]);
    const path = `images/search?limit=6`;
    const apiKey = "live_pbbN9GvoaedvPVRnGUtbFjZaDhe5r9qpMcNDR6U3AcmaAbg8uoKVOib2R5MZJMIq";
    const baseURL = "https://api.thecatapi.com/v1/";

    useEffect(() => {

        const requestOptions = {
            method: "GET",
            headers: {
                "x-api-key": apiKey,
                "Content-Type": "application/json"
            }
        };

        fetch(baseURL + path, requestOptions)
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

    function addToFavorite(){
        
    }


    return (
        <div>
            <div className="maincontent">
                <div id="grid" className="imgrid">
                    {imageCat.map((imageCat) => (
                        <div key={imageCat.id}>
                            <img key={imageCat.id} src={imageCat.url} alt={imageCat.id} />
                            <button className="button" onClick={() => addToFavorite(imageCat.id)}> Add to My Favorites </button>
                        </div>
            
                    ))}
                </div>
            </div>
        </div>
    )
};

export default CatImage;