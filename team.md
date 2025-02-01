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
        avatar: '/darkmode.png',
        name: 'Test 1',
        title: 'Test 2'
    },
]

const partners = [
    {
        name: 'Test 1', 
        title: 'Test 2'
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
        <VPTeamMembers size="medium" :members="boardMembers" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection>
    <template #title>Contributors</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>