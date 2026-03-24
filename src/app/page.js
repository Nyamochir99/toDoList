import { Container } from "@/components/Container";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-start justify-center bg-white pt-30">
      <div className="flex flex-col w-94.25 px-4 py-6 items-center rounded-md bg-white shadow-[0_0_12px_0_rgba(0,0,0,0.16)]">
        <div className="flex flex-col gap-5">
          <p className="h-7 text-xl text-center font-semibold text-black">
            To-Do list
          </p>
          <div className="flex gap-1.5 h-10 w-full">
            <Container />
            <div className="flex h-full w-14.75 py-2 px-4 items-center rounded-md bg-[#3C82F6] text-[#F9F9F9] text-[14px] font-normal">
              Add
            </div>
          </div>
          <div className="flex justify-start gap-1.5 "></div>
        </div>
      </div>
    </div>
  );
}
