import { Feed } from '@/components/cards/feed';
import type { Feed as FeedType } from '@/components/cards/feed/type';

const feeds: FeedType[] = [
  {
    name: 'Chris',
    avatarLink: '/assets/images/profil.jpg',
    status: "Feelin' myself",
    statusIcon: '🌴',
    title: 'Hello World',
    content:
      "When I pass on knowledge or Coding, I also like to include the passion😍🔥.Because without it, you won't make anything beautiful.",
    isPinned: true,
    date: '2023/12/13',
    image: '/assets/images/kadea_class.jpg',
  },
];

const Home = () => {
  return (
    <div id="feed" className="">
      {feeds.map((feed) => (
        <Feed key={feed.title} feed={feed} />
      ))}
    </div>
  );
};

export default Home;
