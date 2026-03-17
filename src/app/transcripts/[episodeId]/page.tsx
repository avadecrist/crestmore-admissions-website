import fs from "fs"
import path from "path"
import ReactMarkdown from "react-markdown"

type Props = {
  params: Promise<{ episodeId: string }>
}

export default async function TranscriptPage({ params }: Props) {
  const { episodeId } = await params

  const filePath = path.join(
    process.cwd(),
    "src/content/transcripts",
    `${episodeId}.md`
  )

  const content = fs.readFileSync(filePath, "utf8")

  return (
    <main className="mx-auto max-w-3xl md:max-w-5xl px-6 py-20">
      <article className="prose prose-neutral max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </main>
  )
}