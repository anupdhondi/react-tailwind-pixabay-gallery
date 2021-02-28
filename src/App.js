import { Fragment, useEffect, useState } from "react";
import ImageList from "./components/ImageList";

function App() {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchPhotos() {
      const response = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${word}&image_type=photo&pretty=true`);
      const responseData = await response.json();
      setImages(responseData.hits);
    }
    fetchPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${word}&image_type=photo&pretty=true`);
    const responseData = await response.json();
    setImages(responseData.hits);
  };

  return (
    <Fragment>
      {images.length !== 0 && (
        <div className="container mx-auto px-4">
          <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form onSubmit={onSubmit} className="w-full max-w-sm">
              <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
                <input
                  onChange={(e) => setWord(e.target.value)}
                  className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Search Image Term..."
                />
                <button
                  className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <ImageList images={images} />
        </div>
      )}
    </Fragment>
  );
}

export default App;
