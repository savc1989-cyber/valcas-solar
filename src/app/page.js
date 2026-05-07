export default function ValcasSolarLanding() {
  const services = [
    {
      title: 'Trámites ante CFE',
      description:
        'Nos encargamos del proceso y gestión para la interconexión de tu sistema solar ante CFE.',
      icon: '📄',
    },
    {
      title: 'Monitoreo Inteligente',
      description:
        'Supervisa en tiempo real el rendimiento y generación de energía de tu sistema solar.',
      icon: '📊',
    },
    {
      title: 'Paneles Solares Residenciales',
      description:
        'Reduce el costo de tu recibo de luz y genera energía limpia para tu hogar con sistemas solares diseñados a tu medida.',
      icon: '🏠',
    },
    {
      title: 'Soluciones para Comercios',
      description:
        'Ahorro energético para negocios, restaurantes, tiendas y oficinas con instalaciones eficientes y seguras.',
      icon: '🏪',
    },
    {
      title: 'Proyectos Industriales',
      description:
        'Implementamos sistemas fotovoltaicos de gran capacidad para empresas e industrias que buscan optimizar costos.',
      icon: '🏭',
    },
    {
      title: 'Mantenimiento Preventivo',
      description:
        'Limpieza, inspección y monitoreo para asegurar el máximo rendimiento de tus paneles solares.',
      icon: '🛠️',
    },
    {
      title: 'Mantenimiento Correctivo',
      description:
        'Diagnóstico y reparación de fallas en inversores, cableado y sistemas solares.',
      icon: '⚡',
    },
  ];

  const benefits = [
    'Atención en Monterrey y todo Nuevo León',
    'Ahorro significativo en el recibo de luz',
    'Instalaciones profesionales y garantizadas',
    'Atención personalizada para hogar, comercio e industria',
    'Energía limpia y sustentable',
    'Soporte técnico y mantenimiento especializado',
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-600 text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur mb-6 text-sm font-medium">
              Monterrey, Nuevo León • Energía Solar para Hogar, Comercio e Industria
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
              VALCAS
              <span className="block text-yellow-100">SOLAR</span>
            </h1>

            <p className="text-lg lg:text-xl text-yellow-50 mb-8 max-w-xl">
              Especialistas en instalación de paneles solares, mantenimiento preventivo y correctivo para hogares, comercios e industrias. Ayudamos a reducir tus costos de energía con soluciones eficientes, modernas y sustentables.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/528117935440"
                className="bg-white text-orange-600 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition-transform"
              >
                Solicitar Cotización
              </a>

              <a
                href="#servicios"
                className="border border-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-orange-600 transition-all"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white/20 w-full max-w-md">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">☀️</div>
                <h2 className="text-2xl font-bold">Ahorra con Energía Solar</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 rounded-2xl p-4 flex items-center justify-between">
                  <span>Reducción en consumo</span>
                  <span className="font-bold text-2xl">95%</span>
                </div>

                <div className="bg-white/10 rounded-2xl p-4 flex items-center justify-between">
                  <span>Garantía profesional</span>
                  <span className="font-bold">✔</span>
                </div>

                <div className="bg-white/10 rounded-2xl p-4 flex items-center justify-between">
                  <span>Instalación segura</span>
                  <span className="font-bold">⚡</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="https://www.facebook.com/share/1Xa1v2RtQv/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform"
            >
              Ver Facebook Oficial
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold uppercase tracking-widest mb-3">
              Nuestros Servicios
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
              Soluciones Solares Integrales
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Diseñamos, instalamos y damos mantenimiento a sistemas solares para todo tipo de proyectos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
              Proyectos Realizados
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
              Instalaciones Reales VALCAS SOLAR
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Sistemas solares residenciales y comerciales instalados en Monterrey y Nuevo León.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <img
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop"
              alt="Paneles solares"
              className="rounded-3xl shadow-2xl object-cover h-[320px] w-full hover:scale-[1.02] transition-transform"
            />

            <img
              src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1200&auto=format&fit=crop"
              alt="Instalación solar"
              className="rounded-3xl shadow-2xl object-cover h-[320px] w-full hover:scale-[1.02] transition-transform"
            />

            <img
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop"
              alt="Proyecto residencial"
              className="rounded-3xl shadow-2xl object-cover h-[320px] w-full hover:scale-[1.02] transition-transform"
            />

            <img
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop"
              alt="Energía solar"
              className="rounded-3xl shadow-2xl object-cover h-[320px] w-full hover:scale-[1.02] transition-transform"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-orange-500 font-semibold uppercase tracking-widest mb-3">
              ¿Por qué elegirnos?
            </p>

            <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight">
              Energía Inteligente para tu Futuro
            </h2>

            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl"
                >
                  <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-400 to-yellow-500 rounded-[2rem] p-10 text-white shadow-2xl">
            <div className="text-6xl mb-6">🔋</div>
            <h3 className="text-3xl font-bold mb-6">
              Cotización Sin Compromiso
            </h3>

            <p className="text-lg text-yellow-50 mb-8 leading-relaxed">
              Nuestro equipo te ayudará a encontrar la mejor solución solar para reducir tus gastos eléctricos y aumentar la eficiencia energética.
            </p>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full p-4 rounded-2xl text-gray-800 outline-none"
              />

              <input
                type="tel"
                placeholder="Teléfono"
                className="w-full p-4 rounded-2xl text-gray-800 outline-none"
              />

              <textarea
                placeholder="Cuéntanos sobre tu proyecto"
                rows="4"
                className="w-full p-4 rounded-2xl text-gray-800 outline-none"
              ></textarea>

              <button className="w-full bg-white text-orange-600 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform">
                Enviar Solicitud
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-6">
            Empieza a Ahorrar con Energía Solar
          </h2>

          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            En VALCAS SOLAR transformamos hogares, comercios e industrias con soluciones energéticas modernas, eficientes y sustentables.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://wa.me/528117935440"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform"
            >
              WhatsApp
            </a>

            <a
              href="mailto:info@valcassolar.com"
              className="border border-gray-600 px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-gray-900 transition-all"
            >
              Correo Electrónico
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold uppercase tracking-widest mb-3">
              Testimonios
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
              Clientes Satisfechos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Excelente servicio y gran ahorro en mi recibo de luz.',
              'Muy profesionales en la instalación y atención.',
              'La mejor inversión para nuestro negocio.'
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="text-yellow-400 text-3xl mb-4">★★★★★</div>
                <p className="text-gray-600 mb-6">“{testimonial}”</p>
                <div className="font-bold text-blue-700">Cliente VALCAS SOLAR</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-semibold uppercase tracking-widest mb-3">
              Preguntas Frecuentes
            </p>
            <h2 className="text-4xl font-extrabold">
              Todo sobre Paneles Solares
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: '¿Cuánto puedo ahorrar con paneles solares?',
                a: 'Dependiendo del consumo eléctrico, puedes reducir hasta un 95% tu recibo de luz.'
              },
              {
                q: '¿Realizan instalaciones comerciales e industriales?',
                a: 'Sí, desarrollamos proyectos residenciales, comerciales e industriales.'
              },
              {
                q: '¿Ofrecen mantenimiento?',
                a: 'Sí, realizamos mantenimiento preventivo y correctivo para maximizar el rendimiento.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/528117935440"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl hover:scale-110 transition-transform z-50"
      >
        💬
      </a>

      <footer className="bg-black text-gray-400 py-8 text-center text-sm">
        <p>© 2026 VALCAS SOLAR - Soluciones Energéticas Sostenibles • Monterrey, Nuevo León</p>
      </footer>
    </div>
  );
}
