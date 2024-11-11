export const metadata = {
  title: "Petixfy",
  description:
    "Somos una empresa dedicada a la salud de tu mascota desde la palma de tu mano",
};

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
