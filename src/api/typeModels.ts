
export interface Size {
  id:    number;
  size:  string;
}

export interface Colors {
  id:    number;
  name:  string;
  value: string;
}

export interface Categorys {
  id:          number;
  name:        string;
  name_unique: string;
  main:        boolean;
  image:       string;
}

export interface Products {
  id:           number;
  colors:       Colors[];
  category:     Categorys[];
  size:         Size[];
  main_image:   string | null;
  second_image: string | null;
  third_image:  string | null;
  name:         string;
  price:        string;
  description:  string;
  publicado:    boolean;
  visits:       number;
}

export interface ResponseProduct {
  count:    number;
  next:     string | null;
  previous: string | null;
  results:  Products[];
}