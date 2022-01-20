import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
export function capitalizeFirstLetter(payload : string){
    return payload.charAt(0).toUpperCase() + payload.slice(1)
}

export function sizes(payload : string){
    if(payload === 'kids'){
        return [22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
    } else {
        return [35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54]
    }
}

export function useQuery() {
    const { search } = useLocation();
  
    return useMemo(() => new URLSearchParams(search), [search]);
}