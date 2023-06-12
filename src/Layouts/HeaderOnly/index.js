import React from 'react';
import Header from '../components/Header';

const HeaderOnly = ({ children }) => {
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

export default HeaderOnly;
