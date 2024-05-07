
import React, { useState, useEffect } from 'react';

export default function HomePage() {
  const [typing, setTyping] = useState('');
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    getFoods();
  }, [typing]); // useEffect'i typing state'i değiştiğinde tetiklenmesi için typing bağımlılığıyla sınırlıyoruz.

  async function getFoods() {
    try {
      const response = await fetch(' http://localhost:5173//database.json');
      const data = await response.json();

      // Filtreleme işlemini veri çekildikten sonra yapmalısınız.
      const filteredData = data
        .filter(item => item.food_name.includes(typing))
        .map(i => ({
          id: i.sessionId,
          title: i.food_name,
          img: i.food_img
        }));

      setFoodData(filteredData);
    } catch (error) {
      console.error('Error fetching food data:', error);
    }
  }

  function typingStart(e) {
    setTyping(e.target.value);
  }

  return (
    <>
      <div>
        <div className='searchBar'>
          <div className='mainSearchBar'>
            <h2>Search Food</h2>
            <input onChange={typingStart} type="text" placeholder='Search...' />
            <br />
            {typing}
          </div>
        </div>

        <div className='mainFood'>
          <div className='foodBoxs'>
            {foodData.map((food, index) => (
              <div key={index} className='boxs'>
                <img src={food.img} alt={food.title} />
                <div className='foodTitle'>{food.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
 