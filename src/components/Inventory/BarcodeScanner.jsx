import { useEffect, useRef } from 'react';
import Quagga from 'quagga';

export default function BarcodeScanner({ onDetected }) {
    const scannerRef = useRef(null);

    useEffect(() => {
        Quagga.init({
            inputStream: {
                name: "Live",
                type: "LiveStream",
                target: scannerRef.current,
                constraints: {
                    facingMode: "environment"
                },
            },
            decoder: {
                readers: ["ean_reader", "ean_8_reader", "code_128_reader"]
            }
        }, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            Quagga.start();
        });

        Quagga.onDetected((result) => {
            onDetected(result.codeResult.code);
        });

        return () => {
            Quagga.stop();
        };
    }, [onDetected]);

    return (
        <div ref={scannerRef} className="w-full h-64 relative overflow-hidden rounded-lg" />
    );
}
