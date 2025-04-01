import { movies } from "../db";

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
