import Image from "next/image";

export default async function Page() {
  return (
    <div className="responsive-container">
      <div id="content" className="responsive-content">
        <Image
          src="/anasayfaBg.png"
          alt="logo"
          width={1000}
          height={1000}
          style={{
            width: "100%",
            height: "100%",
            filter: "blur(3px)",
            position: "absolute",
            top: "auto",
            left: "0",
          }}
        />
        <div id="logo" className="responsive-logo">
          <Image
            alt="logo"
            src="/logo.png"
            width={1000}
            height={1000}
            style={{
              width: "20vw",
              height: "20vw",
              position: "absolute",
              top: "auto",
              right: "21vw",
              transform: "translate(50%, -50%)",
              mixBlendMode: "multiply",
            }}
          />
        </div>
        <p className="responsive-text">
          Videolar ve PDF’ler ile desteklenen Tahir Biyoloji olarak amacımız
          öğrencilerimize biyolojiyi sevdirmektir
        </p>
      </div>
      <aside className="flex justify-between w-full p-4 flex-wrap responsive-aside">
        <div
          className="flex-1 flex justify-center items-center responsive-item"
          style={{ position: "relative", marginBottom: "20px" }}
        >
          <Image
            alt="tabela"
            src="/tabela.png"
            width={100}
            height={100}
            style={{
              width: "calc(10vw + 10vh)",
              height: "calc(10vw + 10vh)",
              mixBlendMode: "darken",
            }}
          />
          <p
            style={{
              position: "absolute",
              top: "30vh",
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "center",
              width: "100%",
            }}
          >
            9,10,11,12.Sınıf Yazılıları
          </p>
          <p
            style={{
              position: "absolute",
              top: "35vh",
              fontSize: "20px",
              textAlign: "center",
              width: "100%",
            }}
          >
            Yazılıdan önce hazırlık...
          </p>
        </div>
        <div
          className="flex-1 flex justify-center items-center responsive-item"
          style={{ position: "relative", marginBottom: "20px" }}
        >
          <Image
            alt="kitap"
            src="/kitap.png"
            width={100}
            height={100}
            style={{
              width: "calc(10vw + 10vh)",
              height: "calc(10vw + 10vh)",
              mixBlendMode: "darken",
            }}
          />
          <p
            style={{
              position: "absolute",
              top: "30vh",
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "center",
              width: "100%",
            }}
          >
            Konu Anlatımları
          </p>
          <p
            style={{
              position: "absolute",
              top: "35vh",
              fontSize: "20px",
              textAlign: "center",
              width: "100%",
            }}
          >
            Kısa ve öz konu anlatımları, özetleri...
          </p>
        </div>
        <div
          className="flex-1 flex justify-center items-center responsive-item"
          style={{ position: "relative", marginBottom: "20px" }}
        >
          <Image
            alt="pdf"
            src="/PDF.png"
            width={100}
            height={100}
            style={{
              width: "calc(10vw + 10vh)",
              height: "calc(10vw + 10vh)",
              mixBlendMode: "darken",
            }}
          />
          <p
            style={{
              position: "absolute",
              top: "30vh",
              fontSize: "20px",
              fontWeight: "bold",
              textAlign: "center",
              width: "100%",
            }}
          >
            PDFler
          </p>
          <p
            style={{
              position: "absolute",
              top: "35vh",
              fontSize: "20px",
              textAlign: "center",
              width: "100%",
            }}
          >
            Konuyu akılda kalıcı hale getiren PDFler...
          </p>
        </div>
      </aside>
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-unused-vars */
async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}