

const apiKey = "live_pbbN9GvoaedvPVRnGUtbFjZaDhe5r9qpMcNDR6U3AcmaAbg8uoKVOib2R5MZJMIq";

const requestOptions = {
    method: "GET",
    headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json"
    }
};

export const getImages = ({setCatImage, catImage}) => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=5", requestOptions)
        .then((response) => response.json())
        .then((data) => {
            setCatImage(data.data);
            return catImage;
        })
        .catch((error) => console.error(error));
};



