import HeadTag from "@/components/HeadTag";
import HomePage from "@/components/HomePage";
import { Home1Section } from "@/types/home-1";
import { Home2Section } from "@/types/home-2";
import { getStoryblokApi} from "@storyblok/react/rsc";

export default async function Home() {
  const { data } = await fetchData();

  const mainContent:[Home1Section, Home2Section] =  data.stories[0].content.body

  console.log("qqqq", data.stories[0].content.body);
  return (
    <div>
      <HeadTag page="Home" />
      <HomePage mainContent={mainContent} />
    </div>
  );
}

export async function fetchData() {
  const sbParams = { version: "draft" as const};
 
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/`, sbParams, {cache: "no-store"});
}