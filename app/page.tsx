import Header from '@/components/header/header';
import Logo from '@/components/logo/logo';
import { ModeToggle } from '@/components/mode-toggle';

const Home = () => {
  return (
    <main className="">
      <Header>
        <Logo
          color={{ primary: '', secondary: '' }}
          height="3rem"
          width="3rem"
        />
        <ModeToggle />
      </Header>
      hello
    </main>
  );
};

export default Home;
