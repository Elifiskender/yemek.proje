
import React, { useState, useEffect } from 'react';

export default function TodosFood() {
  const [typing, setTyping] = useState('');
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    getFoods();
  }, [typing]); // useEffect'i typing state'i değiştiğinde tetiklenmesi için typing bağımlılığıyla sınırlıyoruz.

  async function getFoods() {
    try {
      const response = await fetch(' http://localhost:5173//database.json');
      const data = await response.json();

      // Filtreleme işlemi.
      const filteredData = data
        .filter(item => item.food_name.includes(typing))
        .map(i => ({
          id: i.sessionId,
          title: i.food_name,
          img: i.food_img,
          includes: i.food_includes,
          belongto: i.belong_to,
          make: i.food_make

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


        <div className='FoodContent'>
          <div className='foodBoxes'>
            {foodData.map((food, index) => (
              <div key={index} className='boxes'>
                <div className='card-img'>
                <img src={food.img} alt={food.title} /></div>
                <h2>{food.title}</h2>
                <h3>{food.belongto}</h3>
                <p>{food.includes}</p>
                <p>{food.make}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
 