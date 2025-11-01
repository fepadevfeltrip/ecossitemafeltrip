import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

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
  
  const token = "pk.eyJ1IjoiZmVycGFpeGFvIiwiYSI6ImNtaGZqamttbjA2Y20ya3BuMzhsNWYybnIifQ.-7jjcXx_PBw-vcVNUu36lQ";

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    console.log("🗺️ Inicializando mapa Mapbox...");
    
    mapboxgl.accessToken = token;

    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [-46.633, -23.55],
        zoom: 2,
      });

      console.log("✓ Mapa criado");

      // Adicionar controles de navegação
      map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

      // Adicionar busca oficial do Mapbox
      const geocoder = new MapboxGeocoder({
        accessToken: token,
        mapboxgl: mapboxgl,
        marker: false,
        placeholder: "Buscar cidade ou endereço...",
        language: "pt-BR"
      });
      
      map.current.addControl(geocoder);

      map.current.on("load", () => {
        console.log("✓ Mapa carregado");
        setMapLoaded(true);
      });

      map.current.on("error", (e) => {
        console.error("❌ Erro no Mapbox:", e);
      });

      // Quando buscar, oferecer adicionar pin
      geocoder.on("result", (e) => {
        const { center, place_name, context } = e.result;
        const [lng, lat] = center;
        
        let cityName = "";
        let countryName = "";
        
        if (context) {
          context.forEach((ctx: any) => {
            if (ctx.id.startsWith("place")) cityName = ctx.text;
            if (ctx.id.startsWith("country")) countryName = ctx.text;
          });
        }
        
        setTimeout(() => {
          onMapClick(lat, lng, cityName || place_name, countryName);
        }, 1000);
      });

      // Clique no mapa
      map.current.on("click", async (e) => {
        const { lng, lat } = e.lngLat;
        
        try {
          const response = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${token}`
          );
          const data = await response.json();
          
          let cityName = "";
          let countryName = "";
          
          if (data.features && data.features.length > 0) {
            const feature = data.features[0];
            feature.context?.forEach((ctx: any) => {
              if (ctx.id.startsWith("place")) cityName = ctx.text;
              if (ctx.id.startsWith("country")) countryName = ctx.text;
            });
            
            if (!cityName && feature.place_type?.includes("place")) {
              cityName = feature.text;
            }
          }
          
          onMapClick(lat, lng, cityName, countryName);
        } catch (error) {
          console.error("Erro ao obter localização:", error);
          onMapClick(lat, lng);
        }
      });

    } catch (error) {
      console.error("❌ Erro ao criar mapa:", error);
    }

    return () => {
      markers.current.forEach(marker => marker.remove());
      map.current?.remove();
    };
  }, []);

  // Atualizar pins
  useEffect(() => {
    if (!map.current || !mapLoaded) return;

    markers.current.forEach(marker => marker.remove());
    markers.current = [];

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
    <div 
      ref={mapContainer} 
      className="w-full h-full"
      style={{ minHeight: "100%" }}
    />
  );
};
