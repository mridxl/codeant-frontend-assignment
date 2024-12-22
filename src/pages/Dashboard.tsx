import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { Search, Plus, RefreshCcw } from 'lucide-react';
import { repositories } from '../db/db';
import RepoCard from '../components/ui/RepoCard';

const Dashboard = () => {
  const [_, setSearch] = React.useState<string>('');
  const [filteredRepos, setFilteredRepos] = React.useState(repositories);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setFilteredRepos(
      repositories.filter((repo) =>
        repo.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="h-full w-full">
      <Layout>
        <main className="scrollbar m-4 min-h-[calc(100vh-32px)] w-screen overflow-y-auto rounded-lg border bg-white">
          {/* header */}
          <div className="flex w-full flex-col items-center justify-center gap-4 border-b p-4 px-6">
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">Repositories</h1>
                <p className="text-xs text-gray-400">33 total repositories</p>
              </div>
              <div className="flex items-center justify-center gap-2 text-nowrap !text-xs">
                <Button
                  className="gap-0 rounded-md px-3 py-2"
                  icon={<RefreshCcw className="size-3" />}
                >
                  Refresh All
                </Button>
                <Button
                  className="gap-0 rounded-md bg-[#1570EF] px-3 py-2 text-white"
                  icon={<Plus className="size-4" />}
                >
                  Add Repository
                </Button>
              </div>
            </div>
            <div className="flex w-full justify-start text-sm">
              <div>
                <Button
                  icon={<Search className="size-4 text-gray-400" />}
                  className="rounded-md p-1"
                >
                  <Input
                    placeholder="Search Repositories"
                    onChange={handleSearch}
                  />
                </Button>
              </div>
            </div>
          </div>
          {/* repos */}
          <div className="w-full">
            {filteredRepos.map((repo) => (
              <RepoCard
                key={repo.name}
                name={repo.name}
                visibility={repo.visibility}
                language={repo.language}
                size={repo.size}
                lastUpdate={repo.lastUpdate}
              />
            ))}
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Dashboard;
