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

export function GameBoard() {

  const cards = [
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

  function openCard(index: number) {
    console.log("card clicado", index);
  }

  return (
        <section className="grid grid-cols-6 grid-rows-3 gap-2">
            {cards.map((card, index) => (
                <Card 
                    key={index}
                    img={card.img}
                    index={index}
                    onClick={openCard}
                />
            ))}
        </section>
    )
}
