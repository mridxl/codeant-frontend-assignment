import { useState } from 'react';
import { KeyRound } from 'lucide-react';
import { cn } from '../../lib/utils';

const Right = () => {
  const [tab, setTab] = useState('saas');

  return (
    <div className="flex h-full w-1/2 flex-col items-center justify-center gap-5 p-5">
      {/* card */}
      <div className="flex w-full flex-col items-center rounded-xl border bg-white">
        {/* top */}
        <div className="flex w-full flex-col items-center justify-start gap-4 border-b p-5">
          {/* header*/}
          <div className="flex flex-col items-center justify-center gap-6">
            <span className="font-satoshi justify- flex gap-2 text-xl font-light antialiased">
              <img className="size-7" src="/codeant-small.svg" alt="logo" />
              CodeAnt
            </span>
            <span className="text-2xl font-semibold">
              Welcome to CodeAnt AI
            </span>
          </div>
          {/* tabs */}
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
        {/* tab content */}
        <div className="flex w-full flex-col items-center p-5 text-sm font-semibold">
          {tab === 'saas' ? (
            <div className="flex w-full max-w-[450px] flex-col items-center justify-center gap-3">
              <div className="flex w-full items-center justify-center gap-2 rounded-lg border p-3">
                <img
                  src={'/brands/github.svg'}
                  alt={'github'}
                  className={`w-5`}
                />
                Sign in with Github
              </div>
              <div className="flex w-full items-center justify-center gap-2 rounded-lg border p-3">
                <img
                  src={'/brands/bitbucket.svg'}
                  alt={'bitbucket'}
                  className={`w-5`}
                />
                Sign in with Bitbucket
              </div>
              <div className="flex w-full items-center justify-center gap-2 rounded-lg border p-3">
                <img
                  src={'/brands/azure-devops.svg'}
                  alt={'azure-devops'}
                  className={`w-5`}
                />
                Sign in with Azure Devops
              </div>
              <div className="flex w-full items-center justify-center gap-2 rounded-lg border p-3">
                <img
                  src={'/brands/gitlab.svg'}
                  alt={'gitlab'}
                  className={`w-5`}
                />
                Sign in with Gitlab
              </div>
            </div>
          ) : (
            <div className="flex min-h-[220px] w-full max-w-[450px] flex-col items-center justify-start gap-3">
              <div className="flex w-full items-center justify-center gap-2 rounded-lg border p-3">
                <img
                  src={'/brands/gitlab.svg'}
                  alt={'gitlab'}
                  className={`w-5`}
                />
                Self hosted Gitlab
              </div>
              <div className="flex w-full items-center justify-center gap-2 rounded-lg border p-3">
                <KeyRound className={`w-5`} />
                Sign in with SSO
              </div>
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
