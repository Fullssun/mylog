import { MarkdownViewer } from "@/shares";
import { BoardManagement } from "./BoardManagement";

type Props = {
  date: string;
  title: string;
  content: string;
  name: string;
  email: string;
}

export async function BoardPostContent({ name, email, date, title, content }: Props) {
  return (
    <>
      <BoardManagement title={title} date={date} name={name} />
      <MarkdownViewer content={content} />
      {email}
    </>
  );
}