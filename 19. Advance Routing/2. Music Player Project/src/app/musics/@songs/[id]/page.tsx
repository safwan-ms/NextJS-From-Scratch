const SpecificSongs = ({ params }: { params: { id: string } }) => {
  return <div className="text-white text-2xl ">Song: {params.id}</div>;
};
export default SpecificSongs;
