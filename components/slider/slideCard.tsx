import { sliderCardPropType } from "@/types/types";
import { Ship } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import WaveDivider from "../common/wave";
import { useAppContext } from "@/context/useAppContext";
import Link from "next/link";

function SlideCard({ id, imgUrl, link, alt }: sliderCardPropType) {
  const { setShowForm, showForm } = useAppContext();
  return (
    <div className="block w-full relative">
      <div className=" w-full h-[535px] md:h-screen  overflow-hidden">
        {/* Background Image */}
        <Image
          alt={alt}
          src={imgUrl}
          fill
          priority
          className="object-cover z-0"
        />

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Text content */}
        <div className="absolute inset-0 z-20 flex items-center px-5">
          <div className="flex flex-col gap-2">
            <div className="py-1 md:py-2 md:px-4  px-2 bg-[#FFFFFF33] rounded-[9.5px] w-fit">
              <p className="text-[#ffffff] text-[12px] flex justify-center items-center">
                <span>
                  <Ship className="h-[12.5px]" />
                </span>
                <span> Trusted Logistics Partner Worldwide</span>
              </p>
            </div>

            <div className="flex flex-col space-y-2 md:gap-4">
              <h1 className="max-w-2xs md:max-w-[900px] text-white font-medium text-3xl md:text-6xl  leading-[130%] tracking-[-0.05em]">
                Global Logistics, Freight Forwarding & Customs Clearing{" "}
                <span className="text-[#FF6B35]"> You Can Trust</span>
              </h1>
              <p className="font-medium md:max-w-[820px] max-w-100 text-[16px] text-xs text-white leading-[130%] tracking-[-0.05em]">
                We are pleased to introduce Oceandew Logistics Limited, a
                professionally registered clearing, forwarding, and logistics
                company providing reliable import, export, and freight
                forwarding services across the world.
              </p>
            </div>

            <div className="flex items-center mt-5 space-x-5">
              <Button
                onClick={() => setShowForm(true)}
                className="bg-[#FF6B35] px-4.5 py-3 md:py-3.5 md:px-6"
              >
                Get quote
              </Button>
              <Link href="#contact">
                <Button className="bg-transparent px-4.5 py-3 md:py-3.5 md:px-6 border border-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-60">
        <WaveDivider />
      </div>
    </div>
  );
}

export default SlideCard;
