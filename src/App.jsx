import { useEffect, useState } from 'react';

const API_URL = "http://localhost:5105/api/tickets";

export default function App() {
  const [tickets, setTickets] = useState([]);

  // Función para obtener la lista de tickets desde la API
  const fetchTickets = async () => {
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const data = await response.json();
        setTickets(data);
      }
    } catch (error) {
      console.error("Error al conectar con la API:", error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Lista de Tickets</h1>
      <ul>
        {tickets.map((t) => (
          <li key={t.id}>
            <strong>{t.title}</strong> - {t.status}
          </li>
        ))}
      </ul>
    </div>
  );
}