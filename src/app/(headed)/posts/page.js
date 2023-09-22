import { PostCard } from "@/components/post-card";
import { allPosts } from "content/generated";

export async function getStaticPaths() {
  const paths = allPosts.map((post) => ({
    params: { slug: `posts/${post.pid}` },
  }));

  return { paths, fallback: false };
}

export default function Page() {
  return (
    <div className="px-20 py-8">
      <div className="flex justify-between">
        <button className="py-2 px-4 border rounded-lg text-sm font-medium">Popular</button>
        <button className="py-2 px-4 border rounded-lg text-sm font-medium">Filters</button>
      </div>

      <div className="grid grid-cols-4 gap-x-8 gap-y-10 mt-6">
        {allPosts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}
