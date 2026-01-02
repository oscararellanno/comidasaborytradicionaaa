function App() {
  return (
    <div className="min-h-screen bg-white">
      
  {/* Header */}
  <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        
        <span className="text-xl font-bold text-gray-900">AAA</span>
      </div>
      <nav className="hidden md:flex gap-8">
        
        
        
        
        
      </nav>
      <button 
        className="px-5 py-2 rounded-full text-white font-medium transition-transform hover:scale-105"
        style={{ backgroundColor: '#EF4444' }}
      >
        Contáctanos
      </button>
    </div>
  </header>
      
  {/* Hero */}
  <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    <div 
      className="absolute inset-0 opacity-10"
      style={{ 
        background: 'radial-gradient(circle at 30% 50%, #EF4444 0%, transparent 50%), radial-gradient(circle at 70% 50%, #F97316 0%, transparent 50%)'
      }}
    />
    <div className="container mx-auto px-6 text-center relative z-10">
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
        Sabores que enamoran
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
        Una experiencia gastronómica única en cada bocado
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <button 
          className="px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 shadow-lg"
          style={{ backgroundColor: '#EF4444' }}
        >
          Comenzar Ahora
        </button>
        <button 
          className="px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 border-2"
          style={{ borderColor: '#EF4444', color: '#EF4444' }}
        >
          Saber Más
        </button>
      </div>
    </div>
  </section>
      
      
  {/* Sobre Nosotros */}
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre Nosotros</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            
          </p>
          <button 
            className="px-6 py-3 rounded-full text-white font-medium transition-transform hover:scale-105"
            style={{ backgroundColor: '#EF4444' }}
          >
            Conoce más
          </button>
        </div>
        <div 
          className="h-96 rounded-2xl"
          style={{ 
            background: 'linear-gradient(135deg, #EF444440 0%, #F9731640 100%)'
          }}
        />
      </div>
    </div>
  </section>
      
      
      
      
  {/* Footer */}
  <footer className="py-12 bg-gray-900 text-white">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          
          <span className="text-lg font-bold">AAA</span>
        </div>
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} AAA. Todos los derechos reservados.
        </p>
        <div className="flex gap-4">
          {['facebook', 'instagram', 'twitter'].map((social) => (
            <a key={social} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <span className="sr-only">{social}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default App
