import { ReactNode, forwardRef, useEffect, useRef } from 'react';

interface MapPinProps {
  children: ReactNode;
}

const MapPin = forwardRef<HTMLDivElement, MapPinProps>(function MapPin(
  { children },
  ref,
) {
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof ref === 'function') {
      if (myRef.current) {
        const initPin = new google.maps.marker.PinElement({
          background: '#db4455',
          borderColor: '#881824',
        });
        myRef?.current.appendChild(initPin.element);
        ref(myRef.current);

        return () => {
          myRef.current?.removeChild(initPin.element);
        };
      }
    }
  }, []);

  return <div ref={myRef}>{children}</div>;
});

export default MapPin;
