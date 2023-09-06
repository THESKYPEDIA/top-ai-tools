"use client";
import Image from "next/image";
import Card from "../app/components/Card";
import Search from "../app/components/Search";
import CategoryFilter from "../app/components/CategoryFilter";

import { useEffect, useState } from "react";

export default function Home() {
  const cardsData = [
    {
      title: "Noteworthy technology acquisitions 2021",
      content:
        " Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      buttonText: "Button 1 Text",
      category: "Category A",
      url: "http://sai",
    },
    {
      title: "Card 2 Title",
      content: "Content for Card 2",
      buttonText: "Button 2 Text",
      category: "Category B",
      url: "http://sai",
    },
    {
      title: "Card 3 Title",
      content: "Content for Card 2",
      buttonText: "Button 2 Text",
      category: "Category B",
      url: "http://sai",
    },
    {
      title: "Card 4 Title",
      content: "Content for Card 2",
      buttonText: "Button 2 Text",
      category: "Category B",
      url: "http://sai",
    },
    {
      title: "Card 5 Title",
      content: "Content for Card 2",
      buttonText: "Button 2 Text",
      category: "Category B",
      url: "http://sai",
    },
    {
      title: "Card 6 Title",
      content: "Content for Card 2",
      buttonText: "Button 2 Text",
      category: "Category B",
      url: "http://sai",
    },
    {
      title: "Card 6 Title",
      content: "Content for Card 2",
      buttonText: "Button 2 Text",
      category: "Category B",
      url: "http://sai",
    },
    {
      title: "Card 6 Title",
      content: "Content for Card 2",
      buttonText: "Button 2 Text",
      category: "Category B",
      url: "http://sai",
    },
    {
      title: "Card 6 Title",
      content: "Content for Card 2",
      buttonText: "Button 2 Text",
      category: "Category B",
      url: "http://sai",
    },
    {
      title: "Card 6 Title",
      content: "Content for Card 2",
      buttonText: "Button 2 Text",
      category: "Category B",
      url: "http://sai",
    },
    {
      title: "Card 6 Title",
      content: "Content for Card 2",
      buttonText: "Button 2 Text",
      category: "Category B",
      url: "http://sai",
    },

    // Add more card data as needed
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // const filteredCards = cardsData.filter((card) =>
  //   card.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  const categories = Array.from(
    new Set(cardsData.map((card) => card.category))
  );
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  const filteredCards = cardsData
    .filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((card) => !selectedCategory || card.category === selectedCategory);

  return (
    <main className="flex-col  items-center p-10">
      {/* flex min-h-screen flex-col items-center  p-24 */}

      <h1 className="text-5xl font-bold text-center mb-10">Top Ai Tools</h1>

      <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      {/* <Search/> */}

      {/* <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      /> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 ">
        {filteredCards.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>
    </main>
  );
}
