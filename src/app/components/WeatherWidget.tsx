import { useEffect, useState } from "react";
import { Cloud, CloudRain, Sun, Wind, Droplets } from "lucide-react";

interface WeatherData {
  temperature: number;
  weatherCode: number;
  windSpeed: number;
  humidity: number;
  location: string;
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Get user's location or use default
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&temperature_unit=fahrenheit"
        );
        const data = await response.json();
        const current = data.current;

        setWeather({
          temperature: Math.round(current.temperature_2m),
          weatherCode: current.weather_code,
          windSpeed: Math.round(current.wind_speed_10m),
          humidity: current.relative_humidity_2m,
          location: "New York, NY",
        });
      } catch (error) {
        console.error("Failed to fetch weather:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherIcon = (code: number) => {
    if (code === 0 || code === 1) return <Sun className="w-8 h-8 text-yellow-400" />;
    if (code === 2 || code === 3) return <Cloud className="w-8 h-8 text-muted-foreground" />;
    if (code >= 45) return <CloudRain className="w-8 h-8 text-accent-teal" />;
    return <Sun className="w-8 h-8 text-yellow-400" />;
  };

  if (loading) {
    return (
      <div className="bg-muted p-6 rounded-lg border border-border">
        <div className="animate-pulse text-center">
          <div className="h-8 bg-primary/40 rounded w-32 mx-auto mb-2"></div>
        </div>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="bg-muted p-6 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground dark:text-muted-foreground">Weather unavailable</p>
      </div>
    );
  }

  return (
    <div className="bg-muted p-6 rounded-lg border border-border shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs font-semibold text-primary dark:text-cyan-300 uppercase tracking-wider">
            Weather
          </p>
          <p className="text-sm text-muted-foreground dark:text-muted-foreground mt-1">{weather.location}</p>
        </div>
        {getWeatherIcon(weather.weatherCode)}
      </div>

      <div className="mb-4">
        <p className="text-3xl font-bold text-primary dark:text-cyan-300">{weather.temperature}°F</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2 bg-card rounded p-3">
          <Wind className="w-4 h-4 text-accent-teal" />
          <div>
            <p className="text-xs text-muted-foreground dark:text-muted-foreground">Wind</p>
            <p className="text-sm font-semibold text-foreground dark:text-gray-100">{weather.windSpeed} mph</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-card rounded p-3">
          <Droplets className="w-4 h-4 text-accent-teal" />
          <div>
            <p className="text-xs text-muted-foreground dark:text-muted-foreground">Humidity</p>
            <p className="text-sm font-semibold text-foreground dark:text-gray-100">{weather.humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
