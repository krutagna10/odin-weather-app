import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const API_KEY = "WpiCXG9zatBV9JQICsPIyxTF4t97Cv5u";

function Giphy() {
  const [gifSrc, setGifSrc] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("marvel");

  const fetchGif = async (query: string) => {
    try {
      setIsLoading(true);
      const URL = `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${query}`;
      const response = await fetch(URL, { mode: "cors" });
      const { data } = await response.json();
      setGifSrc(data.images.original.url);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGif(searchQuery);
  }, []);

  function handleGifNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value);
  }

  function handleFetchNewImage() {
    fetchGif(searchQuery)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    fetchGif(searchQuery);
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="space-y-4">
      <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <Input
          type="text"
          onChange={handleGifNameChange}
          placeholder="Search for a gif"
        />
        <Button className="cursor-pointer bg-emerald-400 text-white hover:bg-emerald-600">
          Submit
        </Button>
      </form>
      <img src={gifSrc} alt={searchQuery} />
      <div className="flex justify-center">
        <Button className="cursor-pointer mx-auto" onClick={handleFetchNewImage}>Fetch New Image</Button>
      </div>
    </div>
  );
}

export default Giphy;
