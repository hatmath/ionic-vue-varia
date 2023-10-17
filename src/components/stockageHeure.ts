

import { Storage } from '@capacitor/storage'; 

export function stockageHeure() { 
    const setHeure = async (): Promise<string> => { 
        const heure = String(new Date().toLocaleString());
        await Storage.set({ 
            key: 'heure', 
            value: heure, 
        }); 
        return (await getHeure()); 
    };
    const getHeure = async (): Promise<string> => {
        const { value } = await Storage.get({ key: 'heure' }); 
        console.log(`Heure: ${value}`);

        

        return(String(value)); 
    }; 
    return { 
        setHeure, 
        getHeure, 
    }; 
}

