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
} from 'lucide-react';
import { cn } from '../lib/utils';

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

const Sidebar = () => {
  const [tab, setTab] = React.useState(0);
  return (
    <div className="flex h-screen max-w-[20vw] flex-col justify-between border-r bg-white font-semibold text-[#414651]">
      <div className="flex flex-col items-center">
        <div className="w-full">
          <div className="flex items-center justify-center p-3">
            <span className="font-satoshi flex items-center justify-center gap-2 text-sm font-normal antialiased md:text-base">
              <img className="size-7" src="/codeant-small.svg" alt="logo" />
              CodeAnt AI
            </span>
          </div>
          <div className="p-2">
            <Button
              icon={<ChevronDown />}
              className="flex-row-reverse py-1 !text-xs"
            >
              <span className="truncate">UtkarshDhairyaPanwar</span>
            </Button>
          </div>
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

export default Sidebar;
