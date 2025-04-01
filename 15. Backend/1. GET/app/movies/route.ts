// export function GET() {
//   return new Response("Hello World");
// }

import { movies } from "./db";

export function GET() {
  return Response.json(movies);
}
