import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 bg-white relative overflow-hidden"
    >
      {/* Soft Background Glow */}
      <div className="absolute w-[700px] h-[700px] -left-40 top-40 bg-blue-200 rounded-full blur-[220px] opacity-60" />
      <div className="absolute w-[600px] h-[600px] right-0 bottom-0 bg-pink-200 rounded-full blur-[250px] opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-dmsans text-blue-900 leading-tight">
              Track Kindergarten Milestones Anytime, Anywhere
            </h1>

            <p className="text-lg md:text-xl font-medium font-dmsans text-gray-600 max-w-2xl mx-auto lg:mx-0">
              A mobile app that helps teachers record and monitor
              the developmental milestones of kindergarten learners — while
              keeping parents updated in real time.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              {/* Download APK */}
              <a
                href="/app-release.apk"
                download
                className="bg-blue-900 text-white px-6 py-3 rounded-xl font-dmsans font-semibold shadow-md hover:bg-blue-800 hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <i className="bi bi-download text-lg"></i>
                <span>Download App (47 MB)</span>
              </a>

              {/* Learn More Button */}
              <button className="border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-xl font-dmsans font-semibold shadow-sm hover:bg-blue-900 hover:text-white transition-all flex items-center justify-center gap-2">
                <i className="bi bi-book text-lg"></i>
                <span>Learn More</span>
              </button>
            </div>
          </div>

          {/* Right Content - Floating Overlapping Phones */}
          <div className="flex justify-center lg:justify-end items-center relative mt-10 lg:mt-0 min-h-[500px]">
            {/* Back Phone (Teacher View) - Floating Animation */}
            <div className="absolute left-50 top-14 z-10 opacity-90 animate-float-back">
              <img
                src="/teacher-view.png"
                alt="KinderTrack Teacher View"
                className="w-72 md:w-80 lg:w-[200px] h-auto drop-shadow-2xl rounded-2xl"
              />
            </div>

            {/* Front Phone (Parent View) - Floating Animation */}
            <div className="relative z-20 animate-float-front">
              <img
                src="/parent-view.png"
                alt="KinderTrack Parent View"
                className="w-72 md:w-80 lg:w-[200px] h-auto drop-shadow-2xl rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
