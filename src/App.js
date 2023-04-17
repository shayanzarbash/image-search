import { useState } from "react";
import Search from "./components/Search";
import axios from 'axios';
import ImageLists from "./components/ImageLists";
import './App.css';

function App() {

  const [images, setImages] = useState('');

  const onSubmit = async (value) => {
    console.log("search", value);
    let res = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID RLzBVALmukbYqSMc8Unh74CxCA66bxhfhmNL_FqzCJY'
      },
      params: {
        query: value,
        per_page: 100
      }
    });
    console.log(res.data);
    setImages(res.data);
  };



  return (
    <>
      <div className="home">
        <Search onSubmit={onSubmit} />
        <ImageLists result={images} />
      </div>

    </>
  );
}

export default App;
