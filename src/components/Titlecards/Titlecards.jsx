import React, { useRef } from 'react';
import './Titlecards.css';
import card1 from '../../assets/cards/card1.jpg';
import card2 from '../../assets/cards/card2.jpg';
import card3 from '../../assets/cards/card3.jpg';
import card4 from '../../assets/cards/card4.jpg';
import card5 from '../../assets/cards/card5.jpg';
import card6 from '../../assets/cards/card6.jpg';
import card7 from '../../assets/cards/card7.jpg';
import card8 from '../../assets/cards/card8.jpg';
import card9 from '../../assets/cards/card9.jpg';
import card10 from '../../assets/cards/card10.jpg';
import card11 from '../../assets/cards/card11.jpg';
import card12 from '../../assets/cards/card12.jpg';
import card13 from '../../assets/cards/card13.jpg';
import card14 from '../../assets/cards/card14.jpg';

const Titlecards = ({title, category}) => {

  const MoveWithoutShiftRef = useRef(); // Create a reference 
  const MoveWithoutShift = (event) => {
    event.preventDefault(); // Prevent default vertical scroll
    MoveWithoutShiftRef.current.scrollLeft += event.deltaY; // Scroll horizontally based on vertical scroll
  };

  return (
    <div className="title-cards">
      <h2>{title?title:"Popular on Netflix"}</h2>

      <div className="card-list" ref={MoveWithoutShiftRef} onWheel={MoveWithoutShift}>

        <div className="card card1"><img src={card1} alt="" /><p>Kung Fu Panda</p></div>
        <div className="card card2"><img src={card2} alt="" /><p>Kung Fu Panda</p></div>
        <div className="card card2"><img src={card3} alt="" /><p>Kung Fu Panda</p></div>
        <div className="card card2"><img src={card4} alt="" /><p>Kung Fu Panda</p></div>
        <div className="card card2"><img src={card5} alt="" /><p>Kung Fu Panda</p></div>
        <div className="card card2"><img src={card6} alt="" /><p>Kung Fu Panda</p></div>
        <div className="card card2"><img src={card7} alt="" /><p>Kung Fu Panda</p></div>
        <div className="card card2"><img src={card8} alt="" /><p>Kung Fu Panda</p></div>
        <div className="card card2"><img src={card9} alt="" /><p>Kung Fu Panda</p></div>
        <div className="card card2"><img src={card10} alt="" /><p>Kung Fu Panda</p></div>
        <div className="card card2"><img src={card11} alt="" /><p>Kung Fu Panda</p></div>
        <div className="card card2"><img src={card12} alt="" /><p>Kung Fu Panda</p></div>
        <div className="card card2"><img src={card13} alt="" /><p>Kung Fu Panda</p></div>
        <div className="card card2"><img src={card14} alt="" /><p>Kung Fu Panda</p></div>
      </div>
    </div>
  );
};

export default Titlecards;

