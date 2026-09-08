import HeadingType from "@/components/common/headingType";
import { button } from "framer-motion/client";
import { Copy, Mail, Map, Phone } from "lucide-react";

interface ContactProps {
  icon: React.ReactNode;
  details: string;
  type: string;
}

const data: ContactProps[] = [
  {
    icon: <Phone />,
    details: "+44 7879 552393",
    type: "Phone",
  },
  {
    icon: <Copy />,
    details: "77665543",
    type: "RC Number",
  },
  {
    icon: <Mail />,
    details: "admin@oceandewlogistics.com",
    type: "Email",
  },
  {
    icon: <Map />,
    details: "Nigeria",
    type: "Location",
  },
  // You can add more later (Email, Address, etc.)
];

export default function ContactUs() {
  const requestQuotation = () => {
    const companyEmail = "admin@oceandewlogistics.com";

    const subject = "Shipping Quotation Request";

    const body = `Dear Ocean Dew Logistics,
  
  I would like to request a quotation for shipping my cargo.
  
  Please find the shipment details below:
  
  Type of Goods:
  Quantity/Weight:
  Pickup/Origin Location:
  Destination:
  Preferred Shipping Method: Sea / Air
  Expected Shipping Date:
  
  Please provide me with your available shipping options, estimated delivery time, and quotation.
  
  Thank you. I look forward to hearing from you.
  
  Kind regards,
  [Your Name]
  [Your Phone Number]`;

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(companyEmail)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

  //  window.open(gmailUrl, "_blank");
  };

  return (
    <section id="contact" className="md:scroll-mt-24 py-16 mt-2 px-5">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:justify-between py-5">
        <HeadingType h3="Get In Touch" h4="Contact Us" />

        <p className="max-w-lg text-[#3A3A3C] ">
          Ready to start shipping? Reach out to us for quotes, inquiries, or any
          questions about our services.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {data.map((item) => (
          <div key={item.type}>
            <div className="rounded-lg flex items-center space-x-3.5 p-6 shadow-md transition hover:shadow-lg">
              <div className=" flex h-16 w-16 items-center justify-center rounded-[8px] bg-[#03045E] text-white">
                {item.icon}
              </div>

              <div>
                <h3 className="text-base font-semibold text-[#03045E]">
                  {item.type}
                </h3>

                <span className="mt-1  block text-sm font-medium text-[#FF6B35]">
                  {item.type === "Email" ? (
                    <a className="cursor-pointer" target="_blank" onClick={requestQuotation}>{item.details}</a>
                  ) : (
                    item.details
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
