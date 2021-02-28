import React from "react";

const ImageItem = (props) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={props.url} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">Photo by {props.user}</div>
        <ul>
          <li>
            <strong>Views: </strong>
            {props.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {props.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {props.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {props.tags.split(" ").map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageItem;
