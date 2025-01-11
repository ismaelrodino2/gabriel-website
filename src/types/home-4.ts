/* eslint-disable @typescript-eslint/no-explicit-any */

type Icon = {
  id: string | null;
  alt: string | null;
  name: string;
  focus: string | null;
  title: string | null;
  source: string | null;
  filename: string;
  copyright: string | null;
  fieldtype: string;
  meta_data: Record<string, unknown>;
};

type TextContent = {
  type: string;
  content: Array<{ text: string; type: string }>;
  attrs?: {
    level: number;
  };
};

type Card = {
  _uid: string;
  icon: Icon;
  text: {
    type: string;
    content: TextContent[];
  };
  label: string;
  button: any[]; // Assume a similar structure or can be defined if more details are provided
  component: string;
  icon_width: string;
  text_color: string;
  background_color: string;
  _editable: string;
};

type Button = {
  id: string;
  rel: string;
  url: string;
  title: string;
  linktype: string;
  fieldtype: string;
  cached_url: string;
};

export type Home4Section = {
  _uid: string;
  cols: string;
  cards: Card[];
  headline: string;
  component: string;
  button: Button;
  background_color: string;
  _editable: string;
};
