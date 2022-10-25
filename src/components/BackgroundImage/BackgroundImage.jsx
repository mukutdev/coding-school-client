import React from 'react';

const BackgroundImage = () => {
    return (
        <section style={{backgroundImage: `url(${bg_breadcumb})`}} className="h-96 bg-cover flex items-center justify-center">
        <h2 className="text-4xl uppercase tracking-widest text-white font-semibold">Login</h2>
     </section>
    );
};

export default BackgroundImage;