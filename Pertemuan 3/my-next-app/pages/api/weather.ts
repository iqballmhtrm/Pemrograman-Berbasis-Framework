export default async function handler(req, res) {
    const { city } = req.query; // Ambil nama kota dari query
  
    // Koordinat beberapa kota (bisa ditambah)
    const cities = {
      jakarta: { lat: -6.2088, lon: 106.8456 },
      surabaya: { lat: -7.2575, lon: 112.7521 },
      bandung: { lat: -6.9147, lon: 107.6098 }
    };
  
    // Cek apakah kota ada di daftar
    if (!cities[city.toLowerCase()]) {
      return res.status(404).json({ error: "Kota tidak ditemukan" });
    }
  
    const { lat, lon } = cities[city.toLowerCase()];
  
    // Panggil API Open-Meteo
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      res.status(200).json({
        city,
        temperature: data.current_weather.temperature,
        description: "Cerah/Berawan" // Open-Meteo tidak punya deskripsi cuaca
      });
    } catch (error) {
      res.status(500).json({ error: "Gagal mengambil data cuaca" });
    }
  }
  