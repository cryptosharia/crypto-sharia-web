<!-- Accordion source code: https://www.material-tailwind.com/docs/html/accordion -->
<script lang="ts">
  import ArrowDown from '$lib/assets/icons/ArrowDown.svelte';
  import ArrowUp from '$lib/assets/icons/ArrowUp.svelte';
  import Divider from '../components/Divider.svelte';
  import Title from '../components/Title.svelte';

  function toggleAccordion(i: number) {
    const container = document.getElementById(`faq-${i}`);
    const question = document.getElementById(`faq-question-${i}`);
    const content = document.getElementById(`faq-content-${i}`);
    const arrowUp = document.getElementById(`faq-arrow-up-${i}`);
    const arrowDown = document.getElementById(`faq-arrow-down-${i}`);

    if (content && arrowUp && arrowDown && container && question) {
      // Toggle the content's max-height for smooth opening and closing
      if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0';
        // container.classList.remove('border-orange-600');
        // container.classList.add('border-slate-200');
        question.classList.remove('text-orange-600');
        question.classList.add('text-slate-800');
        arrowUp.classList.remove('hidden');
        arrowDown.classList.add('hidden');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        // container.classList.add('border-orange-600');
        // container.classList.remove('border-slate-200');
        question.classList.add('text-orange-600');
        question.classList.remove('text-slate-800');
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

<section id="faq" class="nav-space w-full max-w-[90rem]">
  <Title class="text-center">FAQ</Title>
  <Divider />
  <div
    class="md::max-w-[80%] mx-auto mt-5 flex max-w-[90%] flex-col gap-y-4 text-slate-700 lg:max-w-[50rem] lg:gap-y-3"
  >
    {#each faqs as faq, i}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        id={`faq-${i + 1}`}
        class="rounded-xl border-2 border-slate-200 shadow-sm transition-colors duration-300 ease-in-out max-md:active:border-orange-600 md:hover:border-orange-600"
      >
        <button
          onclick={() => toggleAccordion(i + 1)}
          class="group flex w-full flex-row items-start justify-between gap-x-6 px-5 py-4 hover:cursor-pointer"
        >
          <h3
            id={`faq-question-${i + 1}`}
            class="text-left text-lg font-normal transition-colors duration-300 ease-in-out md:text-[1.2rem] md:group-hover:text-orange-600 lg:text-xl"
          >
            {faq.question}
          </h3>
          <span
            id={`faq-arrow-up-${i + 1}`}
            class="text-orange-600 transition-colors duration-300 ease-in-out"
          >
            <ArrowUp />
          </span>
          <span id={`faq-arrow-down-${i + 1}`} class="hidden text-orange-600">
            <ArrowDown />
          </span>
        </button>
        <div
          id={`faq-content-${i + 1}`}
          class="max-h-0 overflow-hidden px-5 transition-all duration-300 ease-in-out"
        >
          <p class="pb-5 text-justify text-base">
            {faq.answer}
          </p>
        </div>
      </div>
    {/each}
  </div>
</section>
