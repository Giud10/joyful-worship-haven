const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              CMCI Belgique is dedicated to spreading the message of hope, love, and salvation through Jesus Christ. We believe in building a strong community of believers who support and encourage one another in their spiritual journey.
            </p>
            <p className="text-gray-600">
              Our church welcomes people from all walks of life, creating an inclusive environment where everyone can experience God's love and grace.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              alt="Church Community"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Faith</h3>
              <p className="text-gray-600">
                We believe in the transformative power of faith in Jesus Christ and His teachings.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">
                We foster a supportive community where members can grow together in their faith journey.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Service</h3>
              <p className="text-gray-600">
                We are committed to serving our community and spreading God's love through action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;