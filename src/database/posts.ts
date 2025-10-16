import type { Post } from '../models';

import activitySatu from '$lib/assets/blog/activities/1.jpeg';
import activityDua from '$lib/assets/blog/activities/2.jpeg';
import activityTiga from '$lib/assets/blog/activities/3.jpeg';
import activityEmpat from '$lib/assets/blog/activities/4.jpeg';
import activityLima from '$lib/assets/blog/activities/5.jpeg';
import activityEnam from '$lib/assets/blog/activities/6.jpeg';

import sui from '$lib/posts/sui.md?raw';
import walrus from '$lib/posts/walrus.md?raw';

import memahamiUangDanNilaiPanduanSederhanaUntukMasyarakatAwam from '$lib/posts/memahami-uang-dan-nilai-panduan-sederhana-untuk-masyarakat-awam/content.md?raw';
import memahamiUangDanNilaiPanduanSederhanaUntukMasyarakatAwamThumbnail from '$lib/posts/memahami-uang-dan-nilai-panduan-sederhana-untuk-masyarakat-awam/thumbnail.jpg';

import menabungInvestasiDanSpekulasiApaBedanya from '$lib/posts/menabung-investasi-dan-spekulasi-apa-bedanya/content.md?raw';
import menabungInvestasiDanSpekulasiApaBedanyaThumbnail from '$lib/posts/menabung-investasi-dan-spekulasi-apa-bedanya/thumbnail.jpg';

import mindsetKeuanganSehatKunciHidupFinansialYangStabil from '$lib/posts/mindset-keuangan-sehat-kunci-hidup-finansial-yang-stabil/content.md?raw';
import mindsetKeuanganSehatKunciHidupFinansialYangStabilThumbnail from '$lib/posts/mindset-keuangan-sehat-kunci-hidup-finansial-yang-stabil/thumbnail.jpg';

import memahamiKonsepRisikoDanImbalHasilRiskAndRewardDalamInvestasi from '$lib/posts/memahami-konsep-risiko-dan-imbal-hasil-risk-and-reward-dalam-investasi/content.md?raw';
import memahamiKonsepRisikoDanImbalHasilRiskAndRewardDalamInvestasiThumbnail from '$lib/posts/memahami-konsep-risiko-dan-imbal-hasil-risk-and-reward-dalam-investasi/thumbnail.jpg';

import sejarahPenggunaanEmasUangLogamDanUangKertasHinggaEraDigital from '$lib/posts/sejarah-penggunaan-emas-uang-logam-dan-uang-kertas-hingga-era-digital/content.md?raw';
import sejarahPenggunaanEmasUangLogamDanUangKertasHinggaEraDigitalThumbnail from '$lib/posts/sejarah-penggunaan-emas-uang-logam-dan-uang-kertas-hingga-era-digital/thumbnail.jpg';

