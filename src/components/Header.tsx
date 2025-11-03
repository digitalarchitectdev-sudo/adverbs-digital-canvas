import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  ChartBarIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  MagnifyingGlassIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid';
import { Button } from '@/components/ui/button';

const services = [
  {
    name: 'Digital Marketing',
    description: 'Performance-driven campaigns that boost visibility and ROI',
    href: '#services',
    icon: ChartBarIcon,
  },
  {
    name: 'Web Development',
    description: 'Modern, scalable websites and applications',
    href: '#services',
    icon: CodeBracketIcon,
  },
  {
    name: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces and brand identity',
    href: '#services',
    icon: PaintBrushIcon,
  },
  {
    name: 'SEO & Branding',
    description: 'Strategic optimization and brand development',
    href: '#services',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Mobile Development',
    description: 'Native and cross-platform mobile applications',
    href: '#services',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Backend Development',
    description: 'Robust, secure backend systems and APIs',
    href: '#services',
    icon: ServerIcon,
  },
];

const callsToAction = [
  { name: 'Contact Us', href: '#contact', icon: EnvelopeIcon },
  { name: 'Get Quote', href: '#contact', icon: PhoneIcon },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-card border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">AdVerse</span>
            <span className="text-2xl font-bold gradient-accent bg-clip-text text-transparent hover:scale-105 transition-smooth">
              AdVerse
            </span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-smooth ${
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            }`}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton
              className={`flex items-center gap-x-1 text-sm font-semibold transition-smooth focus:outline-none group ${
                isScrolled
                  ? 'text-foreground hover:text-accent'
                  : 'text-primary-foreground hover:text-accent'
              }`}
            >
              Services
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none transition-transform group-data-[open]:rotate-180"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-50 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-lg bg-card shadow-hover border border-border transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[enter]:ease-out data-[leave]:duration-150 data-[leave]:ease-in"
            >
              <div className="p-4">
                {services.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="group relative flex w-full items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-secondary transition-smooth"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg gradient-accent group-hover:scale-110 transition-smooth">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <div className="flex-auto text-left">
                      <div className="block font-semibold text-card-foreground group-hover:text-accent transition-smooth">
                        {item.name}
                      </div>
                      <p className="mt-1 text-muted-foreground text-xs">{item.description}</p>
                    </div>
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-border bg-secondary">
                {callsToAction.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-smooth"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none" />
                    {item.name}
                  </button>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <button
            onClick={() => scrollToSection('#portfolio')}
            className={`text-sm font-semibold transition-smooth relative group ${
              isScrolled
                ? 'text-foreground hover:text-accent'
                : 'text-primary-foreground hover:text-accent'
            }`}
          >
            Portfolio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </button>

          <button
            onClick={() => scrollToSection('#tech')}
            className={`text-sm font-semibold transition-smooth relative group ${
              isScrolled
                ? 'text-foreground hover:text-accent'
                : 'text-primary-foreground hover:text-accent'
            }`}
          >
            Technologies
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </button>

          <button
            onClick={() => scrollToSection('#about')}
            className={`text-sm font-semibold transition-smooth relative group ${
              isScrolled
                ? 'text-foreground hover:text-accent'
                : 'text-primary-foreground hover:text-accent'
            }`}
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
          </button>
        </PopoverGroup>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            variant="hero"
            size="sm"
            onClick={() => scrollToSection('#contact')}
          >
            Get Quote
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-card p-6 sm:max-w-sm sm:ring-1 sm:ring-border">
          <div className="flex items-center justify-between">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="-m-1.5 p-1.5">
              <span className="sr-only">AdVerse</span>
              <span className="text-2xl font-bold gradient-accent bg-clip-text text-transparent">
                AdVerse
              </span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-card-foreground"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-border">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-card-foreground hover:bg-secondary transition-smooth">
                    Services
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180 transition-transform"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...services, ...callsToAction].map((item) => (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="block w-full text-left rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-card-foreground hover:bg-secondary transition-smooth"
                      >
                        {item.name}
                      </button>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <button
                  onClick={() => scrollToSection('#portfolio')}
                  className="-mx-3 block w-full text-left rounded-lg px-3 py-2 text-base font-semibold text-card-foreground hover:bg-secondary transition-smooth"
                >
                  Portfolio
                </button>

                <button
                  onClick={() => scrollToSection('#tech')}
                  className="-mx-3 block w-full text-left rounded-lg px-3 py-2 text-base font-semibold text-card-foreground hover:bg-secondary transition-smooth"
                >
                  Technologies
                </button>

                <button
                  onClick={() => scrollToSection('#about')}
                  className="-mx-3 block w-full text-left rounded-lg px-3 py-2 text-base font-semibold text-card-foreground hover:bg-secondary transition-smooth"
                >
                  About
                </button>
              </div>

              <div className="py-6">
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={() => scrollToSection('#contact')}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
