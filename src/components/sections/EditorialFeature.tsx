import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Padded Pak'r®",
    image: 'https://images.unsplash.com/photo-1562869323-d3d7be3e88a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmxhY2slMjBiYWNrcGFjayUyMHVwY2xvc2UlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY4NDY2Njc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    dropDate: 'DROPPING SAT 01PM EST'
  },
  {
    id: 2,
    name: 'Leather Daypack',
    image: 'https://images.unsplash.com/photo-1597671053855-1132c40cc1ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBibGFjayUyMGxlYXRoZXIlMjBiYWNrcGFjayUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3Njg0NjY2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dropDate: 'DROPPING SAT 01PM EST'
  },
  {
    id: 3,
    name: 'Technical Duffel',
    image: 'https://images.unsplash.com/photo-1592480071809-f42c1dfd4939?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBibGFjayUyMGR1ZmZlbCUyMGJhZyUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3Njg0NjY2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dropDate: 'DROPPING SAT 01PM EST'
  },
  {
    id: 4,
    name: 'Utility Crossbody',
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHNsaW5nJTIwYmFnJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc2ODQ2NjY3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    dropDate: 'DROPPING SAT 01PM EST'
  }
];

export const EditorialFeature = ({ onProductClick }: { onProductClick?: () => void }) => {
  return (
    <section className="bg-black text-white w-full relative z-10 min-h-screen">

      {/* 
        Layout Container 
        - Mobile: flex-col (vertical stack)
        - Desktop: flex-row (split screen)
        - h-full: Ensures it fills the screen on desktop
      */}
      <div className="flex flex-col lg:flex-row w-full relative">

        {/* 
          LEFT COLUMN: Sticky Editorial Image
          - Desktop: sticky top-0 h-screen
          - Mobile: 50vh height
        */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen lg:sticky lg:top-0 relative overflow-hidden shrink-0">
          <img
            src="https://images.unsplash.com/photo-1677680127704-8ce403baff5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBmYXNoaW9uJTIwZGFyayUyMG1vb2R5JTIwY2luZWFtYXRpYyUyMGJsb2NrJTIwYW5kJTIwd2hpdGUlMjBoaWdoJTIwY29udHJhc3R8ZW58MXx8fHwxNzY4NDY2MzE4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Editorial Campaign"
            className="w-full h-full object-cover grayscale contrast-125"
          />
        </div>

        {/* 
          RIGHT COLUMN: Natural Scroll Content
          - Desktop: h-auto (flows naturally)
          - No internal overflow, uses window scroll
        */}
        <div className="w-full lg:w-1/2 h-auto bg-black box-border">

          <div className="flex flex-col justify-center min-h-full px-8 lg:px-24 py-16 lg:py-24">

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-xl w-full"
            >
              <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-12 text-white">
                Dime x Eastpak
              </h2>

              <div className="space-y-8 text-lg lg:text-xl text-neutral-300 font-light leading-relaxed mb-24">
                <p>
                  A collaboration that explores the intersection of utility and modern aesthetics.
                  Reimagining classic silhouettes through a lens of stark minimalism and raw texture.
                </p>
                <p>
                  Designed for the urban nomad, this collection bridges the gap between
                  functionality and form. Each piece is crafted to withstand the elements
                  while maintaining an uncompromising commitment to style.
                </p>
                <p>
                  The limited capsule features premium materials, weather-resistant coatings,
                  and custom hardware that speaks to the industrial heritage of both brands.
                </p>
              </div>
            </motion.div>

            {/* Product Showcase Strip */}
            <div className="w-full">
              {/* 
                Horizontal Scroll Container 
                - Negative margins to extend scroll area to edges
                - Padding to align content start with text
                - Scrollbars hidden
              */}
              <div className="overflow-x-auto pb-12 cursor-grab active:cursor-grabbing -mr-8 lg:-mr-24 pr-8 lg:pr-24
                              [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                <div className="flex space-x-8 min-w-max">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="w-[280px] lg:w-[320px] group cursor-pointer flex-shrink-0"
                      onClick={onProductClick}
                    >
                      {/* Card Top Label */}
                      <div className="mb-4 text-xs font-mono tracking-widest text-neutral-500 uppercase">
                        {product.dropDate}
                      </div>

                      {/* Image Container */}
                      <div className="aspect-[4/5] bg-neutral-900 w-full mb-6 overflow-hidden relative">
                        <div className="absolute inset-0 bg-white flex items-center justify-center p-8">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain mix-blend-multiply opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                        </div>
                      </div>

                      {/* Product Name */}
                      <div className="text-xl font-medium tracking-tight text-white flex items-center justify-between">
                        <span>{product.name}</span>
                      </div>
                    </div>
                  ))}

                  {/* Spacer for right padding in scroll */}
                  <div className="w-12 shrink-0" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};