type TextContent = {
    type: string;
    content: {
      type: string;
      attrs: {
        level: number;
      };
      content: {
        text: string;
        type: string;
      }[];
    }[];
  };
  
  type Image = {
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
  
  type Button = {
    _uid: string;
    link: {
      id: string;
      url: string;
      linktype: string;
      fieldtype: string;
      cached_url: string;
    };
    size: string;
    label: string;
    style: string;
    component: string;
    text_color: string;
    border_radius: string;
    background_color: string;
    _editable: string;
  };
  
  type GridCard = {
    _uid: string;
    icon: {
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
    text: string | TextContent;
    label: string;
    button: Button[];
    component: string;
    icon_width: string;
    text_color: string;
    background_color: string;
    _editable: string;
  };
  
  
  export type Home1Section =  {
    _uid: string;
    cols: string;
    lead: {
      id: string;
      url: string;
      linktype: string;
      fieldtype: string;
      cached_url: string;
    };
    cards: GridCard[];
    text: TextContent;
    image: Image;
    button: Button[];
    headline: string;
    component: string;
    image_layout: string;
    reverse_layout: boolean;
    background_color: string;
    _editable: string;
  };;
  