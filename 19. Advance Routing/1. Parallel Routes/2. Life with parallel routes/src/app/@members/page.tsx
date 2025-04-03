import Link from "next/link";

const Members = () => {
  // if (2 < 5) {
  //   throw new Error("Error");
  // }
  return (
    <div className="border p-[10rem] w-[30rem]">
      <h1>Members</h1>
      <Link href="/salaries">Go to salaries page</Link>
    </div>
  );
};
export default Members;
