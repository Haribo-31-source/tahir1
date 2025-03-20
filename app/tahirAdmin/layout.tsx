import "./style.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr"><body>
        <main>{children}</main>
    </body></html>
    );
}