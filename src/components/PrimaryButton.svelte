<script lang="ts">
  let {
    size = 'medium',
    extend = false,
    text,
    href,
    aos = true,
    openInNewTab = false,
    ...props
  }: {
    size?: 'small' | 'medium' | 'large';
    extend?: boolean;
    text: string;
    href: string;
    aos?: boolean;
    openInNewTab?: boolean;
    class?: string;
  } = $props();
</script>

<div
  data-aos={aos ? 'zoom-in' : null}
  data-aos-duration={aos ? '1000' : null}
  class={extend ? 'flex flex-col items-stretch' : ''}
>
  <a
    target={openInNewTab ? '_blank' : null}
    rel={openInNewTab ? 'noopener noreferrer' : null}
    {href}
    class={`rounded-xl border-2 border-white bg-orange-600 px-3 py-2 text-center font-bold text-white transition-colors duration-300 ease-in-out md:hover:border-orange-600 md:hover:bg-white md:hover:text-orange-600 ${props.class} max-md:active:border-orange-600 max-md:active:bg-white max-md:active:text-orange-600 ${props.class}`}
    class:text-2xl={size === 'large'}
    class:text-xl={size === 'medium'}
    class:text-lg={size === 'small'}>{text}</a
  >
</div>
