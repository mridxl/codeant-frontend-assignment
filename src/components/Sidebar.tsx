import React from 'react';
import Button from './ui/Button';
import {
  Phone,
  LogOut,
  ChevronDown,
  House,
  CodeXml,
  Cloud,
  BookText,
  Settings,
  Menu,
  X,
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useMediaQuery } from 'react-responsive';

const menuItems = [
  {
    text: 'Repositories',
    icon: <House className="size-4" />,
  },
  {
    text: 'AI Code Review',
    icon: <CodeXml className="size-4" />,
  },
  {
    text: 'Cloud Security',
    icon: <Cloud className="size-4" />,
  },
  {
    text: 'How to Use',
    icon: <BookText className="size-4" />,
  },
  {
    text: 'Settings',
    icon: <Settings className="size-4" />,
  },
];

const DesktopSidebar = ({
  tab,
  setTab,
}: {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="fixed inset-y-0 left-0 z-50 flex h-screen w-[20vw] flex-col justify-between border-r bg-white font-semibold text-[#414651] md:flex">
      <div>
        <div className="flex items-center justify-center p-3">
          <span className="font-satoshi flex items-center justify-center gap-2 text-sm font-normal antialiased md:text-base">
            <img className="size-7" src="/codeant-small.svg" alt="logo" />
            CodeAnt AI
          </span>
        </div>
        <div className="w-full p-2">
          <Button
            icon={<ChevronDown />}
            className="flex-row-reverse py-1 !text-xs"
          >
            <span className="truncate">UtkarshDhairyaPanwar</span>
          </Button>
        </div>
        <nav className="flex w-full flex-col items-center justify-center gap-1 p-2">
          {menuItems.map((item, index) => (
            <Button
              className={cn(
                '!justify-start border-0 py-2',
                index === tab && 'bg-[#1570EF] text-white'
              )}
              key={index}
              icon={item.icon}
              onClick={() => setTab(index)}
            >
              <span className="truncate pl-0 text-xs">{item.text}</span>
            </Button>
          ))}
        </nav>
      </div>
      <div className="flex flex-col items-center justify-center p-4 pb-6">
        <Button
          className="!justify-start border-0"
          icon={<Phone className="size-4" />}
        >
          <span className="text-xs">Support</span>
        </Button>
        <Button
          className="!justify-start border-0"
          icon={<LogOut className="size-4" />}
        >
          <span className="text-xs">Logout</span>
        </Button>
      </div>
    </div>
  );
};

const MobileSidebar = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  tab,
  setTab,
}: {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="sticky top-0 z-50 bg-white md:hidden">
        <div className="flex items-center justify-between p-3">
          <span className="font-satoshi flex items-center justify-center gap-2 text-sm font-normal antialiased md:text-base">
            <img className="size-7" src="/codeant-small.svg" alt="logo" />
            CodeAnt AI
          </span>
          <button className="p-4" onClick={toggleMobileMenu}>
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 flex h-[60vh] w-full flex-col justify-start border-r bg-white font-semibold text-[#414651] transition-transform duration-300 md:hidden',
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="flex flex-col items-center">
          <div className="flex w-full items-center justify-between p-3">
            <span className="font-satoshi flex items-center justify-center gap-2 text-sm font-normal antialiased md:text-base">
              <img className="size-7" src="/codeant-small.svg" alt="logo" />
              CodeAnt AI
            </span>
            <div>
              <Button
                onClick={toggleMobileMenu}
                className="border-0"
                icon={<X />}
              />
            </div>
          </div>
          <div className="w-full px-2 pb-2">
            <Button
              icon={<ChevronDown />}
              className="flex w-full flex-row-reverse items-center justify-between py-1 !text-xs"
            >
              <span className="truncate">UtkarshDhairyaPanwar</span>
            </Button>
          </div>
          <nav className="flex w-full flex-col items-center justify-center gap-1 p-2">
            {menuItems.map((item, index) => (
              <Button
                className={cn(
                  '!justify-start border-0 py-2',
                  index === tab && 'bg-[#1570EF] text-white'
                )}
                key={index}
                icon={item.icon}
                onClick={() => {
                  setTab(index);
                  setIsMobileMenuOpen(false);
                }}
              >
                <span className="truncate pl-0 text-xs">{item.text}</span>
              </Button>
            ))}
            <Button
              className="!justify-start border-0 py-2 md:hidden"
              icon={<Phone className="size-4" />}
            >
              <span className="text-xs">Support</span>
            </Button>
            <Button
              className="!justify-start border-0 py-2 md:hidden"
              icon={<LogOut className="size-4" />}
            >
              <span className="text-xs">Logout</span>
            </Button>
          </nav>
        </div>
      </div>
    </>
  );
};

const Sidebar = () => {
  const [tab, setTab] = React.useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <>
      {isDesktop ? (
        <DesktopSidebar tab={tab} setTab={setTab} />
      ) : (
        <MobileSidebar
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          tab={tab}
          setTab={setTab}
        />
      )}
    </>
  );
};

export default Sidebar;
