import { useEffect, useState } from "react";
import {} from "../catimage";
import UploadCat from "../uploadimage";


const FavoriteCat = ({imageCat}) => {
    const [setError] = useState(null);
    const [favoriteCat, setFavoriteCat] = useState([]);

    const url = "https://api.thecatapi.com/v1/images/:image_id?sub_id&size&include_vote=&include_favourite";
    const apiKey = "live_pbbN9GvoaedvPVRnGUtbFjZaDhe5r9qpMcNDR6U3AcmaAbg8uoKVOib2R5MZJMIq";
   
    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: {
                "x-api-key": apiKey,
            }
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then((data) => {
                setFavoriteCat(data);
            })
            .catch((error) => {
                    console.error(error);
                    setError("Error images.");
            });
    });


    return (
        <div>
            <div className="gridFavorites">
                    {favoriteCat.map((favorite) => (
                        <div key={favorite.id}>
                            <img src={favorite.imageCat.url} alt={'cat'} />
                        </div>
                    ))}
            </div>
        </div>
    )
};

export default FavoriteCat;