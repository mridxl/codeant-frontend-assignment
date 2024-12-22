import { useState } from 'react';
import { KeyRound } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Link } from 'react-router';
import Button from '../ui/Button';

const Right = () => {
  const [tab, setTab] = useState('saas');

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5 p-5 md:w-1/2">
      <div className="flex w-full flex-col items-center rounded-xl border bg-white">
        <div className="flex w-full flex-col items-center justify-start gap-4 border-b p-5">
          <div className="flex flex-col items-center justify-center gap-6">
            <span className="font-satoshi flex justify-center gap-2 text-xl font-light antialiased">
              <img className="size-7" src="/codeant-small.svg" alt="logo" />
              CodeAnt
            </span>
            <span className="text-2xl font-semibold">
              Welcome to CodeAnt AI
            </span>
          </div>
          <div className="flex w-[90%] items-center justify-center text-base font-semibold">
            <div
              className={cn(
                'flex w-1/2 cursor-pointer items-center justify-center rounded-md border bg-[#FAFAFA] py-2 text-[#414651]',
                tab === 'saas' && 'bg-[#1570EF] text-white'
              )}
              onClick={() => {
                setTab('saas');
              }}
            >
              SAAS
            </div>
            <div
              className={cn(
                'flex w-1/2 cursor-pointer items-center justify-center rounded-md border bg-[#FAFAFA] py-2 text-[#414651]',
                tab === 'self-hosted' && 'bg-[#1570EF] text-white'
              )}
              onClick={() => {
                setTab('self-hosted');
              }}
            >
              Self Hosted
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center p-5 text-sm font-semibold">
          {tab === 'saas' ? (
            <div className="flex w-full max-w-[450px] flex-col items-center justify-center gap-3">
              <Link className="w-full" to="/dashboard">
                <Button imgSrc="/brands/github.svg" imgAlt="github">
                  Sign in with Github
                </Button>
              </Link>
              <Link className="w-full" to="/dashboard">
                <Button imgSrc="/brands/bitbucket.svg" imgAlt="bitbucket">
                  Sign in with Bitbucket
                </Button>
              </Link>
              <Link className="w-full" to="/dashboard">
                <Button imgSrc="/brands/azure-devops.svg" imgAlt="azure-devops">
                  Sign in with Azure Devops
                </Button>
              </Link>
              <Link className="w-full" to="/dashboard">
                <Button imgSrc="/brands/gitlab.svg" imgAlt="gitlab">
                  Sign in with Gitlab
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex min-h-[220px] w-full max-w-[450px] flex-col items-center justify-start gap-3">
              <Link className="w-full" to="/dashboard">
                <Button imgSrc="/brands/gitlab.svg" imgAlt="gitlab">
                  Self hosted Gitlab
                </Button>
              </Link>
              <Link className="w-full" to="/dashboard">
                <Button icon={<KeyRound />}>Sign in with SSO</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <span className="text-sm">
        By signing up you agree to the Privacy Policy.
      </span>
    </div>
  );
};

export default Right;
