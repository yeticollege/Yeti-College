import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Send } from "lucide-react";

const faqs = [
  {
    id: "01",
    question: "What programs do you offer?",
    answer:
      "We offer a wide range of undergraduate and graduate programs in fields like Business, Technology, and the Arts. You can explore all our programs on the dedicated programs page.",
  },
  {
    id: "02",
    question: "What are the admission requirements?",
    answer:
      "Admission requirements vary by program. Generally, we require a completed application form, official transcripts, and letters of recommendation. Specific programs may have additional requirements like portfolios or entrance exams.",
  },
  {
    id: "03",
    question: "Is financial aid available?",
    answer:
      "Yes, we are committed to making education accessible. We offer a variety of scholarships, grants, and work-study programs. We encourage all prospective students to apply for financial aid.",
  },
  // {
  //   id: "04",
  //   question: "Do you offer on-campus housing?",
  //   answer:
  //     "No, But We have several modern and comfortable residence halls for our students. Living on campus is a great way to immerse yourself in the college community and have easy access to all facilities.",
  // },
  {
    id: "04",
    question: "Can I schedule a campus tour?",
    answer:
      "We would love to show you around! We offer guided campus tours on weekdays and have virtual tour options available on our website. Please visit our admissions page to schedule your visit.",
  },
];

export default function FaqAndInquiry() {
  return (
    <section className="py-24 bg-white w-full text-zinc-900 relative">
      {/* Background blob positioned ONLY behind the form for the glass effect */}
      <div className="absolute right-0 bottom-0 top-0 w-1/2 overflow-hidden pointer-events-none hidden lg:block">
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] rounded-full bg-purple-100/40 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Swiss Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20 border-b border-zinc-900 pb-12">
          <div className="lg:col-span-4">
            <span className="inline-block text-xs font-bold tracking-widest uppercase mb-4">
              / Support Center
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-zinc-900">
              F.A.Q.
              <br />& Contact
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-xl text-zinc-600 leading-relaxed max-w-md">
              Everything you need to know about joining Yeti International
              College.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* FAQ Section - Kept "Swiss Style" (Sharp, Numbered, Clean) */}
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full space-y-0">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-zinc-200 last:border-0"
                >
                  <AccordionTrigger className="py-8 hover:no-underline group">
                    <div className="flex items-start gap-6 text-left">
                      <span className="text-sm font-mono text-zinc-400 pt-1">
                        {faq.id}
                      </span>
                      <span className="text-2xl font-medium tracking-tight group-hover:text-zinc-600 transition-colors">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-zinc-500 pl-12 leading-relaxed pb-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Inquiry Form - Transformed to Rounded / Glass / Blur / Shadow */}
          <div className="lg:col-span-5 sticky top-12">
            <div className="relative rounded-[2rem] border border-white/40 bg-white/60 backdrop-blur-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-8 md:p-10 overflow-hidden">
              {/* Glossy highlight overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    Still have questions?
                  </h3>
                  <p className="text-slate-500">
                    Drop us a line. We answer promptly.
                  </p>
                </div>

                <form className="space-y-5">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-sm font-semibold text-slate-700 ml-1"
                    >
                      Full Name
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="e.g. Jane Cooper"
                      className="bg-white/80 border-slate-200/50 shadow-sm rounded-2xl h-12 px-4 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-300 transition-all duration-300 placeholder:text-slate-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-semibold text-slate-700 ml-1"
                    >
                      Email Address
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="jane@example.com"
                      className="bg-white/80 border-slate-200/50 shadow-sm rounded-2xl h-12 px-4 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-300 transition-all duration-300 placeholder:text-slate-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-sm font-semibold text-slate-700 ml-1"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you today?"
                      className="bg-white/80 border-slate-200/50 shadow-sm rounded-2xl min-h-[140px] px-4 py-4 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-300 transition-all duration-300 placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-xl h-14 bg-slate-900 hover:bg-blue-600 text-white font-bold text-base shadow-lg hover:shadow-blue-600/25 hover:-translate-y-1 transition-all duration-300 group"
                    size="lg"
                  >
                    Send Inquiry
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
