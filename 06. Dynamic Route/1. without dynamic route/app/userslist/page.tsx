import Link from "next/link";

const UserList = () => {
  return (
    <div>
      <h1>Users List</h1>
      <ul className="flex gap-2">
        <li>
          <Link href="/userslist/alex">Alex</Link>
        </li>
        <li>
          <Link href="/userslist/irfax">Irfax</Link>
        </li>
        <li>
          <Link href="/userslist/safwax">Safwax</Link>
        </li>
        <li>
          <Link href="/userslist/naveeth">Naveeth</Link>
        </li>
        <li>
          <Link href="/userslist/thameem">Thameem</Link>
        </li>
      </ul>
    </div>
  );
};
export default UserList;
