const Project = ({ params }: { params: { all?: string[] } }) => {
  const all = params.all || [];

  return (
    <div>
      <h1 className="text-xl">Project {all.join(" / ")}</h1>
      <br />
      <br />
      <p>All Routes:</p>
      <ul>
        {all.length > 0 ? (
          all.map((p) => <li key={p}>{p}</li>)
        ) : (
          <li>No routes available</li>
        )}
      </ul>
    </div>
  );
};

export default Project;
