import { useState, useEffect } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

const API_KEY = "WpiCXG9zatBV9JQICsPIyxTF4t97Cv5u";
const URL = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=cats`;

function Giphy() {
  const [gifSrc, setGifSrc] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchGif = () => {
    fetch(URL, { mode: "cors" })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setGifSrc(response.data.images.original.url);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchGif();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div> 
      <input type="text" placeholder="Enter gif name" />
      <img className="w-40" src={gifSrc} alt="Cat" />
    </div>
  );
}

export default Giphy;
