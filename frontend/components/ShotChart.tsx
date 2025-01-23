import { useEffect, useRef, useCallback } from 'react';

interface Shot {
  loc_x: number; // X-coordinate of the shot (in feet, relative to court center)
  loc_y: number; // Y-coordinate of the shot (in feet, relative to court center)
  shot_made_flag: number; // Whether the shot was made
}

interface ShotChartProps {
  color?: string; // Color of court lines
  lineWidth?: number; // Width of court lines
  outerLines?: boolean; // Whether to draw outer boundary lines
  data: Shot[]; // Array of shot data
}

export function ShotChart({
  color = 'black',
  lineWidth = 1.5,
  outerLines = false, // Draw outer lines by default
  data,
}: ShotChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Memoize the drawCourt function
  const drawCourt = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;

    const scale = canvasRef.current!.width / 500; // Scale factor for converting feet to canvas units
    // Draw the hoop
    ctx.scale(1, -1);

    // Hoop
    ctx.beginPath();
    ctx.arc(0, 210, 7.5 * scale, 0, 2 * Math.PI); // Hoop has a 7.5-inch radius
    ctx.stroke();

    // Draw the backboard (corrected position)
    ctx.beginPath();
    ctx.moveTo(-30 * scale, 220 * scale);  // Changed y-coordinate to be above the hoop
    ctx.lineTo(30 * scale, 220 * scale);   // Changed y-coordinate to be above the hoop
    ctx.stroke();

    // Draw the paint (outer and inner boxes)
    ctx.strokeRect(-80 * scale, 47.5 * scale, 160 * scale, 190 * scale); // Outer box
    ctx.strokeRect(-60 * scale, 47.5 * scale, 120 * scale, 190 * scale); // Inner box

    // Free throw top arc
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.arc(0, 50 * scale, 60 * scale, 0, Math.PI); // Top arc
    ctx.stroke();
    ctx.setLineDash([]);

    // Free throw bottom arc (dashed)
    ctx.beginPath();
    ctx.arc(0, 50 * scale, 60 * scale, Math.PI, 2 * Math.PI); // Bottom arc
    ctx.stroke();

    ctx.scale(1, -1);

    // Restricted zone
    ctx.beginPath();
    ctx.arc(0, -220, 40 * scale, 0, Math.PI); // 4-ft radius
    ctx.stroke();

     // Three point
    // Left corner three
    ctx.beginPath();
    ctx.moveTo(-220 * scale, -109* scale);
    ctx.lineTo(-220 * scale, -250 * scale);
    ctx.stroke();

    // Right corner three
    ctx.beginPath();
    ctx.moveTo(220, -109);
    ctx.lineTo(220, -250);
    ctx.stroke();

    // Three-point arc
    ctx.beginPath();
    ctx.arc(0, -200, 237.5 * scale, (Math.PI * 22) / 180 , (Math.PI * 158) / 180); // 23.9 feet from the hoop
    ctx.stroke();

    ctx.scale(1, -1);
    // Add top circles
    // Center circle
    ctx.beginPath();
    ctx.arc(0, -240 * (canvasRef.current!.width / 500), 60 * (canvasRef.current!.width / 500), 0, 2 * Math.PI);
    ctx.stroke();

    // Top free throw circle
    ctx.beginPath();
    ctx.arc(0, -240 * (canvasRef.current!.width / 500), 20 * (canvasRef.current!.width / 500), 0, 2 * Math.PI);
    ctx.stroke();

    // Outer boundary lines
    if (outerLines) {
      ctx.strokeRect(-250 * scale, -47.5 * scale, 500 * scale, 470 * scale);
    }

    ctx.restore();
  }, [color, lineWidth, outerLines]); // `drawCourt` is now memoized with `color` and `lineWidth` as dependencies

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Move origin to bottom center of the canvas instead of center
    ctx.translate(canvas.width / 2, canvas.height / 2);
    
    // Draw the basketball court
    drawCourt(ctx);

    // Draw the shots on the court
    drawShots(ctx, data);

    // Reset transformation
    ctx.resetTransform();
  }, [data, drawCourt]); // Ensure `data` and `drawCourt` are included in the dependency array

  function drawShots(ctx: CanvasRenderingContext2D, data: Shot[]) {
    const scale = canvasRef.current!.width / 500;

    data.forEach(shot => {
      const x = shot.loc_x * scale;
      const y = shot.loc_y * scale - 210;

      const shotMade = shot.shot_made_flag === 1;

      // Fill the shot with the appropriate color
      ctx.fillStyle = shotMade ? 'green' : 'red';

      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fill();

      // Draw an outline for visibility
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 1;
      ctx.stroke();
    });
  }

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center',
      height: 'auto'
    }}>
      <canvas
        ref={canvasRef}
        width={500}
        height={480}
        style={{
          width: '500px',
          height: '480px',
          borderRadius: '0.75rem',
          border: '1px solid hsl(var(--border))',
          backgroundColor: 'hsl(var(--card))',
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'
        }}
      />
    </div>
  );
}
