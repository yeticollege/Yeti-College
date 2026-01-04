"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Dhiraj Shah",
    role: "Batch of 2020",
    image: "/dhiraj.jpg",
    text: "Words convey our feelings and a THANK YOU conveys our gratitude and appreciation. So, I must thank YETI Int'l College (Former ICHM Lalitpur College) for striding the dream in all of us and supporting a lot in fulfilling it. YETI International College supports developing a strong feeling of self-confidence among the students to win in this competitive world.",
  },
  {
    name: "Rupesh Kushwaha",
    role: "Batch of 2021",
    image: "/rupesh.jpg",
    text: "Yeti international college is the best college in kathmandu .This College has good infrastructure and monument and vast college environment and equipment are good in condition and libraries are plenty of books and sports centers with all sports equipment and classrooms with good classrooms and infrastructure.",
  },
  {
    name: "Sumit Pokhrel",
    role: "Batch of 2025",
    image: "/sumit.jpeg",
    text: "Yeti International College has completely changed the way I look at education. The teachers are supportive, the classrooms are modern, and the learning environment truly motivates us to grow. I’ve gained confidence, skills, and a clear direction for my future.",
  },
  {
    name: "Chandan Kushwaha",
    role: "Batch of 2020",
    image: "/chandan.jpg",
    text: "For me, choosing Yeti turned out to be the best decision. Yeti International College offers an outstanding blend of practical and theoretical knowledge. The faculty is highly supportive, maintainable, and the resources provided are top-notch. It's truly a place where students can thrive and achieve their academic goals.",
  },
  {
    name: "Apsara Kathayat",
    role: "Batch of 2021",
    image: "/apsara.png",
    text: "The college provides hands-on learning experiences that really prepare us for real-world careers. From workshops to guest lectures, everything is practical. I feel ready for internships and job opportunities because of the exposure I’ve received here.",
  },
  {
    name: "Aditi",
    role: "ABM Student",
    image: "a",
    text: "The faculty at Yeti International College genuinely cares about students’ success. They guide us academically and personally, helping us overcome challenges and stay focused. Their mentorship has made a huge impact on my academic journey.",
  },

  {
    name: "Manoj Khatri",
    role: "Batch of 2020",
    image: "/manoj.png",
    text: "Being a student at Yeti International College means being part of an active, friendly, and opportunity-filled community. There are events, clubs, and activities that help us grow our skills beyond the classroom. It’s been an amazing overall experience.",
  },
];

export default function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // Autoplay plugin
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  // Update state for the dots
  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 leading-[0.9] mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mt-4  mx-auto">
            Hear from our graduates about their journey.
          </p>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            // @ts-ignore - embla-carousel-autoplay does not ship TypeScript declarations

            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4 pb-4">
              {testimonials.map((testimonial, idx) => (
                <CarouselItem
                  key={idx}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full pt-2 pb-2 px-1">
                    {/* Card Design Matching Reference */}
                    <Card className="h-full border border-slate-100 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-2xl">
                      <CardContent className="flex flex-col p-8 h-full">
                        {/* Main Text Area */}
                        <div className="flex-grow">
                          <p className="text-slate-700 text-lg leading-relaxed italic font-medium">
                            "{testimonial.text}"
                          </p>
                        </div>

                        {/* Divider Line */}
                        <div className="w-full h-px bg-slate-100 my-6" />

                        {/* Profile Section */}
                        <div className="flex items-center gap-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-14 h-14 rounded-full object-cover border border-slate-100"
                            onError={(e) => {
                              e.currentTarget.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=e2e8f0&color=475569`;
                            }}
                          />
                          <div>
                            <h4 className="font-bold text-slate-900 text-base">
                              {testimonial.name}
                            </h4>
                            <p className="text-slate-500 text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Optional: Arrows (Hidden on mobile, visible on large screens) */}
            <CarouselPrevious className="hidden lg:flex -left-12 h-12 w-12 border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-600" />
            <CarouselNext className="hidden lg:flex -right-12 h-12 w-12 border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-600" />
          </Carousel>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`transition-all duration-300 rounded-full ${current === index + 1
                  ? "w-8 h-2.5 bg-slate-800"
                  : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
