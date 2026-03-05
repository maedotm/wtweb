export default function BrandLogos() {
  const brands = [
    { name: "Dell", logo: "/img/dell.svg" },
    { name: "HP", logo: "/img/hp.svg" },
    { name: "Lenovo", logo: "/img/lenovo.svg" },
    { name: "Toshiba", logo: "/img/toshiba.svg" },
    { name: "Cisco", logo: "/img/cisco.svg" },
    { name: "TP-Link", logo: "/img/tplink.svg" },
    { name: "Microsoft", logo: "/img/microsoft-windows-22.svg" },
    { name: "Intel", logo: "/img/intel.svg" },
  ];

  return (
    <section id="partners" className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2DAAEF] to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-[#2DAAEF] font-semibold text-sm uppercase tracking-wider">
            Trusted Brands
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Our Partners
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-12">
              {[...brands, ...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 h-28 bg-white rounded-xl shadow-md hover:shadow-xl transition-all flex items-center justify-center group cursor-pointer"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}