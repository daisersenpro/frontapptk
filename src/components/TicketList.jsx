

export default function TicketList({ tickets }) {
  return (
    <div>
      <h2>Lista de Tickets desde la API</h2>
      {tickets.length === 0 ? (
        <p>Cargando tickets o sin datos...</p>
      ) : (
        <ul>
          {tickets.map((t) => (
            <li key={t.id}>
              <strong>{t.title}</strong> - {t.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}