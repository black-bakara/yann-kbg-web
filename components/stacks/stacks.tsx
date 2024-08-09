import React from 'react';

import { StacksProps } from './type';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../ui/hover-card';
import { Button } from '../ui/button';

const stacks = [
  {
    name: 'React',
    description: 'A JavaScript library for building user interfaces.',
    url: 'https://reactjs.org/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'Next.js',
    description:
      'A React-based framework for building server-side rendered and statically generated web applications.',
    url: 'https://nextjs.org/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
  },
  {
    name: 'React Native',
    description: 'A framework for building native apps using React.',
    url: 'https://reactnative.dev/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'Node.js',
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    url: 'https://nodejs.org/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
  },
  {
    name: 'Express.js',
    description: 'A minimal and flexible Node.js web application framework.',
    url: 'https://expressjs.com/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png',
  },
  {
    name: 'AdonisJS',
    description: 'A fully-featured web framework for Node.js.',
    url: 'https://adonisjs.com/',
    logo: 'https://cdn.worldvectorlogo.com/logos/adonisjs.svg',
  },
  {
    name: 'MySQL',
    description: 'An open-source relational database management system.',
    url: 'https://www.mysql.com/',
    logo: 'https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg',
  },
  {
    name: 'PostgreSQL',
    description: 'A powerful, open-source object-relational database system.',
    url: 'https://www.postgresql.org/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
  },
  {
    name: 'MongoDB',
    description:
      'A document-oriented NoSQL database used for high volume data storage.',
    url: 'https://www.mongodb.com/',
    logo: 'https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg',
  },
  {
    name: 'Docker',
    description:
      'A platform for developing, shipping, and running applications in containers.',
    url: 'https://www.docker.com/',
    logo: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png',
  },
  {
    name: 'Kubernetes',
    description:
      'An open-source system for automating deployment, scaling, and management of containerized applications.',
    url: 'https://kubernetes.io/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg',
  },
  {
    name: 'GitHub Actions',
    description:
      'A CI/CD service that allows you to automate tasks within your software development life cycle.',
    url: 'https://github.com/features/actions',
    logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  },
  {
    name: 'WordPress',
    description:
      'A free and open-source content management system (CMS) based on PHP and MySQL.',
    url: 'https://wordpress.org/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg',
  },
  {
    name: 'Figma',
    description: 'A collaborative interface design tool.',
    url: 'https://www.figma.com/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
  },
  {
    name: 'Git',
    description:
      'A free and open-source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
    url: 'https://git-scm.com/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
  },
  {
    name: 'GitHub',
    description:
      'A code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.',
    url: 'https://github.com/',
    logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  },
];

const Stacks = ({ className }: StacksProps) => {
  return (
    <div className={className}>
      {stacks.map((stack) => (
        <HoverCard key={stack.name}>
          <HoverCardTrigger>
            <Button variant="link" className="px-0">
              .{stack.name}
            </Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src={stack.logo} />
                <AvatarFallback>CM</AvatarFallback>
              </Avatar>
              <div className="">
                <h4 className="text-sm font-semibold">{stack.name}</h4>
                <p className="text-sm">
                  {stack.description}{' '}
                  <a
                    href={stack.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-main"
                  >
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
};

export default Stacks;
