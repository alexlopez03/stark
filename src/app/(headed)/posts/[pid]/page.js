import { redirect } from "next/navigation";
import { allPosts } from "content/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Components } from "@/components/mdx-components";

export default function Page({ params }) {
  const post = allPosts.find((post) => post.pid === params.pid);
  if (!post) return redirect("/blog");
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div className="md_area m-auto w-[40rem] mt-11 pb-[4rem]">
      <div className="overflow-hidden rounded rounded-[.5rem]">
        <img src={post.thumbnail} className="aspect-video !object-cover object-center" />
      </div>

      <h1 className="mt-[1rem] text-[#4b5563] text-lg">{post.title}</h1>
      <p className="!text-xs !mt-2">8 min read • 19 Jul 2019 • 2.5M readers</p>

      <hr className="m-[1rem_0]" />

      <MDXContent components={Components} />
    </div>
  );
}
