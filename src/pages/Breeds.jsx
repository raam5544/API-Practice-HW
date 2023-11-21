import React from 'react'
import { useState, useEffect, useParams } from 'react';

function Breeds() {
  const apiKey = "live_3s7CqaZReCJTs2t9lniWOMPUYKTF6yYOnPaLgID4pPLvdH5VoRlM4EoHLuRQ3Vcs";
  // Grabbing the Currency symbol from the URL Params
  // const params = useParams()
  // const symbol = params.symbol
  // Using the other two variables to create our URL
  const url = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${apiKey}`;

  //state to hold the coin data
  const [obj, setObj] = useState("null");
  const [count, setCount] = useState(0)

  function incCount() {
    if (count < 9) {
      setCount(count + 1)
    }
    else return
  }

  //function to fetch coin data
  const getImg = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    setObj(data);
  };

  // const getCoin = async () => {
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setCoin(data);
  //   } catch (e) {
  //     console.error(e)
  //   }
  // };

  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getImg();
  }, []);

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <img src={obj[count].url} />
        <h3>Pic No:{count + 1}</h3>
        <button onClick={incCount}>Click me</button>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return obj ? loaded() : loading();
};


export default Breeds