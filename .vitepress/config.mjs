import { defineConfig, loadEnv } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'
import dotenv from 'dotenv'

dotenv.config()

// console.log(process.env.VITE_GOOGLE_TAG);

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    // Favicon 32x32
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png' }],
    //Google Analytics
    [
      'script',
      { async: '', src: `https://www.googletagmanager.com/gtag/js?id=G-${process.env.VITE_GOOGLE_TAG}$` }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-${process.env.VITE_GOOGLE_TAG}$');`
    ],
    
    // Google AdSense
    // [
    //   "script",
    //   {
    //     "data-ad-client": "YOURCLIENTID",
    //     async: '',
    //     src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
    //   },
    // ],
  ],
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/'},
          { 
            text: 'Contests',
            link: '/contests',
            activeMatch: '/contests/'
          },
          { 
            text: 'Learning',
            items: [
              {
                text: 'C++',
                link: '/learning/cpp/gettingstarted'
              },
              {
                text: 'Python',
                link: '/learning/py/gettingstarted'
              },
              {
                text: 'Java',
                link: '/learning/java/gettingstarted'
              },
              {
                text: 'Exercises',
                link: '/exercises/cpp/print'
              },
            ],
            activeMatch: '^/(learning|exercises)/'
          },
          { 
            text: 'About Us',
            items: [
              {
                text: 'Information',
                link: '/about/info'
              },
              {
                text: 'Team',
                link: '/about/team'
              },
              {
                text: 'Contact Us',
                link: '/about/contact'
              },
            ],
          },
        ],
        sidebar: {
          '/learning/cpp/': [
            {
              text: 'Introduction to CS',
              collapsed: false,
              items: [
                { text: 'Getting Started', link: '/learning/cpp/gettingstarted' },
                { text: 'Headers', link: '/learning/cpp/headers' },
                { text: 'Datatypes', link: '/learning/cpp/datatypes' },
                { text: 'Input and Output', link: '/learning/cpp/inputoutput' },
                { text: 'Arithmetic Operations', link: '/learning/cpp/arithmeticoperations' },
                { text: 'Conditions', link: '/learning/cpp/conditions' },
              ]
            },
            {
              text: 'Object Oriented Programming',
              collapsed: false,
              items: [
                { text: 'OOP', link: '/learning/cpp/oop' },
              ]
            },
            {
              text: 'Arrays, Vectors, and Strings',
              collapsed: false,
              items: [
                { text: 'Arrays', link: '/learning/cpp/arrays' },
                { text: 'Vectors', link: '/learning/cpp/vectors' },
                { text: 'Strings', link: '/learning/cpp/strings' },
              ]
            },
            {
              text: 'Loops',
              collapsed: false,
              items: [
                { text: 'Loops', link: '/learning/cpp/loops' },
              ]
            },
            {
              text: 'Sorting',
              collapsed: false,
              items: [
                { text: 'Sorting', link: '/learning/cpp/sorting' },
              ]
            },
            {
              text: 'Maps and Sets',
              collapsed: false,
              items: [
                { text: 'Maps and Sets', link: '/learning/cpp/mapsandsets' },
              ]
            },
            {
              text: 'Intermediate D.S.',
              collapsed: false,
              items: [
                { text: 'Intermediate D.S.', link: '/learning/cpp/intermediateds' },
              ]
            },
            {
              text: 'Pointers',
              collapsed: false,
              items: [
                { text: 'Pointers', link: '/learning/cpp/pointers' },
              ]
            },
            {
              text: 'Graphs',
              collapsed: false,
              items: [
                { text: 'Graphs', link: '/learning/cpp/graphs' },
              ]
            },
          ],
          '/learning/py/': [
            {
              text: 'Introduction to CS',
              collapsed: false,
              items: [
                { text: 'Getting Started', link: '/learning/py/gettingstarted' },
              ]
            },
          ],
          '/learning/java/': [
            {
              text: 'Introduction to CS',
              collapsed: false,
              items: [
                { text: 'Getting Started', link: '/learning/java/gettingstarted' },
              ]
            },
          ],
          '/exercises/': [
            {
              text: 'C++',
              collapsed: false,
              items: [
                { text: 'C++ Exercises', link: '/exercises/cpp/cpp' },
                { text: 'Print', link: '/exercises/cpp/print' },
              ]
            },
            {
              text: 'Python',
              collapsed: false,
              items: [
                { text: 'Python Exercises', link: '/exercises/py/python' },
                { text: 'Print', link: '/exercises/py/print' },
              ]
            },
            {
              text: 'Java',
              collapsed: false,
              items: [
                { text: 'Java Exercises', link: '/exercises/java/java' },
                { text: 'Print', link: '/exercises/java/print' },
              ]
            },
          ],
        },
        // logo: '/favicon-32x32.png',
        editLink: {
          pattern: 'https://github.com/Seattle-Computing-Resourcing/scr-learning/edit/main/:path',
          text: 'Contribute to this page on GitHub'
        },
        footer: {
          message: 'Due to our long name, Seattle Computing Resourcing is abbreviated as SCR throughout the site.',
          copyright: 'Copyright © 2024-present Seattle Computing Resourcing',
        },
        lastUpdated: {
          text: 'Last updated',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'short'
          }
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/Seattle-Computing-Resourcing' },
          // {
          //   icon: {
          //     svg: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/></svg>'
          //   },
          //   link: 'https://seattlecr.vercel.app',
          //   ariaLabel: 'main site',
          // },
        ],
    
        search: {
          provider: 'local',
        },
      },
    },
    
    // fr: {
    //   label: 'French',
    //   lang: 'fr',
    //   link: '/fr',
    // }
  },
  title: "SCR",
  description: "Resources for learning computer science along with contests.",
  cleanUrls: true,
  lastUpdated: true,
})