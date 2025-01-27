import type { ZennArticleResponse } from "$lib/types";

// this is unofficial API
const generateArticleURL = () => {
  const url = new URL("https://zenn.dev/api/articles");
  url.searchParams.set("username", "mr_ozin");
  url.searchParams.set("count", "6");
  url.searchParams.set("order", "latest");
  return url.href;
};

export const fetchArticle = async (): Promise<ZennArticleResponse> => {
  const url = generateArticleURL();
  const res = await fetch(url);

  return await res.json();
};
