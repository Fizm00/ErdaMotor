import vesmatImg from '../assets/vesmet.jpg';
import cbrImg from '../assets/cbr250rr.jpg';
import carLuxuryImg from '../assets/civicrs.jpg';
import carSuvImg from '../assets/pajerosportdakar.jpg';

export const featuredProducts = [
  {
    id: 'honda-civic-rs',
    name: 'Honda Civic RS',
    year: '2023',
    tagline: 'Legacy of Speed',
    price: 'Rp 601.000.000',
    description: 'Sedan sporty dengan desain ikonik dan performa VTEC Turbo yang legendaris. Honda Civic RS menggabungkan kenyamanan berkendara harian dengan jiwa balap di setiap tarikannya.',
    specs: [
      { label: 'Transmisi', value: 'CVT with Dream Technology' },
      { label: 'Mesin', value: '1.5L VTEC Turbo' },
      { label: 'Tenaga', value: '178 PS / 240 Nm' },
      { label: 'Fitur', value: 'Honda SENSING' }
    ],
    image: carLuxuryImg,
    paymentOptions: {
      cash: {
        title: 'Tunai',
        price: 'Rp 601.000.000',
        benefits: ['Garansi Resmi 3 Thn', 'Free Service & Parts 50rb Km', 'Kaca Film V-Kool']
      },
      credit: {
        title: 'Kredit',
        price: 'Rp 9.500.000',
        period: '/ bln',
        benefits: ['DP mulai 80jt', 'Tenor 1-5 Tahun', 'Bonus Karpet Dasar']
      }
    }
  },
  {
    id: 'mitsubishi-pajero-sport-gr',
    name: 'Pajero Sport Dakar',
    year: '2024',
    tagline: 'Live The Adventure',
    price: 'Rp 625.000.000',
    description: 'SUV legendaris pemenang Dakar dengan ketangguhan yang tak tertandingi. Pajero Sport Dakar hadir dengan fitur keamanan canggih dan interior mewah untuk petualangan keluarga Anda.',
    specs: [
      { label: 'Transmisi', value: '8-Speed Automatic' },
      { label: 'Mesin', value: '2.4L MIVEC Diesel Turbo' },
      { label: 'Torsi', value: '430 Nm / 2500 RPM' },
      { label: 'Fitur', value: 'ASTC & Forward Collision Mitigation' }
    ],
    image: carSuvImg,
    paymentOptions: {
      cash: {
        title: 'Tunai',
        price: 'Rp 625.000.000',
        benefits: ['Gratis Paket Smart Silver', 'Talang Air & Grill GR', 'Full Nano Coating']
      },
      credit: {
        title: 'Kredit',
        price: 'Rp 10.800.000',
        period: '/ bln',
        benefits: ['Cicilan Murah', 'DP mulai 120jt', 'Asuransi Kehilangan']
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
