interface Listing {
  name: string;
  summary: string;
  photos: {
    large_url: string[],
    small_encoded: string[],
    thumbnail_encoded: string[]
  };
}
