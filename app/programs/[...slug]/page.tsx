import { Metadata } from "next";
import { notFound } from "next/navigation";
import { coursesDB } from "@/public/data/coursedata"; 
import CourseClient from "./course-client"; 

// Since this is a catch-all route [...slug], params.slug is an array of strings
interface PageProps {
  params: Promise<{ slug: string[] }>;
}

// ─── 1. SEO METADATA GENERATION (Server Side) ───
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug;
  const courseSlug = slugArray[0]; // Get the first part (e.g., "mba")

  const course = coursesDB[courseSlug];

  if (!course) {
    return { title: "Course Not Found | Yeti International College" };
  }

  const title = `${course.title} (${course.code}) | Yeti International College`;
  const description = course.description || `Enroll in ${course.title} at Yeti International College.`;
  const pageUrl = `https://yeticollege.edu.np/programs/${courseSlug}`;
  const imageUrl = `https://yeticollege.edu.np${course.image}`;

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: pageUrl,
      siteName: "Yeti International College",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: course.title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [imageUrl],
    },
  };
}

// ─── 2. MAIN SERVER COMPONENT ───
export default async function CoursePage({ params }: PageProps) {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug;
  
  // URL structure: /programs/[courseSlug]/[subRoute]
  // Example 1: /programs/mba -> slugArray is ["mba"]
  // Example 2: /programs/mba/fee-structure -> slugArray is ["mba", "fee-structure"]
  const courseSlug = slugArray[0];
  const subRoute = slugArray[1]; 

  const course = coursesDB[courseSlug];

  // 1. If the course (e.g. "mba") doesn't exist, 404
  if (!course) {
    return notFound();
  }

  // 2. If there is a second part in the URL, make sure it is exactly "fee-structure"
  // If user types /programs/mba/anything-else, return 404
  if (subRoute && subRoute !== "fee-structure") {
    return notFound();
  }

  // 3. Determine the initial tab to show
  // If subRoute is "fee-structure", set view to "fee", otherwise default to tab 0
  const initialView = subRoute === "fee-structure" ? "fee" : 0;

  return (
    <CourseClient 
      course={course} 
      slug={courseSlug} 
      initialView={initialView} 
    />
  );
}