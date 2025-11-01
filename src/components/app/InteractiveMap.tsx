import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface InteractiveMapProps {
  onMapClick: (lat: number, lng: number, cityName?: string, countryName?: string) => void;
  pins: Array<{
    id: string;
    latitude: number;
    longitude: number;
    title: string;
    type: string;
  }>;
  onPinClick: (pin: any) => void;
}

export const InteractiveMap = ({ onMapClick, pins, onPinClick }: InteractiveMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (map.current) return; // Já inicializado
    if (!mapContainer.current) return;

    // Token do Mapbox
    mapboxgl.accessToken = "pk.eyJ1IjoiZmVycGFpeGFvIiwiYSI6ImNtaGZqamttbjA2Y20ya3BuMzhsNWYybnIifQ.-7jjcXx_PBw-vcVNUu36lQ";

    // Criar mapa
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-46.6333, -23.5505], // São Paulo
      zoom: 2
    });

    // Adicionar controles
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Quando carregar
    map.current.on("load", () => {
      console.log("Mapa carregado!");
      setIsLoaded(true);
    });

    // Clique no mapa
    map.current.on("click", (e) => {
      const { lng, lat } = e.lngLat;
      onMapClick(lat, lng);
    });

    // Cleanup
    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  // Renderizar pins
  useEffect(() => {
    if (!map.current || !isLoaded) return;

    // Limpar pins antigos
    const markers: mapboxgl.Marker[] = [];

    pins.forEach((pin) => {
      // Criar elemento customizado para o pin
      const el = document.createElement("div");
      el.style.width = "30px";
      el.style.height = "30px";
      el.style.cursor = "pointer";
      
      const color = pin.type === 'idioma' ? '#10b981' : 
                    pin.type === 'vida' ? '#3b82f6' : '#f59e0b';
      
      el.innerHTML = `
        <svg width="30" height="30" viewBox="0 0 24 24" fill="${color}">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      `;

      el.addEventListener("click", (e) => {
        e.stopPropagation();
        onPinClick(pin);
      });

      const marker = new mapboxgl.Marker(el)
        .setLngLat([pin.longitude, pin.latitude])
        .addTo(map.current!);

      markers.push(marker);
    });

    return () => {
      markers.forEach(m => m.remove());
    };
  }, [pins, isLoaded, onPinClick]);

  return (
    <div 
      ref={mapContainer} 
      style={{ 
        width: "100%", 
        height: "100%",
        minHeight: "500px"
      }}
    />
  );
};
