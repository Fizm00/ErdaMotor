import mcyHero from '../assets/about-hero-moto.jpg';
import mcyEdit from '../assets/about-editorial.png';
import mcyParts from '../assets/cat-parts.png';

export const galleryItems = [
  {
    id: 1,
    title: "Showroom Utama",
    subtitle: "Eksplorasi koleksi kendaraan impian Anda di ruang pamer premium kami.",
    image: mcyHero,
    imageProps: "object-[30%_center] brightness-90",
    gridClass: "lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Koleksi Klasik",
    subtitle: "Restorasi sempurna.",
    image: mcyEdit,
    imageProps: "object-[80%_center] grayscale contrast-125",
    gridClass: "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "Suku Cadang Asli",
    subtitle: "Komponen performa tinggi.",
    image: mcyParts,
    imageProps: "object-center saturate-150",
    gridClass: "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "Detail Mesin",
    subtitle: "Presisi di setiap millimeter.",
    image: mcyParts,
    imageProps: "object-right hue-rotate-90 contrast-150",
    gridClass: "lg:col-span-1 lg:row-span-2 md:col-span-1 md:row-span-2",
  },
  {
    id: 5,
    title: "Layanan Servis",
    subtitle: "Ditangani mekanik ahli.",
    image: mcyEdit,
    imageProps: "object-bottom sepia-[.3]",
    gridClass: "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
  },
  {
    id: 6,
    title: "Aksesoris Berkendara",
    subtitle: "Tampil gaya dengan keamanan maksimal.",
    image: mcyHero,
    imageProps: "object-top hue-rotate-180 brightness-75",
    gridClass: "lg:col-span-2 lg:row-span-1 md:col-span-2 md:row-span-1",
  },
  {
    id: 7,
    title: "Komunitas Otomotif",
    subtitle: "Bergabung bersama ribuan pecinta otomotif lainnya.",
    image: mcyHero,
    imageProps: "object-right sepia-[.5] brightness-75",
    gridClass: "lg:col-span-1 lg:row-span-1 md:col-span-1 md:row-span-1",
  },
];
