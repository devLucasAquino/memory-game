

export interface CardProps{
    img: string;
    index: number;
    onClick: (index: number) => void;
    isClick: boolean;
}

export function Card({
    img,
    index,
    isClick,
    onClick,
}: CardProps){

    

    return(
        <button onClick={() => onClick(index)} className="bg-white rounded-lg">

            {isClick ? (
                <img src={img} className="w-full h-full object-cover"  />
            ) : (
                <h1 className="text-red-700">Closed</h1>
            )}
        </button>
    )
};