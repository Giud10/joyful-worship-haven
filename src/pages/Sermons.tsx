import { Button } from "@/components/ui/button";
import { Calendar, Clock, Play } from "lucide-react";

const sermons = [
  {
    id: 1,
    title: "Walking in Faith",
    description: "Discover how to strengthen your faith and trust in God's plan for your life.",
    date: "2024-03-10",
    duration: "45 mins",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    id: 2,
    title: "The Power of Prayer",
    description: "Learn about the transformative power of prayer in your daily life.",
    date: "2024-03-03",
    duration: "40 mins",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  // Add more sermons as needed
];

const Sermons = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1473177104440-ffee2f376098')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Our Sermons</h1>
        </div>
      </div>

      {/* Sermons Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sermons.map((sermon) => (
            <div key={sermon.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={sermon.image}
                  alt={sermon.title}
                  className="w-full h-48 object-cover"
                />
                <Button
                  className="absolute bottom-4 right-4 rounded-full w-12 h-12 p-0"
                  variant="secondary"
                >
                  <Play className="h-6 w-6" />
                </Button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{sermon.title}</h3>
                <p className="text-gray-600 mb-4">{sermon.description}</p>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(sermon.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {sermon.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sermons;