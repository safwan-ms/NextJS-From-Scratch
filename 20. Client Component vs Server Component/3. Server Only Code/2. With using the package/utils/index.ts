// This code suppose to run inside the server component
// - and not inside the client component
import "server-only";

export const add = (a: number, b: number) => a + b;
export const sub = (a: number, b: number) => a - b;
