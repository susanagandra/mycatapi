import { useEffect, useState } from "react";


const FavoriteCat = ({favorite}) => {
    const [error, setError] = useState(null);
    const [favoriteCat, setFavoriteCat] = useState([]);
    const url = "https://api.thecatapi.com/v1/favourites";
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
                console.log(data);
                setFavoriteCat(data);
            })
            .catch((error) => {
                    console.error(error);
                    setError("Error images.");
            });
    }, []) ;


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