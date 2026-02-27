import { getSpotifyAccessToken } from "@/app/_lib/spotify";

export async function GET() {
  const token = await getSpotifyAccessToken();
  return Response.json(token);
} // yay it works