import React from "react";

import "./Image.css";
import ImageItem from "./ImageItem";

const ImageList = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {props.images.map((image) => (
        <ImageItem
          key={image.id}
          url={image.webformatURL}
          likes={image.likes}
          user={image.user}
          views={image.views}
          downloads={image.downloads}
          tags={image.tags}
        />
      ))}
    </div>
  );
};

export default ImageList;
