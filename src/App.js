import React from "react";
import "./App.css";

const serviceData = [
  {
    id: 1,
    icon: "💻",
    title: "Desenvolvimento Web",
    description:
      "Criação de websites modernos e responsivos com React, focados em performance e SEO.",
  },
  {
    id: 2,
    icon: "📱",
    title: "Aplicativos Mobile",
    description:
      "Desenvolvimento de aplicativos nativos e híbridos para iOS e Android com Flutter ou React Native.",
  },
  {
    id: 3,
    icon: "📊",
    title: "Consultoria de TI",
    description:
      "Análise e otimização de infraestrutura e processos de software para eficiência máxima.",
  },
  {
    id: 4,
    icon: "🎨",
    title: "Design de UI/UX",
    description:
      "Criação de interfaces intuitivas e experiências de usuário agradáveis para alta conversão.",
  },
];

const ServiceCard = ({ icon, title, description }) => (
  <div className="service-card">
    <div className="card-icon">{icon}</div>
    <h3 className="card-title">{title}</h3>
    <p className="card-description">{description}</p>
    <a href="#contact" className="card-button">
      Saiba Mais
    </a>
  </div>
);

function App() {
  return (
    <div className="App">
      <header className="hero-section">
        <h1>Nossos Serviços Especializados</h1>
        <p>
          Soluções digitais completas para transformar sua ideia em um produto
          de sucesso.
        </p>
      </header>

      <section className="services-section">
        <h2>O que podemos fazer por você?</h2>
        <div className="services-grid">
          {serviceData.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      <footer className="footer-cta">
        <p>Pronto para começar seu projeto?</p>
        <a href="#contact" className="cta-button">
          Fale Conosco Agora!
        </a>
      </footer>
    </div>
  );
}

export default App;
