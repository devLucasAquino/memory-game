import mordecai from "../assets/Mordecai.webp";
import rigby from "../assets/Rigby.webp";
import benson from "../assets/Benson.webp";
import margaret from "../assets/Margaret.webp";
import eileen from "../assets/Eileen.webp";
import fastasmao from "../assets/BigGhost.webp";
import saltidao from "../assets/Saltidão.webp";
import pairulito from "../assets/Pairulito.webp";
import musculoso from "../assets/Muscleman.webp";
import { Card } from "./Card";
import { useEffect, useState } from "react";

const firstCards = [
    {img: mordecai},
    {img: rigby},
    {img: benson},
    {img: margaret},
    {img: eileen},
    {img: saltidao},
    {img: fastasmao},
    {img: musculoso},
    {img: pairulito},
];

const secondCards = [...firstCards];


function shuffleArray(arr) {
    // Loop em todos os elementos
for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
    const j = Math.floor(Math.random() * (i + 1));
    // Reposicionando elemento
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
// Retornando array com aleatoriedade
return arr;
}


export function GameBoard() {
    const [cards, setCards] = useState(() => shuffleArray(firstCards.concat(secondCards)));
    const [ openedCards, setOpenedCards ] = useState<number[]>([]);
    const [ matchedCards, setMatchedCards ] = useState<number[]>([]);

    function openCard(index: number) {
        if (openedCards.length < 2 && !openedCards.includes(index)) {
          setOpenedCards((prev) => [...prev, index]);
        }
    }


    useEffect(() => {
        if (openedCards.length === 2) {
          const [first, second] = openedCards;
          if (cards[first].img === cards[second].img) {
            setMatchedCards((prev) => [...prev, first, second]); 
          }
    
          setTimeout(() => setOpenedCards([]), 1000);
        }
      }, [openedCards, cards]);

    return (
            <section className="grid grid-cols-6 grid-rows-3 gap-2">
                {cards.map((card, index) => (
                    <Card 
                        key={index}
                        img={card.img}
                        index={index}
                        onClick={openCard}
                        isClick={openedCards.includes(index) || matchedCards.includes(index)}
                    />
                ))}
            </section>
        )
}
