import { useEffect, useState } from "react";
import FavoriteCat from "../favorites";


const CatImage = () => {
    const [setError] = useState(null);
    const [imageCat, setImageCat] = useState([]);

    const apiKey = "live_pbbN9GvoaedvPVRnGUtbFjZaDhe5r9qpMcNDR6U3AcmaAbg8uoKVOib2R5MZJMIq";
    const url = "https://api.thecatapi.com/v1/images/search?limit=6";


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

    function addToFavorite(imageCat){
        console.log(imageCat);
        return   <FavoriteCat favorite={imageCat} />;
    }

    return (
        <div>
            <br></br>
            <div className="maincontent">
                <div id="grid" className="imgrid">
                    {imageCat.map((imageCat) => (
                        <div key={imageCat.id}>
                            <img key={imageCat.id} src={imageCat.url} alt={imageCat.id} />
                            <button className="button" onClick={() => addToFavorite(imageCat.url)}> Add to My Favorites </button>
                        </div>
            
                    ))}
                </div>
            </div>
        </div>
    )
};

export default CatImage;