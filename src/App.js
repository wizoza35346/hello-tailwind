import React from 'react';
import { hot } from 'react-hot-loader';

function App({ name }) {
  return (
    <>
      <div className="text-purple-500">
        <strong>HI! {name}.</strong>
      </div>

      <section className="flex -mx-2">
        <div className="px-2 w-4/12">
          <div className="bg-gray-300 h-12"></div>
        </div>
        <div className="px-2 w-4/12">
          <div className="bg-gray-300 h-12"></div>
        </div>
        <div className="px-2 w-4/12">
          <div className="bg-gray-300 h-12"></div>
        </div>
      </section>
    </>
  );
}

export default hot(module)(App);
