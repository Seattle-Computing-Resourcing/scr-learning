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
            <div className="container">
                <Card name="Test" 
                    date="Jan 1 2025" 
                    description ="yayayayayaay" 
                    link="https://github.com" 
                />
            </div>
        </template>
    </VPTeamPageSection>
    <!-- <VPTeamPageSection>
        <template #title>2026</template>
        <template #members>
            <div className="container">
            </div>
        </template>
    </VPTeamPageSection> -->
</VPTeamPage>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;         
        justify-content: center;  
        gap: 10px;           
        padding: 10px;     
        width: 100%;    
        box-sizing: border-box; 
    }   
</style>