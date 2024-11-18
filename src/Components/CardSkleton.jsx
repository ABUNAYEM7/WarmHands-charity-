import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CardSkeleton = () => {
  return (
    <div className="p-4 my-12 max-w-md bg-transparent  mx-auto">
      {[...Array(1)].map((_, index) => (
        <div key={index} className="card max-h-[400px] max-w-[400px] shadow-xl mb-8">
          <figure className="h-[40%]">
            <Skeleton height={200} /> {/* Skeleton for the image */}
          </figure>

          <div className="card-body p-2">
            <h2 className="card-title flex items-center justify-between">
              <Skeleton width="50%" height={20} /> {/* Skeleton for the title */}
              <div className="badge border-none">
                <Skeleton width={50} height={20} /> {/* Skeleton for status */}
              </div>
            </h2>

            <div className="badge border-none ">
              <Skeleton width={80} height={20} /> {/* Skeleton for division */}
            </div>

            <p>
              <Skeleton count={3} width="90%" height={20} /> {/* Skeleton for description */}
            </p>

            <div className="card-actions justify-end mt-4">
              <Skeleton width={100} height={40} /> {/* Skeleton for button */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSkeleton;
