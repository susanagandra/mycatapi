import { useEffect, useState } from "react";


const CatImage = () => {
    const [error, setError] = useState(null);
    const [imageCat, setImageCat] = useState([]);

    const apiKey = "live_pbbN9GvoaedvPVRnGUtbFjZaDhe5r9qpMcNDR6U3AcmaAbg8uoKVOib2R5MZJMIq";
    const url =`https://api.thecatapi.com/v1/images/search?limit=6`;

    useEffect(() => {
        
        const requestOptions = {
            method: "GET",
            headers: {
                "x-api-key": apiKey,
                "Content-Type": "application/json"
            }
        };

        fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => {
            if (data){
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
    <div class="maincontent">
        <div id="grid" class="imgrid"> 
            {imageCat.map((imageCat) => (
                <div key={imageCat.id}>
                <div>{imageCat.width}</div>
                <div>{imageCat.heigth}</div>
                <div>
                    <img key={imageCat.id} src={imageCat.url} alt={imageCat.id} />
                </div>
            </div>
            ))}
        </div>
    </div>
</div>
)};

export default CatImage;