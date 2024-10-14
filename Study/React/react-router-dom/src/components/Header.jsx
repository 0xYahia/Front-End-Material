import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-cyan-200 p-2">
      <header className="w-[500px] m-auto flex justify-between">
        <h1>Burger Menu</h1>

        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
