
import "./styles/globals.css";
import İmage from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <header>
          <p id="site">TAHİR BİYOLOJİ</p>
          <nav>
            <p>9.Sınıf</p>
            <p>10.Sınıf</p>
            <p>11.Sınıf</p>
            <p>12.Sınıf</p>
            <p>AYT Biyoloji</p>
            <p>TYT Biyoloji</p>
            <p>İletişim</p>
          </nav>
        </header>
      <footer>
        <p>Copyright © 2025 Tahir Biyoloji</p>
        <p style={{position:"absolute", top:"75%"}}>Bu web sitesi İbrahim Yıldırım tarafından oluşturulmuştur.</p>
        <p style={{position:"absolute", top:"90%"}}> © Tüm Haklar Saklıdır.</p>
        <İmage
        alt="responsive"
        src="/responsive.png"
        width={100}
        height={100}
        style={{position: "absolute", top:"10%", left:"10%", zIndex:100}}>
        </İmage>
        <p style={{position:"absolute", left:"15%", top:"calc(10% + 100px + 5px)", zIndex:101 , fontSize:"1vw"
        }}>Bu Web Sitesi Responsive Olarak Oluşturulmuştur.</p>
      </footer>

        <main>{children}</main>
      </body>
    </html>
  );
}