export const posts: Post[] = [
  {
    category: 'activity',
    thumbnailUrl: activitySatu,
    date: new Date('2025-10-10T00:00:00.000Z'),
    title: 'Lorem Ipsum Dolor',
    slug: 'lorem-ipsum-dolor',
    tags: ['Kolaborasi', 'Rapat', 'Lorem'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    content: sui
  },
  {
    category: 'activity',
    thumbnailUrl: activityDua,
    date: new Date('2025-10-11T00:00:00.000Z'),
    title: 'Lorem Ipsum Dolor Sit',
    slug: 'lorem-ipsum-dolor-sit',
    tags: ['Lorem', 'Kolaborasi', 'Rapat'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    content: walrus
  },
  {
    category: 'activity',
    thumbnailUrl: activityTiga,
    date: new Date('2025-10-12T00:00:00.000Z'),
    title: 'Lorem Ipsum  Dolor Sit Amet',
    slug: 'lorem-ipsum-dolor-sit-amet',
    tags: ['Kolaborasi', 'Rapat', 'Lorem'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    content: sui
  },
  {
    category: 'activity',
    thumbnailUrl: activityEmpat,
    date: new Date('2025-10-13T00:00:00.000Z'),
    title: 'Lorem Ipsum Dolor Sit Amet Consectetur',
    slug: 'lorem-ipsum-dolor-sit-amet-consectetur',
    tags: ['Lorem', 'Kolaborasi', 'Rapat'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    content: walrus
  },
  {
    category: 'activity',
    thumbnailUrl: activityLima,
    date: new Date('2025-10-14T00:00:00.000Z'),
    title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing',
    slug: 'lorem-ipsum-dolor-sit-amet-consectetur-adipiscing',
    tags: ['Kolaborasi', 'Rapat', 'Lorem'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    content: sui
  },
  {
    category: 'activity',
    thumbnailUrl: activityEnam,
    date: new Date('2025-10-15T00:00:00.000Z'),
    title: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit',
    slug: 'lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit',
    tags: ['Lorem', 'Kolaborasi', 'Rapat'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    content: walrus
  },
  {
    category: 'article',
    thumbnailUrl: memahamiUangDanNilaiPanduanSederhanaUntukMasyarakatAwamThumbnail,
    date: new Date('2025-10-06T00:00:00.000Z'),
    title: 'Memahami Uang dan Nilai: Panduan Sederhana untuk Masyarakat Awam',
    slug: 'memahami-uang-dan-nilai-panduan-sederhana-untuk-masyarakat-awam',
    tags: ['Ekonomi', 'Uang', 'Inflasi', 'Nilai'],
    description:
      'Uang, nilai, dan inflasi adalah konsep ekonomi dasar yang sangat memengaruhi kehidupan sehari-hari kita. Meski terdengar rumit, ketiga hal ini sebenarnya dapat dipahami dengan mudah melalui contoh-contoh sederhana.',
    content: memahamiUangDanNilaiPanduanSederhanaUntukMasyarakatAwam
  },
  {
    category: 'article',
    thumbnailUrl: menabungInvestasiDanSpekulasiApaBedanyaThumbnail,
    date: new Date('2025-10-06T00:00:00.000Z'),
    title: 'Menabung, Investasi, dan Spekulasi: Apa Bedanya?',
    slug: 'menabung-investasi-dan-spekulasi-apa-bedanya',
    tags: ['Menabung', 'Investasi', 'Spekulasi', 'Ekonomi', 'Finansial', 'Uang'],
    description:
      'Banyak orang awam masih bingung membedakan menabung, berinvestasi, dan berspekulasi. Ketiganya sama-sama melibatkan uang, tetapi tujuan dan caranya sangat berbeda.',
    content: menabungInvestasiDanSpekulasiApaBedanya
  },
  {
    category: 'article',
    thumbnailUrl: mindsetKeuanganSehatKunciHidupFinansialYangStabilThumbnail,
    date: new Date('2025-10-06T00:00:00.000Z'),
    title: 'Mindset Keuangan Sehat: Kunci Hidup Finansial yang Stabil',
    slug: 'mindset-keuangan-sehat-kunci-hidup-finansial-yang-stabil',
    tags: ['Mindset', 'Keuangan', 'Finansial', 'Uang', 'Ekonomi', 'Pola Pikir'],
    description:
      'Mindset keuangan adalah pola pikir, keyakinan, dan sikap seseorang dalam menyikapi uang — mulai dari kebiasaan menabung, cara membelanjakan, hingga mengelola keuangan. Pola pikir inilah yang memengaruhi setiap keputusan finansial yang kita ambil, apakah itu keputusan untuk berhemat atau berbelanja. ',
    content: mindsetKeuanganSehatKunciHidupFinansialYangStabil
  },
  {
    category: 'article',
    thumbnailUrl: memahamiKonsepRisikoDanImbalHasilRiskAndRewardDalamInvestasiThumbnail,
    date: new Date('2025-10-11T00:00:00.000Z'),
    title: 'Memahami Konsep Risiko dan Imbal Hasil (Risk & Reward) dalam Investasi',
    slug: 'memahami-konsep-risiko-dan-imbal-hasil-risk-and-reward-dalam-investasi',
    tags: ['Risiko', 'Imbal Hasil', 'Investasi', 'Finansial', 'Uang', 'Ekonomi'],
    description:
      'Investasi selalu melibatkan dua hal tak terpisahkan: risiko dan imbal hasil. Untuk masyarakat umum, memahami konsep ini penting agar dapat mengambil keputusan keuangan yang tepat.',
    content: memahamiKonsepRisikoDanImbalHasilRiskAndRewardDalamInvestasi
  },
  {
    category: 'article',
    thumbnailUrl: sejarahPenggunaanEmasUangLogamDanUangKertasHinggaEraDigitalThumbnail,
    date: new Date('2025-10-11T00:00:00.000Z'),
    title: 'Sejarah Penggunaan Emas, Uang Logam, dan Uang Kertas hingga Era Digital',
    slug: 'sejarah-penggunaan-emas-uang-logam-dan-uang-kertas-hingga-era-digital',
    tags: ['Sejarah', 'Uang', 'Emas', 'Uang Logam', 'Uang Kertas', 'Ekonomi'],
    description:
      'Uang merupakan elemen penting dalam kehidupan manusia, namun bentuk dan konsep uang telah berevolusi selama ribuan tahun.',
    content: sejarahPenggunaanEmasUangLogamDanUangKertasHinggaEraDigital
  }
];
