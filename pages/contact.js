import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Contact() {
  return (
    <div className="bg-black  text-white">
      <NextSeo
        title="Contact: nine4"
        description="Contact Us!"
        canonical="https://nine4-1.vercel.app/contact"
        openGraph={{
          url: "https://nine4-1.vercel.app/contact",
        }}
      />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 pt-24 pb-16 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-5xl text-2xl font-semibold title-font mb-4 text-white">
              Contact Us
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base font-semibold">
              Contact us if you have any issues with the website or just want to
              ask a question!
            </p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label
                    for="name"
                    class="leading-7 text-sm text-white font-semibold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full bg-black bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label
                    for="email"
                    class="leading-7 text-sm text-white font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-black bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label
                    for="message"
                    class="leading-7 text-sm text-white font-semibold"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    class="w-full bg-black bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button class="flex mx-auto text-black bg-white border-0 py-2 px-8 rounded text-lg">
                  Send
                </button>
              </div>
              <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a class="text-indigo-500">contact@website.com</a>
                <p class="leading-normal my-5">
                  Mountain View, California, United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <Footer />
    </div>
  );
}
