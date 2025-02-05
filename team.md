---
layout: page
---
<script setup>

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
