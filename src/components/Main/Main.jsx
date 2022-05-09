import React from "react";
import "./main.scss";
import Post from "./Content/Post";

const main = () => {
  return (
    <main className="main">
      <div className="main__img">
        <img
          className="main__im"
          src="https://media.istockphoto.com/photos/modern-twostory-home-in-miami-with-yard-and-swimming-pool-picture-id1171461000?b=1&k=20&m=1171461000&s=170667a&w=0&h=CRUn7EQsHJXeXMzmH1A4TaCyysyBCsYBU82lbYSWkTs="
          alt=""
        />
      </div>
      <Post name="post" like="100k" />
    </main>
  );
};

export default main;
