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
        name: 'Test 1',
        title: 'Test 2',
        links: [{icon: 'github', link: 'https://github.com/Seattle-Computing-Resourcing' }],
        // desc: `
        // `,
    },
    {
        avatar: '/favicon.png',
        name: 'Test 1',
        title: 'Test 2',
        links: [{icon: 'github', link: 'https://github.com/Seattle-Computing-Resourcing' }],
        // desc: `
        // `,
    },
]

const contentwriters = [
    {
      avatar: '/favicon.png',
      name: 'Test 1',
      title: 'Test 2',
      links: [{icon: 'github', link: 'https://github.com/Seattle-Computing-Resourcing' }],
      // desc: `
      // `,
    },
    {
      avatar: '/favicon.png',
      name: 'Test 1',
      title: 'Test 2',
      links: [{icon: 'github', link: 'https://github.com/Seattle-Computing-Resourcing' }],
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
          <a href="https://github.com/Streakwind">Streakwind</a>
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