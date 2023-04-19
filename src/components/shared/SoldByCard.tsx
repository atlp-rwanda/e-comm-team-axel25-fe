import React from 'react';
import { Link } from 'react-router-dom';

type SoldByProps = {
  seller?: string;
  feedback?: number;
  sellerItems: URL | string;
  contactSeller: URL | string;
};

function SoldByCard({
  seller,
  feedback,
  sellerItems,
  contactSeller,
}: SoldByProps) {
  return (
    <div className="bg-white dark:bg-dark2 rounded-lg w-52 h-52 mt-2 drop-shadow-lg">
      <h3 className="text-dark dark:text-white text-lg font-medium ml-4 pt-3">
        Sold by:
      </h3>
      <p className="text-primary font-medium ml-4 mt-2">{seller}</p>
      <p className="text-dark ml-4 mt-2 dark:text-white">
        {feedback}% positive feedback
      </p>
      <hr className="border-gray-300 mx-3 mt-3" />
      <div className="ml-4 flex flex-col">
        <Link to={contactSeller} className="text-primary mt-2">
          Contact seller
        </Link>
        <Link to={sellerItems} className="text-primary mt-2">
          Seller&apos;s other items
        </Link>
      </div>
    </div>
  );
}

export default SoldByCard;

SoldByCard.defaultProps = {
  feedback: 90,
  seller: 'WatchDealer1',
};
