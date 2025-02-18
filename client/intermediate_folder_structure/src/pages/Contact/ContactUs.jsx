import React from "react";
import Container from "./../../components/Container/Container";

const ContactUs = () => {
  return (
    <div className="py-20">
      <Container>
        <section className="bg-white dark:bg-gray-900 py-10">
          <div className="container px-6 py-12 mx-auto">
            <div className="text-center">
              <p className="font-medium text-blue-500 dark:text-blue-400">
                Contact us
              </p>

              <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
                Get in touch
              </h1>

              <p className="mt-3 text-gray-500 dark:text-gray-400">
                Our friendly team is always here to chat.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center justify-center text-center hover:shadow-3 p-3 rounded duration-500 transition-shadow hover:duration-500">
                <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                  Email
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Our friendly team is here to help.
                </p>
                <a
                  href="mailto:Patraneecommerce@gmail.com"
                  className="mt-2 text-[14px] sm:text-[18px] text-blue-500
                   dark:text-blue-400"
                >
                  Patraneecommerce@gmail.com
                </a>
              </div>

              <div className="flex flex-col items-center justify-center text-center hover:shadow-3 p-3 rounded duration-500 transition-shadow hover:duration-500">
                <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                  Office
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Come say hello at our office Patranee.
                </p>
                <p className="mt-2 text-blue-500 dark:text-blue-400">
                  Mirpur, Dhaka, Bangladesh
                </p>
              </div>

              <div className="flex flex-col items-center justify-center text-center hover:shadow-3 p-3 rounded duration-500 transition-shadow hover:duration-500">
                <span className="p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">
                  Phone
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Sat-thursday from 9am to 8pm.
                </p>
                <a
                  href="tel:+01886230003"
                  className="mt-2 text-blue-500 dark:text-blue-400"
                >
                  01886-230003
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="grid md:grid-cols-2 hidden my-10  gap-16 items-center relative overflow-hidden p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl max-w-6xl mx-auto bg-white mt-4 font-[sans-serif] before:absolute before:right-0 before:w-[300px] before:bg-blue-400 before:h-full max-md:before:hidden">
          <div>
            <h2 className="text-gray-800 text-3xl font-extrabold">
              Get In Touch
            </h2>
            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              Have a specific inquiry or looking to explore new opportunities?
              Our experienced team is ready to engage with you.
            </p>

            <form>
              <div className="space-y-4 mt-8">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                />

                <input
                  type="number"
                  placeholder="Phone No."
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="px-2 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                />

                <textarea
                  placeholder="Write Message"
                  className="px-2 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 outline-none"
                ></textarea>
              </div>

              <button
                type="button"
                className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="#fff"
                  className="mr-2"
                  viewBox="0 0 548.244 548.244"
                >
                  <path
                    fill-rule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clip-rule="evenodd"
                    data-original="#000000"
                  />
                </svg>
                Send Message
              </button>
            </form>

            <ul className="mt-4 flex flex-wrap justify-center gap-6">
              <li className="flex items-center text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="currentColor"
                  viewBox="0 0 479.058 479.058"
                >
                  <path
                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                    data-original="#000000"
                  />
                </svg>
                <a href="javascript:void(0)" className="text-sm ml-4">
                  <strong>info@example.com</strong>
                </a>
              </li>
              <li className="flex items-center text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="currentColor"
                  viewBox="0 0 482.6 482.6"
                >
                  <path
                    d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                    data-original="#000000"
                  ></path>
                </svg>
                <a href="javascript:void(0)" className="text-sm ml-4">
                  <strong>+158 996 888</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className="z-10 relative h-full max-md:min-h-[650px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14601.383596379086!2d90.34606226466823!3d23.806295990167904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c5074ec8db%3A0x1450dad46461cbe8!2sMirpur-2%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1726897813797!5m2!1sen!2sus"
              className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Container>
      <div className="z-10 relative h-full  md:h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14601.383596379086!2d90.34606226466823!3d23.806295990167904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c5074ec8db%3A0x1450dad46461cbe8!2sMirpur-2%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1726897813797!5m2!1sen!2sus"
          className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
