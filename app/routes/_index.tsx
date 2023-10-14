import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Kudos Remix App" },
    {
      name: "App built with Remix.run | Primsa.DB | MongoDB",
      content: "Welcome to Remix!",
    },
  ];
};

export default function Index() {
  return (
    <div className="h-screen bg-gray-900 flex justify-center items-center flex-col p-10">
      <h2 className="text-blue-400 font-extrabold text-5xl">Kudos!</h2>
      <p className="text-white">
        Push your tech careers with the like minded people!
      </p>

      <Link
        to="login"
        className="bg-teal-500 my-10 px-4 py-2 rounded-md hover:bg-teal-600 transition duration-100"
      >
        <h1 className="text-white font-bold">Get Started 🚀</h1>
      </Link>
    </div>
  );
}
