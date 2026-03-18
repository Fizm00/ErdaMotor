import motorImg from '../assets/benneli.jpg';
import partsImg from '../assets/cb150rmods.jpg';
import serviceImg from '../assets/vesmet.jpg';
import carInspectionImg from '../assets/car-inspection.png';
import carLuxuryImg from '../assets/Civic.jpg';
import carSuvImg from '../assets/innova.jpg';

export const accordionItems = [
  {
    id: 1,
    title: 'Kondisi Mesin Terjamin',
    description: 'Setiap kendaraan yang kami jual telah melalui proses inspeksi menyeluruh oleh mekanik berpengalaman. Kami memeriksa seluruh komponen mesin—dari kompresi, kondisi pelumasan, hingga sistem pendinginan—untuk memastikan performa optimal saat Anda berkendara.',
    highlights: ['Inspeksi mesin menyeluruh', 'Pelumasan & filter diperbarui', 'Sistem kelistrikan diperiksa', 'Uji jalan standar Erda'],
    image: motorImg,
    stats: [
      { label: 'Inspeksi', value: '100+' },
      { label: 'Poin Cek', value: '50+' }
    ]
  },
  {
    id: 2,
    title: 'Riwayat Servis Lengkap',
    description: 'Transparansi adalah prioritas kami. Setiap unit dilengkapi dengan catatan servis yang lengkap dan terverifikasi, sehingga Anda bisa mengetahui riwayat perawatan kendaraan secara detail sebelum memutuskan untuk membeli.',
    highlights: ['Catatan servis terverifikasi', 'Riwayat perbaikan tercatat', 'Kilometer asli terjamin', 'Dokumen legalitas lengkap'],
    image: serviceImg,
    stats: [
      { label: 'Transparansi', value: 'Full' },
      { label: 'Verifikasi', value: 'Original' }
    ]
  },
  {
    id: 3,
    title: 'Garansi & Sparepart Orisinal',
    description: 'Kami hanya menggunakan suku cadang original dari pabrikan resmi. Setiap onderdil yang diganti selama proses rekondisi dijamin keasliannya, memberikan Anda ketenangan pikiran untuk perjalanan jarak jauh.',
    highlights: ['Suku cadang 100% original', 'Garansi mesin pilihan', 'Layanan purna jual prima', 'Ketersediaan part terjamin'],
    image: partsImg,
    stats: [
      { label: 'Garansi', value: 'Pilihan' },
      { label: 'Sparepart', value: 'Ori' }
    ]
  },
];

export const carBenefits = [
  {
    title: 'Harga Jual Terbaik',
    description: 'Kami dikenal di seluruh Indonesia karena memberikan penawaran harga terbaik untuk mobil bekas berkualitas.',
    icon: 'wallet'
  },
  {
    title: 'Jual Tanpa Repot',
    description: 'Bebas dari ribuan telepon, kunjungan tanpa janji, atau dokumen yang rumit. Kami urus semuanya untuk Anda.',
    icon: 'smile'
  },
  {
    title: 'Aman & Bebas Resiko',
    description: 'Bertransaksi dengan nyaman tanpa perlu khawatir pembeli fiktif. Seluruh pembayaran dilakukan via transfer bank resmi.',
    icon: 'shield-check'
  }
];

export const carInspectionStats = [
  { label: 'Titik Inspeksi', value: '120+' },
  { label: 'Garansi Mesin', value: '1 Thn' },
  { label: 'Cek Dokumen', value: 'Full' }
];

export const aboutBrands = ['HONDA', 'YAMAHA', 'VESPA', 'KAWASAKI', 'SUZUKI', 'MITSUBISHI', 'DAIHATSU', 'TOYOTA'];
export const carShowcaseDescription = 'Setiap kendaraan dalam koleksi eksklusif kami telah melewati proses kurasi dan inspeksi teknis yang sangat ketat, menjamin standar kualitas tertinggi untuk kenyamanan dan keamanan berkendara Anda.';

export { carInspectionImg, carLuxuryImg, carSuvImg };
