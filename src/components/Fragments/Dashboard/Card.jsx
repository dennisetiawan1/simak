import React from 'react';

const Card = ({ link, imgSrc, title, description, isVertical = false, isModal = false }) => {
  const cardClass = isVertical ? 'card-flex-col group relative border border-gray-300' : 'card-flex-row items-center';
  const linkProps = isModal
    ? { 'data-modal-target': 'popup-modal', 'data-modal-toggle': 'popup-modal' }
    : {};

  return (
    <a href={link} className={cardClass} {...linkProps}>
      <div className="flex flex-row items-center justify-between h-[100px]">
        {isVertical && (
          <>
            <span className="card-hover-t"></span>
            <span className="card-hover-r"></span>
            <span className="card-hover-b"></span>
            <span className="card-hover-l"></span>
          </>
        )}
        <img src={imgSrc} alt="" className='w-16' />
        <div className="flex flex-col items-start mx-3">
          <h1 className="text-2xl text-[#144272] mt-2">{title}</h1>
          <p className="text-xs text-[#144272] mt-1">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
