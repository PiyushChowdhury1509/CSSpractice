import { HiComputerDesktop } from "react-icons/hi2";

export default function Home() {
  return (
    <main className="w-full h-screen bg-slate-700">
      <div className="w-full h-full flex justify-center">
        <div className="mt-8 min-h-md min-w-md">
          <div className="mb-24 flex justify-center">
            <HiComputerDesktop className="h-10 w-10 text-blue-300"/>
            <h1 className="text-3xl font-bold text-white ml-4">
              <span className="text-blue-400">Webinar</span>.gg
            </h1>
          </div>
          <div className="mb-20 text-center">
            <h1 className="text-white text-3xl font-bold">Verify Your Age</h1>
          </div>
          <div className="mb-10 text-center">
            <p className="text-gray-400 mb-3">Please confirm your birth year, the data will not be stored. </p>
            <input type="number" placeholder="your birth year" className="h-10 w-72 p-5 bg-gray-600 text-gray-100"/>
          </div>
          <div className="text-center">
            <button disabled className="h-10 w-72 bg-slate-400 font-semibold">Continue</button>
          </div>
        </div>
      </div>
    </main>
  );
}
