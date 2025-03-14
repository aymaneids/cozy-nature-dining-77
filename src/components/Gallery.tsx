
import React from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop",
    title: "Fresh Ingredients",
    category: "Kitchen"
  },
  {
    url: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=2074&auto=format&fit=crop",
    title: "Cozy Atmosphere",
    category: "Interior"
  },
  {
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
    title: "Signature Dish",
    category: "Food"
  },
  {
    url: "https://images.unsplash.com/photo-1586999768265-24af89630739?q=80&w=1974&auto=format&fit=crop",
    title: "Weekend Brunch",
    category: "Food"
  },
  {
    url: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=2067&auto=format&fit=crop",
    title: "Outdoor Seating",
    category: "Interior"
  },
  {
    url: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=1975&auto=format&fit=crop",
    title: "Craft Cocktails",
    category: "Drinks"
  },
  {
    url: "https://images.unsplash.com/photo-1588280991458-d759882787cf?q=80&w=1974&auto=format&fit=crop",
    title: "Special Events",
    category: "Events"
  },
  {
    url: "https://images.unsplash.com/photo-1561043433-aaf687c4cf04?q=80&w=2070&auto=format&fit=crop",
    title: "Dessert Selection",
    category: "Food"
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-nature-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-heading">Our Gallery</h2>
          <p className="section-subheading">
            A visual journey through our culinary creations and ambiance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-lg font-medium mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-300">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
