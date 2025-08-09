import { SignInButton, SignOutButton } from "@clerk/nextjs";

export const Navigation = () => {
  return (
    <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-[var(--foreground)]">
              Next.js App
            </h1>
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <SignInButton mode="modal">
              <button className="cursor-pointer px-7 py-2 bg-gradient-to-r font-bold border-2 border-pink-300 rounded-2xl from-black to-pink-500 text-white">
                Sign In
              </button>
            </SignInButton>
            <SignOutButton>
              <button className="cursor-pointer px-4 py-2 bg-black font-bold border-2 border-white rounded-2xl text-white">
                Sign Out
              </button>
            </SignOutButton>
          </div>
        </div>
      </div>
    </nav>
  );
};
