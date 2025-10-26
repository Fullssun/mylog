import fs from "fs";
import path from "path";
import BoardTitle from "@/features/board/components/BoardTitle";
import { BoardNotFound } from "./BoardNotFound";
import { MarkdownViewer } from "@/shares";

export async function BoardPostContent({ id }: { id: string }) {
  const filePath = path.join(process.cwd(), "post", `${id}.json`);

  if (!fs.existsSync(filePath)) {
    return <BoardNotFound />;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { date, title, content } = JSON.parse(fileContent);

  return (
    <>
      <BoardTitle date={date}>{title}</BoardTitle>
      <MarkdownViewer content={content} />
    </>
  );
}