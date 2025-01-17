type File = {
    id: number | null;
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
  
  type Mark = {
    type: "textStyle" | "link";
    attrs?: {
      color?: string;
      href?: string;
      uuid?: string | null;
      anchor?: string | null;
      target?: string;
      linktype?: string;
    };
  };
  
  type Content = {
    text: string;
    type: string;
    marks?: Mark[];
  };
  
  type Paragraph = {
    type: "paragraph" | "hard_break";
    content?: Content[];
  };
  
  type Text = {
    type: string;
    content: Paragraph[];
  };
  
  type Image = {
    id: number;
    alt: string;
    name: string;
    focus: string;
    title: string;
    source: string;
    filename: string;
    copyright: string;
    fieldtype: string;
    meta_data: Record<string, unknown>;
    is_external_url: boolean;
  };
  
  export type ContactTypes = {
    File: File;
    _uid: string;
    text: Text;
    image: Image;
    button: unknown[]; // Atualize conforme o formato dos botões
    headline: string;
    component: string;
    image_layout: string;
    reverse_layout: boolean;
    background_color: string;
    _editable: string;
  };
  