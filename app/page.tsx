
import Posts from "@/app/_components/Posts";
import { token } from "@/sanity/lib/sanityFetch";
import { draftMode } from "next/headers";
import PreviewPosts from "@/app/_components/PreviewPosts";
import PreviewProvider from "@/app/_components/PreviewProvider";
import Navbar from "./_components/Navbar";
import { getPosts } from "@/lib/get_posts";

export default async function Home() {
  const posts = await getPosts()

  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPosts posts={posts} />
      </PreviewProvider>
    );
  }

  return <>
     
      <Posts posts={posts} />;
  </>
  

}