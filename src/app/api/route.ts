import type { NextRequest } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";

const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(15, "1m"),
});



export async function POST(request: NextRequest) {

  const ip = request.headers.get("x-forwarded-for") ?? '127.0.0.1';

   
  const {limit,reset,remaining} = await ratelimit.limit(ip);
  if (remaining === 0) {
    return new Response(JSON.stringify({ error: "Too many requests" }), { status: 429, headers: {
      "X-RateLimit-Limit": limit.toString(),
      "X-RateLimit-Reset": reset.toString(),
      "X-RateLimit-Remaining": remaining.toString(),
    } });
  }

  const { message } = await request.json();
  await new Promise((r) => setTimeout(r, 3000));


  return Response.json({
    status: "OK",
    echo: message,
  });
}
