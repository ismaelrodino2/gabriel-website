import { ContactTypes } from "@/types/contact";
import { getStoryblokApi } from "@storyblok/react/rsc";
import ContactScreen from "./page.client";


export default async function Contact(){
    const { data } = await fetchData();
  const mainContent: ContactTypes =  data.story.content.body[0]

    return <ContactScreen mainContent={mainContent} />
}

async function fetchData() {
  try {
    const sbParams = { version: "draft" as const };

    const storyblokApi = getStoryblokApi();
    return storyblokApi.get(`cdn/stories/contact`, sbParams, {
      next: { revalidate: 60 },
    });
  } catch (err) {
    console.log(err);
    return {
        data: null
    }
  }
}
