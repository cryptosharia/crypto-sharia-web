<script lang="ts">
  let {
    size = 'medium',
    extend = false,
    text,
    href,
    ...props
  }: {
    size?: 'small' | 'medium' | 'large';
    extend?: boolean;
    text: string;
    href: string;
    class?: string;
  } = $props();
</script>

<a
  {href}
  class={`rounded-xl border-white bg-orange-600 text-center text-white transition-colors duration-300 ease-in-out hover:border-orange-600 hover:bg-white hover:text-orange-600 ${props.class}`}
  class:w-fit={!extend}
  class:text-[1.75rem]={size === 'large'}
  class:text-2xl={size === 'medium'}
  class:text-xl={size === 'small'}
  class:px-3={true}
  class:py-2={true}
  class:border-3={size === 'large'}
  class:border-2={size === 'medium' || size === 'small'}
  class:font-extrabold={size === 'large'}
  class:font-bold={size === 'medium' || size === 'small'}>{text}</a
>
