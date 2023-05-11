import { useEffect, useState } from "react";

const FavoriteCat = () => {
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
      .then(data => {
        console.log(data);
        setFavoriteCat(data);
      })
      .catch(error => {
        console.error(error);
        setError("Error images.");
      });
  }, []);

  function deleteFavorite(favoriteId) {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json"
      }
    };

    fetch(`https://api.thecatapi.com/v1/favourites/${favoriteId}`, requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setFavoriteCat(favoriteCat.filter(favorite => favorite.id !== favoriteId));
      })
      .catch(error => {
        console.error(error);
        setError("Error deleting the favorite.");
      });
  }

  return (
    <div>
      <div className="gridFavorites">
        {favoriteCat.map(favorite => (
          <div key={favorite.id}>
            <img src={favorite.image.url} alt="cat" />
            <button className="button" onClick={() => deleteFavorite(favorite.id)}>Delete Favorite</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteCat;
