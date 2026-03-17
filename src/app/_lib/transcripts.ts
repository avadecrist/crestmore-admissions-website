import fs from "fs";
import path from "path";

const transcriptsDirectory = path.join(process.cwd(), "content/transcripts");

export function getTranscript(fileName: string) {
  const fullPath = path.join(transcriptsDirectory, fileName);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");

  return fileContents;
}