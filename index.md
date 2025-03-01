---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
search: false

hero:
  name: "Seattle Computing Resourcing"
  text: ""
  tagline: "Resources for learning computer science, along with occasional contests"
  actions:
    - theme: brand
      text: Start Learning
      link: /learning/cpp/gettingstarted
    - theme: brand
      text: Join a Contest
      link: /contests
    - theme: alt
      text: Contact Us
      link: /contact
  image:
    light: /lightmode.png
    dark: /darkmode.png

features:
  - title: Support for 3 Languages
    details: Resources and exercises in C++, Python, and Java!
  - title: Exercises that Complement Learning
    details: Exercises are provided, each with their own solution.
  - title: Many Applications
    details: C++, Python, and Java can be used in USACO, Leetcode, AP CS, etc.
  - title: Competitions
    details: Show off your skills in competitions hosted by Seattle Computing Resourcing.
---
<script setup>
import {
  VPTeamMembers,
} from 'vitepress/theme'

const boardMembers = [
    {
        avatar: '/favicon.png',
        name: 'Timothy Wu',
        title: 'Founder',
        links: [{icon: 'github', link: 'https://github.com/HappyTeem' }],
    },
    {
        avatar: '/favicon.png',
        name: 'Ruben Jing',
        title: 'Founder',
        links: [{icon: 'github', link: 'https://github.com/Streakwind' }],
    },
]

const contentwriters = [
    {
      avatar: '/favicon.png',
      name: 'Alan Verbitski',
      title: 'Python Content Writer',
      links: [{icon: 'github', link: 'https://github.com/veternosit' }],
    },
    {
      avatar: '/favicon.png',
      name: 'Benjamin Sun',
      title: 'C++ Content Writer',
      links: [{icon: 'github', link: 'https://github.com/walterboro' }],
    },
]
</script>

<h2/>

<div class="teamHeading">
  <h1>About Us</h1>
</div>

<div class="index-content">
  Seattle Computing Resourcing (SCR) is an organization based in Seattle, Washington. It was founded in December of 2024. We provide resources for learning three different languages: C++, Python, and Java. We also occasionally host contests and hackathons.
</div>

<div class="index-content">
  This is an open-source project, and we are open to contributors on GitHub. On the bottom of our learning pages, there is some blue text that says "Contribute to this page on GitHub." Feel free to click it and submit a pull request with your edits. More information about how to do that is found in the README.md file of our GitHub repository.

  You can also join our team! Just send us an email through the contact form on our website, and we'll ask for more details later.
</div>

<div class="teamHeading">
  <h1>Our Team</h1>
</div>

<div class="index-content">
  Our team consists of two board members and two content writers. As this website is open-source, all contributors on GitHub are listed below as well.
</div>

<div class="teamHeading">
  <h2>Board Members</h2>
</div>

<VPTeamMembers size="small" :members="boardMembers" />

<div class="teamHeading">
  <h2>Content Writers</h2>
</div>

<VPTeamMembers size="small" :members="contentwriters" />

<div class="teamHeading">
  <h2>GitHub Contributors</h2>
</div>

<div class="gitcontri">
  <ul>
    <a href="https://github.com/Seattle-Computing-Resourcing/scr-learning">none :(</a>
  </ul>
</div>

<style scoped>
.teamHeading {
  padding: 20px;
  text-align: center;
}

.gitcontri {
  text-align: center;
}

ul a {
  color: inherit;
  text-decoration: none;
}

ul a:hover {
  color: green;
}

.dark ul a:hover {
  color: lightgreen;
}

.index-content {
  text-align: center;
  font: inherit;
  font-size: 18px;
}
</style>