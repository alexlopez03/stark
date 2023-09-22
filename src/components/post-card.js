import Link from "next/link";

export const PostCard = (post) => {
  return (
    <Link href={`posts/${post.pid}`}>
      <figure className="rounded-lg overflow-hidden aspect-[4/3]">
        <img className="aspect-[4/3] object-cover object-center" src={post.thumbnail} alt={post.title} />
      </figure>

      <div className="break-words line-clamp-3 text-sm mt-2 leading-4">
        <h1 className="font-medium mb-2">{post.title}</h1>
        {post.description}
      </div>

      <span className="text-xs mt-2 text-slate-500">762,541 views</span>
    </Link>
  );
};
