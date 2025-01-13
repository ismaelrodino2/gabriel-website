import HeadTag from "@/components/HeadTag";
import { WorkPage } from "@/components/Work";
import { WorkTypes } from "@/types/work";
import { getStoryblokApi } from "@storyblok/react/rsc";

const Work = async () => {
  const { data } = await fetchData();

  return (
    <>
      <HeadTag page="Work" />
      <div>
        <WorkPage data={data.story.content.body as WorkTypes[]} />
      </div>
    </>
  );
};

export default Work;

async function fetchData() {
  try {
    const sbParams = { version: "draft" as const };

    const storyblokApi = getStoryblokApi();
    return storyblokApi.get(`cdn/stories/work`, sbParams, {
      next: { revalidate: 60 },
    });
  } catch (err) {
    console.log(err);
    return {
        data: null
    }
  }
}
