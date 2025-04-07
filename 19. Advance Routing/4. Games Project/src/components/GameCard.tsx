type GameProps = {
  id: number;
  name: string;
  img: string;
};
type Game = {
  game: GameProps;
};

const GameCard = ({ game }: Game) => {
  return (
    <div className="bg-blue-950 p-4 rounded-2xl">
      <img
        src={game.img}
        alt={game.name}
        className="w-full h-32 object-cover rounded-md"
      />
      <h2 className="mt-2 text-lg font-semibold text-white"> {game.name}</h2>
    </div>
  );
};
export default GameCard;
