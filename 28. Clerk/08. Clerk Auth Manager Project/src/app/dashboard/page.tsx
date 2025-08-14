import { auth, currentUser } from "@clerk/nextjs/server";

const Dashboard = async () => {
  const authObj = await auth();
  const userObj = await currentUser();
  console.log({ userObj, authObj });
  return <div>Dashboard</div>;
};
export default Dashboard;
