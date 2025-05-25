<template>
    <component :is="type">
        {{ title }}
    </component>
    
</template>

<script lang="ts" setup>
type Props = {
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
    title: string
}

defineProps<Props>()
</script>