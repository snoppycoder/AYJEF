export default function ContactUs() {
  return (
    <div className="w-screen min-h-screen grid grid-cols-1 md:grid-cols-4 px-4 md:px-8 py-6 gap-x-6 bg-blue-100">
      <div className="col-span-2">
        <h1 className="text-3xl font-bold ">Contact us</h1>
        <p>
          Have a question or feedback? Send us a message and we’ll get back to
          you as soon as possible.
        </p>
        <address>
          <p>Email AYJF-info@gmail.com</p>
          <p>Mobile +251 911 30 40 19</p>
          <p>Sub City Nifas Silk Lafto</p>
          <p>Woreda 12</p>
          <p>Location Addis Ababa, Ethiopia</p>
        </address>
        <div className=" mt-6 mb-6 w-full"></div>
        <div className="grid grid-cols-2 gap-x-3.5">
          <div className="col-span-1">
            <h3>FeedBack and Suggestion</h3>

            <p>
              We value your feedback and we're contiuously working to improve
              your experience on our info website. Your input is crucial.
            </p>
          </div>

          <div className="col-span-1">
            <h3>FeedBack and Suggestion</h3>

            <p>
              We value your feedback and we're contiuously working to improve
              your experience on our info website. Your input is crucial.
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2 py-4 px-4 bg-white  shadow-2xl rounded-xl">
        <h2 className="text-xl font-bold">Get in touch</h2>
        <p>You can reach us anytime!</p>
        <form action="" className="p-4 flex flex-col gap-y-3">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              className="input input-info"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              className="input input-info"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="w-full">
            <input
              type="email"
              className="input input-accent w-full"
              placeholder="Email"
              required
            />
          </div>
          <div className="w-full flex">
            <span className="bg-gray-100 text-gray-800 px-3 flex items-center rounded-l-md">
              +251
            </span>
            <input
              type="number"
              className="flex-1 input input-accent rounded-r-md"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="w-full flex">
            <textarea
              placeholder="What can we help?"
              className="p-2 w-full border-1 bg-white h-36"
            ></textarea>
          </div>
          <div className="w-full flex justify-center">
            <button
              className="btn btn-info px-8 py-2 rounded-sm text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
