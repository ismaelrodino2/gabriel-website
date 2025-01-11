/* eslint-disable @typescript-eslint/no-explicit-any */

type LinkData = {
  id: string | null;
  url: string;
  linktype: string;
  fieldtype: string;
  cached_url: string;
};

type Button = {
  _uid: string;
  link: LinkData;
  size: string;
  label: string;
  style: string;
  component: string;
  text_color: string;
  border_radius: string;
  background_color: string;
  _editable: string;
};

type ImageData = {
  id: string | null;
  alt: string | null;
  name: string;
  focus: string | null;
  title: string | null;
  source: string | null;
  filename: string;
  copyright: string | null;
  fieldtype: string;
  meta_data: object;
};

type Content = {
  type: string;
  content: {
    text: string;
    type: string;
  }[];
};

export type Home5Section = {
  _uid: string;
  text: {
    type: string;
    content: Content[];
  };
  image: ImageData;
  button: Button[];
  headline: string;
  component: string;
  image_layout: string;
  reverse_layout: boolean;
  background_color: string;
  _editable: string;
};

