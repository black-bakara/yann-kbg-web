import Header from '@/components/header/header';
import { ModeToggle } from '@/components/mode-toggle';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header>
        <ModeToggle />
      </Header>
      hello
    </main>
  );
};

export default Home;
