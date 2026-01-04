import { prisma } from "@/lib/prisma";

/* Force Node.js runtime (Prisma requirement) */
export const runtime = "nodejs";

/* Disable static prerendering */
export const dynamic = "force-dynamic";

export default async function Page() {
  const users = await prisma.user.findMany();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}
