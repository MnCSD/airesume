import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="flex items-center justify-center h-[calc(100vh-45px)] flex-col">
        <h2 className=" text-[28px]">
          The online <span className="font-bold">resume builder</span> you
          deserve
        </h2>

        <div className="h-[50%] w-full"></div>
      </div>
    </main>
  );
}
