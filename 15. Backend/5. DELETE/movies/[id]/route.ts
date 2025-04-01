import { movies } from "../db";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const movie = movies.find((m) => m.id === +id);

  return movie
    ? new Response(JSON.stringify(movie))
    : new Response("Movie not found", { status: 404 });
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const movieId = +id;

  //Check movie exists
  const movie = movies.find((m) => m.id === movieId);
  if (!movie) {
    return new Response(JSON.stringify({ error: "Movie not found" }), {
      status: 404,
    });
  }

  try {
    const updatedMovie = await req.json();
    //Find index of the movie
    const index = movies.findIndex((m) => m.id === movieId);

    if (!movie) {
      return new Response(JSON.stringify({ error: "Movie not found" }), {
        status: 404,
      });
    }

    //Update the movie
    movies[index] = { ...movie, ...updatedMovie };
    return new Response(JSON.stringify(movies[index]), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Failed to parse JSON", error }),
      {
        status: 400,
      }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const movieId = +id;

  //Find the movie index
  const index = movies.findIndex((m) => m.id === movieId);
  if (index === -1) {
    return new Response(JSON.stringify({ error: "Movie not found" }), {
      status: 404,
    });
  }

  movies.splice(index, 1);
  return new Response(
    JSON.stringify({ message: "Movie successfully deleted" }),
    { status: 200 }
  );
}
