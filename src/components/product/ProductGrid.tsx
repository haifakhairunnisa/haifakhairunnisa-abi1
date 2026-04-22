import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const products = [
  {
    id: 1,
    name: "Oversized Tee",
    price: "$85",
    image: "https://images.unsplash.com/photo-1767392060490-e11e1ced8d6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd2hpdGUlMjB0LXNoaXJ0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NjgzODk3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Tops"
  },
  {
    id: 2,
    name: "Leather Tote",
    price: "$450",
    image: "https://images.unsplash.com/photo-1758542988969-39a10168b2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsZWF0aGVyJTIwYmFnJTIwbWluaW1hbGlzdHxlbnwxfHx8fDE3NjgzODk3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Accessories"
  },
  {
    id: 3,
    name: "Flagship Store",
    price: "Visit Us",
    image: "https://images.unsplash.com/photo-1760862652442-e8ff7ebdd2f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXRhaWwlMjBzdG9yZSUyMGludGVyaW9yJTIwbWluaW1hbGlzbXxlbnwxfHx8fDE3NjgzODk3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Stores"
  }
];

export const ProductGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { contextSafe } = useGSAP({ scope: containerRef });

  const onEnter = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const img = target.querySelector("img");
    gsap.to(img, { scale: 1.05, duration: 0.5, ease: "power2.out" });
  });

  const onLeave = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const img = target.querySelector("img");
    gsap.to(img, { scale: 1, duration: 0.5, ease: "power2.out" });
  });

  return (
    <div ref={containerRef} className="max-w-[1920px] mx-auto px-6 py-24">
      <div className="flex justify-between items-end mb-12">
        <h3 className="text-3xl font-bold uppercase tracking-tight">Current Season</h3>
        <a href="#" className="text-sm font-medium uppercase tracking-widest border-b border-black pb-1 hover:opacity-60 transition-opacity">View All</a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-12">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="group cursor-pointer"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{product.category}</p>
                <h4 className="text-lg font-medium uppercase tracking-wide">{product.name}</h4>
              </div>
              <span className="text-sm font-medium">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
