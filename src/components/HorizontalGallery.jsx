import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HorizontalGallery = ({ items }) => {
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = current.clientWidth * 0.8;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
            setTimeout(checkScroll, 400); // Check after scroll animation
        }
    };

    return (
        <div className="relative group my-12 -mx-4 sm:mx-0">
            {canScrollLeft && (
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0"
                >
                    <ChevronLeft size={28} />
                </button>
            )}

            <div
                ref={scrollContainerRef}
                onScroll={checkScroll}
                className="flex overflow-x-auto gap-4 sm:gap-8 snap-x snap-mandatory py-6 px-4 sm:px-8"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <style dangerouslySetInnerHTML={{
                    __html: `
                    div::-webkit-scrollbar { display: none; }
                `}} />

                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="relative shrink-0 snap-center rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02] border border-slate-200/20"
                        style={{ width: 'min(90vw, 1000px)', aspectRatio: '16/9' }}
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}${item.image.startsWith('/') ? item.image.slice(1) : item.image}`}
                            alt={item.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent flex flex-col justify-end p-6 sm:p-12 transition-all duration-500">

                            <div className="bg-black/60 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl transform transition-transform duration-500 max-w-3xl">
                                <h3 className="text-white font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tighter mb-4 sm:mb-6 drop-shadow-lg">
                                    {item.title}
                                </h3>
                                <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed text-justify">
                                    {item.description}
                                </p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            {canScrollRight && (
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0"
                >
                    <ChevronRight size={28} />
                </button>
            )}
        </div>
    );
};

export default HorizontalGallery;
