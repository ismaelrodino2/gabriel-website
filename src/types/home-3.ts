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
  
  interface TextContent {
    type: "doc";
    content: Array<{
      type: "paragraph";
      content: Array<{
        text: string;
        type: "text";
      }>;
    }>;
  }
  
  interface Card {
    _uid: string;
    icon: Icon;
    text: TextContent;
    label: string;
    button: Array<any>;
    component: "grid-card";
    icon_width: string;
    text_color: string;
    background_color: string;
    _editable: string;
  }
  
  interface Button {
    id: string;
    rel: string;
    url: string;
    title: string;
    linktype: "url";
    fieldtype: "multilink";
    cached_url: string;
  }
  
  export interface Home3Section {
    _uid: string;
    cols: string;
    cards: Card[];
    button: Button;
    headline: string;
    component: "grid-section";
    button_name: string;
    background_color: string;
    _editable: string;
  }
  
