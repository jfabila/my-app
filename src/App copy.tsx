import { useState, useEffect, useCallback } from "react";
import "./App.css";
import { Button } from "./components";

function App() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");

  const loader = useCallback(
    (loadingValue: boolean) => {
      setloading(loadingValue);
      console.info("loading", loading);
    },
    [loading]
  );

  const fetchData = useCallback(() => {
    loader(true);
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setdata(data);
      })
      .catch((err) => {
        setError(err as string);
      })
      .finally(() => {
        loader(false);
      });
  }, [loader]);

  //useEffect maneja ciclo de vida de un componente

  //sincronizar con entidades externas como el servidor: operaciones asincronas eg timeout, fetch, axios interval u've desuscriptor from interval

  useEffect(() => {
    fetchData();
    //cuando el componente se monta
    //cuando se modifica el estado
  }, [fetchData]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return <div>{JSON.stringify(data)}</div>;
}

export default App;
