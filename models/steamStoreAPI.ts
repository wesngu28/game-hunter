export interface AppData {
  success: boolean;
  data: {
    type: string;
    name: string;
    steam_appid: number;
    required_age: number;
    is_free: boolean;
    detailed_description: string;
    short_description: string;
    supported_languages: string;
    header_image: string;
    website: string;
    pc_requirements: {
      minimum: string;
      recommended: string;
    };
    mac_requirements: {
      minimum: string;
      recommended: string;
    };
    linux_requirements: {
      minimum: string;
      recommended: string;
    };
    developers: string[];
    publishers: string[];
    package_groups: any[];
    platforms: {
      windows: boolean;
      mac: boolean;
      linux: boolean;
    };
    categories: any[];
    genres: string[];
    release_date: {
      coming_soon: boolean;
      date: string;
    };
    dlc: any[];
    content_descriptors: {
      id: number;
      description: string;
    };
    movie_count: number;
    series: any[];
    screenshots: any[];
    movies: any[];
    recommendations: {
      total: number;
    };
    achievements: {
      total: number;
      highlighted: any[];
    };
    controller_support: string;
    legal_notice: string;
  };
}

export interface AppInfo {
  [key: string]: AppData;
}