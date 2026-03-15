import motorImg from '../assets/cat-motor.png';
import partsImg from '../assets/cat-parts.png';
import accImg from '../assets/aksesoris.jpg';

export const categories = [
  {
    id: 'motor-bekas',
    title: 'Motor Bekas',
    description: 'Ratusan motor bekas berkualitas tinggi, telah melewati inspeksi ketat dan siap jalan.',
    image: motorImg,
    span: 'lg:col-span-2',
  },
  {
    id: 'sparepart',
    title: 'Sparepart Baru',
    image: partsImg,
    cta: 'Lihat Katalog',
  },
  {
    id: 'aksesoris',
    title: 'Aksesoris Motor',
    subtitle: 'Helm, Jaket, Sarung Tangan, dll.',
    image: accImg,
  },
];
