"use client";
import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import Image from "next/image";

const commonButtonStyles =
  "inline-flex items-center justify-center px-4 py-2 text-base font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";

const Hero = () => {
  return (
    <div>
      <section className="pb-8 bg-white sm:pb-12 lg:pb-12">
        <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-40">
          <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div className="lg:mt-16">
              <div className="mx-auto text-center sm:max-w-lg lg:max-w-xl lg:text-left lg:mx-0">
                <h1 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl xl:text-6xl sm:tracking-tight">
                  Discover AuraUI
                  <p>Our Ultimate UI Kit</p>
                </h1>
                <p className="mt-6 text-lg leading-7 text-gray-700 lg:leading-8 lg:text-xl">
                  AuraUI provides the components you need to create a
                  professional website, landing page, or admin panel for your
                  web applications.
                </p>
              </div>

              <div className="flex flex-col items-stretch justify-center gap-4 mt-8 sm:flex-row sm:items-center sm:mt-10 lg:justify-start sm:flex-wrap">
                <a
                  href="#"
                  className={`${commonButtonStyles} text-white bg-blue-600 border border-transparent shadow-sm hover:bg-blue-700 focus:ring-blue-700`}
                >
                  Start using AuraUI
                </a>

                <a
                  href="#"
                  className={`${commonButtonStyles} text-gray-900 border border-gray-300 hover:bg-gray-100 focus:ring-gray-300`}
                >
                  <FaRegCirclePlay className="w-4 h-4 mr-3 -ml-1 text-blue-600" />
                  Watch 1 min intro
                </a>
              </div>
            </div>
          </div>

          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 mt-6 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 ">
              <div className="relative pl-10  sm:max-w-3xl lg:max-w-none lg:h-full xl:pl-24">
                <Image
                  className="w-full  rounded-xl lg:rounded-2xl  lg:h-full lg:w-auto lg:max-w-none"
                  src="/hero-home.png"
                  alt="Dashboard Mockup"
                  width={1300}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
