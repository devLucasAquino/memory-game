interface CardProps{
    img: string;
    index: number;
    onClick: (index: number) => void;
}

export function Card({
    img,
    index,
    onClick,
}: CardProps){
    return(
        <button onClick={() => onClick(index)} className="bg-white rounded-lg">
            <img src={img} className="w-full h-full object-cover"  />
        </button>
    )
};