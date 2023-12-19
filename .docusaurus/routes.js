
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','315'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/Coding-Story',
    component: ComponentCreator('/blog/Coding-Story','c54'),
    exact: true
  },
  {
    path: '/blog/Coding-Tips-For-You',
    component: ComponentCreator('/blog/Coding-Tips-For-You','efb'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/coding',
    component: ComponentCreator('/blog/tags/coding','8e6'),
    exact: true
  },
  {
    path: '/blog/tags/story',
    component: ComponentCreator('/blog/tags/story','a58'),
    exact: true
  },
  {
    path: '/blog/tags/tips',
    component: ComponentCreator('/blog/tags/tips','a8f'),
    exact: true
  },
  {
    path: '/blog/top-programming-languages',
    component: ComponentCreator('/blog/top-programming-languages','352'),
    exact: true
  },
  {
    path: '/docs/tags',
    component: ComponentCreator('/docs/tags','0cc'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','00e'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/Introduction-to-Coding',
        component: ComponentCreator('/docs/tutorial-basics/Introduction-to-Coding','34d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/Making-Choices-with-Conditionals',
        component: ComponentCreator('/docs/tutorial-basics/Making-Choices-with-Conditionals','8ea'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/Patterns-and-Loops',
        component: ComponentCreator('/docs/tutorial-basics/Patterns-and-Loops','bd7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/Sequences-and-Instructions',
        component: ComponentCreator('/docs/tutorial-basics/Sequences-and-Instructions','4f2'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/Variables-and-Values',
        component: ComponentCreator('/docs/tutorial-basics/Variables-and-Values','410'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/Adding-Style-with-CSS',
        component: ComponentCreator('/docs/tutorial-extras/Adding-Style-with-CSS','e17'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/Basic-HTML',
        component: ComponentCreator('/docs/tutorial-extras/Basic-HTML','411'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/Creating-Layouts',
        component: ComponentCreator('/docs/tutorial-extras/Creating-Layouts','cce'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/Interactive-Elements',
        component: ComponentCreator('/docs/tutorial-extras/Interactive-Elements','c76'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/Introduction-to-Javascript',
        component: ComponentCreator('/docs/tutorial-extras/Introduction-to-Javascript','bc5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/Introduction-to-Web-Hosting',
        component: ComponentCreator('/docs/tutorial-extras/Introduction-to-Web-Hosting','a44'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/Introduction-to-Websites',
        component: ComponentCreator('/docs/tutorial-extras/Introduction-to-Websites','ee1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/Online-Safety-and-Ethics',
        component: ComponentCreator('/docs/tutorial-extras/Online-Safety-and-Ethics','6d6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/Responsive-Design',
        component: ComponentCreator('/docs/tutorial-extras/Responsive-Design','482'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
