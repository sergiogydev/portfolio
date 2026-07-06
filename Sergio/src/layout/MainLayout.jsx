import CardNav from "../components/navbar/CardNav";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-ink bg-paper">
      <CardNav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
