import "./post.scss";

import React from "react";

const post = (props) => {
  return (
    <div className="post">
      <div className="post__item">
        <img
          className="post__img"
          src="https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        {props.name}
        <span>{props.like}</span>
      </div>
      <div className="post__item">
        <img
          className="post__img"
          src="https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aWNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        {props.name}
        <span>{props.like}</span>
      </div>
      <div className="post__item">
        <img
          className="post__img"
          src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aWNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        {props.name}
        <span>{props.like}</span>
      </div>
      <div className="post__item">
        <img
          className="post__img"
          src="https://images.unsplash.com/photo-1637593992672-ed85a851fdc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aWNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        {props.name}
        <span>{props.like}</span>
      </div>
    </div>
  );
};

export default post;
