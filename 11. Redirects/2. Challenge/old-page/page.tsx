import { redirect } from "next/navigation";

const OldPage = () => {
  redirect("/new-page");
  return <div>OldPage</div>;
};
export default OldPage;
