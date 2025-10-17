export default function Programs() {
  const programs = [
    { icon: 'bi-book', title: 'Literacy & Language', description: 'Early reading, writing, and speaking skills.' },
    { icon: 'bi-calculator', title: 'Cognitive / Numeracy', description: 'Counting, comparing, and classifying objects' },
    { icon: 'bi-emoji-smile', title: 'Socio-Emotional Development', description: 'Recognizing self, expressing feelings, and relating with others' },
    { icon: 'bi-heart-fill', title: 'Values Formation', description: 'Showing honesty, respect, and care for community' },
    { icon: 'bi-dribbble', title: 'Physical & Motor Skills', description: 'Developing balance, movement, and fine motor control' },
    { icon: 'bi-palette-fill', title: 'Aesthetic & Creative Arts', description: 'Expressing ideas through music, art, and creative play' },
  ];

  return (
   <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-medium font-dmsans text-gray-700 inline-block">
            Programs
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto mt-4 rounded-full" />
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-gray-200 rounded-3xl p-8 flex flex-col items-start transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 transition-colors group-hover:bg-blue-900">
                <i className={`bi ${program.icon} text-2xl text-blue-900 group-hover:text-white transition-colors`}></i>
              </div>

              {/* Title */}
              <h3 className="text-xl font-dmsans font-semibold text-blue-900 mb-3">
                {program.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 font-light mb-6 leading-relaxed">
                {program.description}
              </p>

              {/* Learn More Link */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-blue-900 font-medium group-hover:text-blue-500 transition-colors"
                aria-label={`Learn more about ${program.title}`}
              >
                Learn More
                <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
