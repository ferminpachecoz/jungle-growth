import "../styles/ClientSection.scss"

const ClientsSection = () => {
  // Array de clientes con logos placeholder
  const clients = [
    { id: 1, name: "SellerBoard", logo: "/logos/sellerboard.webp" },
    { id: 2, name: "Helium 10", logo: "/logos/helium10.webp" },
    { id: 3, name: "AddBrew", logo: "/logos/addbrew.webp" },
    { id: 4, name: "Teika Metrics", logo: "/logos/teikametrics.webp" },
    { id: 5, name: "Zon Guru", logo: "/logos/zonguru.webp" },
    { id: 6, name: "Slack", logo: "/logos/slack.webp" },
    { id: 7, name: "Notion", logo: "/logos/notion.webp" },
  ]

  // Duplicamos el array para crear el efecto infinito
  const duplicatedClients = [...clients, ...clients]

  return (
    <div className="father">
      <section className="clients-section">
        <div className="clients-container">
          {/* Título atrapante */}
          <h2 className="clients-title">
            <span style={{color: "var(--naranja)"}}>Tecnologías</span> que utilizamos
          </h2>

          {/* Carrusel infinito */}
          <div className="carousel-wrapper">
            <div className="carousel-track">
              {duplicatedClients.map((client, index) => (
                <div key={`${client.id}-${index}`} className="client-item">
                  <img src={client.logo || "user-placeholder.webp"} alt={`Logo de ${client.name}`} className="client-logo" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ClientsSection
