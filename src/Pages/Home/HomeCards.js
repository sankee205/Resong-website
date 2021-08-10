import React from 'react';
import './HomeCards.css';
import CardItem from '../../Components/CardItem';

function HomeCards() {
  return (
    <div className='cards'>
      <h1>Join our journey to a better future </h1>
      <div className='cards__container'>
        <div className='cards__wrapper' >
          <ul className='cards__items'>
            <CardItem
              src='images/powerful_women.jpeg'
              text='Read about our achievements and previous dealings'
              label='References'
              path='/references'
            />
            <CardItem
            src='images/about.jpg'
            text='Learn more about Resong Consulting'
            label='About Resong'
            path='/about'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default HomeCards;
