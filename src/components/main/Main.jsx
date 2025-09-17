import React, { useState } from 'react';
import './Main.css'



function SoraFeedbackForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !message) {
      alert('Iltimos, barcha maydonlarni to‘ldiring');
      return;
    }
    // Bu yerda API ga yuborish kodini yozishingiz mumkin
    alert('Rahmat, fikringiz qabul qilindi!');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='container'>
    <div className='main'>
            <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: 'auto' }}>
      <input
        type="email"
        placeholder="Emailingiz"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />
      <textarea
        placeholder="Fikringiz yoki shikoyatingiz"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={5}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />
      <button type="submit" style={{ padding: '10px 15px' }}>
        Yuborish
      </button>
    </form>
    </div>
    </div>
  );
}

export default SoraFeedbackForm;
