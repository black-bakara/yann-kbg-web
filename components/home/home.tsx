import Image from 'next/image';
import { Link } from '@/components/ui/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import LinkIcon from '@/components/icon-link/link-icon';

const data = [
  {
    id: 1,
    title: ' 🔄 Gestion proactive des ressources',
    content: `J'anticipe les besoins et optimise l'utilisation des
                ressources pour garantir des résultats optimaux.`,
  },
  {
    id: 2,
    title: '💪 Leadership inspirant',
    content: `J'aime motiver et encadrer mes équipes, créant ainsi un
                environnement de travail collaboratif et performant.`,
  },
  {
    id: 3,
    title: '🛠️ Résolution de problèmes',
    content: `Avec une approche orientée vers les résultats, je m’adapte
                rapidement aux défis et propose des solutions efficaces pour
                maintenir les standards de qualité.`,
  },
  {
    id: 4,
    title: ' 📈 Amélioration continue',
    content: `Je suis constamment à la recherche de nouvelles façons
                d’optimiser les processus et d’améliorer les performances.`,
  },
];

const partners = [
  {
    id: 1,
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  },
  {
    id: 2,
    name: 'Facebook',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
  },
  {
    id: 3,
    name: 'Enabel',
    logo: '/assets/enabel-logo-white.svg',
  },
];

export const Home = () => {
  return (
    <div id="feed" className="">
      <div className="flex h-full flex-col justify-center">
        <div className="">
          <p>Salut 👋, moi, c’est </p>
          <h1 className="mt-4 flex items-center text-4xl font-bold">
            Yannick Kabangu
            <LinkIcon
              href="https://linkedin.com"
              iconClassName="icon-[bi--linkedin] text-2xl"
              className="mx-5"
            />
          </h1>

          <h3 className="text-md font-semibold">
            Responsable Opérationnel | Leader en Gestion de Ressources et de
            Performance
          </h3>
          <p className="mt-6">
            Depuis plus de trois ans, j&rsquo;occupe le poste de Responsable
            Opérationnel chez{' '}
            <Link href="https://kadea.co" target="blank">
              Kadea
            </Link>
            , où j’ai acquis une solide expérience dans la gestion des équipes
            et des ressources. Mon rôle me permet de superviser l’ensemble des
            opérations, en veillant à leur bon déroulement tout en maintenant un
            haut niveau de performance.
          </p>
        </div>
        <div className="my-10 grid grid-cols-3 gap-4">
          <div className="row-span-1">
            <Image
              src="/assets/images/talking.jpg"
              width={500}
              height={500}
              alt="image"
              className="h-fit w-full rounded-xl object-cover"
            />
          </div>
          <div className="row-span-2">
            <Image
              src="/assets/images/principal.jpg"
              width={500}
              height={500}
              alt="image"
              className="h-fit w-full rounded-xl object-cover"
            />
          </div>
          <div className="row-span-1">
            <Image
              src="/assets/images/office.jpg"
              width={500}
              height={500}
              alt="image"
              className="h-fit w-full rounded-xl object-cover"
            />
          </div>
          <div className="row-span-2">
            <Image
              src="/assets/images/gym.jpg"
              width={500}
              height={500}
              alt="image"
              className="h-fit w-full rounded-xl object-cover"
            />
          </div>{' '}
          <div className="row-span-2">
            <Image
              src="/assets/images/todo.jpg"
              width={500}
              height={500}
              alt="image"
              className="h-fit w-full rounded-xl object-cover"
            />
          </div>
          <div className="row-span-1">
            <Image
              src="/assets/images/meet.jpg"
              width={500}
              height={500}
              alt="image"
              className="h-fit w-full rounded-xl object-cover"
            />
          </div>
        </div>
        <section>
          <p>
            A fin d’être optimal dans mon travail, voici ce qui me caractérise :
          </p>
          <div>
            <Accordion type="single" collapsible>
              {data.map((item) => (
                <AccordionItem
                  value={item.id.toString()}
                  key={item.id}
                  className="my-4 rounded-lg bg-gray-900 px-4 py-1"
                >
                  <AccordionTrigger className="text-left text-xl font-bold hover:no-underline">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <section className="mt-10">
          <p>Et ils me font confiance</p>
          <div className="my-4 flex gap-x-4">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="h-28 w-56 rounded-xl bg-gray-900 object-cover p-4"
              >
                <Image
                  src={partner.logo}
                  width={16}
                  height={16}
                  className="h-full w-full"
                  alt="logo partner"
                />
              </div>
            ))}
          </div>{' '}
          <p>
            Je suis convaincu que la clé de la réussite réside dans la
            collaboration et le partage des connaissances. C’est pourquoi je
            suis toujours à la recherche de nouvelles opportunités pour
            échanger, apprendre et grandir. On en{' '}
            <Link href="/contact">discute ?</Link>
          </p>
        </section>
        <section className="mt-10">
          <p>Gardez le contact</p>
          <div className="my-4 flex gap-x-4">
            <LinkIcon
              href="https://www.linkedin.com/in/yannick-kabangu/"
              iconClassName="icon-[bi--linkedin] text-2xl"
            />
            <LinkIcon
              href="https://x.com"
              iconClassName="icon-[bi--twitter] text-2xl"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
