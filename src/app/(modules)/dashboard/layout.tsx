import SideMenu from "@/app/components/SideMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SideMenu />
        {children}
      </body>
    </html>
  );
}
