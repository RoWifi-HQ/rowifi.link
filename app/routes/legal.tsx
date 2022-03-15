import { Outlet } from "remix";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export default function Layout() {
  return (
    <div className="text-white font-inter min-h-screen h-full relative flex flex-col">
      <Header />
      <div className="prose lg:prose-lg max-w-none w-full pt-24 pb-24 px-8 lg:px-96">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
