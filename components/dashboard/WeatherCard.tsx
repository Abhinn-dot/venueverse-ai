"use client";

import { useEffect, useState } from "react";
import Card from "@/components/common/Card";
import { CloudSun } from "lucide-react";

const weather = [
  {
    temp: "26°C",
    humidity: "61%",
    wind: "11 km/h",
    status: "☀️ Clear",
  },
  {
    temp: "27°C",
    humidity: "63%",
    wind: "10 km/h",
    status: "⛅ Partly Cloudy",
  },
  {
    temp: "25°C",
    humidity: "68%",
    wind: "14 km/h",
    status: "🌦 Light Showers",
  },
  {
    temp: "24°C",
    humidity: "73%",
    wind: "18 km/h",
    status: "🌧 Rain Expected",
  },
  {
    temp: "26°C",
    humidity: "60%",
    wind: "9 km/h",
    status: "☀️ Clear Again",
  },
];

export default function WeatherCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % weather.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const current = weather[index];

  return (
    <Card>
      <div className="flex items-center gap-2">
        <CloudSun className="text-cyan-400" size={22} />

        <h3 className="text-lg font-semibold">
          Match Conditions
        </h3>
      </div>

      <p className="mt-5 text-4xl font-bold">
        {current.temp}
      </p>

      <div className="mt-4 space-y-1 text-gray-400">
        <p>Humidity: {current.humidity}</p>
        <p>Wind: {current.wind}</p>
      </div>

      <p className="mt-4 text-cyan-300 font-medium">
        {current.status}
      </p>
    </Card>
  );
}