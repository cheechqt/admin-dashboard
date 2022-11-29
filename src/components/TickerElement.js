import styled from "@emotion/styled"
import { useEffect, useState, useRef, useCallback } from "react";

const TE = styled('div')(({x}) => ({
    position: 'absolute',
    left: 0,
    top: 0,
    transform: `translate(${x}px)`
}));

const speed = 10;
export default function TickerElement(props) {

    const childRef = useRef();
    const {
        children,
        parentRect
    } = props;
    const progressRef = useRef(parentRect.width);
    const [position, setPosition] = useState({
        from: parentRect.width,
        to: 0
    });

    const raf = useRef();
    const [tx, setTx] = useState(parentRect.width);
    let prevTimestamp = useRef();

    const step = (timestamp) => {
        const shouldFinish = () => {            
            return progressRef.current < position.to;
        };
        if( prevTimestamp.current !== timestamp ) {
            const progress = prevTimestamp.current ? timestamp - prevTimestamp.current : 0;                
            progressRef.current = Math.round(progressRef.current - (progress / 100 * speed));
            setTx( progressRef.current );
        }
        
        if( shouldFinish() ) {
            progressRef.current = parentRect.width;            
        } 
        prevTimestamp.current = timestamp;                        
        raf.current = window.requestAnimationFrame(step);                
    }

    useEffect(() => {
        setPosition({
            ...position,
            to: -childRef.current.getBoundingClientRect().width
        })
        
        raf.current = window.requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf.current);
    },[childRef]);


    return (
        <TE ref={childRef} x={tx} >

            {children}
        </TE>

    )
}