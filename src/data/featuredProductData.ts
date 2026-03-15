import varioImg from '../assets/nmax.jpg'; // Using NMAX as placeholder if Vario missing, user will understand
import cbImg from '../assets/cb150rmods.jpg';
import vesmatImg from '../assets/vesmet.jpg';
import cbrImg from '../assets/zx25.jpg'; // High-end placeholder for CBR

export const featuredProducts = [
  {
    id: 'honda-vario-160',
    name: 'Honda Vario 160',
    year: '2024',
    tagline: 'Brand New Power, Premium Style',
    price: 'Rp 26.500.000',
    description: 'Skutik premium dengan mesin 160cc yang bertenaga dan irit. Desain sporty dan fitur modern seperti Smart Key System menjadikan Vario 160 pilihan utama untuk mobilitas perkotaan yang dinamis.',
    specs: [
      { label: 'Tipe Mesin', value: '160cc, 4-Valve, eSP+' },
      { label: 'Tenaga Maks', value: '15.4 PS / 8,500 RPM' },
      { label: 'Torsi Maks', value: '13.8 Nm / 7,000 RPM' },
      { label: 'Fitur Unggulan', value: 'ABS & Keyless' }
    ],
    image: varioImg,
    paymentOptions: {
      cash: {
        title: 'Tunai',
        price: 'Rp 26.500.000',
        benefits: ['STNK & BPKB Langsung Nama', 'Service Gratis 1 Tahun', 'Bonus Helm SNI']
      },
      credit: {
        title: 'Kredit',
        price: 'Rp 850.000',
        period: '/ bln',
        benefits: ['DP mulai 3jt', 'Tenor hingga 35 bulan', 'Asuransi Kehilangan']
      }
    }
  },
  {
    id: 'honda-cb150r-streetfire',
    name: 'Honda CB150R Streetfire',
    year: '2023',
    tagline: 'The Real Naked Sport',
    price: 'Rp 30.500.000',
    description: 'Naked bike agresif dengan performa mesin DOHC 6-kecepatan. Posisi berkendara tegak yang nyaman menjadikannya partner sempurna baik untuk penggunaan harian maupun touring akhir pekan.',
    specs: [
      { label: 'Tipe Mesin', value: '150cc DOHC, 4-Valve' },
      { label: 'Tenaga Maks', value: '16.9 PS / 9,000 RPM' },
      { label: 'Torsi Maks', value: '13.8 Nm / 7,000 RPM' },
      { label: 'Suspensi', value: 'Inverted Front Fork' }
    ],
    image: cbImg,
    paymentOptions: {
      cash: {
        title: 'Tunai',
        price: 'Rp 30.500.000',
        benefits: ['Full Accessories Kit', 'Oli MPX gratis setahun', 'Jaket Exclusive']
      },
      credit: {
        title: 'Kredit',
        price: 'Rp 1.150.000',
        period: '/ bln',
        benefits: ['Cicilan Ringan', 'Proses 1 Hari Cair', 'Bonus Maintenance']
      }
    }
  },
  {
    id: 'vespa-sprint-150-iget',
    name: 'Vespa Sprint 150 i-Get',
    year: '2023',
    tagline: 'Iconic Style, Modern Soul',
    price: 'Rp 53.500.000',
    description: 'Ikon gaya Italia yang tak lekang oleh waktu. Dilengkapi mesin i-get yang bertenaga namun halus, serta sistem pengereman ABS untuk keamanan maksimal di setiap tikungan kota.',
    specs: [
      { label: 'Tipe Mesin', value: 'i-Get 155cc, 3-Valve' },
      { label: 'Tenaga Maks', value: '11.8 PS / 7,500 RPM' },
      { label: 'Torsi Maks', value: '12 Nm / 5,000 RPM' },
      { label: 'Keamanan', value: 'ABS Single Channel' }
    ],
    image: vesmatImg,
    paymentOptions: {
      cash: {
        title: 'Tunai',
        price: 'Rp 53.500.000',
        benefits: ['Voucher Aksesoris 2jt', 'Helm Vespa Original', 'Free Service & Part 1thn']
      },
      credit: {
        title: 'Kredit',
        price: 'Rp 1.850.000',
        period: '/ bln',
        benefits: ['Bunga Rendah 0.9%', 'Tenor 4 tahun', 'Asuransi All Risk']
      }
    }
  },
  {
    id: 'honda-cbr250rr',
    name: 'Honda CBR250RR SP',
    year: '2024',
    tagline: 'Total Control, Racing Soul',
    price: 'Rp 79.500.000',
    description: 'Varian tertinggi dari jajaran super sport 250cc. CBR250RR SP hadir dengan mesin berperforma balap yang dilengkapi fitur Quick Shifter dan Assist/Slipper Clutch untuk dominasi mutlak di sirkuit maupun jalanan.',
    specs: [
      { label: 'Tipe Mesin', value: '250cc 2-Cylinder, 8-Valve' },
      { label: 'Tenaga Maks', value: '42 PS / 13,000 RPM' },
      { label: 'Torsi Maks', value: '25 Nm / 11,000 RPM' },
      { label: 'Fitur Balap', value: 'Quick Shifter' }
    ],
    image: cbrImg,
    paymentOptions: {
      cash: {
        title: 'Tunai',
        price: 'Rp 79.500.000',
        benefits: ['STNK & BPKB Selesai 14 Hari', 'Free Servis 1 Tahun', 'Helm Fullface KYT']
      },
      credit: {
        title: 'Kredit',
        price: 'Rp 2.950.000',
        period: '/ bln',
        benefits: ['Bunga 0%', 'Free Oli 5x', 'Asuransi Kehilangan & Kerusakan']
      }
    }
  }
];
