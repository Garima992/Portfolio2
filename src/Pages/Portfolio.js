 import * as React from 'react';
import { useState } from 'react';


const PortfolioMenu = () => {


  const [selectedTag, setSelectedTag] = useState("all");
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "",
      tags: ["Ecommerce"],
      imageUrls: ["BDL.png", "BFS.png"]
    },
    {
      id: 2,
      title: "",
      tags: ["Business"],
      imageUrls: ["CC.png", "LC.png", "RS.png"]
    },
    {
        id: 3,
        title: "",
        tags: ["Portfolio"],
        imageUrls: ["TH.png"]
      },
    // Add more card objects as needed
  ]);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const filteredCards = selectedTag === "all"
    ? cards
    : cards.filter(card => card.tags.includes(selectedTag));

  return (

    <>    <h3>Portfolio</h3>
        <p>I have worked on variety of projects from a standard e-commerce website,
             to a single product based website, from login portal to single nd multi page websites.</p><br/>



    <div>
      <div className="tag-buttons">
        <button className='port-button' onClick={() => handleTagClick("all")}>All</button>
        <button className='port-button'  onClick={() => handleTagClick("Ecommerce")}>Ecommerce</button>
        <button className='port-button'  onClick={() => handleTagClick("Business")}>Business</button>
        <button className='port-button'  onClick={() => handleTagClick("Portfolio")}>Portfolio</button>
        {/* Add more tag buttons as needed */}
      </div><br/>
      <div className="image-cards">
        {filteredCards.map(card => (
          <div key={card.id} className="image-card">
            {card.imageUrls.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Image ${index + 1}`} className='port-image' />
            ))}
            <h3>{card.title}</h3>
            {/* Add additional card information */}
          </div>
        ))}
      </div>
    </div> </>
  );
};

export default PortfolioMenu;



