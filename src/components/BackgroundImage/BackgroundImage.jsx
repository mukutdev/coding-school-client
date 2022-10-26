import React from "react";

const BackgroundImage = ({ img, content }) => {
  return (
    <section
      style={{ backgroundImage: `url(${img})` }}
      className="h-96 bg-cover flex items-center justify-center"
    >
      <h2 className="text-4xl uppercase tracking-widest text-white font-semibold">
        {content}
      </h2>
    </section>
  );
};

export default BackgroundImage;
