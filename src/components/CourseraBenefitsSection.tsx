import React, { useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import ManipalUniversity from "@/assets/ManipalUniversity.jpg";
import ManipalAcademy from "@/assets/ManipalAcademy.jpg";
import SikkimUniversity from "@/assets/SikkimUniversity.jpg";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const universities = [
    {
        name: "Manipal University Jaipur",
        image: ManipalUniversity,
        rank: "#1 PRIVATE UNIVERSITY",
        href: "#"
    },
    {
        name: "Manipal Academy of Higher Education",
        image: ManipalAcademy,
        rank: "RANKS 4TH AMONGST ALL UNIVERSITIES",
        href: "#"
    },
    {
        name: "Sikkim Manipal University",
        image: SikkimUniversity,
        rank: "#2 DISTANCE EDUCATION",
        href: "#"
    },
    {
        name: "Manipal University Jaipur (2)",
        image: ManipalUniversity,
        rank: "#1 PRIVATE UNIVERSITY",
        href: "#"
    },
    {
        name: "Manipal Academy of Higher Education (2)",
        image: ManipalAcademy,
        rank: "RANKS 4TH AMONGST ALL UNIVERSITIES",
        href: "#"
    },
    {
        name: "Sikkim Manipal University (2)",
        image: SikkimUniversity,
        rank: "#2 DISTANCE EDUCATION",
        href: "#"
    },
];

const TopUniversities = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.querySelector('a')?.offsetWidth || 300;
            const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Shape Your Future With Our Top-Ranked Universities
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Choose from India’s leading universities offering world-class online education with industry-relevant curriculum and global recognition
                    </p>
                </div>
                
                {/* Desktop View: Grid */}
                <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {universities.map((uni, index) => (
                        <a href={uni.href} key={index} className="group">
                            <Card className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                <div className="relative">
                                    <img src={uni.image} alt={uni.name} className="w-full h-64 object-cover" />
                                    <div className="absolute top-4 left-0 bg-red-600 text-white text-sm font-semibold px-4 py-1 rounded-r-lg clip-path-polygon-[0%_0%,_100%_0%,_90%_50%,_100%_100%,_0%_100%]">
                                        {uni.rank}
                                    </div>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800">{uni.name}</h3>
                                    <div className="flex items-center mt-2 space-x-2 text-primary group-hover:underline">
                                        <span>View all Courses</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                    ))}
                </div>
                
                {/* Mobile/Tablet View: 2-row horizontal scroll */}
                <div className="lg:hidden relative">
                    {/* Navigation buttons */}
                    <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4 z-10">
                        <button 
                            onClick={() => scroll('left')}
                            className="p-3 rounded-full bg-white/50 backdrop-blur-sm shadow-md text-gray-700 hover:bg-white/80 transition-colors"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            className="p-3 rounded-full bg-white/50 backdrop-blur-sm shadow-md text-gray-700 hover:bg-white/80 transition-colors"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>

                    <div 
                        ref={scrollRef} 
                        className="grid grid-flow-col-dense grid-rows-2 auto-cols-[calc(50%-12px)] sm:auto-cols-[calc(33.333%-12px)] md:auto-cols-[calc(25%-12px)] overflow-x-auto gap-6 pb-4 scroll-smooth"
                    >
                        {universities.map((uni, index) => (
                            <a href={uni.href} key={index} className="group">
                                <Card className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                                    <div className="relative">
                                        <img src={uni.image} alt={uni.name} className="w-full h-64 object-cover" />
                                        <div className="absolute top-4 left-0 bg-red-600 text-white text-sm font-semibold px-4 py-1 rounded-r-lg clip-path-polygon-[0%_0%,_100%_0%,_90%_50%,_100%_100%,_0%_100%]">
                                            {uni.rank}
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800">{uni.name}</h3>
                                        <div className="flex items-center mt-2 space-x-2 text-primary group-hover:underline">
                                            <span>View all Courses</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopUniversities;
