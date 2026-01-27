import { ThemeToggleButton } from "../components/buttons/Buttons.jsx";
import CardNav from "../components/navbar/CardNav.jsx";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-300 dark:bg-slate-900">
      <CardNav />

      <main className="pt-16 lg:pt-20">
        {children}
      </main>

      <div className="fixed z-40 bottom-6 right-4 lg:top-6 lg:right-6 lg:bottom-auto">
        <ThemeToggleButton />
      </div>
    </div>
  );
}
