import React from 'react'
import { useState } from 'react'

export const ProductCard = ({ image, name, price, discount }) => {

  const calculateDiscountedPrice = () => {
    return price - (price * discount / 100);
  };

  // Fungsi format Rupiah
  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(number);
  };
  return (
    <div className="group relative w-full bg-white rounded-2xl  shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl">
      {/* Wishlist Button */}
      {/* <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-4 right-4 z-10 bg-white/70 backdrop-blur-sm p-2 rounded-full transition-all hover:bg-white/90"
      >
        <Heart
          className={`w-6 h-6 ${isLiked
            ? 'text-red-500 fill-red-500'
            : 'text-gray-600 hover:text-red-500'
            }`}
        />
      </button> */}

      {/* Product Image */}
      <div className="relative aspect-[16/9] overflow-hidden shadow-md border-hitam" >
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            discount {discount}%
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="px-5 py-4 space-y-1">
        <h3 className="text-xl font-bold text-gray-800 line-clamp-2">
          {name}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {discount > 0 ? (
              <>
                <span className="text-xl font-bold text-emerald-600">
                  {formatRupiah(calculateDiscountedPrice())}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  {formatRupiah(price)}
                </span>
              </>
            ) : (
              <span className="text-xl font-bold text-emerald-600">
                {formatRupiah(price)}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          {/* <button className="bg-blue-500 text-white p-2.5 rounded-full hover:bg-blue-600 transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button> */}
        </div>
      </div>
    </div>
  )
}
