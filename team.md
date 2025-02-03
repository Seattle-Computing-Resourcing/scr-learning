---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const boardMembers = [
    {
        avatar: '/favicon.png',
        name: 'Timothy Wu',
        title: 'Founder',
        links: [{icon: 'github', link: 'https://github.com/HappyTeem' }],
        // desc: `
        // `,
    },
    {
        avatar: '/favicon.png',
        name: 'Ruben Jing',
        title: 'Founder',
        links: [{icon: 'github', link: 'https://github.com/Streakwind' }],
        // desc: `
        // `,
    },
]

const contentwriters = [
    {
      avatar: '/favicon.png',
      name: 'Alan Verbitski',
      title: 'Python Content Writer',
      links: [{icon: 'github', link: 'https://github.com/veternosit' }],
      // desc: `
      // `,
    },
    {
      avatar: '/favicon.png',
      name: 'Benjamin Sun',
      title: 'C++ Content Writer',
      links: [{icon: 'github', link: 'https://github.com/walterboro' }],
      // desc: `
      // `,
    },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Our Team</template>
  </VPTeamPageTitle>
    <VPTeamPageSection>
    <template #title>Board</template>
    <template #members>
        <VPTeamMembers size="medium " :members="boardMembers" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>Content Writers</template>
    <template #members>
      <VPTeamMembers size="small" :members="contentwriters" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>GitHub Contributors</template>
    <template #members>
      <div className="gitcontri">
        <ul>
          <a href="https://github.com"></a>
        </ul>
      </div>
    </template>
  </VPTeamPageSection>
</VPTeamPage>

<style>
  .gitcontri {
    text-align: center;
  }

  ul a:hover {
    color: green;
  }

  .dark ul a:hover {
    color: lightgreen;
  }
</style>