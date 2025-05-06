"use client";
import Image from "next/image";
import Link from "next/link";

const LuxuryTravel = () => {
  return (
    <section className="py-8 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="bg-[#F8F8F6] rounded-3xl p-4 sm:p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left Content */}
          <div className="mb-8 lg:mb-14 lg:mr-20">
            <span className="inline-block bg-white px-3 py-1.5 rounded-full text-sm mb-4 sm:mb-6">
              Easy payment
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
              Luxury Travel Redefined: Your Passport to Global Glamour
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
              Discover how you can offset your adventure's carbon emissions and
              support the sustainable initiatives practiced by our operators
              worldwide.
            </p>
            <Link
              href="/luxury-travel"
              className="inline-flex items-center bg-[#FFE147] hover:bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              View More
              <svg
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Right Image Grid */}
          <div className="flex gap-2 sm:gap-6">
            {/* Large Image */}
            <div className="">
              <div className="relative w-full sm:w-[166px] h-[200px] sm:h-[307.67px] rounded-2xl sm:rounded-3xl overflow-hidden mt-4 sm:mt-16">
                <Image
                  src="/images/img4.jpg"
                  alt="Burj Al Arab"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Center Images Column */}
            <div className="flex flex-col gap-2 sm:gap-4 mt-2 sm:mt-6">
              <div className="relative w-full sm:w-[166.66px] h-[180px] sm:h-[261px] rounded-2xl sm:rounded-3xl overflow-hidden">
                <Image
                  src="/images/hunza-valley.webp"
                  alt="Luxury Travel"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[120px] sm:h-[168.47px] w-full sm:w-[166.66px] rounded-2xl sm:rounded-3xl overflow-hidden">
                <Image
                  src="/images/katpana.jpeg"
                  alt="Luxury Travel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Last Images Column */}
            <div className="flex flex-col gap-2 sm:gap-4 mt-4 sm:mt-8">
              <div className="relative h-[120px] sm:h-[166.66px] w-full sm:w-[166.66px] rounded-2xl sm:rounded-3xl overflow-hidden">
                <Image
                  src="/images/gilgit.jpg"
                  alt="Luxury Travel"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[120px] sm:h-[166.66px] w-full sm:w-[166.66px] rounded-2xl sm:rounded-3xl overflow-hidden">
                <Image
                  src="/images/Gilgit-Baltistan-A-majestic-land-of-hidden-valleys.jpg"
                  alt="Luxury Travel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryTravel;
