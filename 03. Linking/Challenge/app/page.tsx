import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the landing page of the website</p>
      <Link href="/dashboard"> Go to dashboard</Link>
    </div>
  );
};
export default Home;
