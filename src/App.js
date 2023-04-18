import { useEffect, useState } from "react";
import Search from "./components/Search";
import axios from 'axios';
import ImageLists from "./components/ImageLists";
import './App.css';
import { ReactComponent as ReactLogo } from './images/circle.svg';

function App() {

  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const onSubmit = async (value) => {
    setLoading(true);
    try {
      const res = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
          Authorization: 'Client-ID RLzBVALmukbYqSMc8Unh74CxCA66bxhfhmNL_FqzCJY'
        },
        params: {
          query: value,
          per_page: 30
        }
      });
      setImages(res.data);
    }
    catch (error) {
      console.error(error.message);
    }
    setLoading(false);

  };

  useEffect(() => {
    onSubmit();
  }, []);

  return (
    <>
      <div className="home">
        <Search onSubmit={onSubmit} />
        <div>
          {loading && <ReactLogo />}
          {!loading && (
            <ImageLists result={images} />
          )}
        </div>
      </div>

    </>
  );
}

export default App;
