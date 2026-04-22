import React from "react";
import { ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white text-black pt-12 pb-6 px-6 lg:px-12 border-t border-gray-100">
      <div className="max-w-[1920px] mx-auto">

        {/* Top Section: Newsletter & Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">

          {/* Left: Newsletter */}
          <div className="w-full lg:max-w-md">
            <h2 className="text-4xl lg:text-5xl font-serif mb-4 tracking-tight">Know everything</h2>
            <p className="text-[10px] font-bold uppercase tracking-widest mb-8 text-neutral-500">
              Join our newsletter
            </p>

            <div className="relative mb-6">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-neutral-100 px-4 py-4 pr-12 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-black transition-all"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-black transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>

            <p className="text-[10px] text-neutral-500 leading-relaxed max-w-xs">
              You may unsubscribe at any time. To find out more, please visit our <span className="underline cursor-pointer hover:text-black">Privacy Policy</span>.
            </p>
          </div>

          {/* Right: Links Grid */}
          <div className="w-full lg:w-auto flex-1 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

              {/* Column 1 */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-6 pt-4 border-t border-black">
                  Help Center
                </h4>
                <ul className="space-y-3 text-sm font-medium">
                  <li className="cursor-pointer hover:opacity-60 transition-opacity">Contact</li>
                  <li className="cursor-pointer hover:opacity-60 transition-opacity">Shipping & Returns</li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-6 pt-4 border-t border-black">
                  Follow Us
                </h4>
                <ul className="space-y-3 text-sm font-medium">
                  <li className="cursor-pointer hover:opacity-60 transition-opacity">Instagram</li>
                  <li className="cursor-pointer hover:opacity-60 transition-opacity">Tik Tok</li>
                  <li className="cursor-pointer hover:opacity-60 transition-opacity">Youtube</li>
                  <li className="cursor-pointer hover:opacity-60 transition-opacity">Facebook</li>
                  <li className="cursor-pointer hover:opacity-60 transition-opacity">Spotify</li>
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest mb-6 pt-4 border-t border-black">
                  Serious Stuff
                </h4>
                <ul className="space-y-3 text-sm font-medium">
                  <li className="cursor-pointer hover:opacity-60 transition-opacity">Privacy Policy</li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Logo */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-end lg:items-end">
          <p className="text-[10px] text-neutral-400 mt-12 lg:mt-0">
            &copy;Archive 2026. All rights reserved.
          </p>

          <h1 className="text-[12vw] lg:text-[10vw] leading-[0.8] font-serif tracking-tighter">
            Archive
          </h1>
        </div>

      </div>
    </footer>
  );
};
