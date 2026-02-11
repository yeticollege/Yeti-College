"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  // {
  //   name: "Dhiraj Shah",
  //   role: "Batch of 2020",
  //   image: "/dhiraj.jpg",
  //   text: "Words convey our feelings and a THANK YOU conveys our gratitude and appreciation. So, I must thank YETI Int'l College (Former ICHM Lalitpur College) for striding the dream in all of us and supporting a lot in fulfilling it. YETI International College supports developing a strong feeling of self-confidence among the students to win in this competitive world.",
  // },
  // {
  //   name: "Rupesh Kushwaha",
  //   role: "Batch of 2021",
  //   image: "/rupesh.jpg",
  //   text: "Yeti international college is the best college in kathmandu. This College has good infrastructure and monument and vast college environment and equipment are good in condition and libraries are plenty of books and sports centers with all sports equipment and classrooms with good classrooms and infrastructure.",
  // },
  // {
  //   name: "Sumit Pokhrel",
  //   role: "Batch of 2025",
  //   image: "/sumit.jpeg",
  //   text: "Yeti International College has completely changed the way I look at education. The teachers are supportive, the classrooms are modern, and the learning environment truly motivates us to grow. I’ve gained confidence, skills, and a clear direction for my future.",
  // },
  {
    name: "Chandan Kushwaha",
    role: "Batch of 2020",
    image: "/chandan.png",
    text: "For me, choosing Yeti turned out to be the best decision. Yeti International College offers an outstanding blend of practical and theoretical knowledge. The faculty is highly supportive, maintainable, and the resources provided are top-notch. It's truly a place where students can thrive and achieve their academic goals.",
  },
  {
    name: "Apsara Kathayat",
    role: "Batch of 2021",
    image: "/apsara.png",
    text: "The college provides hands-on learning experiences that really prepare us for real-world careers. From workshops to guest lectures, everything is practical. I feel ready for internships and job opportunities because of the exposure I’ve received here.",
  },
  // {
  //   name: "Aditi Kashyap",
  //   role: "Batch of 2024",
  //   image: "a",
  //   text: "The faculty at Yeti International College genuinely cares about students’ success. They guide us academically and personally, helping us overcome challenges and stay focused. Their mentorship has made a huge impact on my academic journey.",
  // },
  {
    name: "Manoj Khatri",
    role: "Batch of 2020",
    image: "/manoj.png",
    text: "Being a student at Yeti International College means being part of an active, friendly, and opportunity-filled community. There are events, clubs, and activities that help us grow our skills beyond the classroom. It’s been an amazing overall experience.",
  },
];

export default function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [showBg, setShowBg] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowBg(entry.isIntersecting);
      },
      { threshold: 0.1 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-[#14316f] overflow-hidden min-h-[700px] flex items-center"
    >
      {/* 
          FIXED IMAGE CONSTRAINED TO SECTION HEIGHT
          - absolute inset-0: Stays exactly the size of the section
          - clip-path: inset(0): Acts as a mask so 'fixed' child stays inside
          - fixed: Background stays still while scrolling
      */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ clipPath: "inset(0)" }}
      >
        <div 
          className={`fixed inset-0 w-full h-full transition-opacity duration-1000 ${
            showBg ? "opacity-40" : "opacity-0"
          }`}
        >
          <img
            src="/bg-salogan.svg" 
            alt=""
            className="w-full  h-full object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-10 bg-[#E72428]" />
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase">
              What People <span className="text-white/90">Say</span>
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => api?.scrollPrev()}
              className="w-10 h-10 flex items-center justify-center bg-[#E72428] hover:bg-[#ff4d53] transition-colors rounded-sm shadow-xl"
            >
              <ChevronLeft className="w-6 h-6 text-white" strokeWidth={3} />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="w-10 h-10 flex items-center justify-center bg-[#E72428] hover:bg-[#ff4d53] transition-colors rounded-sm shadow-xl"
            >
              <ChevronRight className="w-6 h-6 text-white" strokeWidth={3} />
            </button>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full"
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent className="-ml-6">
            {testimonials.map((testimonial, idx) => (
              <CarouselItem key={idx} className="pl-6 md:basis-1/2 lg:basis-1/2">
                <div className="h-full pt-10 pb-4">
                  <Card className="relative h-full border-none bg-white rounded-md shadow-2xl overflow-visible">
                    <CardContent className="p-8 md:p-12">
                      {/* Floating Profile Image */}
                      <div className="absolute -top-10 left-6 w-20 h-20 rounded-full border-[6px] border-white shadow-xl overflow-hidden bg-slate-100 z-20">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=2D146F&color=fff`;
                          }}
                        />
                      </div>

                      {/* Top Right Quote Icon */}
                      <div className="absolute top-6 right-8 opacity-10">
                        <Quote className="w-16 h-16 text-slate-900 rotate-180 fill-current" />
                      </div>

                      {/* Name & Role */}
                      <div className="mb-6 pt-4">
                        <h4 className="font-bold text-slate-900 text-xl leading-tight">
                          {testimonial.name}
                        </h4>
                        <p className="text-slate-500 text-sm font-semibold mt-1">
                          -{testimonial.role}
                        </p>
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-slate-600 text-[15px] leading-relaxed">
                        {testimonial.text}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}