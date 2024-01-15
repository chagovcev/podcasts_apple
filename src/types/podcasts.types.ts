interface IPodcastsArgsType {
  limit?: number;
  genre?: number;
}

interface IPodcastDetailArgsType {
  id: string;
}

interface PodcastsCollection {
  id: string;
  title: string;
  imageSrc: { imageMin: string; imageMax: string };
  imageName: string;
  description: string;
  artistName: string;
  // category: {
  //   attributes: {
  //     'im:id': string;
  //     term: string;
  //     scheme: string;
  //     label: string;
  //   };
  // };
  // 'im:artist': {
  //   attributes: { href: string };
  //   label: string;
  // };
  // 'im:contentType': {
  //   attributes: {
  //     term: string;
  //     label: string;
  //   };
  //   label: string;
  // };
  // 'im:image': Array<{
  //   label: string;
  //   attributes: { height: string };
  // }>;
  // 'im:name': {
  //   label: string;
  // };
  // 'im:price': {
  //   attributes: {
  //     amount: string;
  //     currency: string;
  //   };
  //   label: string;
  // };
  // 'im:releaseDate': {
  //   attributes: { label: string };
  //   label: string;
  // };
  // link: {
  //   attributes: {
  //     rel: string;
  //     type: string;
  //     href: string;
  //   };
  // };
  // rights: {
  //   label: string;
  // };
  // summary: {
  //   label: string;
  // };
  // title: {
  //   label: string;
  // };
}

interface Episode {
  id: number;
  name: string;
  date: string;
  duration: string;
  description: string | undefined;
  trackViewUrl: string;
  episodeUrl: string;
  episodeType: string;
}

interface PodcastDetail {
  id: string;
  imageSrc: { imageMin: string; imageMax: string };
  artistName: string;
  collectionName: string;
  episodes: Episode[];
}

interface PodcastsResponse {
  feed: {
    author: any;
    entry: Array<{
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
    }>;
    icon: { label: string };
    id: { label: string };
    link: any[];
    rights: { label: string };
    title: { label: string };
    updated: { label: string };
  };
}

interface PodcastResponse {
  results: Array<{
    kind: 'podcast' | 'podcast-episode';
    artistName: string;
    artworkUrl100: string;
    artworkUrl600: string;
    collectionName: string;
    collectionId: number;
    trackCount: number;
    trackId: number;
    trackName: string;
    trackViewUrl: string;
    releaseDate: string;
    trackTimeMillis: number;
    description: string | undefined;
    episodeUrl: string;
    episodeContentType: string;
    episodeFileExtension: string;
  }>;
}

export type {
  IPodcastsArgsType,
  IPodcastDetailArgsType,
  PodcastsResponse,
  PodcastResponse,
  PodcastsCollection,
  PodcastDetail,
  Episode,
};
