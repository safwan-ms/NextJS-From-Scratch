"use client";
import Link from "next/link";
import { useState } from "react";

const Layout = () => {
  const [name, setName] = useState("");
  return (
    <div className="p-5">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border "
      />
      <br />
      <Link className="bg-teal-300 mr-2" href="/analytics/revenue">
        Revenue
      </Link>
      <Link className="bg-teal-300" href="/analytics/stats">
        Stats
      </Link>
    </div>
  );
};
export default Layout;
