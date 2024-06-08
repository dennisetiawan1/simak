import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a href="/" className='text-blue-600 underline'>Dashboard</a>
    </div>
  );
};

export default NotFoundPage;
