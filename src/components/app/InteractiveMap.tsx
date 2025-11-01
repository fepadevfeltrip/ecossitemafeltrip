import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapPin } from "lucide-react";

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
  const markers = useRef<mapboxgl.Marker[]>([]);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    const token = import.meta.env.VITE_MAPBOX_PUBLIC_TOKEN;
    if (!token) {
      console.error("MAPBOX_PUBLIC_TOKEN não configurado");
      return;
    }

    mapboxgl.accessToken = token;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-46.633, -23.55], // São Paulo como centro inicial
      zoom: 2,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.current.on("load", () => {
      setMapLoaded(true);
    });

    map.current.on("click", async (e) => {
      const { lng, lat } = e.lngLat;
      
      // Tentar obter nome da cidade usando geocoding reverso
      try {
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${token}`
        );
        const data = await response.json();
        
        let cityName = "";
        let countryName = "";
        
        if (data.features && data.features.length > 0) {
          const feature = data.features[0];
          // Extrair cidade e país do contexto
          feature.context?.forEach((ctx: any) => {
            if (ctx.id.startsWith("place")) cityName = ctx.text;
            if (ctx.id.startsWith("country")) countryName = ctx.text;
          });
          
          // Se não encontrou no contexto, usar o place_name
          if (!cityName && feature.place_type?.includes("place")) {
            cityName = feature.text;
          }
        }
        
        onMapClick(lat, lng, cityName, countryName);
      } catch (error) {
        console.error("Erro ao obter nome da cidade:", error);
        onMapClick(lat, lng);
      }
    });

    return () => {
      markers.current.forEach(marker => marker.remove());
      map.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    // Remover marcadores antigos
    markers.current.forEach(marker => marker.remove());
    markers.current = [];

    // Adicionar novos marcadores
    pins.forEach((pin) => {
      const el = document.createElement("div");
      el.className = "custom-marker";
      el.innerHTML = `
        <svg width="32" height="32" viewBox="0 0 24 24" fill="${
          pin.type === 'idioma' ? '#10b981' : 
          pin.type === 'vida' ? '#3b82f6' : 
          '#f59e0b'
        }" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" stroke="white" stroke-width="2"/>
          <circle cx="12" cy="10" r="3" fill="white"/>
        </svg>
      `;
      el.style.cursor = "pointer";
      
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        onPinClick(pin);
      });

      const marker = new mapboxgl.Marker(el)
        .setLngLat([pin.longitude, pin.latitude])
        .addTo(map.current!);

      markers.current.push(marker);
    });
  }, [pins, mapLoaded, onPinClick]);

  return (
    <div ref={mapContainer} className="absolute inset-0 w-full h-full rounded-lg" />
  );
};
