import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <div className="flex-1">
          <h1>404</h1>
        </div>
        <Sidebar />
      </main>
    </div>
  );
}
