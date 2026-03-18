import mcyA from '../../assets/cb150rmods.jpg';
import mcyL from '../../assets/ZX10.jpg';
import mcyD from '../../assets/vesmet.jpg';
import mcyE from '../../assets/r25.jpg';

const AboutVision = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-8 lg:px-16 w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
        {/* Top Row: Header & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-xs font-bold tracking-[0.2em] uppercase">Visi & Misi</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-gray-900 max-w-2xl">
              Kendaraan bekas <br /> kualitas terbaik
            </h2>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-start md:items-end gap-6 md:text-right lg:pt-4">
            <div className="flex gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[10px] text-gray-400 group hover:border-gray-900 hover:text-gray-900 transition-colors cursor-pointer">
                  {i === 0 ? 'E' : i === 1 ? 'R' : i === 2 ? 'D' : 'A'}
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-medium max-w-[280px]">
              Kami menghadirkan koleksi mobil dan motor bekas pilihan dan ketersediaan suku cadang lengkap untuk memastikan kendaraan Anda selalu prima.
            </p>
          </div>
        </div>
        
        {/* Middle Row: Circular Images & Dark Card Start */}
        <div className="relative mt-12">
          {/* The three circular images - Tightened Spacing */}
          <div className="flex gap-2 relative z-30 -mb-8 md:-mb-12 ml-4 md:ml-8">
            {[mcyL, mcyD, mcyE].map((img, i) => (
              <div key={i} className="w-16 h-16 md:w-28 md:h-28 rounded-full overflow-hidden border-2 md:border-4 border-white shadow-xl">
                <img src={img} alt={`Koleksi kendaraan bekas ErdaMotor detail ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          {/* Dark Card */}
          <div className="bg-[#111418] rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-10 lg:p-24 xl:p-32 relative min-h-[500px] md:min-h-[650px] lg:min-h-[1000px] xl:min-h-[1200px] flex flex-col justify-start pt-20 md:pt-28 lg:pt-48 xl:pt-64 w-full overflow-hidden md:overflow-visible my-8">
            {/* Background Image (darkened) */}
            <div className="absolute inset-0 z-0 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden">
              <img src={mcyL} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/80"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10 lg:gap-12 h-full">
              {/* Left Bottom Text & Stats */}
              <div className="max-w-full md:max-w-[45%] lg:max-w-[500px] mt-4 md:mt-4 lg:mt-16 xl:mt-20 order-2 md:order-1 flex flex-col gap-10 md:gap-12 lg:gap-14">

                <div className="relative">
                  <div className="absolute left-0 top-1 bottom-1 w-1 bg-[#d8f552] rounded-full"></div>
                  <div className="pl-6 md:pl-8">
                    <h4 className="text-[#d8f552] text-sm font-bold tracking-[0.25em] uppercase mb-6">ErdaMotor</h4>
                    <p className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-[1.6] font-light mb-4">
                      Lebih dari sekadar dealer, <strong className="text-white font-medium">ErdaMotor</strong> adalah mitra perjalanan Anda.
                    </p>
                    <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed font-light">
                      Kami berkomitmen memberikan <span className="text-white font-medium">transparansi kondisi mesin</span>, <span className="text-white font-medium">harga yang sangat kompetitif</span>, dan kemudahan mencari sparepart untuk menjadikan setiap perawatan kendaraan lebih efisien.
                    </p>
                  </div>
                </div>

                {/* New Content Grid to fill space */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-10 pt-4 border-t border-white/10">
                  <div>
                    <h4 className="text-[#d8f552] text-2xl md:text-3xl lg:text-5xl font-bold mb-2">100%</h4>
                    <p className="text-sm text-gray-500 font-medium">Inspeksi Unit Transparan</p>
                  </div>
                  <div>
                    <h4 className="text-[#d8f552] text-2xl md:text-3xl lg:text-5xl font-bold mb-2">15+</h4>
                    <p className="text-sm text-gray-500 font-medium">Tahun melayani pelanggan</p>
                  </div>
                  <div>
                    <h4 className="text-[#d8f552] text-2xl md:text-3xl lg:text-5xl font-bold mb-2">24H</h4>
                    <p className="text-sm text-gray-500 font-medium">Dukungan ketersediaan part</p>
                  </div>
                  <div>
                    <h4 className="text-[#d8f552] text-2xl md:text-3xl lg:text-5xl font-bold mb-2">10K+</h4>
                    <p className="text-sm text-gray-500 font-medium">Unit terjual dengan aman</p>
                  </div>
                </div>
              </div>

              {/* Right Header Text - Scalable typography */}
              <div className="flex flex-col items-start md:items-end text-left md:text-right ml-0 md:ml-auto order-1 md:order-2 max-w-3xl">
                <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight text-white md:text-right">
                  Temukan unit <br />
                  impian dengan <br />
                  <span className="text-[#d8f552]">harga terbaik</span>
                </h3>
              </div>
            </div>

            {/* Bottom Image */}
            <div className="relative mt-8 md:mt-0 md:absolute md:bottom-[-8%] md:right-[-2%] w-full md:w-[45%] max-w-3xl aspect-video rounded-3xl md:rounded-full overflow-hidden border-4 md:border-8 lg:border-12 border-[#111418] shadow-2xl md:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] z-30">
              <img src={mcyA} alt="Koleksi kendaraan berkualitas tinggi di ErdaMotor" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Responsive Spacer */}
          <div className="h-8 md:h-24 lg:h-48"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutVision;
