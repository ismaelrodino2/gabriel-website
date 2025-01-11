/* eslint-disable @typescript-eslint/no-explicit-any */
interface Icon {
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
}

interface ButtonLink {
  id: string;
  url: string;
  linktype: "url";
  fieldtype: "multilink";
  cached_url: string;
}

interface Button {
  _uid: string;
  link: ButtonLink;
  size: "small" | "medium" | "large";
  label: string;
  style: string;
  component: "button";
  text_color: string;
  border_radius: "default" | "rounded" | "none";
  background_color: "primary" | "secondary" | "default";
  _editable: string;
}

export interface Card {
  _uid: string;
  icon: Icon;
  text: string;
  label: string;
  button: Button[];
  component: "grid-card";
  icon_width: string;
  text_color: string;
  background_color: string;
  _editable: string;
}

interface ButtonLinkSection {
  id: string;
  rel: string;
  url: string;
  title: string;
  linktype: "url";
  fieldtype: "multilink";
  cached_url: string;
}

export interface Home2Section {
  _uid: string;
  cols: string;
  cards: Card[];
  button: ButtonLinkSection;
  headline: string;
  component: "grid-section";
  button_name: string;
  background_color: string;
  _editable: string;
}

  