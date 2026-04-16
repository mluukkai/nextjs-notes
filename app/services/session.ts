import { getServerSession } from "next-auth"
import { eq } from "drizzle-orm"
import { authOptions } from "../../lib/auth"
import { db } from "../../db"
import { users } from "../../db/schema"

export const getCurrentUser = async () => {
  const session = await getServerSession(authOptions)
  if (!session?.user?.email) {
    return null
  }

  return db.query.users.findFirst({
    where: eq(users.username, session.user.email),
  })
}
