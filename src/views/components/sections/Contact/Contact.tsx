import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: (
        <a
          href="https://www.google.com/maps?q=Rua+Padre+João,+444,+Penha,+São+Paulo,+SP"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-gray-600"
        >
          Rua Padre João, nº 444 <br />
          Conjuntos 111 e 112 <br />
          Penha - São Paulo - SP
        </a>
      ),
    },
    {
      icon: Phone,
      title: 'Telefones',
      content: (
        <>
          (11) 4329-3129 <br />
          (11) 4329-3139
        </>
      ),
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: (
        <>
          eduardo.leal@prohabil.com.br <br />
          jennifer.leal@prohabil.com.br
        </>
      ),
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      content: (
        <>
          Segunda a Sexta: 9h às 18h <br />
          Sábado: 9h às 12h
        </>
      ),
    },
  ];

  return (
    <section id="contato" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-gold">Contato</span>
          </h2>
          <p className="text-lg text-gray-600">
            Estamos prontos para atender sua empresa
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition w-full"
              >
                <div className="bg-yellow-100 p-3 rounded-full mb-4">
                  <Icon className="text-gold-dark" size={28} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                <div className="text-gray-600 text-sm sm:text-base">
                  {info.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
