import { ReactNode } from "react";
import Members from "../components/Members";
import Comments from "../components/Comments";

const Layout = ({ children }: ReactNode) => {
  return (
    <div>
      <h1>{children}</h1>
      <div className="flex">
        <Members />
        <Comments />
      </div>
    </div>
  );
};
export default Layout;
