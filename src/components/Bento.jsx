import React from 'react';

function Bento() {
  return (
    <main className="p-6">
      <h1 className="text-h1 font-netron">ABOUT</h1>
      <hr className="my-6 border-gray-300" />
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Tech Stacks */}
        <div className="col-span-1 border border-accent sm:col-span-2 lg:col-span-2 bg-gray-800 text-white rounded-lg shadow-md p-6 flex items-center justify-center text-center">
          Tech Stacks
        </div>
        {/* Certs */}
        <div className="bg-gray-800 text-white rounded-lg border border-accent shadow-md p-6 flex items-center justify-center text-center">
        <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="be5be992-9c81-4624-a977-e1bc85d6a251" data-share-badge-host="https://www.credly.com"></div>
        </div>
        <div className="bg-gray-800 text-white rounded-lg border border-accent shadow-md p-6 flex items-center justify-center text-center">
        <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="2726eaae-061f-4930-bf3b-c5b5e361a0ff" data-share-badge-host="https://www.credly.com"></div>
        </div>
        {/* Social Links */}
        <div className="space-x-2 col-span-1 sm:col-span-2 flex justify-evenly bg-gray-800 text-white rounded-lg shadow-md p-4">
          <a href=""><img className="py-9 px-11 bg-dark rounded-lg border shadow-inner border-accent duration-300 hover:scale-105 hover:shadow-primary" src="./assets/github.svg" alt="" /></a>
          <a href=""><img className="py-9 px-11 bg-dark rounded-lg border shadow-inner border-accent duration-300 hover:scale-105 hover:shadow-primary" src="./assets/linkedin.svg" alt="" /></a>
          <a href=""><img className="py-9 px-11 bg-dark rounded-lg border shadow-inner border-accent duration-300 hover:scale-105 hover:shadow-primary" src="./assets/facebook.svg" alt="" /></a>
          <a href=""><img className="py-9 px-11 bg-dark rounded-lg border shadow-inner border-accent duration-300 hover:scale-105 hover:shadow-primary" src="./assets/email.svg" alt="" /></a>
          <a href=""><img className="py-9 px-11 bg-dark rounded-lg border shadow-inner border-accent duration-300 hover:scale-105 hover:shadow-primary" src="./assets/notion.svg" alt="" /></a>
        </div>
        {/* See Projects */}
        <div className="col-span-1 sm:col-span-2 bg-gray-800 border border-accent text-white rounded-lg shadow-md p-6 flex items-center justify-center text-center">
          See projects
        </div>
        {/* GitHub Contributions */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 border border-accent bg-gray-800 text-white rounded-lg shadow-md p-6 flex items-center justify-center text-center">
          GitHub Contributions
        </div>
      </section>
    </main>
  );
}

export default Bento;
