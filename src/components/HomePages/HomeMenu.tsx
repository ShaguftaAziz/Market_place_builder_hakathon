// src/componets/HomePages/Homemenu.tsx
import React from 'react';
import { Great_Vibes } from 'next/font/google';
import Image from 'next/image';

const VibeFont = Great_Vibes({ subsets: ['latin'], weight: ['400'] });

const MenuCategories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drink', 'Snack', 'Soups'];

interface MenuItemProps {
  image: string;
  date: string;
  title: string;
  price: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ image, date, title, price }) => (
  <li className="flex items-center gap-4 p-4 hover:bg-gray-800/50 rounded-lg transition-colors border border-gray-800">
    <Image
      src={image}
      alt={title}
      width={80}
      height={80}
      className="rounded-lg object-cover"
    />
    <div className="flex-1">
      <p className="text-gray-400 text-xs mb-1">{date}</p>
      <h3 className="text-gray-200 text-sm mb-1 hover:text-[#FF9F0D] transition-colors">{title}</h3>
      <p className="text-[#FF9F0D] font-semibold">${price}</p>
    </div>
  </li>
);

const ChooseFromMenu = () => {
  const menuItems = [
    { image: '/homeManu1.png', date: '20 Feb 2022', title: 'Keep Your Business in restaurant', price: '12.50' },
    { image: '/homeManu2.png', date: '20 Feb 2022', title: 'Keep Your Business in hotel view', price: '14.90' },
  ];

  return (
    <section className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className={`${VibeFont.className} text-[#FF9F0D] text-3xl md:text-4xl mb-2 animate-fade-in`}>
            Choose & pick
          </p>
          <h2 className="text-white text-3xl md:text-5xl font-bold">
            <span className="text-[#FF9F0D]">Fr</span>om Our Menu
          </h2>
        </div>

        {/* Categories */}
        <nav className="mb-16">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-white">
            {MenuCategories.map((category, index) => (
              <li
                key={category}
                className={`cursor-pointer hover:text-[#FF9F0D] transition-colors ${
                  index === 0 ? 'text-[#FF9F0D] font-bold' : ''
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </nav>
