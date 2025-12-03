import "../Header/Header.css";
import { ChefHat } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <ChefHat aria-hidden="true" size="2rem" className="app-logo" />
      <h1 className="app-title">Chef Culina</h1>
    </header>
  );
}
