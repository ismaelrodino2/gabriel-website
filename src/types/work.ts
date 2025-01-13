interface Button {
    id: string;
    url: string;
    linktype: string;
    fieldtype: string;
    cached_url: string;
    link :{
        url: string
    }
  }
  
  interface Icon {
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
  }
  
  interface TextContent {
    type: string;
    content: Array<{
      type: string;
      content: Array<{
        text: string;
        type: string;
        marks: Array<{ type: string; attrs: { color: string } }>;
        attrs: {
          id: number;
          alt: string;
          src: string;
          title: string;
          source: string;
          copyright: string;
          meta_data: Record<string, unknown>;
        };
      }>;
      attrs: { level: number };
    }>;
  }
  
export  interface Card {
    _uid: string;
    icon: Icon;
    text: TextContent;
    label: string;
    button: Button[];
    component: string;
    icon_width: string;
    text_color: string;
    background_color: string;
    _editable: string;
  }
  
 export interface WorkTypes {
    _uid: string;
    cols: string;
    cards: Card[];
    button: Button;
    headline: string;
    component: string;
    background_color: string;
    _editable: string;
  }