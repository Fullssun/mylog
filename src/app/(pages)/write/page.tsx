import { WriteEditor } from "@/widgets";

export default async function BlogPostCreate() {

  // 테스트용 인위적 지연
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <WriteEditor />
  )
}