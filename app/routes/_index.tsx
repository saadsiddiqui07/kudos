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
    <div className="h-screen bg-gray-900 flex justify-center items-center flex-col">
      <h2 className="text-teal-600 font-extrabold text-5xl">Kudos!</h2>
      <h2 className="text-white font-normal text-2xl">
        An awesome app built with React, Remix.run, Prisma.io, MongoDB and
        tailwind CSS!
      </h2>
      <Link to="login">
        <h1 className="text-white">Login Page</h1>
      </Link>
    </div>
  );
}
