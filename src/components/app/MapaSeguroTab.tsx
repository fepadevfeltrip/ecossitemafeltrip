export const MapaSeguroTab = () => {
  return (
    <div className="flex-1 overflow-y-auto p-6 pb-24">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-foreground">Mapa de Segurança Relacional na Cidade</h2>
          <p className="text-sm text-muted-foreground">
            Zonas de acolhimento e atenção no Rio de Janeiro
          </p>
        </div>

        {/* Mock Map */}
        <div className="bg-muted/20 rounded-lg border border-border overflow-hidden" style={{ height: '500px' }}>
          <div className="relative w-full h-full bg-gradient-to-br from-blue-100 to-green-50">
            {/* Mock map background */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, #ccc 0px, #ccc 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #ccc 0px, #ccc 1px, transparent 1px, transparent 40px)'
            }} />
            
            {/* Green pins (Zonas de Acolhimento) */}
            <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse" />
            <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse" />
            <div className="absolute top-2/3 left-2/3 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse" />
            
            {/* Yellow pins (Zonas de Atenção) */}
            <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-yellow-500 rounded-full border-2 border-white shadow-lg" />
            <div className="absolute bottom-1/4 left-1/2 w-6 h-6 bg-yellow-500 rounded-full border-2 border-white shadow-lg" />
          </div>
        </div>

        {/* Legend */}
        <div className="bg-card rounded-lg border border-border p-4 space-y-3">
          <h3 className="font-semibold text-foreground">Legenda</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-500 rounded-full border border-white shadow" />
              <span className="text-sm text-foreground">Zonas de Acolhimento (Verde)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-yellow-500 rounded-full border border-white shadow" />
              <span className="text-sm text-foreground">Zonas de Atenção (Amarelo)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
