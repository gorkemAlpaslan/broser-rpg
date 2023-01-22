import React, { useState, useEffect } from "react";
import styles from "./styles.module.sass";

const Layout: React.FC = ({ children }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const handleMouseMove = (event) => {
    if (event.clientY < 80) {
      setIsHeaderVisible(true);
    } else {
      setIsHeaderVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={styles.layout}>
      <header
        className={`${styles.header} ${
          isHeaderVisible ? styles.headerVisible : styles.headerHidden
        }`}
      >
        <div className={styles.logo}>My Game</div>
        <nav
          className={`${styles.nav} ${
            isHeaderVisible ? styles.navVisible : styles.navHidden
          }`}
        >
          <a className={styles.navLink} href="/">
            Home
          </a>
          <a className={styles.navLink} href="/game">
            Game
          </a>
          <a className={styles.navLink} href="/profile">
            Profile
          </a>
        </nav>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>Copyright © 2023</footer>
    </div>
  );
};

export default Layout;
