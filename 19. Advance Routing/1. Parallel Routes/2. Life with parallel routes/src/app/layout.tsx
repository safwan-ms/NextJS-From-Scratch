import { ReactNode } from "react";
import "./globals.css";

type CP = {
  children: ReactNode;
  comments: ReactNode;
  members: ReactNode;
};
const BaseLayout = ({ children, comments, members }: CP) => {
  return (
    <html>
      <body>
        <h1>{children}</h1>
        <div className="flex">
          {comments}
          {members}
        </div>
      </body>
    </html>
  );
};
export default BaseLayout;
