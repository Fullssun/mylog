import { MarkdownViewer } from "@/shares";
import { BoardManagement } from "./BoardManagement";
import { BoardComment } from "./BoardComment";

type Props = {
  id: number;
  date: string;
  title: string;
  content: string;
  name: string;
  email: string;
}

export async function BoardPostContent({ id, name, email, date, title, content }: Props) {
  return (
    <>
      <BoardManagement id={id} title={title} date={date} name={name} />
      <MarkdownViewer content={content} />
      <BoardComment name={name} email={email} />
    </>
  );
}