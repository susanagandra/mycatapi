import { useEffect, useState } from "react";

const History = () => {
  const [error, setError] = useState(null);
  const [voteUp, setVoteUp] = useState(0);
  const [voteDown, setVoteDown] = useState(0);

  useEffect(() => {
    const url = "https://api.thecatapi.com/v1/votes";
    const apiKey = "live_pbbN9GvoaedvPVRnGUtbFjZaDhe5r9qpMcNDR6U3AcmaAbg8uoKVOib2R5MZJMIq";

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
        const upVotes = data.filter(vote => vote.value === 1);
        const downVotes = data.filter(vote => vote.value === 0);
        setVoteUp(upVotes.length);
        setVoteDown(downVotes.length);
      })
      .catch((error) => {
        console.error(error);
        setError("Error loading votes.");
      });
  }, []);

  return (
    <div>
      <h2>History of votes: </h2>
      <p>Votes Up: {voteUp}</p>
      <p>Votes Down: {voteDown}</p>
      <br />
    </div>
  );
};

export default History;
