import * as alt from 'alt-shared';

export interface iTunerSync {
    spoiler: number ;   
    fbumper: number ;   
    rbumper: number ;   
    sskirt: number ;    
    exhaust: number ;   
    frame: number ;     
    grille: number ;    
    hood: number ;      
    lwing: number ;     
    rwing: number ;     
    roof: number ;       
    engine: number ;     
    brakes: number ;     
    trans: number ;      
    horns: number ;      
    suspension: number ; 
    armor: number ;      
    turbo: number ;      
    xenon: number ;        
    plateh: number ;     
    platev: number ;     
    trimdesign: number ; 
    ornaments: number ;  
    dialdesign: number ; 
    doorint: number ;    
    seats: number ;      
    steeringw: number ;  
    shiftlever: number ; 
    plaques: number ;    
    hydraulics: number ; 
    engineb: number ;    
    airfilter: number ;  
    strutbar: number ;   
    archcover: number ;  
    antenna: number ;    
    exteriorp: number ;  
    tank: number ;       
    door: number ;       
    wroh: number ;       
    stickers: number ;   
    plate: number ;      
    windowtint: number ; 
    wheelcamber: number ;
    wheelheight: number ;
    wheelrimradius: number ;
    wheeltrackwidth: number ;
    wheeltyreradius: number ;
    wheeltyrewidth: number ;
    wheelid: number ;
    wheeltype: number ;
    getModsCountType: number;
}

export interface ITuner {
    uid: string;
    cost: number;
    vertices: Array<alt.IVector3>;
}
