export interface Location {
  id: number;
  name: string;
  path: string;
  zone: string;
}

export interface InfectionStage {
  label: string;
  percent: string;
  path: string;
  isSpoiler: boolean;
  isEvent: boolean;
}

export interface Ending {
  label: string;
  path: string;
  isEnding: boolean;
}
