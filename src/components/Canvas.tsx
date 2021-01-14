import React, {useRef, useEffect} from 'react';

    interface CanvasProps {
        imgURL: string;
    }

function Canvas(prop: CanvasProps) {

    const canvasRef = useRef<HTMLCanvasElement>(null);
    // interface Canvas {
    //     imgURL: string;
    // }

    useEffect(() => {
        if(canvasRef.current){
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            canvas.width = 200;
            canvas.height = 200;
            canvas.style.width = "200px";
            canvas.style.height = "200px";
        }
    }, [])

    return (
        <canvas 
            ref={canvasRef}
        />
    );
}

export default Canvas;