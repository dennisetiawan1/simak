import React from 'react';

const Footer = ({className}) => {
  return (
    <footer className={className}>
      <div className="w-[1220px] flex mx-auto text-white h-full items-center justify-between">
        <h1>©️ 2024 Denni Setiawan</h1>
      </div>
    </footer>
  );
};
Footer.defaultProps = {
  className: "w-[1260px] h-9 bg-birutua mt-10",
};

export default Footer;
