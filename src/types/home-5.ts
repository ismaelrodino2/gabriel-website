export type Home5Section = {
  _uid: string;
  text: {
    type: string;
    content: Array<{
      type: string;
      content: Array<{
        text: string;
        type: string;
        marks: Array<{
          type: string;
          attrs: {
            color: string;
          };
        }>;
      }>;
    }>;
  };
  image: {
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
  button: Array<{
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
  }>;
  headline: string;
  component: string;
  image_layout: string;
  reverse_layout: boolean;
  background_color: string;
  _editable: string;
  cards: Array<{
    _uid: string;
    icon: {
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
    text: {
      type: string;
      content: Array<{
        type: string;
        content: Array<{
          text: string;
          type: string;
          marks: Array<{
            type: string;
            attrs: {
              color: string;
            };
          }>;
        }>;
      }>;
    };
    label: string;
    button: Array<unknown>;
    component: string;
    icon_width: string;
    text_color: string;
    background_color: string;
    _editable: string;
  }>;
};
