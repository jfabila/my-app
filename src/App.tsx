import { useFetch } from "./hooks/useFetch";
import "./App.css";

const url = "https://dummyjson.com/products";

interface Data {
  products: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }[];
  total: number;
  skip: number;
  limit: number;
}

function App() {
  const { data, loading, error } = useFetch<Data>(url);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
}

export default App;
