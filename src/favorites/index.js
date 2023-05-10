import { useEffect, useState } from "react";


const FavoriteCat = () => {
    const [setError] = useState(null);
    const [favoriteCat, setFavoriteCat] = useState([]);

    const url = ``;
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
            .then(response => { return response.json() })
        
            .then((data) => {
                    if (data) {
                        setFavoriteCat(data);
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
                    {favoriteCat.map((imageCat) => (
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

export default FavoriteCat;