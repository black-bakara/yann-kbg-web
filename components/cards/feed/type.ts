export type Feed = {
  avatarLink: string;
  name: string;
  status: string;
  statusIcon: string;
  title: string;
  content: string;
  link?: string;
  isPinned: boolean;
  date: string;
  image?: string;
  video?: string;
  posterVideo?: string;
};
export type FeedProps = {
  feed: Feed;
};
