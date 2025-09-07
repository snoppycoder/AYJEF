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
          <div className="flex items-center justify-center rounded-full bg-black p-3 cursor-pointer">
            <Facebook color="white" href="" strokeWidth={2} />
          </div>
          <div className="flex items-center justify-center rounded-full bg-black p-3 cursor-pointer ">
            <LinkedinIcon color="white" href="" strokeWidth={2} />
          </div>
          <div className="flex items-center justify-center rounded-full bg-black p-3 cursor-pointer ">
            <Rss color="white" href="" strokeWidth={2} />
          </div>
        </div>
      </div>
      <ContactUsForm />
      <div className="w-full max-w-full col-span-1 md:col-span-4 mt-5 ">
        {/* map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.072905432567!2d38.72970237402407!3d8.965429791093404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8115d4e5584f%3A0x4393756bd19de938!2sAyjef%20Water%20Works%20And%20Business%20Service%20Plc!5e0!3m2!1sen!2set!4v1757263222932!5m2!1sen!2set"
          className="w-full h-36 rounded-lg border-0"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
