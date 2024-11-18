import Sidebar from '../../../components/Sidebar';
import Header from '../../../components/Header';
import '../globals.css'

export default function RootLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header titulo_pantalla={'Inicio'} />
        <main className="flex-grow p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
