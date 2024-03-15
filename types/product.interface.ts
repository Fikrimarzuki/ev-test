interface Variation {
  color: string;
  color_code: string;
  storage: string[];
  images: string[];
  feature: string;
  price?: number | null;
}

interface IMainDisplay {
  size: string;
  resolution: string;
  technology: string;
  color_depth: string;
  max_refresh_rate: string;
}

interface IBuds {
  speaker: string;
  audio_code: string;
  bluetooth_version: string;
  battery_capacity_earbud: string;
  battery_capacity_case: string;
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  category: string;
  product_type: string;
  variations: Variation[];

  cpu_speed: string;
  cpu_type: string;
  main_display: IMainDisplay;
  auto_focus: string;
  camera_resolution: string;
  storage: number;
  memory: number;
  buds?: IBuds;
}

export interface ICategory {
  id: string;
  title: string;
  slug: string;
}

export interface IProductType {
  id: string;
  title: string;
  slug: string;
  short_desc: string;
  category: string;
  image: string;
}

export interface IProductFilter {
  category?: string;
  product_type?: string;
  keyword?: string;
  storage?: string;
}