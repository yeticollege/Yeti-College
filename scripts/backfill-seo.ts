// scripts/backfill-seo.ts
require("dotenv").config(); // Load variables from .env

const { PrismaClient } = require("@prisma/client");

// Debug: Verify the environment variable is actually loaded
const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  console.error("❌ Error: DATABASE_URL is undefined.");
  console.error("👉 Check your .env file in the project root.");
  console.error('👉 Ensure it contains: DATABASE_URL="postgresql://..."');
  process.exit(1);
}

console.log("✅ Found Database URL");

// Initialize standard client (letting it read process.env.DATABASE_URL automatically)
const prisma = new PrismaClient();

async function main() {
  console.log("Starting SEO backfill...");

  // 1. Fetch posts with their relation
  const allPosts = await prisma.post.findMany({
    include: { seo: true },
  });

  const postsMissingSeo = allPosts.filter((p: any) => !p.seo);

  console.log(`Found ${postsMissingSeo.length} posts missing SEO.`);

  if (postsMissingSeo.length === 0) {
    console.log("All posts already have SEO data.");
    return;
  }

  for (const post of postsMissingSeo) {
    await prisma.seo.create({
      data: {
        postId: post.id,
        metaTitle: post.title.substring(0, 60),
        metaDescription: post.excerpt
          ? post.excerpt.substring(0, 150)
          : post.title,
        ogType: "article",
        noIndex: false,
      },
    });
    process.stdout.write(".");
  }
  console.log("\nDone.");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
