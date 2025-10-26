import path from "path";
import fs from 'fs';
import { BoardNotFound, WriteEditor } from "@/widgets";

export default async function BlogPostUpdate(props: PageProps<'/[id]'>) {

  // 테스트용 인위적 지연
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const { id } = await props.params;
  const filePath = path.join(process.cwd(), "post", `${id}.json`);

  if (!fs.existsSync(filePath)) {
    return <BoardNotFound />;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { title, content, date } = JSON.parse(fileContent);

  return (
    <WriteEditor id={Number(id)} postTitle={title} postContent={content} postDate={date} />
  )
}