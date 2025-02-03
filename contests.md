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
</script>

<VPTeamPage>
    <VPTeamPageTitle>
        <template #title>Contests</template>
    </VPTeamPageTitle>
    <VPTeamPageSection>
        <template #title>2025</template>
        <template #members>
            <div className="contest-card-container">
                <Card name="Contest 1" 
                    date="TBD" 
                    description ="Our first contest. More details <a href='/contests/contest1' class='link'>here</a>." 
                />
            </div>
        </template>
    </VPTeamPageSection>
</VPTeamPage>

<style>
    .contest-card-container {
        display: flex;
        flex-wrap: wrap;         
        justify-content: center;  
        gap: 10px;           
        padding: 10px;     
        width: 100%;    
        box-sizing: border-box; 
    }   
</style>