import { signOut } from "next-auth/react";
import React from "react";
import { useDisconnect } from "wagmi";

const HiddenPage = () => {
  const { disconnectAsync } = useDisconnect();
  const handleSignout = async () => {
    disconnectAsync();
    signOut({ callbackUrl: "/" });
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {" "}
      <h1 className="text-5xl font-extrabold tracking-tight text-gray-300">
        Yohoo!!
      </h1>
      <h2 className="text-3xl text-gray-500">
        You have <span className="font-bold">Started</span>.
      </h2>
      <p className="text-gray-500">
        You have been signed in{" "}
        <span className="text-xl font-semibold text-green-400">
          successfully
        </span>
        !
      </p>
      <button
        className="mt-6 rounded-lg bg-red-700 px-4 py-2 hover:border hover:border-red-700 hover:bg-transparent"
        onClick={handleSignout}
      >
        Sign Out
      </button>
    </div>
  );
};

export default HiddenPage;
