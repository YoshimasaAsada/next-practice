// components/Sidebar.js
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen text-white w-64 p-5">
      <h2 className="text-2xl font-bold mb-5">Sidebar</h2>
      <ul>
        <li className="mb-4">
          <Link href="/sample1">
            <p className="block py-2 px-4 rounded hover:bg-gray-700">Sample1</p>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/sample2">
            <p className="block py-2 px-4 rounded hover:bg-gray-700">Sample2</p>
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/sample3">
            <p className="block py-2 px-4 rounded hover:bg-gray-700">Sample3</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
