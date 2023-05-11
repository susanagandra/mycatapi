import { useEffect, useState } from "react";

const Votes = () => {
  const [error, setError] = useState(null);
  const [voteCat, setVoteCat] = useState([]);

  const url = "https://api.thecatapi.com/v1/images/search";
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
        setVoteCat(data);
      })
      .catch((error) => {
        console.error(error);
        setError("Error loading votes.");
      });
  }, []);


  function addVotes(image_id) {
    const requestOptions = {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image_id: image_id,
        value:1
      })
    };

    fetch("https://api.thecatapi.com/v1/votes", requestOptions)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
        setError("Error adding vote.");
      });
  }

  return (
    <div>
      <br />
      <div className="maincontent">
        <div id="grid" className="imgrid">
          {voteCat.map((image) => (
            <div key={image.id} className="image-container">
              <img
                src={image.url}
                alt={image.id}
                className="image"
              />
              <button className="button" onClick={() => addVotes(image.id)}>
                Vote Up
              </button>
              <button className="button" onClick={() => addVotes(image.id, 0)}>
                Vote Down
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Votes;
