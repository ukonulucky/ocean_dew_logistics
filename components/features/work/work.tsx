"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useHorizontalScroll } from "@/lib/hooks/useHorizontalScroll";

interface WorkProps {
  id: number;
  image: string;
  title: string;
  details: string;
}

const data: WorkProps[] = [
  {
    id: 1,
    image: "/Images/work-1.jpg",
    title: "70% Advance Payment",
    details: "Operations commence upon receipt of 70% advance payment",
  },
  {
    id: 2,
    image: "/Images/work-2.png",
    title: "Swift Processing",
    details: "Cargo is processed promptly for swift delivery",
  },
  {
    id: 3,
    image: "/Images/work-3.png",
    title: "Face-to-Face Payments",
    details: "All payments are made face-to-face at our office",
  },
  {
    id: 4,
    image: "/Images/work-4.png",
    title: "No Online Payments",
    details: "No online payments accepted for transparency and security",
  },
];

export default function Work() {
  const {
    scrollRef,
    showLeftArrow,
    showRightArrow,
    scrollLeft,
    scrollRight,
    checkScroll,
  } = useHorizontalScroll(300);

  return (
    <div className="bg-[#03045E] py-20 px-4">
      <div className="flex flex-col gap-[32px]">
        <div>
          <h3 className="font-medium text-sm text-[#FF6B35]">HOW WE WORK</h3>
          <h4 className="text-[#FFFFFF] font-semibold text-[20px]">
            Payment & Operations Policy
          </h4>
        </div>

        {/* Container with scroll */}
        <div className="relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors md:hidden"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-[#03045E]" />
            </button>
          )}

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors md:hidden"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-[#03045E]" />
            </button>
          )}

          {/* Scrollable content */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide"
          >
            <div className="flex md:grid md:grid-cols-2  lg:grid-cols-4 gap-4 min-w-max md:min-w-0">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="w-[300px] md:w-auto flex-shrink-0"
                >
                  <div className="relative h-[370px]">
                    <Image
                      fill
                      src={item.image}
                      alt={item.title}
                      className="object-cover "
                    />
                  </div>
                  <div className="bg-[#020345] border-b-4 border-b-[#FF6B35] p-5 ">
                    <h3 className="font-semibold text-[20px] text-[#FF6B35]">
                      {item.title}
                    </h3>
                    <p className="text-[16px] text-white">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
