import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function createMovie() {
  const newMovie = await prisma.movie.create({
    data: {
      title: "New Movie",
      description: "Amazing Movie about the life of Safwax",
      genre: "Sci-Fi",
      releaseDate: new Date("2030-07-16"),
      rating: 8.8,
    },
  });
  console.log(newMovie);
}

async function createMultipleMovie() {
  const movies = await prisma.movie.createMany({
    data: [
      {
        title: "The Dark Knight",
        description: "A superhero movie that follows the story of Batman.",
        genre: "Action",
        rating: 8.8,
        releaseDate: new Date("2008-07-18"),
      },
      {
        title: "Interstellar",
        description:
          "A science fiction movie that explores the possibilities of interstellar travel.",
        rating: 8.6,
        genre: "Sci-Fi",
        releaseDate: new Date("2014-11-07"),
      },
      {
        title: "Alien Covenant",
        description:
          "A science fiction movie that explores the possibilities of interstellar travel.",
        rating: 8.6,
        genre: "Sci-Fi",
        releaseDate: new Date("2014-11-07"),
      },
    ],
  });
  console.log(movies);
}

async function getAllMovies() {
  const movies = await prisma.movie.findMany();
  console.log("All Movies: ", movies);
}

async function getMovieById(movieId: number) {
  const movie = await prisma.movie.findUnique({
    where: { id: movieId },
  });
  console.log(movie);
}

async function updateMovie(
  movieId: number,
  updatedTitle: string,
  updatedDescription: string
) {
  const updatedMovie = await prisma.movie.update({
    where: { id: movieId },
    data: {
      title: updatedTitle,
      description: updatedDescription,
    },
  });
  console.log("Updated Movie ", updatedMovie);
}

async function deleteMovie(movieId: number) {
  const deletedMovie = await prisma.movie.delete({
    where: { id: movieId },
  });
  console.log(deletedMovie);
}

async function main() {
  //C.R.U.D
  // await createMovie();
  // await createMultipleMovie();
  // await getAllMovies();
  // await getMovieById(2);
  // await updateMovie(
  //   3,
  //   "Spiderman 2(2006)",
  //   "This is my first hollywood movie that I have seen"
  // );
  await deleteMovie(2);
}
main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
