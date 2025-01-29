import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1473177104440-ffee2f376098')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to CMCI Belgique</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Join us in worship and discover a community of faith, love, and hope.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Learn More <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>

      {/* Featured Sections */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <h3 className="text-2xl font-semibold mb-4">Sunday Service</h3>
            <p className="text-gray-600">Join us every Sunday at 10:00 AM for worship and fellowship.</p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-2xl font-semibold mb-4">Bible Study</h3>
            <p className="text-gray-600">Deepen your understanding of God's word every Wednesday at 7:00 PM.</p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-2xl font-semibold mb-4">Community</h3>
            <p className="text-gray-600">Be part of our growing community and participate in various activities.</p>
          </div>
        </div>
      </div>

      {/* Latest Sermon Section */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Sermon</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Latest Sermon"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Walking in Faith</h3>
              <p className="text-gray-600 mb-4">
                Discover how to strengthen your faith and trust in God's plan for your life.
              </p>
              <Link
                to="/sermons"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
              >
                Watch Now <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;