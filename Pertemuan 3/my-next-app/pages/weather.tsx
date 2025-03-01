import { useState } from 'react';

export default function WeatherPage() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    setError('');
    setWeather(null);

    try {
      const res = await fetch(`/api/weather?city=${city}`);
      const data = await res.json();

      if (res.ok) {
        setWeather(data);
      } else {
        setError(data.error || 'Terjadi kesalahan');
      }
    } catch (err) {
      setError('Terjadi kesalahan saat mengambil data cuaca');
    }
  };

  return (
    <div>
      <h1>Data Cuaca</h1>
      <input
        type="text"
        placeholder="Masukkan nama kota (Jakarta, Surabaya, Bandung)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Cari Cuaca</button>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {weather && (
        <div>
          <p><strong>Kota:</strong> {weather.city}</p>
          <p><strong>Suhu:</strong> {weather.temperature} °C</p>
          <p><strong>Deskripsi:</strong> {weather.description}</p>
        </div>
      )}
    </div>
  );
}
