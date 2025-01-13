import HeadTag from "@/components/HeadTag";
import HomePage from "@/components/HomePage";
import { Home1Section } from "@/types/home-1";
import { Home2Section } from "@/types/home-2";
import { Home3Section } from "@/types/home-3";
import { Home4Section } from "@/types/home-4";
import { Home5Section } from "@/types/home-5";
import { getStoryblokApi} from "@storyblok/react/rsc";

export default async function Home() {
  const { data } = await fetchData();
  console.log("qqqq", data);

  const mainContent:[Home1Section, Home2Section, Home3Section, Home4Section, Home5Section] =  data.story.content.body

  return (
    <div>
      <HeadTag page="Home" />
      <HomePage mainContent={mainContent} />
    </div>
  );
}

async function fetchData() {
  const sbParams = { version: "draft" as const};
 
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams, {cache: "no-store"});
}