"user server";

import { connecttToDB } from "../mongoose";

export async function updateUser(): Promise<void> {
  connecttToDB();
}
