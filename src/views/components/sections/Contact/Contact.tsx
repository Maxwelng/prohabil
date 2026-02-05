import { ContactForm } from './ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    { icon: MapPin, 
      title: 'Endereço', 
      content: (
      <a href="https://www.google.com/maps?q=Rua+Padre+João,+444,+Penha,+São+Paulo,+SP" 
        target="_blank" rel="noopener noreferrer"
         className="hover:underline text-gray-600" >
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
          (11) 4329-3129
          <br />
          (11) 4329-3139
        </>
      ),
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'maxnunes0711@gmail.com',
    },
  ];

  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-gold">Contato</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Estamos prontos para atender sua empresa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-lg flex-shrink-0">
                      <Icon className="text-gold-dark" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-sm sm:text-base text-gray-600">{info.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 bg-gold text-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-heading text-white text-xl font-semibold mb-4">
                Horário de Atendimento
              </h4>

              <p className="text-white">
                Segunda a Sexta: 9h às 18h
                <br />
                Sábado: 9h às 12h
              </p>
            </div>


          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}