import { Facebook, Instagram, Linkedin, Plane, X } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";
import SubscribeForm from "./subscribeForm";
import { NextFont } from "next/dist/compiled/@next/font";

export default function Footer({
  poppins,
  inter,
}: {
  poppins: NextFont;
  inter: NextFont;
}) {
  return (
    <footer className="bg-[#03045E] pt-20 pb-10 px-4">
      <div className="flex flex-col md:flex-row gap-8 md:justify-between md:gap-1 md:px-14">
        {/* LOGO */}

        <div className="flex flex-col gap-3">
          <div className={`text-white flex items-center space-x-2`}>
            <Plane />
            <h1 className={`font-medium text-2xl ${poppins.className}`}>
              Oceandew <span className="text-[#FF6B35]">Logistics</span>
            </h1>
          </div>

          <div className={`${inter.className} max-w-80 text-white text-[16px]`}>
            Your trusted partner for global logistics, freight forwarding, and
            customs clearing services
          </div>

          <div className="flex items-center gap-3.5">
            <a
              href="https://www.facebook.com/share/1C9C3Rvs1f/?mibextid=wwXIfr"
              target="_blank"
            >
              <div className="p-4 bg-[#FF6B35] w-fit rounded-[8px]">
                <Facebook className="text-white h-[20.5px]" />
              </div>
            </a>
            <a href="">
              <div className="p-4 bg-[#FF6B35] w-fit rounded-[8px]">
                <Linkedin className="text-white h-[20.5px]" />
              </div>
            </a>
            <a
              href="https://www.tiktok.com/@oceandew22logisticscargo?_r=1&_t=ZN-99ZOBtV9EYQ"
              target="_blank"
            >
              <div className="p-4 bg-[#FF6B35] w-fit rounded-[8px]">
                <FaTiktok
                  className="
                text-white h-[20.5px]
                text-2xl hover:scale-110 transition-transform"
                />
              </div>
            </a>
            <a href="https://x.com/dave_ifean405?s=11" target="_blank">
              <div className="p-4 bg-[#FF6B35] w-fit rounded-[8px]">
                <X className="text-white h-[20.5px]" />
              </div>
            </a>

            <a
              href="https://www.instagram.com/oceandew_logistics?stkn=MTZwbGdnMGkzN3EwOA%3D%3D&utm_source=qr"
              target="_blank"
            >
              <div className="p-4 bg-[#FF6B35] w-fit rounded-[8px]">
                <Instagram className="text-white h-[20.5px]" />
              </div>
            </a>
          </div>
        </div>

        {/* QUICK LINK */}

        <div
          className={`${inter.className} text-white flex flex-col text-[16px]`}
        >
          <h2 className={`font-medium text-[#FF6B35] mb-2`}>Quick Link</h2>

          <div className="flex flex-col gap-6">
            <Link href={"#"} className="">
              Home
            </Link>
            <Link href={"#"} className="">
              Services
            </Link>
            <Link href={"#"} className="">
              Contacts
            </Link>
            <Link href={"#"} className="">
              About Us
            </Link>
          </div>
        </div>

        {/* SUBSCRIBE */}

        <div>
          <h3 className="text-[20px] text-white md:max-w-78">
            Subscribe to our newsletter for updates, promotions, and logistics
            insights.
          </h3>

          <SubscribeForm style="bg-[#FF6B35]" />
        </div>
      </div>
      <div>
        <hr className="bg-white/10 mt-5" />

        <p className="text-center text-white text-sm mt-2">
          © 2026 Oceandew Logistics Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
