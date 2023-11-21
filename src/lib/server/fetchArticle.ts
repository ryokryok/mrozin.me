import type { ZennArticleResponse } from "$lib/types";

// this is unofficial API
const generateArticleURL = () => {
  const url = new URL("https://zenn.dev/api/articles");
  url.searchParams.set("username", "mr_ozin");
  url.searchParams.set("count", "6");
  url.searchParams.set("order", "latest");
  return url.href;
};

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("generateArticleURL", () => {
    const result = generateArticleURL();
    expect(result).toBe(
      "https://zenn.dev/api/articles?username=mr_ozin&count=6&order=latest",
    );
  });
}

export const fetchArticle = async (): Promise<ZennArticleResponse> => {
  const url = generateArticleURL();
  const res = await fetch(url);

  return await res.json();
};
