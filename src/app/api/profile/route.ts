import { ResponseHandler } from "@/lib/responseHandler";
import { verifyToken } from "../middleware/verifyToken";
import { prisma } from "@/constants/variables";

export async function GET(req: Request) {
  const decoded = await verifyToken(req);
  if (decoded instanceof Response) {
    return decoded;
  }
  if (typeof decoded !== "string" && decoded.id) {
    try {
      const id = decoded.id;

      const user = await prisma.user.findUnique({
        where: {
          id,
        },
        select: {
          email: true,
          fullName: true,
        },
      });

      if (!user) {
        return ResponseHandler.InvalidData("User not found");
      }

      return ResponseHandler.get(user);
    } catch (error) {
      return ResponseHandler.serverError();
    }
  }
}
