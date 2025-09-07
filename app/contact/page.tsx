import { Facebook, LinkedinIcon, Mail, MapPin, Phone, Rss } from "lucide-react";
import ContactUsForm from "../component/contact-us";

export default function ContactUs() {
  return (
    <div className="w-screen min-h-screen grid grid-cols-1 md:grid-cols-4 px-4 md:px-8 py-6 gap-y-10 md:gap-y-2 md:gap-x-6 bg-blue-100">
      <div className="col-span-2">
        <h1 className="text-3xl font-bold ">Get in touch!</h1>
        <p>
          Have a question or feedback? Send us a message and we’ll get back to
          you as soon as possible.
        </p>
        <div className="flex flex-col *:mt-4 gap-y-2">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-black p-2 ">
              <MapPin color="white" />
            </div>
            <div className="flex flex-col gap-y-1">
              <span className="font-semibold">Head Office</span>

              <span className="font-extralight">
                Nifas Silk Lafto, Addis Ababa, Ethiopia
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-black p-2 ">
              <Mail color="white" />
            </div>
            <div className="flex flex-col gap-y-1">
              <span className="font-semibold">Email Us</span>

              <span className="font-extralight">ayjef@support.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-black p-2 ">
              <Phone color="white" />
            </div>
            <div className="flex flex-col gap-y-1">
              <span className="font-semibold">Call Us</span>

              <span className="font-extralight">+251 911 30 40 19</span>
            </div>
          </div>
        </div>
        <hr className="mt-5 mb-5 text-gray-400" />

        <span>Check us out on our other outlets </span>
        <div className="flex gap-4 mt-2">
          <div className="flex items-center justify-center rounded-full bg-black p-3 ">
            <Facebook color="white" href="" strokeWidth={2} />
          </div>
          <div className="flex items-center justify-center rounded-full bg-black p-3 ">
            <LinkedinIcon color="white" href="" strokeWidth={2} />
          </div>
          <div className="flex items-center justify-center rounded-full bg-black p-3 ">
            <Rss color="white" href="" strokeWidth={2} />
          </div>
        </div>
      </div>
      <ContactUsForm />
    </div>
  );
}
