import { Database } from 'lucide-react';

interface RepoCardProps {
  name: string;
  visibility: string;
  language: string;
  size: number;
  lastUpdate: string;
}

const RepoCard = ({
  name,
  visibility,
  language,
  size,
  lastUpdate,
}: RepoCardProps) => {
  return (
    <div className="cursor-pointer border-b border-gray-200 bg-white p-4 px-5 shadow-sm hover:bg-[#FAFAFA]">
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-900">{name}</span>
        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[0.65rem] text-blue-600">
          {visibility}
        </span>
      </div>
      <div className="mt-2 flex items-center space-x-4 text-xs text-gray-600">
        <div className="flex items-center space-x-2">
          <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
          <span>{language}</span>
        </div>
        <span className="flex items-center gap-1 text-nowrap">
          <Database className="size-3" />
          {size} KB
        </span>
        <span className="w-full truncate">Updated {lastUpdate}</span>
      </div>
    </div>
  );
};

export default RepoCard;
