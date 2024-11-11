export interface Project  {
  name: string;
  image: {
    src: ImageMetadata | Promise<{ default: ImageMetadata }>;
    alt: string;
  };
  languages: string[];
  tools: string[];
  description: string;
  github?: string | undefined;
};
