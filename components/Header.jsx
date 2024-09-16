// components/Header.js
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const handleHome = () => {
    router.push("/");
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <Image
          src="/assects/image/sihlogo.png"
          alt="Logo"
          width={50}
          height={50}
          onClick={handleHome}
        />
        <div className="nav-menu">
          <div className="nav-item" onClick={handleHome}>
            <span className="nav-text">Home</span>
          </div>
          <div className="nav-item">
            <span className="nav-text">About</span>
          </div>
          <div className="nav-item">
            <span className="nav-text">Contact</span>
          </div>
        </div>
        <div className="auth-buttons">
          <button className="btn signup-btn">Sign in</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
