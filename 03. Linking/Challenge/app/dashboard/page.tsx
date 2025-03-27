import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="flex justify-between mx-10 mt-5">
      <h1>Dashboard</h1>
      <nav>
        <ul className="flex ">
          <li className="mr-2">
            <Link href="/">Home</Link>
          </li>

          <li className="mr-2">
            <Link href="/dashboard/settings">Settings</Link>
          </li>

          <li className="mr-2">
            <Link href="/dashboard/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Dashboard;
