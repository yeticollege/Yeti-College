"use client";

import { useState, useMemo, useRef, ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Book,
  Upload,
  CheckCircle2,
  FileText,
  GraduationCap,
  Loader2,
  ChevronDown,
  X,
  AlertCircle,
  PartyPopper,
  Briefcase,
  Clock,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { coursesDB } from "@/public/data/coursedata";

// --- TYPES ---
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  address: string;
  courseId: string;
  gpa: string;
  prevInstitute: string;
  board: string;
}

interface FormErrors {
  [key: string]: string;
}

interface UploadedFiles {
  [key: string]: File | null;
}

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ApplicationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  // Form State
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    courseId: "",
    gpa: "",
    prevInstitute: "",
    board: "NEB",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const [files, setFiles] = useState<UploadedFiles>({
    marksheet: null,
    character: null,
    citizenship: null,
    photo: null,
  });

  // --- DERIVED DATA & REAL-TIME VALIDATION ---

  // This memo constantly checks if the form is ready
  const formStatus = useMemo(() => {
    const requiredFields = [
      formData.firstName.trim().length > 0,
      formData.lastName.trim().length > 0,
      /^\S+@\S+\.\S+$/.test(formData.email), // Email Regex
      formData.phone.trim().length >= 10,    // Phone min length
      formData.dob !== "",
      formData.address.trim().length > 0,
      formData.courseId !== "",
      formData.prevInstitute.trim().length > 0,
      formData.gpa.trim().length > 0,
      files.marksheet !== null,
      files.character !== null,
      files.citizenship !== null,
      files.photo !== null,
    ];

    const filledCount = requiredFields.filter(Boolean).length;
    const totalCount = requiredFields.length;
    const progress = (filledCount / totalCount) * 100;
    const isValid = filledCount === totalCount;

    return { isValid, progress, filledCount, totalCount };
  }, [formData, files]);

  const filteredCourses = useMemo(() => {
    const allCourses = Object.entries(coursesDB || {}).map(([id, course]) => ({
      ...(course as any),
      id: id,
    }));

    if (activeCategory === "All") return allCourses;
    return allCourses.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  const categories = ["All", "Technology", "Management"];

  const selectedCourse = useMemo(
    () =>
      formData.courseId && coursesDB
        ? coursesDB[formData.courseId as keyof typeof coursesDB]
        : null,
    [formData.courseId]
  );

  // --- HANDLERS ---
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error immediately when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Final safety check (though button is disabled otherwise)
    if (!formStatus.isValid) {
      window.alert("Please fill all fields before submitting.");
      return;
    }

    setIsSubmitting(true);
    try {
      const fileToBase64 = (file: File) =>
        new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const result = reader.result as string;
            resolve(result);
          };
          reader.onerror = (err) => reject(err);
          reader.readAsDataURL(file);
        });

      // Safe checks for TS
      if (!files.marksheet || !files.character || !files.citizenship || !files.photo) throw new Error("Files missing");

      const payload = {
        ...formData,
        marksheet: { name: files.marksheet.name, type: files.marksheet.type, data: await fileToBase64(files.marksheet) },
        character: { name: files.character.name, type: files.character.type, data: await fileToBase64(files.character) },
        citizenship: { name: files.citizenship.name, type: files.citizenship.type, data: await fileToBase64(files.citizenship) },
        photo: { name: files.photo.name, type: files.photo.type, data: await fileToBase64(files.photo) },
      };

      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err?.error || "Submission failed");
      }

      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error: any) {
      console.error("Submission failed", error);
      window.alert(error?.message || "Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <>
        <Header />
        <SuccessView
          courseCode={selectedCourse?.code || "Course"}
          name={formData.firstName}
          onReset={() => window.location.reload()}
        />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
        {/* --- HERO SECTION --- */}
        <header className="pt-12 pb-16 px-6 max-w-[1600px] mx-auto">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full border border-primary/30 text-primary bg-primary/5 text-xs font-bold uppercase tracking-wider">
                  Fall Intake 2025
                </span>
              </div>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-foreground mb-6 leading-[0.9]">
                Begin Your <br />
                <span className="text-muted-foreground/40">Legacy.</span>
              </h1>
              <p className="text-xl leading-relaxed font-medium text-muted-foreground max-w-2xl">
                Join a community of innovators. Complete your application below
                to secure your spot.
              </p>
            </motion.div>
          </div>
        </header>

        {/* --- MAIN FORM CONTENT --- */}
        <div className="max-w-[1600px] mx-auto px-6 pb-32">
          <motion.form
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16"
          >
            {/* LEFT COLUMN - FIELDS */}
            <div className="lg:col-span-8 flex flex-col gap-20">
              {/* 01. PROGRAM SELECTION */}
              <section id="program" className="scroll-mt-32">
                <SectionLabel
                  number="01"
                  title="Select Program"
                  error={errors.courseId}
                />

                <div className="flex flex-wrap gap-2 mb-8">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCategory(cat)}
                      className={cn(
                        "px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border",
                        activeCategory === cat
                          ? "bg-foreground text-background border-foreground shadow-lg scale-105"
                          : "bg-background text-muted-foreground border-border hover:border-foreground/30"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <motion.div
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                  <AnimatePresence mode="popLayout">
                    {filteredCourses.map((course) => {
                      const isSelected = formData.courseId === course.id;
                      return (
                        <motion.div
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                          key={course.id}
                          onClick={() => {
                            setFormData({ ...formData, courseId: course.id });
                            setErrors((prev) => ({ ...prev, courseId: "" }));
                            const personalSection = document.getElementById("personal");
                            if (personalSection) {
                              personalSection.scrollIntoView({ behavior: "smooth" });
                            }
                          }}
                          className={cn(
                            "cursor-pointer group relative flex flex-col p-6 rounded-[1.5rem] border-2 transition-all duration-300 overflow-hidden",
                            isSelected
                              ? "border-primary bg-primary/5 shadow-xl shadow-primary/10 ring-1 ring-primary"
                              : "border-border/60 bg-card hover:border-primary/50 hover:shadow-lg"
                          )}
                        >
                          {isSelected && (
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />
                          )}
                          <div className="relative flex justify-between items-start mb-5 z-10">
                            <div
                              className={cn(
                                "w-12 h-12 rounded-xl flex items-center justify-center text-lg font-black transition-all duration-300 shadow-sm",
                                isSelected
                                  ? "bg-primary text-primary-foreground scale-110 rotate-3"
                                  : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                              )}
                            >
                              {course.code.substring(0, 1)}
                            </div>
                            <div
                              className={cn(
                                "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300",
                                isSelected
                                  ? "border-primary bg-primary text-primary-foreground"
                                  : "border-muted-foreground/30 group-hover:border-primary"
                              )}
                            >
                              {isSelected && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                </motion.div>
                              )}
                            </div>
                          </div>
                          <div className="relative z-10 flex-grow">
                            <span className="inline-block px-2.5 py-1 rounded-md bg-background border border-border/50 text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-3">
                              {course.category}
                            </span>
                            <h3 className="text-2xl font-bold text-foreground tracking-tight leading-none mb-2">
                              {course.code}
                            </h3>
                            <p className="text-sm font-medium text-muted-foreground mb-6 line-clamp-2">
                              {course.title}
                            </p>
                            <div className="flex items-center gap-4 mb-6">
                              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground/80">
                                <Clock className="w-3.5 h-3.5 text-primary" />
                                {course.duration}
                              </div>
                              <div className="w-px h-3 bg-border" />
                              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground/80">
                                <GraduationCap className="w-3.5 h-3.5 text-primary" />
                                {course.credits} Cr.
                              </div>
                            </div>
                          </div>
                          <div
                            className={cn(
                              "relative z-10 mt-auto pt-4 border-t border-border/50 transition-opacity duration-300",
                              isSelected
                                ? "opacity-100"
                                : "opacity-70 group-hover:opacity-100"
                            )}
                          >
                            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                              <Briefcase className="w-3.5 h-3.5" />
                              <span className="truncate">
                                Target: {course.careers.join(", ")}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </motion.div>
              </section>

              {/* 02. PERSONAL DETAILS */}
              <motion.section
                variants={itemVariants}
                id="personal"
                className="scroll-mt-32"
              >
                <SectionLabel number="02" title="Personal Details" />
                <div className="bg-card rounded-[2.5rem] p-8 md:p-12 border border-border shadow-sm">
                  <div className="grid md:grid-cols-2 gap-8">
                    <InputField
                      label="First Name"
                      name="firstName"
                      placeholder="e.g. Aarav"
                      icon={<User className="w-4 h-4" />}
                      value={formData.firstName}
                      onChange={handleInputChange}
                      error={errors.firstName}
                    />
                    <InputField
                      label="Last Name"
                      name="lastName"
                      placeholder="e.g. Sharma"
                      icon={<User className="w-4 h-4" />}
                      value={formData.lastName}
                      onChange={handleInputChange}
                      error={errors.lastName}
                    />
                    <InputField
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="hello@example.com"
                      icon={<Mail className="w-4 h-4" />}
                      value={formData.email}
                      onChange={handleInputChange}
                      error={errors.email}
                      className="md:col-span-2"
                    />
                    <InputField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="+977 9800000000"
                      icon={<Phone className="w-4 h-4" />}
                      value={formData.phone}
                      onChange={handleInputChange}
                      error={errors.phone}
                    />
                    <InputField
                      label="Date of Birth"
                      name="dob"
                      type="date"
                      icon={<Calendar className="w-4 h-4" />}
                      value={formData.dob}
                      onChange={handleInputChange}
                    />
                    <InputField
                      label="Permanent Address"
                      name="address"
                      placeholder="City, District"
                      icon={<MapPin className="w-4 h-4" />}
                      value={formData.address}
                      onChange={handleInputChange}
                      className="md:col-span-2"
                    />
                  </div>
                </div>
              </motion.section>

              {/* 03. ACADEMICS */}
              <motion.section variants={itemVariants} id="academics">
                <SectionLabel number="03" title="Academic History" />
                <div className="bg-card rounded-[2.5rem] p-8 md:p-12 border border-border shadow-sm">
                  <div className="grid md:grid-cols-2 gap-8">
                    <InputField
                      label="Previous Institution"
                      name="prevInstitute"
                      placeholder="College / School Name"
                      icon={<Book className="w-4 h-4" />}
                      value={formData.prevInstitute}
                      onChange={handleInputChange}
                      error={errors.prevInstitute}
                      className="md:col-span-2"
                    />
                    <div className="group relative">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 block ml-1">
                        Board / Level
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50 group-focus-within:text-primary z-10">
                          <GraduationCap className="w-4 h-4" />
                        </div>
                        <select
                          name="board"
                          value={formData.board}
                          onChange={handleInputChange}
                          className="w-full h-14 pl-12 pr-10 rounded-2xl bg-background border border-input text-foreground font-medium appearance-none focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm cursor-pointer"
                        >
                          <option value="NEB">NEB (+2)</option>
                          <option value="A-Level">GCE A-Levels</option>
                          <option value="CBSE">CBSE / ICSE</option>
                          <option value="Bachelor">
                            Bachelor (For Masters)
                          </option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                    <InputField
                      label="GPA / Percentage"
                      name="gpa"
                      placeholder="e.g. 3.6 or 85%"
                      icon={<FileText className="w-4 h-4" />}
                      value={formData.gpa}
                      onChange={handleInputChange}
                      error={errors.gpa}
                    />
                  </div>
                </div>
              </motion.section>

              {/* 04. DOCUMENTS */}
              <motion.section variants={itemVariants} id="documents">
                <SectionLabel
                  number="04"
                  title="Documents"
                />
                <div className="grid md:grid-cols-2 gap-6">
                  {(
                    ["marksheet", "character", "citizenship", "photo"] as const
                  ).map((key) => (
                    <DocumentUpload
                      key={key}
                      id={key}
                      label={key.charAt(0).toUpperCase() + key.slice(1)}
                      file={files[key]}
                      setFile={(f) => setFiles((prev) => ({ ...prev, [key]: f }))}
                    />
                  ))}
                </div>
              </motion.section>
            </div>

            {/* RIGHT SIDEBAR - STICKY SUMMARY */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">

                {/* STATUS BAR CARD */}
                <div className="mb-4">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-bold text-muted-foreground">Application Progress</span>
                    <span className="text-sm font-bold text-primary">{Math.round(formStatus.progress)}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${formStatus.progress}%` }}
                      className={cn("h-full rounded-full transition-all duration-500",
                        formStatus.isValid ? "bg-green-500" : "bg-primary"
                      )}
                    />
                  </div>
                </div>

                {/* Dark Card Summary */}
                <motion.div
                  variants={itemVariants}
                  className="p-8 rounded-[2rem] bg-foreground text-background shadow-2xl border border-foreground"
                >
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-2xl font-bold tracking-tight">
                      Your
                      <br />
                      Application
                    </h3>
                    <div className={cn("w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                      formStatus.isValid ? "bg-green-500 text-white" : "bg-background/10 text-background"
                    )}>
                      {formStatus.isValid ? <CheckCircle2 className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
                    </div>
                  </div>

                  <div className="space-y-5 mb-8">
                    <SummaryRow
                      label="Program"
                      value={selectedCourse?.code || "Not selected"}
                      highlight={!!selectedCourse}
                    />
                    <SummaryRow
                      label="Duration"
                      value={selectedCourse?.duration || "-"}
                    />
                    <SummaryRow
                      label="Applicant"
                      value={
                        formData.firstName
                          ? `${formData.firstName} ${formData.lastName}`
                          : "Not entered"
                      }
                    />
                  </div>

                  <div className="pt-8 border-t border-background/20">
                    <Button
                      onClick={handleSubmit}
                      disabled={isSubmitting || !formStatus.isValid}
                      className={cn(
                        "w-full h-16 rounded-2xl text-lg font-bold transition-all group",
                        !formStatus.isValid
                          ? "bg-muted text-muted-foreground cursor-not-allowed opacity-80"
                          : "bg-white text-black hover:bg-white/90 shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)] hover:scale-[1.02] active:scale-[0.98]"
                      )}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="w-5 h-5 animate-spin" />{" "}
                          Processing
                        </span>
                      ) : !formStatus.isValid ? (
                        <span className="flex items-center gap-2">
                          <Lock className="w-4 h-4" />
                          Complete all fields
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Submit Application{" "}
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </Button>

                    {!formStatus.isValid && (
                      <div className="mt-4 text-center text-[10px] text-background/50 font-mono uppercase tracking-widest">
                        {formStatus.totalCount - formStatus.filledCount} Fields Remaining
                      </div>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="p-6 rounded-3xl bg-muted/30 border border-border"
                >
                  <h4 className="font-bold text-foreground mb-3">Need Help?</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                      <Phone className="w-4 h-4 text-primary" /> +977 1-4465789
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                      <Mail className="w-4 h-4 text-primary" />{" "}
                      admission@college.edu.np
                    </div>
                  </div>
                </motion.div>
              </div>
            </aside>
          </motion.form>
        </div>
        <Footer />
      </main>
    </>
  );
}

// --- SUB COMPONENTS ---

function SuccessView({
  courseCode,
  name,
  onReset,
}: {
  courseCode: string;
  name: string;
  onReset: () => void;
}) {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-background p-6">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-lg w-full text-center"
      >
        <div className="w-24 h-24 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <PartyPopper className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Congratulations, {name}!
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Your application for{" "}
          <span className="font-bold text-accent">{courseCode}</span> has been
          successfully submitted. We have sent a confirmation email to your
          inbox.
        </p>
        <div className="space-y-4">
          <Button
            className="w-full h-14 text-lg rounded-xl"
            onClick={() => (window.location.href = "/")}
          >
            Go to Home
          </Button>
          <Button variant="ghost" className="w-full" onClick={onReset}>
            Submit Another Application
          </Button>
        </div>
      </motion.div>
    </main>
  );
}

function SectionLabel({
  number,
  title,
  error,
}: {
  number: string;
  title: string;
  error?: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-12 border-b border-border pb-6">
      <div className="flex items-baseline gap-4">
        <span className="text-sm font-mono font-bold text-muted-foreground/50">
          {number}
        </span>
        <h2
          className={cn(
            "text-3xl md:text-4xl font-bold tracking-tight",
            error ? "text-destructive" : "text-foreground"
          )}
        >
          {title}
        </h2>
      </div>
      {error && (
        <span className="text-sm font-bold text-destructive flex items-center gap-1 animate-pulse">
          <AlertCircle className="w-4 h-4" /> {error}
        </span>
      )}
    </div>
  );
}

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: React.ReactNode;
  error?: string;
}

function InputField({
  label,
  icon,
  className,
  error,
  ...props
}: InputFieldProps) {
  return (
    <div className={cn("group", className)}>
      <label className="flex justify-between text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 ml-1 group-focus-within:text-primary transition-colors">
        {label}
        {error && (
          <span className="text-destructive normal-case tracking-normal">
            {error}
          </span>
        )}
      </label>
      <div className="relative">
        <div
          className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-200",
            error
              ? "text-destructive"
              : "text-muted-foreground/50 group-focus-within:text-primary"
          )}
        >
          {icon}
        </div>
        <input
          {...props}
          className={cn(
            "w-full h-14 pl-12 pr-4 rounded-2xl bg-background border font-medium focus:outline-none focus:ring-2 transition-all shadow-sm placeholder:text-muted-foreground/30",
            error
              ? "border-destructive focus:ring-destructive/20 text-destructive"
              : "border-input text-foreground focus:ring-primary/20 focus:border-primary hover:border-primary/30"
          )}
        />
      </div>
    </div>
  );
}

function DocumentUpload({
  label,
  id,
  file,
  setFile,
  error
}: {
  label: string;
  id: string;
  file: File | null;
  setFile: (f: File | null) => void;
  error?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div
      onClick={() => !file && inputRef.current?.click()}
      className={cn(
        "relative h-48 rounded-3xl border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center overflow-hidden",
        error ? "border-red-500 bg-red-500/5" :
          file
            ? "bg-green-500/5 border-green-500/50"
            : "border-border hover:border-primary/50 hover:bg-primary/5 cursor-pointer"
      )}
    >
      <input
        type="file"
        id={id}
        ref={inputRef}
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            const maxSize = 5 * 1024 * 1024; // 5MB limit
            if (selectedFile.size > maxSize) {
              window.alert("File size must be less than 5MB");
              return;
            }
            handleFileChange(e);
          }
        }}
        accept=".pdf,.jpg,.png"
      />

      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />

      <AnimatePresence mode="wait">
        {file ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex flex-col items-center p-4 w-full"
          >
            <div className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center mb-3 shadow-lg">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <span className="text-sm font-bold text-foreground truncate max-w-[80%] mb-2">
              {file.name}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setFile(null);
              }}
              className="text-xs text-red-500 font-bold hover:underline flex items-center gap-1"
            >
              <X className="w-3 h-3" /> Remove
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center"
          >
            <div className={cn("w-14 h-14 rounded-full flex items-center justify-center mb-4 border border-border group-hover:scale-110 transition-transform", error ? "bg-red-100" : "bg-muted")}>
              <Upload className={cn("w-6 h-6", error ? "text-red-500" : "text-muted-foreground")} />
            </div>
            <span className={cn("text-sm font-bold", error ? "text-red-500" : "text-foreground")}>
              {error ? error : label}
            </span>
            <span className="text-xs text-muted-foreground/60 mt-2 font-medium">
              Click to Upload
            </span>
            <span className="text-xs text-muted-foreground/50 mt-1">
              Max 5MB
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SummaryRow({
  label,
  value,
  highlight = false,
  error = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  error?: boolean;
}) {
  return (
    <div className="flex justify-between items-start border-b border-background/10 pb-3 last:border-0 last:pb-0">
      <span
        className={cn(
          "text-xs font-bold uppercase tracking-wider pt-1",
          error ? "text-red-300" : "text-background/50"
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          "font-bold text-right max-w-[180px] truncate pl-4",
          highlight ? "text-secondary text-lg" : "text-background",
          error && "text-red-300"
        )}
      >
        {value}
      </span>
    </div>
  );
}