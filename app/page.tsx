import Title from './componants/title';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Title size="large" color="blue">
        Hello world
      </Title>
    </main>
  );
}
