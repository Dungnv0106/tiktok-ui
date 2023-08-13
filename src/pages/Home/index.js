import React from 'react';
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

// Import any actions required for transformations.
import {fill} from "@cloudinary/url-gen/actions/resize";

const Home = () => {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  const myImage = cld.image('docs/models'); 
  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  myImage.resize(fill().width(250).height(250));

  return (
  <>
    <h2>Home Page</h2>
    <img src='http://res.cloudinary.com/dscjgwdu0/image/upload/v1691921811/zgqhsdchdh4hc5xod3xm.png'
      width='400px'
      height='680px'
      alt="My image"
    />
  </>
  );
};

export default Home;
