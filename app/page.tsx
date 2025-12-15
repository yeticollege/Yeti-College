import Header from "@/components/header";
import Hero from "@/components/hero";
import Programs from "@/components/programs";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Events from "@/components/events";
// import blog from "@/components/blog";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import FaqAndInquiry from "@/components/faqandinquiry";
import NoticeSnippet from "@/components/notices";
// import Header from "@/components/althero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header></Header>
      <Hero />
      <section id="programs">
        <Programs />
      </section>
      <Features />
      <Testimonials />
      <NoticeSnippet />
      <Events />
      {/* <Blog /> */}
      <CTA />
      <FaqAndInquiry />
      <Footer />
    </main>
  );
}
