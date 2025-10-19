/**
 * Safely parses poster URLs from various input formats (JSON string, array, or null/undefined)
 * @param posterUrls - Can be a JSON string, an array, or null/undefined
 * @returns An array of valid URL strings, or empty array if parsing fails
 */
export const safeParsePosterUrls = (posterUrls: any): string[] => {
  if (!posterUrls) return [];
  if (Array.isArray(posterUrls)) return posterUrls.filter(url => url && typeof url === 'string');
  if (typeof posterUrls === 'string') {
    // Handle case where it might not be valid JSON
    if (posterUrls.trim() === '' || posterUrls === 'null') return [];
    try {
      const parsed = JSON.parse(posterUrls);
      if (Array.isArray(parsed)) {
        return parsed.filter(url => url && typeof url === 'string' && url.length > 0);
      }
      return [];
    } catch (error) {
      console.warn('Failed to parse posterUrls JSON:', posterUrls, error);
      return [];
    }
  }
  return [];
};
