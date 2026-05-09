import CardNav from "../components/navbar/CardNav";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-950">
      <CardNav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
