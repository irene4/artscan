import React, {useRef, useEffect} from 'react';

interface CanvasProps {
    imageURL: string;
}

function Canvas(prop: CanvasProps) {

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const ctxRef = useRef<any>(null);
    let style = {}

    useEffect(() => {
        if(canvasRef.current){
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            
            let img = new Image();
            img.onload = function(){
                canvas.width = img.width;
                canvas.height = img.height;
                canvas.style.height = '80vh';
                //canvas.style.width = `${window.innerWidth}px`;
                //canvas.style.height = `${window.innerHeight}px`;

                context?.drawImage(img, 0, 0, img.width, img.height);
            }
            img.src = prop.imageURL;
            ctxRef.current = context;
        }
    }, [])

    return (
        <canvas ref={canvasRef} />
    );
}

export default Canvas;