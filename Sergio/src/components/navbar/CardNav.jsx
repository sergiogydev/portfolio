import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon, HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { navigation } from "../../data/navigation";
import logo from "../../assets/images/profile.png";
import { Link } from "react-router-dom";



export default function CardNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <NavigationMenu.Root className="fixed z-50 hidden -translate-x-1/2 top-4 left-1/2 lg:block">
        <NavigationMenu.List className="flex items-center gap-2 px-4 py-2 min-h-[56px] border shadow-xl rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-slate-200/60 dark:border-slate-700/60">
        
        {navigation.map((nav) => (
          <NavItem key={nav.label} label={nav.label}>
            {nav.items.map((item) => (
              <MenuItem
                key={item.title}
                title={item.title}
                href={item.href}
              >
                {item.description}
              </MenuItem>
            ))}
          </NavItem>
        ))}

        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="https://github.com/reactstackdev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium transition-colors rounded-xl text-slate-800 dark:text-slate-100 hover:bg-slate-200/60 dark:hover:bg-slate-700/60"
          >
            GitHub
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="/AltaCV_Template.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium transition-colors rounded-xl text-slate-800 dark:text-slate-100 hover:bg-slate-200/60 dark:hover:bg-slate-700/60"
          >
            CV
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
        <NavigationMenu.Link asChild>
          <Link
            to="/"
            className="flex items-center justify-center w-10 h-10 overflow-hidden transition rounded-full hover:ring-2 hover:ring-indigo-500"
            aria-label="Inicio"
          >
            <img
              src={logo}
              alt="Inicio"
              className="object-cover w-full h-full"
            />
          </Link>
        </NavigationMenu.Link>
      </NavigationMenu.Item>


        </NavigationMenu.List>
      </NavigationMenu.Root>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[60] lg:hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b shadow-lg bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-slate-200/60 dark:border-slate-700/60">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Inicio"
              className="w-10 h-10 rounded-full"
            />
            {/* <span className="font-semibold text-slate-900 dark:text-slate-100">Portfolio</span> */}
          </Link>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <Cross1Icon className="w-6 h-6 text-slate-900 dark:text-slate-100" />
            ) : (
              <HamburgerMenuIcon className="w-6 h-6 text-slate-900 dark:text-slate-100" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/98 dark:bg-slate-900/98 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-700/60 shadow-2xl max-h-[calc(100vh-64px)] overflow-y-auto">
            <div className="px-4 py-4 space-y-4">
              {navigation.map((nav) => (
                <div key={nav.label} className="space-y-2">
                  <h3 className="text-sm font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                    {nav.label}
                  </h3>
                  <div className="space-y-1">
                    {nav.items.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
                          {item.title}
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="flex gap-2 pt-4 border-t border-slate-200 dark:border-slate-700">
                <a
                  href="https://github.com/reactstackdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 text-sm font-medium text-center transition-colors rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  GitHub
                </a>
                <a
                  href="/AltaCV_Template.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 text-sm font-medium text-center transition-colors rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CV
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

function NavItem({ label, children }) {
  return (
    <NavigationMenu.Item className="relative">
      <NavigationMenu.Trigger className="flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors cursor-pointer rounded-xl text-slate-800 dark:text-slate-100 hover:bg-slate-200/60 dark:hover:bg-slate-700/60">
        {label}
        <CaretDownIcon className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
      </NavigationMenu.Trigger>

      <NavigationMenu.Content
        className="
          absolute left-0 top-full mt-3
          w-[260px]
          rounded-2xl
          bg-white dark:bg-slate-900
          shadow-xl
          border border-slate-200 dark:border-slate-700
          p-2
          data-[motion=from-start]:animate-in
          data-[motion=from-start]:fade-in
          data-[motion=from-start]:slide-in-from-top-2
        "
      >
        <ul className="space-y-1">{children}</ul>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
}

function MenuItem({ title, children, href }) {
  return (
    <li>
      <NavigationMenu.Link asChild>
        <Link
          to={href}
          className="block px-4 py-3 transition-colors rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
            {title}
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            {children}
          </p>
        </Link>
      </NavigationMenu.Link>
    </li>
  );
}

