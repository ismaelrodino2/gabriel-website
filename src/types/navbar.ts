/* eslint-disable @typescript-eslint/no-explicit-any */
type StoryblokAsset = {
    id: string | null;
    alt: string | null;
    name: string;
    focus: string | null;
    title: string | null;
    source: string | null;
    filename: string;
    copyright: string | null;
    fieldtype: "asset";
    meta_data: Record<string, any>;
  };
  
  type StoryblokLink = {
    id: string;
    url: string;
    linktype: "url" | "story";
    fieldtype: "multilink";
    cached_url: string;
  };
  
  type StoryblokButton = {
    _uid: string;
    link: StoryblokLink;
    size: "small" | "medium" | "large";
    label: string;
    style: "default" | "primary" | "secondary";
    component: "button";
    text_color: "light" | "dark";
    border_radius: "default" | "rounded" | "full";
    background_color: "primary" | "secondary" | "white" | "transparent";
    _editable: string;
  };
  
  type StoryblokText = {
    type: string;
    content: { type: string; content: { text: string; type: string }[] }[];
  };
  
  type StoryblokCard = {
    _uid: string;
    icon: StoryblokAsset;
    text: StoryblokText;
    label: string;
    button: StoryblokButton[];
    component: string;
    icon_width: string;
    text_color: string;
    background_color: string;
    _editable: string;
  };
  
  type StoryblokGridSection = {
    _uid: string;
    cols: string;
    cards: StoryblokCard[];
    button: StoryblokLink;
    headline: string;
    component: string;
    background_color: string;
    _editable: string;
  };
  
  
  export type NavBarTypes = StoryblokGridSection;
  