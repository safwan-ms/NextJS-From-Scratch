// This code suppose to run inside the client component
// - and not inside the server component
import "client-only";

export const add = (a: number, b: number) => a + b;
export const sub = (a: number, b: number) => a - b;
