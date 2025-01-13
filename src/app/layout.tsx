import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppProvider from "@/providers/app-provider";
import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokProvider from "@/providers/StoryblokProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const { data } = await fetchData();

    console.log("ttt", data.story.content.body)
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider navFooterData={data.story.content.body}>
          <StoryblokProvider>{children}</StoryblokProvider>
        </AppProvider>
      </body>
    </html>
  );
}

async function fetchData() {
  const sbParams = { version: "draft" as const};
 
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/navbar-footer`, sbParams, {cache: "no-store"});
}