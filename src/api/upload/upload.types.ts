export interface ImageMetadata {
    name: string;
    size: number;
    mimetype: string;
  }
  
  export type UploadResponse = {
    success: boolean;
    metadata: {
      image1: ImageMetadata;
      image2: ImageMetadata;
    };
  };