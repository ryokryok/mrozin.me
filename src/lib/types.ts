export type Avatar = {
  name: string;
  username: string;
  description: string;
  avatar: {
    url: string;
    height: number;
    width: number;
  };
};

type Link = {
  id: string;
  name: string;
  url: string;
};

type Project = {
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

type MicroCMSListData<T> = {
  contents: (T & MicroCMSDate)[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type ProfileResponse = MicroCMSDate & Avatar;

export type SNSResponse = MicroCMSListData<Link>;

export type SNSList = SNSResponse["contents"];

export type ProjectsResponse = MicroCMSListData<Project>;

export type ProjectList = ProjectsResponse["contents"];

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
