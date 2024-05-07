import DashboardHeader from "components/DashboardHeader";
import SideMenu from "components/SideMenu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DashboardHeader />
        <SideMenu />
        <div style={{ padding: "7rem 2rem 2rem 14rem" }}>{children}</div>
      </body>
    </html>
  );
}
