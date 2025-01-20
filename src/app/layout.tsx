import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppProvider from "@/providers/app-provider";
import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react/rsc";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Cunha",
  description: "UI/UX Designer",
  icons: {
    icon: "/favicon.ico",
  },
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

  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProvider navFooterData={data.story.content.body}>
         {children}
        </AppProvider>
      </body>
    </html>
  );
}


async function fetchData() {
  try {
    const sbParams = { version: "draft" as const };

    const storyblokApi = getStoryblokApi();
    return storyblokApi.get(`cdn/stories/navbar-footer`, sbParams, {
      next: { revalidate: 60 },
    });
  } catch (err) {
    console.log(err);
    return {
        data: null
    }
  }
}
