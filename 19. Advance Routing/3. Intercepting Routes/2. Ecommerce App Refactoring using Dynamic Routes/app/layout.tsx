import { ReactNode } from "react";
import "./globals.css";

type CP = {
  children: ReactNode;
  comments: ReactNode;
  members: ReactNode;
};
const BaseLayout = ({ children }: CP) => {
  return (
    <html>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};
export default BaseLayout;
