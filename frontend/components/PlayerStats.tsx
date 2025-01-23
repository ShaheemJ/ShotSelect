import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PlayerStats {
  playerid: string;
  player: string;
  age: number;
  team: string;
  pos: string;
  g: number;
  gs: number;
  mp: number;
  fg: number;
  fga: number;
  fg_percent: number;
  threep: number;
  threepa: number;
  threep_percent: number;
  twop: number;
  twopa: number;
  twop_percent: number;
  efg_percent: number;
  ft: number;
  fta: number;
  ft_percent: number;
  orb: number;
  drb: number;
  trb: number;
  ast: number;
  stl: number;
  blk: number;
  tov: number;
  pf: number;
  pts: number;
}

interface PlayerStatsProps {
  stats?: PlayerStats;
}

export function PlayerStats({ stats }: PlayerStatsProps) {
  const displayStats = stats || {
    playerid: "default_id",
    player: "Player Name",
    age: 0,
    team: "Team",
    pos: "POS",
    g: 0,
    gs: 0,
    mp: 0,
    fg: 0,
    fga: 0,
    fg_percent: 0,
    threep: 0,
    threepa: 0,
    threep_percent: 0,
    twop: 0,
    twopa: 0,
    twop_percent: 0,
    efg_percent: 0,
    ft: 0,
    fta: 0,
    ft_percent: 0,
    orb: 0,
    drb: 0,
    trb: 0,
    ast: 0,
    stl: 0,
    blk: 0,
    tov: 0,
    pf: 0,
    pts: 0,
  };

  const safeNumber = (value: number | undefined) => (typeof value === "number" ? value.toFixed(1) : "N/A");
  const safePercentage = (value: number | undefined) =>
    typeof value === "number" ? `${(value * 100).toFixed(1)}%` : "N/A";

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{`${displayStats.player} - ${displayStats.team}`}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <StatItem label="Position" value={displayStats.pos} />
          <StatItem label="Age" value={displayStats.age} />
          <StatItem label="Games Played" value={displayStats.g} />
          <StatItem label="Games Started" value={displayStats.gs} />
          <StatItem label="Minutes Per Game" value={safeNumber(displayStats.mp)} />
          <StatItem label="Points" value={safeNumber(displayStats.pts)} />
          <StatItem label="Rebounds" value={safeNumber(displayStats.trb)} />
          <StatItem label="Assists" value={safeNumber(displayStats.ast)} />
          <StatItem label="Steals" value={safeNumber(displayStats.stl)} />
          <StatItem label="Blocks" value={safeNumber(displayStats.blk)} />
          <StatItem label="FG%" value={safePercentage(displayStats.fg_percent)} />
          <StatItem label="3P%" value={safePercentage(displayStats.threep_percent)} />
          <StatItem label="2P%" value={safePercentage(displayStats.twop_percent)} />
          <StatItem label="FT%" value={safePercentage(displayStats.ft_percent)} />
          <StatItem label="eFG%" value={safePercentage(displayStats.efg_percent)} />
          <StatItem label="Turnovers" value={safeNumber(displayStats.tov)} />
          <StatItem label="Personal Fouls" value={safeNumber(displayStats.pf)} />
        </div>
      </CardContent>
    </Card>
  );
}

function StatItem({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-lg font-semibold text-gray-900">{value}</dd>
    </div>
  );
}
