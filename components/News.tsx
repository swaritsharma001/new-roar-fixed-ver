import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsItem {
  id: number;
  category: string;
  title: string;
  date: string;
  image: string;
}

const NewsInsights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      category: 'Dubai Market Trends & News',
      title: 'Dubai Real Estate Market Report Q3 2025 by Provident',
      date: 'September 30, 2025',
      image: '/assets/team-ceo.jpg', // Replace with your image path
    },
    {
      id: 2,
      category: 'Investment Tips',
      title: 'Top 5 Areas to Invest in Dubai Real Estate 2025',
      date: 'September 28, 2025',
      image: '/assets/hero-bg.jpg',
    },
    {
      id: 3,
      category: 'Market Analysis',
      title: 'Understanding Dubai Property Laws for Foreign Investors',
      date: 'September 25, 2025',
      image: '/assets/hero-bg.jpg',
    },
    {
      id: 4,
      category: 'Developer News',
      title: 'New Emaar Project Launches in Downtown Dubai',
      date: 'September 20, 2025',
      image: '/assets/team-ceo.jpg',
    },
  ];

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
          Latest News & Insights
        </h2>

        {/* Carousel */}
        <div className="relative">
          {/* Main Card */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 bg-blue-900/90 text-white text-xs font-medium rounded-md">
                {newsItems[currentIndex].category}
              </span>
            </div>

            {/* Image */}
            <div className="relative h-56 bg-gradient-to-br from-blue-900 to-blue-700">
              <img
                src={newsItems[currentIndex].image}
                alt={newsItems[currentIndex].title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 text-gray-900" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 text-gray-900" />
              </button>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 line-clamp-2">
                {newsItems[currentIndex].title}
              </h3>
              <p className="text-gray-500 text-sm">
                {newsItems[currentIndex].date}
              </p>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-1.5 mt-4">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-6 bg-orange-600'
                    : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* More Insights Button */}
        <div className="mt-6 text-center">
          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-8 rounded-lg transition-all">
            More Insights
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsInsights;