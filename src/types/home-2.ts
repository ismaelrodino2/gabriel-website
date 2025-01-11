interface Link {
    id: string;
    url: string;
    linktype: string;
    fieldtype: string;
    cached_url: string;
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    meta_data: Record<string, any>;
  }
  
  interface Button {
    _uid: string;
    link: Link;
    size: string;
    label: string;
    style: string;
    component: string;
    text_color: string;
    border_radius: string;
    background_color: string;
    _editable: string;
  }
  
  export interface Card {
    _uid: string;
    icon: Icon;
    text: string;
    label: string;
    button: Button[];
    component: string;
    icon_width: string;
    text_color: string;
    background_color: string;
    _editable: string;
  }
  
  export interface Home2Section {
    _uid: string;
    cols: string;
    lead: {
      id: string;
      url: string;
      linktype: string;
      fieldtype: string;
      cached_url: string;
    };
    cards: Card[];
    headline: string;
    component: string;
    background_color: string;
    _editable: string;
  }
  