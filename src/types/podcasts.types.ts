interface IPodcastsArgsType {
  limit?: number;
  genre?: number;
}

interface PodcastsCollection {
  category: {
    attributes: {
      'im:id': string;
      term: string;
      scheme: string;
      label: string;
    };
  };
  id: {
    attributes: { 'im:id': string };
    label: string;
  };
  'im:artist': {
    attributes: { href: string };
    label: string;
  };
  'im:contentType': {
    attributes: {
      term: string;
      label: string;
    };
    label: string;
  };
  'im:image': Array<{
    label: string;
    attributes: { height: string };
  }>;
  'im:name': {
    label: string;
  };
  'im:price': {
    attributes: {
      amount: string;
      currency: string;
    };
    label: string;
  };
  'im:releaseDate': {
    attributes: { label: string };
    label: string;
  };
  link: {
    attributes: {
      rel: string;
      type: string;
      href: string;
    };
  };
  rights: {
    label: string;
  };
  summary: {
    label: string;
  };
  title: {
    label: string;
  };
}

interface PodcastsResponse {
  feed: {
    author: any;
    entry: PodcastsCollection[];
    icon: { label: string };
    id: { label: string };
    link: any[];
    rights: { label: string };
    title: { label: string };
    updated: { label: string };
  };
}

export type { IPodcastsArgsType, PodcastsResponse, PodcastsCollection };
