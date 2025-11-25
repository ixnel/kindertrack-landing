export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-medium font-dmsans text-gray-700 inline-block">
            About
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content */}
        <div className="text-center space-y-6">
          <p className="text-lg text-gray-700 font-dmsans leading-relaxed">
            KinderTrack is a mobile application designed to revolutionize 
            early childhood education monitoring. Our platform bridges the gap between teachers and 
            parents, creating a seamless communication channel for tracking kindergarten learners' 
            developmental progress.
          </p>
          <p className="text-lg text-gray-700 font-dmsans leading-relaxed">
            Built with modern technology and user-friendly interfaces, KinderTrack empowers educators 
            to document milestones across six key developmental areas while providing parents with 
            real-time insights into their child's growth and achievements.
          </p>
          <p className="text-lg text-gray-700 font-dmsans leading-relaxed">
            Our mission is to enhance educational outcomes by fostering transparent, data-driven 
            collaboration between schools and families.
          </p>
        </div>
      </div>
    </section>
  )
}