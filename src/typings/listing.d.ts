interface Listing {
  _id: number;
  name: string;
  summary: string;
  bedrooms: number;
  photos: {
    large_url: string[],
    small_encoded: string[],
    thumbnail_encoded: string[]
  };
}
