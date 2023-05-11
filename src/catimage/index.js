import { useEffect, useState } from "react";

const CatImage = () => {
  const [error, setError] = useState(null);
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
        if (!response.ok) throw Error("not ok");
        return response.json();
      })
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

  function addToFavorite(image) {
    const requestOptions = {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image_id: image.id
      })
    };

    fetch("https://api.thecatapi.com/v1/favourites", requestOptions)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        setError("Error adding to favorites.");
      });
  };

  return (
    <div>
    <br></br>
    <div className="maincontent">
      <div id="grid" className="imgrid">
        {imageCat.map((image) => (
          <div key={image.id} className="image-container">
            <img
              key={image.id}
              src={image.url}
              alt={image.id}
              className="image"
            />
            <button className="button" onClick={() => addToFavorite(image)}>
              Add to My Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  )};  

export default CatImage;
