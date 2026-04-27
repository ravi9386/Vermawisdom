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
    if (code === 2 || code === 3) return <Cloud className="w-8 h-8 text-gray-400" />;
    if (code >= 45) return <CloudRain className="w-8 h-8 text-blue-400" />;
    return <Sun className="w-8 h-8 text-yellow-400" />;
  };

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900 dark:to-blue-900 p-6 rounded-lg border border-cyan-200 dark:border-cyan-700">
        <div className="animate-pulse text-center">
          <div className="h-8 bg-cyan-300 rounded w-32 mx-auto mb-2"></div>
        </div>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900 dark:to-blue-900 p-6 rounded-lg border border-cyan-200 dark:border-cyan-700">
        <p className="text-sm text-gray-600 dark:text-gray-300">Weather unavailable</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900 dark:to-blue-900 p-6 rounded-lg border border-cyan-200 dark:border-cyan-700 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-300 uppercase tracking-wider">
            Weather
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{weather.location}</p>
        </div>
        {getWeatherIcon(weather.weatherCode)}
      </div>

      <div className="mb-4">
        <p className="text-3xl font-bold text-cyan-700 dark:text-cyan-300">{weather.temperature}°F</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2 bg-white dark:bg-cyan-800 rounded p-3">
          <Wind className="w-4 h-4 text-indigo-500" />
          <div>
            <p className="text-xs text-gray-600 dark:text-gray-300">Wind</p>
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{weather.windSpeed} mph</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-white dark:bg-cyan-800 rounded p-3">
          <Droplets className="w-4 h-4 text-blue-500" />
          <div>
            <p className="text-xs text-gray-600 dark:text-gray-300">Humidity</p>
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{weather.humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
