import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  console.log(body);
};
