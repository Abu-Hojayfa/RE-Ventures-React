import React from 'react';

const Blog = () => {

  return (

    <div className="w-5/6 mx-auto my-10">
      <div
        className="hero rounded-3xl z-30"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/cityscape-anime-inspired-urban-area_23-2151028665.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md  py-2 pt-5 ">
            <p>Home /Blogs</p>
            <h1 className="mb-5 text-5xl font-bold">
              BLOG
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exerationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>



  );
};

export default Blog;