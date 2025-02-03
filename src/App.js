import React, { useState } from 'react';

export default function CantieriApp() {
  console.log("Rendering CantieriApp"); // Log per verificare il rendering

  const [formData, setFormData] = useState({ data: "", operaio: "", cantiere: "", mezzo: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://script.google.com/macros/s/AKfycbw1YmZ87afwL_SedP2HPagM0pXMOqct4XIXlneUujs/dev", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      alert("Dati aggiunti con successo!");
    } else {
      alert("Errore nell'invio dei dati.");
    }
  };

  return (
    <div>
      <h1>Gestione Cantieri</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="data" placeholder="Data" onChange={handleChange} required />
        <input type="text" name="operaio" placeholder="Operaio" onChange={handleChange} required />
        <input type="text" name="cantiere" placeholder="Cantiere" onChange={handleChange} required />
        <input type="text" name="mezzo" placeholder="Mezzo" onChange={handleChange} required />
        <button type="submit">Aggiungi</button>
      </form>
    </div>
  );
}
