import React from 'react';
import { motion } from 'motion/react';

export function Featured() {
  return (
    <section className="py-24 px-6 max-w-[1920px] mx-auto bg-white">
      <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
        
        <div className="w-full md:w-1/2">
           <div className="overflow-hidden">
             <motion.img 
               initial={{ scale: 1.1 }}
               whileInView={{ scale: 1 }}
               transition={{ duration: 1.5 }}
               src="https://images.unsplash.com/photo-1564316800929-be17a69d6966?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZmFzaGlvbiUyMGNsb3RoaW5nJTIwcmFjayUyMHN0b3JlfGVufDF8fHx8MTc2ODM5MDk0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
               alt="Store Interior"
               className="w-full h-[600px] object-cover"
             />
           </div>
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          <h3 className="text-sm font-bold tracking-widest uppercase text-gray-400">Philosophy</h3>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-none">
            Design for <br/> the Modern Era
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            Our approach is grounded in the belief that luxury lies in simplicity. 
            We strip away the non-essential to reveal the pure form of function and beauty.
          </p>
          <a href="#" className="inline-block border-b border-black pb-1 text-sm font-bold uppercase tracking-widest hover:text-gray-600 hover:border-gray-600 transition-colors">
            Read Our Story
          </a>
        </div>

      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
         {[
           { title: "Outerwear", img: "https://images.unsplash.com/photo-1764065340249-ee8bec50d2f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZmFicmljJTIwdGV4dHVyZSUyMGRldGFpbCUyMGJsYWNrfGVufDF8fHx8MTc2ODM5MDk1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
           { title: "Accessories", img: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80" },
           { title: "Footwear", img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80" }
         ].map((item, i) => (
           <div key={i} className="group cursor-pointer">
             <div className="overflow-hidden mb-4 relative h-[400px]">
               <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
             </div>
             <h3 className="text-xl font-medium tracking-wide uppercase">{item.title}</h3>
           </div>
         ))}
      </div>
    </section>
  );
}
