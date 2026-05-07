export default function ValcasSolarLanding() {
  const services = [
    {
      title: 'Paneles Solares Residenciales',
      description:
        'Reduce el costo de tu recibo de luz y genera energía limpia para tu hogar.',
      icon: '🏠',
    },
    {
      title: 'Soluciones Comerciales',
      description:
        'Ahorro energético para negocios, oficinas y comercios.',
      icon: '🏪',
    },
    {
      title: 'Proyectos Industriales',
      description:
        'Sistemas fotovoltaicos de alta capacidad para industria.',
      icon: '🏭',
    },
    {
      title: 'Mantenimiento Preventivo',
      description:
        'Limpieza, revisión y monitoreo profesional.',
      icon: '🛠️',
    },
    {
      title: 'Mantenimiento Correctivo',
      description:
        'Diagnóstico y reparación de sistemas solares.',
      icon: '⚡',
    },
    {
      title: 'Trámites ante CFE',
      description:
        'Gestión completa de interconexión y contratos.',
      icon: '📄',
    },
  ];

  const benefits = [
    'Hasta 95% de ahorro en energía',
    'Instalaciones garantizadas',
    'Atención en Monterrey y Nuevo León',
    'Soporte técnico especializado',
  ];

  const gallery = [
      '/images/panel1.jpg',
  '/images/panel2.jpg',
  '/images/panel3.jpg',
  '/images/panel4.jpg',
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-yellow-500 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-6 text-sm backdrop-blur">
              Monterrey, Nuevo León
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
              VALCAS
              <span className="block text-yellow-200">SOLAR</span>
            </h1>

            <p className="text-lg lg:text-xl mb-8 max-w-xl text-blue-50">
              Ahorra energía con el poder del sol. Instalación de paneles solares para hogar, comercio e industria.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/528117835440"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform"
              >
                Cotizar por WhatsApp
              </a>

              <a
                href="#servicios"
                className="border border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-700 transition-all"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">☀️</div>
              <h2 className="text-3xl font-bold">Energía Inteligente</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 rounded-2xl p-4 flex justify-between">
                <span>Ahorro energético</span>
                <span className="font-bold">95%</span>
              </div>

              <div className="bg-white/10 rounded-2xl p-4 flex justify-between">
                <span>Garantía profesional</span>
                <span>✔</span>
              </div>

              <div className="bg-white/10 rounded-2xl p-4 flex justify-between">
                <span>Instalación segura</span>
                <span>⚡</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-yellow-500 font-semibold uppercase tracking-widest mb-3">
              Nuestros Servicios
            </p>

            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
              Soluciones Solares Integrales
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-all"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
              Proyectos Realizados
            </p>

            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
              Instalaciones VALCAS SOLAR
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Proyecto solar"
                className="rounded-3xl shadow-2xl h-[320px] w-full object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-8">
              ¿Por qué elegir VALCAS SOLAR?
            </h2>

            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow"
                >
                  <div className="bg-yellow-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-10 rounded-[2rem] text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">
              Solicita tu Cotización
            </h3>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full p-4 rounded-2xl text-gray-800"
              />

              <input
                type="tel"
                placeholder="Teléfono"
                className="w-full p-4 rounded-2xl text-gray-800"
              />

              <textarea
                rows="4"
                placeholder="Cuéntanos sobre tu proyecto"
                className="w-full p-4 rounded-2xl text-gray-800"
              />

              <a
                href="https://wa.me/528117835440"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-white text-orange-600 py-4 rounded-2xl font-bold hover:scale-105 transition-transform"
              >
                Enviar Solicitud
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-16">
            Clientes Satisfechos
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Excelente servicio y gran ahorro de energía.',
              'Muy profesionales y rápidos en la instalación.',
              'La mejor inversión para nuestro negocio.',
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-3xl shadow-lg">
                <div className="text-3xl mb-4">★★★★★</div>
                <p className="text-gray-600">“{testimonial}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white text-center px-6">
        <h2 className="text-4xl lg:text-6xl font-extrabold mb-6">
          Empieza a Ahorrar Hoy
        </h2>

        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Transformamos hogares, negocios e industrias con energía solar eficiente.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/528117835440"
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-2xl font-bold"
          >
            WhatsApp
          </a>

          <a
            href="https://www.facebook.com/share/1Xa1v2RtQv/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-8 py-4 rounded-2xl font-bold"
          >
            Facebook
          </a>
        </div>
      </section>

      {/* BOTÓN WHATSAPP */}
      <a
        href="https://wa.me/528117835440"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl z-50"
      >
        💬
      </a>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 text-center py-8 text-sm">
        <p>
          © 2026 VALCAS SOLAR • Soluciones Energéticas Sostenibles • Monterrey, Nuevo León
        </p>
      </footer>
    </main>
  );
}
