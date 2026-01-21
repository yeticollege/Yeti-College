import { Metadata } from "next";
import { notFound } from "next/navigation";
import { coursesDB } from "@/public/data/coursedata"; // Your local data file
import CourseClient from "./course-client"; // The client component we create in step 2

interface PageProps {
  params: Promise<{ slug: string }>;
}

// ─── 1. SEO METADATA GENERATION (Server Side) ───
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  // Handle slug logic (array vs string)
  const slug = Array.isArray(resolvedParams.slug)
    ? resolvedParams.slug[0]
    : resolvedParams.slug;

  const course = coursesDB[slug];

  if (!course) {
    return {
      title: "Course Not Found | Yeti International College",
    };
  }

  // Construct dynamic SEO data
  const title = `${course.title} (${course.code}) | Yeti International College`;
  const description =
    course.description ||
    `Enroll in ${course.title} at Yeti International College. Admissions Open.`;
  const pageUrl = `https://yeticollege.edu.np/courses/${slug}`;
  const imageUrl = course.image.startsWith("http")
    ? course.image
    : `https://yeticollege.edu.np${course.image}`;

  return {
    title: title,
    description: description,

    // Open Graph (Facebook, LinkedIn, etc)
    openGraph: {
      title: title,
      description: description,
      url: pageUrl,
      siteName: "Yeti International College",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
      type: "website",
    },

    // Twitter Card
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
  const slug = Array.isArray(resolvedParams.slug)
    ? resolvedParams.slug[0]
    : resolvedParams.slug || "bca";

  // Fetch from your local data
  const course = coursesDB[slug];

  if (!course) {
    return notFound();
  }

  // Pass data to the Client Component
  return <CourseClient course={course} slug={slug} />;
}
