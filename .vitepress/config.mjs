import { defineConfig } from 'vitepress'
import mathjax3 from 'markdown-it-mathjax3'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  locales: {
    root: {
      label: 'C++',
      lang: 'cpp',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Learning', link: '/learning/gettingstarted' },
          { text: 'Exercises', link: '/exercises/markdown-examples' },
        ],
        sidebar: {
          '/learning/': [
            {
              text: 'Introduction to CS',
              collapsed: false,
              items: [
                { text: 'Getting Started', link: '/learning/gettingstarted' },
                { text: 'Headers', link: '/learning/headers' },
                { text: 'Namespaces', link: '/learning/namespaces' },
                { text: 'Primitive Datatypes', link: '/learning/primitivedt' },
                { text: 'Input and Output', link: '/learning/inputoutput' },
                { text: 'Arithmetic Operations', link: '/learning/arithmeticoperations' },
                { text: 'Conditions', link: '/learning/conditions' },
              ]
            },
            {
              text: 'Object Oriented Programming',
              collapsed: false,
              items: [
                { text: 'OOP', link: '/learning/oop' },
              ]
            },
            {
              text: 'Arrays, Vectors, and Strings',
              collapsed: false,
              items: [
                { text: 'Arrays', link: '/learning/arrays' },
                { text: 'Vectors', link: '/learning/vectors' },
                { text: 'Strings', link: '/learning/strings' },
              ]
            },
            {
              text: 'Loops',
              collapsed: false,
              items: [
                { text: 'Loops', link: '/learning/loops' },
              ]
            },
            {
              text: 'Sorting',
              collapsed: false,
              items: [
                { text: 'Sorting', link: '/learning/sorting' },
              ]
            },
            {
              text: 'Maps and Sets',
              collapsed: false,
              items: [
                { text: 'Maps and Sets', link: '/learning/mapsandsets' },
              ]
            },
            {
              text: 'Intermediate D.S.',
              collapsed: false,
              items: [
                { text: 'Intermediate D.S.', link: '/learning/intermediateds' },
              ]
            },
            {
              text: 'Pointers',
              collapsed: false,
              items: [
                { text: 'API examples', link: '/learning/pointers' },
              ]
            },
            {
              text: 'Graphs',
              collapsed: false,
              items: [
                { text: 'API examples', link: '/learning/graphs' },
              ]
            },
          ],
          '/exercises/': [
            {
              text: 'Exercises',
              collapsed: false,
              items: [
                { text: 'Markdown examples', link: '/exercises/markdown-examples' },
              ]
            },
          ],
        }
      }
    },
    py: {
      label: 'Python',
      lang: 'py',
      link: '/py',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/py/' },
          { text: 'Learning', link: '/py/learning/api-examples' },
          { text: 'Exercises', link: '/py/exercises/markdown-examples' },
        ],
        sidebar: {
          '/py/learning/': [
            {
              text: 'Learning',
              collapsed: false,
              items: [
                { text: 'API examples', link: '/py/learning/api-examples' },
              ]
            },
          ],
          '/py/exercises/': [
            {
              text: 'Exercises',
              collapsed: false,
              items: [
                { text: 'Markdown examples', link: '/py/exercises/markdown-examples' },
              ]
            },
          ],
        }
      }
    },
    java: {
      label: 'Java',
      lang: 'java',
      link: '/java',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/java/' },
          { text: 'Learning', link: '/java/learning/api-examples' },
          { text: 'Exercises', link: '/java/exercises/markdown-examples' },
        ],
        sidebar: {
          '/java/learning/': [
            {
              text: 'Learning',
              collapsed: false,
              items: [
                { text: 'API examples', link: '/java/learning/api-examples' },
              ]
            },
          ],
          '/java/exercises/': [
            {
              text: 'Exercises',
              collapsed: false,
              items: [
                { text: 'Markdown examples', link: '/java/exercises/markdown-examples' },
              ]
            },
          ],
        }
      }
    },
  },
  title: "SCR",
  description: "Learning",
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Seattle-Computing-Resourcing' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/></svg>'
        },
        link: 'https://seattlecr.vercel.app',
        ariaLabel: 'main site',
      },
    ],

    search: {
      provider: 'local',
    },
  }
})
