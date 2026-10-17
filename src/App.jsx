/* import { useEffect, useState } from 'react';
import TicketList from './components/TicketList';

const API_URL = "http://localhost:5105/api/tickets";

export default function App() {
  const [tickets, setTickets] = useState([]);

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
      <h1>Gestión de Tickets</h1>
      <TicketList tickets={tickets} />
    </div>
  );
} */

import { useEffect, useState } from 'react';

export default function App() {
  const [tickets, setTickets] = useState([]);

  // useEffect se encarga de ejecutar esto una sola vez al cargar la página
  useEffect(() => {
    // Aquí llamarías a tu API para traer los datos
    console.log("¡El componente cargó y fui a buscar los datos!");
  }, []); // <-- Los corchetes vacíos [] significan "ejecútate solo una vez al iniciar"

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Gestión de Tickets</h1>
      <p>Revisa la consola de tu navegador (F12).</p>
    </div>
  );
}