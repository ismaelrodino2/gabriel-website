export interface FooterTypes {
    _uid: string;
    cols: string; // Pode ser transformado em 'number' se sempre for um número
    cards: GridCard[];
    button: MultiLink;
    headline: string;
    component: string; // Ex: "grid-section"
    background_color: string;
    _editable: string;
  }
  
  interface GridCard {
    _uid: string;
    icon: Icon;
    text: RichText;
    label: string;
    button: Button[];
    component: string; // Ex: "grid-card"
    icon_width: string; // Ex: "80"
    text_color: string; // Ex: "dark"
    background_color: string;
    _editable: string;
  }
  
  interface Icon {
    id: string ;
    alt: string ;
    name: string;
    focus: string ;
    title: string ;
    source: string ;
    filename: string;
    copyright: string ;
    fieldtype: string; // Ex: "asset"
    meta_data: Record<string, unknown>;
  }
  
  interface RichText {
    type: string; // Ex: "doc"
    content: RichTextContent[];
  }
  
  interface RichTextContent {
    type: string; // Ex: "paragraph"
    content: RichTextText[];
  }
  
  interface RichTextText {
    text: string;
    type: string; // Ex: "text"
    marks: Mark[];
  }
  
  interface Mark {
    type: string; // Ex: "link"
    attrs: LinkAttributes;
  }
  
  interface LinkAttributes {
    href: string;
    uuid: string ;
    anchor: string ;
    target: string ; // Ex: "_self"
    linktype: string; // Ex: "url"
  }
  
  interface Button {
    _uid: string;
    link: MultiLink;
    size: string; // Ex: "medium"
    label: string;
    style: string; // Ex: "default"
    component: string; // Ex: "button"
    text_color: string; // Ex: "light"
    border_radius: string; // Ex: "default"
    background_color: string; // Ex: "primary"
    _editable: string;
  }
  
  interface MultiLink {
    id: string;
    url: string;
    linktype: string; // Ex: "url", "story"
    fieldtype: string; // Ex: "multilink"
    cached_url: string;
    title: string

  }
  