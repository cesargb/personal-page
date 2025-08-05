<template>
    <div :class="props.class">
        <a :href="`https://www.github.com/cesargb/${props.repository}`" target="_blank">
            <component :is="props.tagTitle" class="title">
                cesargb/{{ props.repository }} <IconLinkRemote />
            </component>
        </a>

        <div class="tags">
            <em v-for="tag in props.tags" :key="tag">
                {{ tag }}
            </em>
        </div>

        <div class="description" v-html="description" />

        <div class="badges">
            <a v-for="badge in props.badges" :key="badge" :href="badge.url" target="_blank">
                <img :src="badge.image" :alt="badge.alt" />
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {unified} from 'unified'
    import remarkParse from 'remark-parse'
    import remarkGfm from 'remark-gfm'
    import remarkRehype from 'remark-rehype'
    import rehypeStringify from 'rehype-stringify'

    const props = defineProps({
        tagTitle: { type: String, default: 'div' },
        repository: { type: String, required: true },
        tags: { type: Array as PropType<Array<string>>, default: () => [] },
        badges: { type: Array as PropType<Array<any>>, default: () => [] },
        description: { type: String, default: '' },
        class: { type: String, default: '' },
    })

    const description = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(props.description)

</script>

<style>

</style>