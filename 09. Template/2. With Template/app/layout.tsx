import { ReactNode } from "react";
import "./globals.css";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};
export default BaseLayout;
