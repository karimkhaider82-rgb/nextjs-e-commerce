export default function Home() {
  return (
    <main dir="rtl" style={{fontFamily: 'system-ui', background: '#fffaf3', minHeight: '100vh', padding: '20px'}}>
      <header style={{background: 'white', padding: '15px', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1 style={{fontWeight: '900', fontSize: '22px'}}>FINORA<span style={{color: '#f97316'}}>.STORE</span></h1>
        <span style={{background: 'black', color: 'white', padding: '8px 15px', borderRadius: '20px', fontSize: '12px'}}>توصيل مجاني</span>
      </header>

      <div style={{marginTop: '30px'}}>
        <h2 style={{fontSize: '32px', fontWeight: '900', lineHeight: '1.2'}}>أكل صحي بلا زيت، بلا تعب</h2>
        <p style={{color: '#666', marginTop: '10px'}}>قلايات هوائية أصلية - الدفع عند الاستلام</p>
      </div>

      <div style={{background: 'white', borderRadius: '25px', padding: '15px', marginTop: '20px', border: '1px solid #eee'}}>
        <img src="https://images.unsplash.com/photo-1585515656557-1bda4687e8f3?w=600" style={{width: '100%', borderRadius: '20px', height: '280px', objectFit: 'cover'}} />
        <h3 style={{fontWeight: 'bold', fontSize: '20px', marginTop: '15px'}}>Air Fryer 8L الصحية</h3>
        <div style={{display: 'flex', gap: '10px', marginTop: '8px'}}>
          <span style={{fontSize: '24px', fontWeight: '900', color: '#f97316'}}>599 درهم</span>
          <span style={{textDecoration: 'line-through', color: '#aaa'}}>899 درهم</span>
        </div>
        <a href="https://jmia.io/ ضع-رابطك-هنا" target="_blank" style={{display: 'block', textAlign: 'center', background: 'black', color: 'white', padding: '16px', borderRadius: '30px', marginTop: '15px', fontWeight: 'bold', textDecoration: 'none'}}>
          اطلب الآن - الدفع عند الاستلام
        </a>
      </div>

      <footer style={{textAlign: 'center', padding: '30px', color: '#999', fontSize: '12px'}}>
        © 2026 FINORA-STORE - متجر فابور ما كيتحبسش
      </footer>
    </main>
  );
}
