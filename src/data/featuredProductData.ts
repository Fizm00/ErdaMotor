import vesmatImg from '../assets/vesmet.jpg';
import cbrImg from '../assets/zx25.jpg'; // High-end placeholder for CBR
import carLuxuryImg from '../assets/car-luxury.png';
import carSuvImg from '../assets/car-suv.png';

export const featuredProducts = [
  {
    id: 'bmw-330i-m-sport',
    name: 'BMW 330i M Sport',
    year: '2023',
    tagline: 'Sheer Driving Pleasure',
    price: 'Rp 985.000.000',
    description: 'Sedan mewah dengan performa luar biasa dan teknologi mutakhir. BMW 330i M Sport memberikan pengalaman berkendara yang dinamis dengan kenyamanan kabin kelas satu.',
    specs: [
      { label: 'Transmisi', value: '8-Speed Steptronic' },
      { label: 'Mesin', value: '2.0L TwinPower Turbo' },
      { label: 'Tenaga', value: '258 HP / 400 Nm' },
      { label: 'Fitur', value: 'BMW Live Cockpit' }
    ],
    image: carLuxuryImg,
    paymentOptions: {
      cash: {
        title: 'Tunai',
        price: 'Rp 985.000.000',
        benefits: ['Garansi B+ 3 Tahun', 'Free Service 5 Tahun', 'Voucher BBM 5jt']
      },
      credit: {
        title: 'Kredit',
        price: 'Rp 15.500.000',
        period: '/ bln',
        benefits: ['Bunga 0% (1thn)', 'DP mulai 150jt', 'Asuransi All Risk']
      }
    }
  },
  {
    id: 'toyota-fortuner-2.8-gr-s',
    name: 'Fortuner 2.8 GR Sport',
    year: '2024',
    tagline: 'Lead The World',
    price: 'Rp 725.000.000',
    description: 'SUV tangguh untuk segala medan dengan mesin diesel 2.8L yang sangat bertenaga. Varian GR Sport memberikan tampilan yang lebih agresif dan suspensi yang lebih presisi.',
    specs: [
      { label: 'Transmisi', value: '6-Speed Automatic' },
      { label: 'Mesin', value: '2.8L Diesel Turbo' },
      { label: 'Torsi', value: '500 Nm / 1600 RPM' },
      { label: 'Fitur', value: '7 Airbags & TSS' }
    ],
    image: carSuvImg,
    paymentOptions: {
      cash: {
        title: 'Tunai',
        price: 'Rp 725.000.000',
        benefits: ['Gratis Aksesoris GR', 'E-Money 2jt', 'Full Coating']
      },
      credit: {
        title: 'Kredit',
        price: 'Rp 11.200.000',
        period: '/ bln',
        benefits: ['Angsuran Ringan', 'DP Rendah', 'Proses Cepat 1 Hari']
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
