"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Incident = {
  area: string;
  type: string;
  severity: "LOW" | "MEDIUM" | "HIGH";
  time: string;
};

type IncidentContextType = {
  incident: Incident;
  setIncident: React.Dispatch<React.SetStateAction<Incident>>;
  history: Incident[];
  addIncident: (incident: Incident) => void;
};

const IncidentContext = createContext<
  IncidentContextType | undefined
>(undefined);

export function IncidentProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [incident, setIncident] = useState<Incident>({
    area: "Gate B",
    type: "Normal Operations",
    severity: "LOW",
    time: "",
  });

  const [history, setHistory] = useState<Incident[]>([]);

  useEffect(() => {
    setIncident((prev) => ({
      ...prev,
      time: new Date().toLocaleTimeString(),
    }));
  }, []);

  function addIncident(newIncident: Incident) {
    setIncident(newIncident);

    setHistory((prev) =>
      [newIncident, ...prev].slice(0, 10)
    );
  }

  return (
    <IncidentContext.Provider
      value={{
        incident,
        setIncident,
        history,
        addIncident,
      }}
    >
      {children}
    </IncidentContext.Provider>
  );
}

export function useIncident() {
  const context = useContext(IncidentContext);

  if (!context) {
    throw new Error(
      "useIncident must be used inside IncidentProvider"
    );
  }

  return context;
}