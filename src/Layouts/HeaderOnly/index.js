import React from 'react';
import Header from '../components/Header';

const DefaultLayout = ({ children }) => {
  // console.log(children);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content"> {children} </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
