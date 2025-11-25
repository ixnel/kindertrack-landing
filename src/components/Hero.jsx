import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 bg-white relative overflow-hidden"
    >
      {/* Soft Background Glow */}
      <div className="absolute w-[500px] h-[500px] -left-20 top-20 sm:w-[600px] sm:h-[600px] sm:-left-32 sm:top-32 md:w-[700px] md:h-[700px] md:-left-40 md:top-40 bg-blue-200 rounded-full blur-[180px] sm:blur-[200px] md:blur-[220px] opacity-60" />
      <div className="absolute w-[400px] h-[400px] right-0 bottom-0 sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] bg-pink-200 rounded-full blur-[200px] sm:blur-[220px] md:blur-[250px] opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-dmsans text-blue-900 leading-tight">
              Track Kindergarten Milestones Anytime, Anywhere
            </h1>

            <p className="text-base sm:text-lg md:text-xl font-medium font-dmsans text-gray-600 max-w-2xl mx-auto lg:mx-0">
              A mobile app that helps teachers record and monitor the developmental milestones of
              kindergarten learners — while keeping parents updated in real time.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="/app-release.apk"
                download
                className="bg-blue-900 text-white px-6 py-3 rounded-xl font-dmsans font-semibold shadow-md hover:bg-blue-800 hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <i className="bi bi-download text-lg"></i>
                <span>Download App (47 MB)</span>
              </a>

              <button className="border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-xl font-dmsans font-semibold shadow-sm hover:bg-blue-900 hover:text-white transition-all flex items-center justify-center gap-2">
                <i className="bi bi-book text-lg"></i>
                <span>Learn More</span>
              </button>
            </div>
          </div>

          {/* Right Content - Floating Overlapping Phones */}
          <div className="flex justify-center lg:justify-center items-center relative mt-10 lg:mt-0 min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
            {/* Back Phone (Teacher View) */}
            <div className="absolute left-22 sm:left-30 md:left-40 top-14 z-10 opacity-90 animate-float-back">
              <img
                src="/teacher-view.png"
                alt="KinderTrack Teacher View"
                className="w-36 sm:w-44 md:w-48 lg:w-52 h-auto drop-shadow-2xl rounded-2xl"
              />
            </div>

            {/* Front Phone (Parent View) */}
            <div className="relative z-20 animate-float-front md:left-40">
              <img
                src="/parent-view.png"
                alt="KinderTrack Parent View"
                className="w-36 sm:w-44 md:w-48 lg:w-52 h-auto drop-shadow-2xl rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
