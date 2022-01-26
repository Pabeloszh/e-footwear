import React from 'react';
import { Color } from "../Color"
import { Photos } from "../Photos"
import { Size } from "../Size"
import { Skeleton } from '@mui/material';
import { ProductSkeletonInterfaces } from './ProductSkeleton.interfaces';

export const ProductSkeleton = ({ product } : ProductSkeletonInterfaces) => {
  return (
      <>
        <Photos product={product}/>
        <div className="desc">
            <p><Skeleton/></p>
            <h2><Skeleton/></h2>
            <h3><Skeleton/></h3>
            <Color colors={product?.colors}/>
            <Size aviableSizes={product?.sizes}/>
            <h3></h3>
            <div className="actions">
                <Skeleton variant="rectangular" width={'100%'} height={36.5}/>
                <Skeleton variant="rectangular" width={'100%'} height={36.5}/>
            </div>
            <Skeleton variant="rectangular" width={'100%'} height={180} className="skeleton-info"/>
            <Skeleton variant="rectangular" width={'100%'} height={99}/>
        </div>
      </>
  );
};

