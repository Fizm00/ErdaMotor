import motorImg from '../assets/benneli.jpg';
import partsImg from '../assets/cb150rmods.jpg';
import serviceImg from '../assets/vesmet.jpg';

export const accordionItems = [
  {
    id: 1,
    title: 'Kondisi Mesin Terjamin',
    description: 'Setiap motor yang kami jual telah melalui proses inspeksi menyeluruh oleh mekanik berpengalaman. Kami memeriksa seluruh komponen mesin—dari kompresi silinder, kondisi oli, hingga sistem pendinginan—untuk memastikan performa optimal saat Anda berkendara.',
    highlights: ['Kompresi silinder diuji', 'Oli mesin diganti baru', 'Sistem kelistrikan diperiksa', 'Uji jalan minimal 10 km'],
    image: motorImg,
    stats: [
      { label: 'Inspeksi', value: '100+' },
      { label: 'Poin Cek', value: '50+' }
    ]
  },
  {
    id: 2,
    title: 'Riwayat Servis Lengkap',
    description: 'Transparansi adalah prioritas kami. Setiap unit dilengkapi dengan catatan servis yang lengkap dan terverifikasi, sehingga Anda bisa mengetahui riwayat perawatan motor secara detail sebelum memutuskan untuk membeli.',
    highlights: ['Catatan servis terverifikasi', 'Riwayat perbaikan tercatat', 'Kilometer asli terjamin', 'Dokumen STNK & BPKB lengkap'],
    image: serviceImg,
    stats: [
      { label: 'Transparansi', value: 'Full' },
      { label: 'Verifikasi', value: 'Original' }
    ]
  },
  {
    id: 3,
    title: 'Garansi Onderdil Asli',
    description: 'Kami hanya menggunakan suku cadang original dari pabrikan resmi. Setiap onderdil yang diganti selama proses rekondisi dijamin keasliannya, memberikan Anda ketenangan pikiran untuk perjalanan jarak jauh.',
    highlights: ['Suku cadang 100% original', 'Garansi mesin 3 bulan', 'Free servis pertama', 'Dukungan after-sales'],
    image: partsImg,
    stats: [
      { label: 'Garansi', value: '3 Bln' },
      { label: 'Sparepart', value: 'Ori' }
    ]
  },
];

export const aboutBrands = ['HONDA', 'YAMAHA', 'VESPA', 'KAWASAKI', 'SUZUKI'];
