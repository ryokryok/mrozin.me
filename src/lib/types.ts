export type Avatar = {
  name: string;
  description: string;
  avatar: {
    url: string;
    height: number;
    width: number;
  };
};

export type Link = {
  id: string;
  name: string;
  url: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  url: string;
};

type MicroCMSDate = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export type ProfileResponse = MicroCMSDate &
  Avatar & {
    sns: Link[];
    projects: Project[];
  };

export type ZennArticle = {
  id: string;
  title: string;
  slug: string;
  emoji: string;
  published_at: string;
  body_updated_at: string;
  path: string;
};

export type ZennArticleResponse = {
  articles: ZennArticle[];
};
