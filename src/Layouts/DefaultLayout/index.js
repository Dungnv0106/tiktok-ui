import React from 'react';
import Header from '../components/Header';
import Sidebar from './Sidebar';

const DefaultLayout = ({ children }) => {
  // console.log(children);
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content"> {children} </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
