import { useEffect, useRef, useState } from 'react';

const WIDTH = 720;
const HEIGHT = 420;

export default function DrawingCanvas({ value, onChange }) {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.lineWidth = 3;
    context.strokeStyle = '#111827';

    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, WIDTH, HEIGHT);

    if (value) {
      const image = new Image();
      image.onload = () => {
        context.drawImage(image, 0, 0, WIDTH, HEIGHT);
      };
      image.src = value;
    }
  }, [value]);

  function getPosition(event) {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    if ('touches' in event && event.touches[0]) {
      return {
        x: ((event.touches[0].clientX - rect.left) / rect.width) * WIDTH,
        y: ((event.touches[0].clientY - rect.top) / rect.height) * HEIGHT,
      };
    }

    return {
      x: ((event.clientX - rect.left) / rect.width) * WIDTH,
      y: ((event.clientY - rect.top) / rect.height) * HEIGHT,
    };
  }

  function startDrawing(event) {
    const context = canvasRef.current.getContext('2d');
    const { x, y } = getPosition(event);
    context.beginPath();
    context.moveTo(x, y);
    setDrawing(true);
  }

  function draw(event) {
    if (!drawing) return;
    const context = canvasRef.current.getContext('2d');
    const { x, y } = getPosition(event);
    context.lineTo(x, y);
    context.stroke();
  }

  function stopDrawing() {
    if (!drawing) return;
    setDrawing(false);
    onChange(canvasRef.current.toDataURL('image/png'));
  }

  function clearCanvas() {
    const context = canvasRef.current.getContext('2d');
    context.clearRect(0, 0, WIDTH, HEIGHT);
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, WIDTH, HEIGHT);
    onChange('');
  }

  return (
    <div className="drawingCanvasWrap" ref={wrapperRef}>
      <canvas
        ref={canvasRef}
        className="drawingCanvas"
        width={WIDTH}
        height={HEIGHT}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
      />
      <div className="drawingToolbar">
        <button type="button" className="ghostButton" onClick={clearCanvas}>
          Clear sketch
        </button>
        <span>Draw with mouse, trackpad, or touch.</span>
      </div>
    </div>
  );
}
