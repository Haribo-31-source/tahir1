"use client";

import "../styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import { useState , useEffect } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  
  useEffect(() => {
    // Menü açıldığında CSS tekrar uygulanıyor
    const header = document.getElementById("header");
    if (header) {
      header.classList.toggle("menu-open", menuOpen);
    }
  }, [menuOpen]);

  return (
    <html lang="tr">
      <body>
      <header id="header" className={menuOpen ? "menu-open" : "header"} onClick={() => setMenuOpen(!menuOpen)}>
          <p id="site">TAHİR BİYOLOJİ</p>
          <nav id="menu">

            <Link href="/s9" className="url">
              <p>9.Sınıf</p>
            </Link>
            <Link href="/s10"className="url">
              <p>10.Sınıf</p>
            </Link>
            <Link href="/s11"className="url">
              <p>11.Sınıf</p>
            </Link>
            <Link href="/s12"className="url">
              <p>12.Sınıf</p>
            </Link>
            <p>AYT Biyoloji</p>
            <p>TYT Biyoloji</p>
            <p>İletişim</p>
          </nav>
        </header>
        <footer>
          <p>© 2025 Tahir Biyoloji</p>
          <p>Bu web sitesi İbrahim Yıldırım tarafından oluşturulmuştur.</p>
          <p>Bu Web Sitesi Responsive Olarak Oluşturulmuştur.</p>
          <Image alt="responsive" src="/responsive.png" id="responsive" width={100} height={100} />
        </footer>
        <main>{children}</main>
      </body>
    </html>
  );
}
