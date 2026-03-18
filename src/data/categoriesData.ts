import motorImg from '../assets/cat-motor.png';
import partsImg from '../assets/cat-parts.png';
import accImg from '../assets/aksesoris.jpg';

export const categories = [
  {
    id: 'unit-bekas',
    title: 'Mobil & Motor Bekas',
    description: 'Ratusan unit kendaraan bekas berkualitas tinggi, telah melewati inspeksi ketat dan siap jalan.',
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
    title: 'Aksesoris Kendaraan',
    subtitle: 'Helm, Jaket, Perawatan Mobil, dll.',
    image: accImg,
  },
];
