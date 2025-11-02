import { Unauthorized } from "@/shares";
import { WriteEditor } from "@/widgets";

export default async function BlogPostCreate() {

  console.log(process.env.NODE_ENV)

  if (process.env.NODE_ENV !== 'development') {
    return (
      <Unauthorized />
    )
  }

  // 테스트용 인위적 지연
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <WriteEditor />
  )
}