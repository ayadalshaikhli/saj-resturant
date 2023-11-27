import mongoose from "mongoose";
import { User } from "../../models/User.js";
export async function POST(req) {
  const body = await req.json();
  mongoose.connect(process.env.MONGO_URI);

  console.log(body);
  const createdUser = await User.create(body);
  return Response.json(createdUser);
}
