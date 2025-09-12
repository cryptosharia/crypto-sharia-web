<!-- Accordion source code: https://www.material-tailwind.com/docs/html/accordion -->
<script lang="ts">
  import ArrowDown from '$lib/assets/icons/ArrowDown.svelte';
  import ArrowUp from '$lib/assets/icons/ArrowUp.svelte';
  import Divider from '../components/Divider.svelte';
  import Title from '../components/Title.svelte';
  // console.log(arrowUp);

  function toggleAccordion(index: number) {
    const content = document.getElementById(`faq-content-${index}`);
    const arrowUp = document.getElementById(`faq-arrow-up-${index}`);
    const arrowDown = document.getElementById(`faq-arrow-down-${index}`);

    if (content && arrowUp && arrowDown) {
      // Toggle the content's max-height for smooth opening and closing
      if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0';
        arrowUp.classList.remove('hidden');
        arrowDown.classList.add('hidden');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        arrowUp.classList.add('hidden');
        arrowDown.classList.remove('hidden');
      }
    }
  }

  const faqs = [
    {
      question: 'Klo join Discord Premium bakal bisa beli McLaren ga bang?',
      answer:
        'Ga tau.. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
      question:
        'Lorem Ipsum Dolor Sit Amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
      question: 'Lorem Ipsum Dolor Sit Amet consectetur adipiscing elit?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
      question:
        'Lorem Ipsum Dolor Sit Amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    },
    {
      question: 'Lorem Ipsum Dolor Sit Amet consectetur adipiscing elit?',
      answer:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    }
  ];
</script>

<section class="w-full max-w-[90rem]">
  <Title class="text-center">FAQ</Title>
  <Divider />
  <div class="mx-auto mt-5 flex max-w-[50rem] flex-col gap-y-3">
    {#each faqs as faq, i}
      <div class="rounded-xl border-2 border-slate-200 px-5 pt-4 shadow-sm">
        <button
          onclick={() => toggleAccordion(i + 1)}
          class="flex w-full flex-row items-start justify-between gap-x-6 pb-4"
        >
          <h6 class="text-left text-xl font-medium text-slate-800">{faq.question}</h6>
          <span id={`faq-arrow-up-${i + 1}`} class="text-orange-600">
            <ArrowUp />
          </span>
          <span id={`faq-arrow-down-${i + 1}`} class="hidden text-orange-600">
            <ArrowDown />
          </span>
        </button>
        <div
          id={`faq-content-${i + 1}`}
          class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <p class="pb-5 text-justify text-base text-slate-700">
            {faq.answer}
          </p>
        </div>
      </div>
    {/each}
  </div>
</section>
