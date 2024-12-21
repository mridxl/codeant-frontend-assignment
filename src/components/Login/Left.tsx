import { ArrowUp } from 'lucide-react';
import Card from '../Card';

const Left = () => {
  return (
    <div className="relative hidden h-full w-1/2 flex-col items-center justify-center border-r bg-white md:flex">
      <Card className="relative z-10 w-3/5">
        <div className="flex w-full items-center justify-start gap-2 p-4">
          <img className="size-6" src="/codeant-small.svg" alt="logo" />
          <span className="text-base font-bold text-[#081735]">
            AI to Detect & Autofix Bad Code
          </span>
        </div>

        <hr className="w-full self-stretch" />

        <div className="flex w-full justify-evenly gap-3 p-4 pb-5 text-center">
          <div className="flex flex-col items-center">
            <span className="text-base font-bold text-[#081735]">30+</span>
            <span className="text-xs">Language Support</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base font-bold text-[#081735]">10k+</span>
            <span className="text-xs">Developers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-base font-bold text-[#081735]">100k+</span>
            <span className="text-xs">Hours Saved</span>
          </div>
        </div>
      </Card>

      <Card className="relative z-20 w-2/6 -translate-y-[10px] translate-x-[50%] bg-white">
        <div className="item flex w-full items-center justify-between p-6 pb-0 pt-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-[#9D90FA3F]">
            <img src="/pie-chart.svg" className="mb-1" alt="pie-chart" />
          </div>
          <div className="flex flex-col">
            <span className="flex text-xs font-semibold text-[#0049C6]">
              <ArrowUp size={15} />
              14%
            </span>
            <span className="text-[0.65rem] antialiased">This Week</span>
          </div>
        </div>
        <div className="flex w-full flex-col justify-start p-5 py-2">
          <span className="text-sm font-semibold text-[#081735]">
            Issues Fixed
          </span>
          <span className="text-2xl font-extrabold text-[#081735]">500K+</span>
        </div>
      </Card>

      <img
        src="/codeant-large.svg"
        className="absolute bottom-0 left-0 h-[35vh]"
        alt="logo large"
      />
    </div>
  );
};

export default Left;
