import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api';
import { Tuner_View_Events } from '../../shared/events';
import { ITuner, iTunerSync } from '../../shared/interfaces';
import { TUNER } from './shops';
import { TUNER_LOCALE } from '../../shared/locales';
import { PolygonShape } from '@AthenaServer/extensions/extColshape';
import { SYSTEM_EVENTS } from '@AthenaShared/enums/system';
import { WindowTint } from 'alt-server';
import { VehicleData } from '@AthenaShared/information/vehicles';
import { RGBA } from 'alt-server';
import { callbackify } from 'util';
import { vehicle } from '@AthenaClient/menus';

const shops: Array<ITuner> = [];
const inShop = {};
let test: alt.VehicleModType

class InternalFunctions {

    static updateTuning(vehicle: alt.Vehicle) {
        const vehicleData = Athena.document.vehicle.get(vehicle);
        if (!vehicleData?.tuning) return;
        if (!vehicleData?.state) return;

        vehicle.modKit = 1;

        vehicle.setMod(0, vehicleData.tuning.mods[0].value)
        vehicle.setMod(1, vehicleData.tuning.mods[1].value)
        vehicle.setMod(2, vehicleData.tuning.mods[2].value)
        vehicle.setMod(3, vehicleData.tuning.mods[3].value)
        vehicle.setMod(4, vehicleData.tuning.mods[4].value)
        vehicle.setMod(5, vehicleData.tuning.mods[5].value)
        vehicle.setMod(6, vehicleData.tuning.mods[6].value)
        vehicle.setMod(7, vehicleData.tuning.mods[7].value)
        vehicle.setMod(8, vehicleData.tuning.mods[8].value)
        vehicle.setMod(9, vehicleData.tuning.mods[9].value)
        vehicle.setMod(10, vehicleData.tuning.mods[10].value)
        vehicle.setMod(11, vehicleData.tuning.mods[11].value)
        vehicle.setMod(12, vehicleData.tuning.mods[12].value)
        vehicle.setMod(13, vehicleData.tuning.mods[13].value)
        vehicle.setMod(14, vehicleData.tuning.mods[14].value)
        vehicle.setMod(15, vehicleData.tuning.mods[15].value)
        vehicle.setMod(16, vehicleData.tuning.mods[16].value)
        vehicle.setMod(18, vehicleData.tuning.mods[18].value)
        vehicle.setMod(22, vehicleData.tuning.mods[22].value)
        vehicle.setMod(25, vehicleData.tuning.mods[25].value)
        vehicle.setMod(26, vehicleData.tuning.mods[26].value)
        vehicle.setMod(27, vehicleData.tuning.mods[27].value)
        vehicle.setMod(28, vehicleData.tuning.mods[28].value)
        vehicle.setMod(30, vehicleData.tuning.mods[30].value)
        vehicle.setMod(31, vehicleData.tuning.mods[31].value)
        vehicle.setMod(32, vehicleData.tuning.mods[32].value)
        vehicle.setMod(33, vehicleData.tuning.mods[33].value)
        vehicle.setMod(34, vehicleData.tuning.mods[34].value)
        vehicle.setMod(35, vehicleData.tuning.mods[35].value)
        vehicle.setMod(38, vehicleData.tuning.mods[38].value)
        vehicle.setMod(39, vehicleData.tuning.mods[39].value)
        vehicle.setMod(40, vehicleData.tuning.mods[40].value)
        vehicle.setMod(41, vehicleData.tuning.mods[41].value)
        vehicle.setMod(42, vehicleData.tuning.mods[42].value)
        vehicle.setMod(43, vehicleData.tuning.mods[43].value)
        vehicle.setMod(44, vehicleData.tuning.mods[44].value)
        vehicle.setMod(45, vehicleData.tuning.mods[45].value)
        vehicle.setMod(46, vehicleData.tuning.mods[46].value)
        vehicle.setMod(47, vehicleData.tuning.mods[47].value)
        vehicle.setMod(48, vehicleData.tuning.mods[48].value)
        vehicle.numberPlateIndex = vehicleData.state.numberPlateIndex;
        vehicle.windowTint = vehicleData.state.windowTint;
        vehicle.setStreamSyncedMeta('wheelModCamber', {camber: vehicleData.tuning.stance.camber})
        vehicle.setStreamSyncedMeta('wheelModHeight', {height: vehicleData.tuning.stance.height})
        vehicle.setStreamSyncedMeta('wheelModRimRadius', {rimradius: vehicleData.tuning.stance.rimradius})
        vehicle.setStreamSyncedMeta('wheelModTrackWidth', {trackwidth: vehicleData.tuning.stance.trackwidth})
        vehicle.setStreamSyncedMeta('wheelModTyreRadius', {tyreradius: vehicleData.tuning.stance.tyreradius})
        vehicle.setStreamSyncedMeta('wheelModTyreWidth', {tyrewidth: vehicleData.tuning.stance.tyrewidth})
        vehicle.setWheels(vehicleData.tuning.mods[23].value, vehicleData.tuning.wheelid)
    }

    static previewTuning(
        player: alt.Player,
        spoiler: number = 0 ,
        fbumper: number = 0 ,
        rbumper: number = 0 ,
        sskirt: number = 0 ,
        exhaust: number = 0 ,
        frame: number = 0 ,
        grille: number = 0 ,
        hood: number = 0 ,
        lwing: number = 0 ,
        rwing: number = 0 ,
        roof: number = 0 ,
        engine: number = 0 ,
        brakes: number = 0 ,
        trans: number = 0 ,
        horns: number = 0 ,
        suspension: number = 0 ,
        armor: number = 0 ,
        turbo: number = 0 ,
        xenon: number = 0 ,
        plateh: number = 0 ,
        platev: number = 0 ,
        trimdesign: number = 0 ,
        ornaments: number = 0 ,
        dialdesign: number = 0 ,
        doorint: number = 0 ,
        seats: number = 0 ,
        steeringw: number = 0 ,
        shiftlever: number = 0 ,
        plaques: number = 0 ,
        hydraulics: number = 0 ,
        engineb: number = 0 ,
        airfilter: number = 0 ,
        strutbar: number = 0 ,
        archcover: number = 0 ,
        antenna: number = 0 ,
        exteriorp: number = 0 ,
        tank: number = 0 ,
        door: number = 0 ,
        wroh: number = 0 ,
        stickers: number = 0 ,
        plate: number = 0 ,
        windowtint: number = 0 ,
        wheelcamber: number = 0 ,
        wheelheight: number = 0 ,
        wheelrimradius: number = 0 ,
        wheeltrackwidth: number = 0 ,
        wheeltyreradius: number = 0 ,
        wheeltyrewidth: number = 0 ,
        wheeltype: number = 0 ,
        wheelid: number = 0 ,
    ) {
        if (!inShop[player.id]) {
            return;
        }

        if (!player.vehicle) {
            return;
        }

        if (!player.vehicle.modKit) {
            player.vehicle.modKit = 1;
        }

        // if (spoiler !== 0) {
        //     player.vehicle.setMod(0, spoiler)
        // }
            
        // if (fbumper !== 0) {
        //     player.vehicle.setMod(1, fbumper)
        // }
            
        // if (rbumper !== 0) {
        //     player.vehicle.setMod(2, rbumper)
        // }
            
        // if (sskirt !== 0) {
        //     player.vehicle.setMod(3, sskirt)
        // }
        
        // if (exhaust !== 0) {
        //     player.vehicle.setMod(4, exhaust)
        // }
            
        // if (frame !== 0) {
        //     player.vehicle.setMod(5, frame)
        // }
            
        // if (grille !== 0) {
        //     player.vehicle.setMod(6, grille)
        // }
            
        // if (hood !== 0) {
        //     player.vehicle.setMod(7, hood)
        // }
            
        // if (lwing !== 0) {
        //     player.vehicle.setMod(8, lwing)
        // }
            
        // if (rwing !== 0) {
        //     player.vehicle.setMod(9, rwing)
        // }
            
        // if (roof !== 0) {
        //     player.vehicle.setMod(10, roof)
        // }
            
        // if (engine !== 0) {
        //     player.vehicle.setMod(11, engine)
        // }
            
        // if (brakes !== 0) {
        //     player.vehicle.setMod(12, brakes)
        // }
            
        // if (trans !== 0) {
        //     player.vehicle.setMod(13, trans)
        // }
            
        // if (horns !== 0) {
        //     player.vehicle.setMod(14, horns)
        // }
            
        // if (suspension !== 0) {
        //     player.vehicle.setMod(15, suspension)
        // }
            
        // if (armor !== 0) {
        //     player.vehicle.setMod(16, armor)
        // }
            
        // if (turbo !== 0) {
        //     player.vehicle.setMod(18, turbo)
        // }
            
        // if (xenon !== 0) {
        //     player.vehicle.setMod(22, xenon)
        // }
            
        // if (plateh !== 0) {
        //     player.vehicle.setMod(25, plateh)
        // }
            
        // if (platev !== 0) {
        //     player.vehicle.setMod(26, platev)
        // }
            
        // if (trimdesign !== 0) {
        //     player.vehicle.setMod(27, trimdesign)
        // }
            
        // if (ornaments !== 0) {
        //     player.vehicle.setMod(28, ornaments)
        // }
            
        // if (dialdesign !== 0) {
        //     player.vehicle.setMod(30, dialdesign)
        // }
            
        // if (doorint !== 0) {
        //     player.vehicle.setMod(31, doorint)
        // }
            
        // if (seats !== 0) {
        //     player.vehicle.setMod(32, seats)
        // }
            
        // if (steeringw !== 0) {
        //     player.vehicle.setMod(33, steeringw)
        // }
            
        // if (shiftlever !== 0) {
        //     player.vehicle.setMod(34, shiftlever)
        // }
            
        // if (plaques !== 0) {
        //     player.vehicle.setMod(35, plaques)
        // }
            
        // if (hydraulics !== 0) {
        //     player.vehicle.setMod(38, hydraulics)
        // }
            
        // if (engineb !== 0) {
        //     player.vehicle.setMod(39, engineb)
        // }
            
        // if (airfilter !== 0) {
        //     player.vehicle.setMod(40, airfilter)
        // }
            
        // if (strutbar !== 0) {
        //     player.vehicle.setMod(41, strutbar)
        // }
            
        // if (archcover !== 0) {
        //     player.vehicle.setMod(42, archcover)
        // }
            
        // if (antenna !== 0) {
        //     player.vehicle.setMod(43, antenna)
        // }
            
        // if (exteriorp !== 0) {
        //     player.vehicle.setMod(44, exteriorp)
        // }
            
        // if (tank !== 0) {
        //     player.vehicle.setMod(45, tank)
        // }
            
        // if (door !== 0) {
        //     player.vehicle.setMod(46, door)
        // }
            
        // if (wroh !== 0) {
        //     player.vehicle.setMod(47, wroh)
        // }
            
        // if (stickers !== 0) {
        //     player.vehicle.setMod(48, stickers)
        // }
            
        // if (plate !== 0) {
        //     player.vehicle.numberPlateIndex = plate;
        // }
            
        // if (windowtint !== 0) {
        //     player.vehicle.windowTint = windowtint;
        // }

        const mods = {
            0: spoiler,
            1: fbumper,
            2: rbumper,
            3: sskirt,
            4: exhaust,
            5: frame,
            6: grille,
            7: hood,
            8: lwing,
            9: rwing,
            10: roof,
            11: engine,
            12: brakes,
            13: trans,
            14: horns,
            15: suspension,
            16: armor,
            18: turbo,
            22: xenon,
            25: plateh,
            26: platev,
            27: trimdesign,
            28: ornaments,
            30: dialdesign,
            31: doorint,
            32: seats,
            33: steeringw,
            34: shiftlever,
            35: plaques,
            38: hydraulics,
            39: engineb,
            40: airfilter,
            41: strutbar,
            42: archcover,
            43: antenna,
            44: exteriorp,
            45: tank,
            46: door,
            47: wroh,
            48: stickers,
        };
        
        for (const index in mods) {
            const mod = mods[index];
            if (mod !== 0) {
                const modCount = player.vehicle.getModsCount(Number(index));
                if (mod < modCount) {
                    player.vehicle.setMod(Number(index), mod);
                }
            }
        }
        
        if (plate !== 0) {
            player.vehicle.numberPlateIndex = plate;
        }
        
        if (windowtint !== 0) {
            player.vehicle.windowTint = windowtint;
        }
            
        if (wheelcamber !== 0) {
            player.vehicle.setStreamSyncedMeta('wheelModCamber', {camber: wheelcamber})
        }
            
        if (wheelheight !== 0) {
            player.vehicle.setStreamSyncedMeta('wheelModHeight', {height: wheelheight})
        }
            
        if (wheelrimradius !== 0) {
            player.vehicle.setStreamSyncedMeta('wheelModRimRadius', {rimradius: wheelrimradius})
        }
            
        if (wheeltrackwidth !== 0) {
            player.vehicle.setStreamSyncedMeta('wheelModTrackWidth', {trackwidth: wheeltrackwidth})
        }
            
        if (wheeltyreradius !== 0) {
            player.vehicle.setStreamSyncedMeta('wheelModTyreRadius', {tyreradius: wheeltyreradius})
        }
            
        if (wheeltyrewidth !== 0) {
            player.vehicle.setStreamSyncedMeta('wheelModTyreWidth', {tyrewidth: wheeltyrewidth})
        }

        if (wheeltype !== 0) {
            if (wheelid !== 0) {
                player.vehicle.setWheels(wheeltype, wheelid);
            }
        }

    }
}

export class TunerView {
    static init() {
        for (let i = 0; i < TUNER.length; i++) {
            TunerView.register(TUNER[i]);
        }

        alt.onClient(Tuner_View_Events.PREVIEW_TUNING, InternalFunctions.previewTuning);
        alt.onClient(Tuner_View_Events.OPEN, TunerView.open);
        alt.onClient(Tuner_View_Events.PURCHASE, TunerView.purchase);
        alt.onClient(Tuner_View_Events.CLOSE, TunerView.close);
        Athena.events.vehicle.on('vehicle-spawned', InternalFunctions.updateTuning);
    }

    static close(player: alt.Player) {
        if (!player.vehicle) {
            return;
        }

        InternalFunctions.updateTuning(player.vehicle);
        delete inShop[player.id];
    }

    static register(shop: ITuner): string {
        if (!shop.uid) {
            shop.uid = Athena.utility.hash.sha256Random(JSON.stringify(shop));
        }

        const index = shops.findIndex((x) => x.uid === shop.uid);
        if (index >= 0) {
            console.error(new Error(`Shop with ${shop.uid} is a duplicate.`));
            return null;
        }

        Athena.controllers.blip.append({
            text: TUNER_LOCALE.TUNER_LABEL,
            color: 48,
            sprite: 72,
            scale: 1,
            shortRange: true,
            pos: shop.vertices[0],
            uid: `tuner-${shop.uid}`,
        });

        const polygon = new Athena.extensions.PolygonShape(
            shop.vertices[0].z - 2.5,
            shop.vertices[0].z + 2.5,
            shop.vertices,
            true,
            false,
        );

        Athena.controllers.interaction.append({
            uid: `tuner-${shop.uid}`,
            position: shop.vertices[0],
            description: 'Tune Vehicle Press shift + F4',
            debug: false,
        });

        polygon.addEnterCallback(TunerView.enter);
        polygon.addLeaveCallback(TunerView.leave);
        return shop.uid;
    }

    static enter(polygon: PolygonShape, player: alt.Player) {
        if (!(player instanceof alt.Player)) {
            return;
        }

        if (!player.vehicle) {
            Athena.player.emit.notification(player, TUNER_LOCALE.MUST_BE_IN_A_VEHICLE);
            return;
        }

        if (Athena.vehicle.tempVehicles.has(player.vehicle)) {
            Athena.player.emit.notification(player, TUNER_LOCALE.CANNOT_BE_MODIFIED);
            return;
        }

        if(!player.vehicle.modKit) {
            player.vehicle.modKit = 1;
        }

        if (player.vehicle.driver.id !== player.id) {
            return;
        }

        inShop[player.id] = true;

        Athena.player.emit.sound2D(player, 'shop_enter', 0.5);

        alt.emitClient(player, Tuner_View_Events.OPEN);
    }

    static leave(polygon: PolygonShape, player: alt.Player) {
        if (!(player instanceof alt.Player)) {
            return;
        }

        inShop[player.id] = false;
        delete inShop[player.id];
        alt.emitClient(player, SYSTEM_EVENTS.INTERACTION_TEXT_REMOVE, polygon.uid);
        alt.emitClient(player, SYSTEM_EVENTS.INTERACTION_TEMPORARY, null);
    }

    static open(player: alt.Player) {
        if (!player.vehicle || player.vehicle.driver !== player) {
            return;
        }
        const vehicleData = Athena.document.vehicle.get(player.vehicle);
        if (!vehicleData || Athena.vehicle.tempVehicles.has(player.vehicle)) {
            return;
        }

        const playerData = Athena.document.character.get(player);
        if (vehicleData.owner !== playerData._id) {
            return;
        }

        if (!inShop[player.id]) {
            return;
        }

        if(!player.vehicle.modKit) {
            player.vehicle.modKit = 1;
        }
        
        const syncData: iTunerSync = {
            spoiler: 
                typeof vehicleData.tuning?.mods[0].value === 'number'
                    ? vehicleData.tuning.mods[0].value
                    : 0,
            fbumper: 
                typeof vehicleData.tuning?.mods[1].value === 'number'
                    ? vehicleData.tuning.mods[1].value
                    : 0,
            rbumper: 
                typeof vehicleData.tuning?.mods[2].value === 'number'
                    ? vehicleData.tuning.mods[2].value
                    : 0,
            sskirt: 
                typeof vehicleData.tuning?.mods[3].value === 'number'
                    ? vehicleData.tuning.mods[3].value
                    : 0,
            exhaust: 
                typeof vehicleData.tuning?.mods[4].value === 'number'
                    ? vehicleData.tuning.mods[4].value
                    : 0,
            frame: 
                typeof vehicleData.tuning?.mods[5].value === 'number'
                    ? vehicleData.tuning.mods[5].value
                    : 0,
            grille: 
                typeof vehicleData.tuning?.mods[6].value === 'number'
                    ? vehicleData.tuning.mods[6].value
                    : 0,
            hood: 
                typeof vehicleData.tuning?.mods[7].value === 'number'
                    ? vehicleData.tuning.mods[7].value
                    : 0,
            lwing: 
                typeof vehicleData.tuning?.mods[8].value === 'number'
                    ? vehicleData.tuning.mods[8].value
                    : 0,
            rwing: 
                typeof vehicleData.tuning?.mods[9].value === 'number'
                    ? vehicleData.tuning.mods[9].value
                    : 0,
            roof: 
                typeof vehicleData.tuning?.mods[10].value === 'number'
                    ? vehicleData.tuning.mods[10].value
                    : 0,
            engine: 
                typeof vehicleData.tuning?.mods[11].value === 'number'
                    ? vehicleData.tuning.mods[11].value
                    : 0,
            brakes: 
                typeof vehicleData.tuning?.mods[12].value === 'number'
                    ? vehicleData.tuning.mods[12].value
                    : 0,
            trans: 
                typeof vehicleData.tuning?.mods[13].value === 'number'
                    ? vehicleData.tuning.mods[13].value
                    : 0,
            horns: 
                typeof vehicleData.tuning?.mods[14].value === 'number'
                    ? vehicleData.tuning.mods[14].value
                    : 0,
            suspension: 
                typeof vehicleData.tuning?.mods[15].value === 'number'
                    ? vehicleData.tuning.mods[15].value
                    : 0,
            armor: 
                typeof vehicleData.tuning?.mods[16].value === 'number'
                    ? vehicleData.tuning.mods[16].value
                    : 0,
            turbo: 
                typeof vehicleData.tuning?.mods[18].value === 'number'
                    ? vehicleData.tuning.mods[18].value
                    : 0,
            xenon: 
                typeof vehicleData.tuning?.mods[22].value === 'number'
                    ? vehicleData.tuning.mods[22].value
                    : 0,
            plateh: 
                typeof vehicleData.tuning?.mods[25].value === 'number'
                    ? vehicleData.tuning.mods[25].value
                    : 0,
            platev: 
                typeof vehicleData.tuning?.mods[26].value === 'number'
                    ? vehicleData.tuning.mods[26].value
                    : 0,
            trimdesign: 
                typeof vehicleData.tuning?.mods[27].value === 'number'
                    ? vehicleData.tuning.mods[27].value
                    : 0,
            ornaments: 
                typeof vehicleData.tuning?.mods[28].value === 'number'
                    ? vehicleData.tuning.mods[28].value
                    : 0,
            dialdesign: 
                typeof vehicleData.tuning?.mods[30].value === 'number'
                    ? vehicleData.tuning.mods[30].value
                    : 0,
            doorint: 
                typeof vehicleData.tuning?.mods[31].value === 'number'
                    ? vehicleData.tuning.mods[31].value
                    : 0,
            seats: 
                typeof vehicleData.tuning?.mods[32].value === 'number'
                    ? vehicleData.tuning.mods[32].value
                    : 0,
            steeringw: 
                typeof vehicleData.tuning?.mods[33].value === 'number'
                    ? vehicleData.tuning.mods[33].value
                    : 0,
            shiftlever: 
                typeof vehicleData.tuning?.mods[34].value === 'number'
                    ? vehicleData.tuning.mods[34].value
                    : 0,
            plaques: 
                typeof vehicleData.tuning?.mods[35].value === 'number'
                    ? vehicleData.tuning.mods[35].value
                    : 0,
            hydraulics: 
                typeof vehicleData.tuning?.mods[38].value === 'number'
                    ? vehicleData.tuning.mods[38].value
                    : 0,
            engineb: 
                typeof vehicleData.tuning?.mods[39].value === 'number'
                    ? vehicleData.tuning.mods[39].value
                    : 0,
            airfilter: 
                typeof vehicleData.tuning?.mods[40].value === 'number'
                    ? vehicleData.tuning.mods[40].value
                    : 0,
            strutbar: 
                typeof vehicleData.tuning?.mods[41].value === 'number'
                    ? vehicleData.tuning.mods[41].value
                    : 0,
            archcover: 
                typeof vehicleData.tuning?.mods[42].value === 'number'
                    ? vehicleData.tuning.mods[42].value
                    : 0,
            antenna: 
                typeof vehicleData.tuning?.mods[43].value === 'number'
                    ? vehicleData.tuning.mods[43].value
                    : 0,
            exteriorp: 
                typeof vehicleData.tuning?.mods[44].value === 'number'
                    ? vehicleData.tuning.mods[44].value
                    : 0,
            tank: 
                typeof vehicleData.tuning?.mods[45].value === 'number'
                    ? vehicleData.tuning.mods[45].value
                    : 0,
            door: 
                typeof vehicleData.tuning?.mods[46].value === 'number'
                    ? vehicleData.tuning.mods[46].value
                    : 0,
            wroh:
                typeof vehicleData.tuning?.mods[47].value === 'number'
                    ? vehicleData.tuning.mods[47].value
                    : 0,
            stickers: 
                typeof vehicleData.tuning?.mods[48].value === 'number'
                    ? vehicleData.tuning.mods[48].value
                    : 0,
            plate: 
                typeof vehicleData.state?.numberPlateIndex === 'number'
                    ? vehicleData.state.numberPlateIndex
                    : 0,
            windowtint: 
                typeof vehicleData.state?.windowTint === 'number'
                    ? vehicleData.state.windowTint
                    : 0,
            wheelcamber:
                typeof vehicleData.tuning?.stance.camber.value === 'number'
                    ? vehicleData.tuning.stance.camber.value
                    : 0,
            wheelheight:
                typeof vehicleData.tuning?.stance.height.value === 'number'
                    ? vehicleData.tuning.stance.height.value
                    : 0,
            wheelrimradius:
                typeof vehicleData.tuning?.stance.rimradius.value === 'number'
                    ? vehicleData.tuning.stance.rimradius.value
                    : 0,
            wheeltrackwidth:
                typeof vehicleData.tuning?.stance.trackwidth.value === 'number'
                    ? vehicleData.tuning.stance.trackwidth.value
                    : 0,
            wheeltyreradius:
                typeof vehicleData.tuning?.stance.tyreradius.value === 'number'
                    ? vehicleData.tuning.stance.tyreradius.value
                    : 0,
            wheeltyrewidth:
                typeof vehicleData.tuning?.stance.tyrewidth.value === 'number'
                    ? vehicleData.tuning.stance.tyrewidth.value
                    : 0,
            wheeltype:
                typeof vehicleData.tuning?.mods[23].value === 'number'
                    ? vehicleData.tuning.mods[23].value
                    : 0,
            wheelid:
                typeof vehicleData.tuning?.wheelid === 'number'
                    ? vehicleData.tuning.wheelid
                    : 0,
            getModsCountType:
                typeof vehicleData.tuning.modscount === 'number'
                    ? vehicleData.tuning.modscount
                    : 0,

        };

        alt.emitClient(player, Tuner_View_Events.OPEN, syncData);
    }

    /**
     * It takes in a player, the color, color2, finish1, finish2, and pearl and updates the vehicle's
     * color, color2, finish1, finish2, and pearl
     * @param player - alt.Player - The player who is purchasing the vehicle.
     * @param {alt.RGBA | number} color - The primary color of the vehicle.
     * @param {alt.RGBA | number} color2 - The second color of the vehicle.
     * @param {number} finish1 - number
     * @param {number} finish2 - number
     * @param {number} pearl - number
     * @returns Nothing.
     */
    static purchase(
        player: alt.Player,
        spoiler: number ,
        fbumper: number ,
        rbumper: number ,
        sskirt: number ,
        exhaust: number ,
        frame: number ,
        grille: number ,
        hood: number ,
        lwing: number ,
        rwing: number ,
        roof: number ,
        engine: number ,
        brakes: number ,
        trans: number ,
        horns: number ,
        suspension: number ,
        armor: number ,
        turbo: number ,
        xenon: number ,
        plateh: number ,
        platev: number ,
        trimdesign: number ,
        ornaments: number ,
        dialdesign: number ,
        doorint: number ,
        seats: number ,
        steeringw: number ,
        shiftlever: number ,
        plaques: number ,
        hydraulics: number ,
        engineb: number ,
        airfilter: number ,
        strutbar: number ,
        archcover: number ,
        antenna: number ,
        exteriorp: number ,
        tank: number ,
        door: number ,
        wroh: number ,
        stickers: number ,
        plate: number ,
        windowtint: number ,
        wheelcamber: number ,
        wheelheight: number ,
        wheelrimradius: number ,
        wheeltrackwidth: number ,
        wheeltyreradius: number ,
        wheeltyrewidth: number ,
        wheeltype: number ,
        wheelid: number ,
        getModsCountType: number ,
    ) {
        if (!player.vehicle || player.vehicle.driver !== player) {
            return;
        }

        if (!inShop[player.id]) {
            return;
        }

        const vehicleData = Athena.document.vehicle.get(player.vehicle);
        const playerData = Athena.document.character.get(player);
        if (vehicleData.owner !== playerData._id) {
            return;
        }

        if (!vehicleData.tuning.modkit){
            vehicleData.tuning.modkit = 1;
        }

        if (getModsCountType !== undefined && getModsCountType !== null) {
            const mods = {
                0: spoiler,
                1: fbumper,
                2: rbumper,
                3: sskirt,
                4: exhaust,
                5: frame,
                6: grille,
                7: hood,
                8: lwing,
                9: rwing,
                10: roof,
                11: engine,
                12: brakes,
                13: trans,
                14: horns,
                15: suspension,
                16: armor,
                18: turbo,
                22: xenon,
                25: plateh,
                26: platev,
                27: trimdesign,
                28: ornaments,
                30: dialdesign,
                31: doorint,
                32: seats,
                33: steeringw,
                34: shiftlever,
                35: plaques,
                38: hydraulics,
                39: engineb,
                40: airfilter,
                41: strutbar,
                42: archcover,
                43: antenna,
                44: exteriorp,
                45: tank,
                46: door,
                47: wroh,
                48: stickers,
            };
            
            for (const index in mods) {
                const mod = mods[index];
                if (mod !== 0) {
                    const value = player.vehicle.getModsCount(Number(index));

                    vehicleData.tuning.modscount[mods[index]] = value;
                }
            }
        }

        if (spoiler !== undefined && spoiler !== null) {
            const index = 0;
            vehicleData.tuning.mods[index].value = spoiler;
            // player.vehicle.setMod(index, spoiler);
        }

        if (fbumper !== undefined && fbumper !== null) {
            const index = 1;
            vehicleData.tuning.mods[index].value = fbumper;
            // player.vehicle.setMod(index, fbumper);
        }

        if (rbumper !== undefined && rbumper !== null) {
            const index = 2;
            vehicleData.tuning.mods[index].value = rbumper;
            // player.vehicle.setMod(index, rbumper);
        }

        if (sskirt !== undefined && sskirt !== null) {
            const index = 3;
            vehicleData.tuning.mods[index].value = sskirt;
            // player.vehicle.setMod(index, sskirt);
        }

        if (exhaust !== undefined && exhaust !== null) {
            const index = 4;
            vehicleData.tuning.mods[index].value = exhaust;
            // player.vehicle.setMod(index, exhaust);
        }

        if (frame !== undefined && frame !== null) {
            const index = 5;
            vehicleData.tuning.mods[index].value = frame;
            // player.vehicle.setMod(index, frame);
        }

        if (grille !== undefined && grille !== null) {
            const index = 6;
            vehicleData.tuning.mods[index].value = grille;
            // player.vehicle.setMod(index, grille);
        }

        if (hood !== undefined && hood !== null) {
            const index = 7;
            vehicleData.tuning.mods[index].value = hood;
            // player.vehicle.setMod(index, hood);
        }

        if (lwing !== undefined && lwing !== null) {
            const index = 8;
            vehicleData.tuning.mods[index].value = lwing;
            // player.vehicle.setMod(index, lwing);
        }

        if (rwing !== undefined && rwing !== null) {
            const index = 9;
            vehicleData.tuning.mods[index].value = rwing;
            // player.vehicle.setMod(index, rwing);
        }

        if (roof !== undefined && roof !== null) {
            const index = 10;
            vehicleData.tuning.mods[index].value = roof;
            // player.vehicle.setMod(index, roof);
        }

        if (engine !== undefined && engine !== null) {
            const index = 11;
            vehicleData.tuning.mods[index].value = engine;
            // player.vehicle.setMod(index, engine);
        }

        if (brakes !== undefined && brakes !== null) {
            const index = 12;
            vehicleData.tuning.mods[index].value = brakes;
            // player.vehicle.setMod(index, brakes);
        }

        if (trans !== undefined && trans !== null) {
            const index = 13;
            vehicleData.tuning.mods[index].value = trans;
            // player.vehicle.setMod(index, trans);
        }

        if (horns !== undefined && horns !== null) {
            const index = 14;
            vehicleData.tuning.mods[index].value = horns;
            // player.vehicle.setMod(index,horns );
        }

        if (suspension !== undefined && suspension !== null) {
            const index = 15;
            vehicleData.tuning.mods[index].value = suspension;
            // player.vehicle.setMod(index, suspension);
        }

        if (armor !== undefined && armor !== null) {
            const index = 16;
            vehicleData.tuning.mods[index].value = armor;
            // player.vehicle.setMod(index, armor);
        }

        if (turbo !== undefined && turbo !== null) {
            const index = 18;
            vehicleData.tuning.mods[index].value = turbo;
            // player.vehicle.setMod(index, turbo);
        }

        if (xenon !== undefined && xenon !== null) {
            const index = 22;
            vehicleData.tuning.mods[index].value = xenon;
            // player.vehicle.setMod(index, xenon);
        }

        if (plateh !== undefined && plateh !== null) {
            const index = 25;
            vehicleData.tuning.mods[index].value = plateh;
            // player.vehicle.setMod(index, plateh);
        }

        if (platev !== undefined && platev !== null) {
            const index = 26;
            vehicleData.tuning.mods[index].value = platev;
            // player.vehicle.setMod(index,platev );
        }

        if (trimdesign !== undefined && trimdesign !== null) {
            const index = 27;
            vehicleData.tuning.mods[index].value = trimdesign;
            // player.vehicle.setMod(index, trimdesign);
        }

        if (ornaments !== undefined && ornaments !== null) {
            const index = 28;
            vehicleData.tuning.mods[index].value = ornaments;
            // player.vehicle.setMod(index, ornaments);
        }

        if (dialdesign !== undefined && dialdesign !== null) {
            const index = 30;
            vehicleData.tuning.mods[index].value = dialdesign;
            // player.vehicle.setMod(index, dialdesign);
        }

        if (doorint !== undefined && doorint !== null) {
            const index = 31;
            vehicleData.tuning.mods[index].value = doorint;
            // player.vehicle.setMod(index, doorint);
        }

        if (seats !== undefined && seats !== null) {
            const index = 32;
            vehicleData.tuning.mods[index].value = seats;
            // player.vehicle.setMod(index, seats);
        }

        if (steeringw !== undefined && steeringw !== null) {
            const index = 33;
            vehicleData.tuning.mods[index].value = steeringw;
            // player.vehicle.setMod(index, steeringw);
        }

        if (shiftlever !== undefined && shiftlever !== null) {
            const index = 34;
            vehicleData.tuning.mods[index].value = shiftlever;
            // player.vehicle.setMod(index, shiftlever);
        }

        if (plaques !== undefined && plaques !== null) {
            const index = 35;
            vehicleData.tuning.mods[index].value = plaques;
            // player.vehicle.setMod(index, plaques);
        }

        if (hydraulics !== undefined && hydraulics !== null) {
            const index = 38;
            vehicleData.tuning.mods[index].value = hydraulics;
            // player.vehicle.setMod(index, hydraulics);
        }

        if (engineb !== undefined && engineb !== null) {
            const index = 39;
            vehicleData.tuning.mods[index].value = engineb;
            // player.vehicle.setMod(index,engineb );
        }

        if (airfilter !== undefined && airfilter !== null) {
            const index = 40;
            vehicleData.tuning.mods[index].value = airfilter;
            // player.vehicle.setMod(index, airfilter);
        }

        if (strutbar !== undefined && strutbar !== null) {
            const index = 41;
            vehicleData.tuning.mods[index].value = strutbar;
            // player.vehicle.setMod(index, strutbar);
        }

        if (archcover !== undefined && archcover !== null) {
            const index = 42;
            vehicleData.tuning.mods[index].value = archcover;
            // player.vehicle.setMod(index, archcover);
        }

        if (antenna !== undefined && antenna !== null) {
            const index = 43;
            vehicleData.tuning.mods[index].value = antenna;
            // player.vehicle.setMod(index, antenna);
        }

        if (exteriorp !== undefined && exteriorp !== null) {
            const index = 44;
            vehicleData.tuning.mods[index].value = exteriorp;
            // player.vehicle.setMod(index, exteriorp);
        }

        if (tank !== undefined && tank !== null) {
            const index = 45;
            vehicleData.tuning.mods[index].value = tank;
            // player.vehicle.setMod(index, tank);
        }

        if (door !== undefined && door !== null) {
            const index = 46;
            vehicleData.tuning.mods[index].value = door;
            // player.vehicle.setMod(index, door);
        }

        if (wroh !== undefined && wroh !== null) {
            const index = 47;
            vehicleData.tuning.mods[index].value = wroh;
            // player.vehicle.setMod(index, wroh);
        }

        if (stickers !== undefined && stickers !== null) {
            const index = 48;
            vehicleData.tuning.mods[index].value = stickers;
            // player.vehicle.setMod(index, stickers);
        }

        if (plate !== undefined && plate !== null) {
            player.vehicle.numberPlateIndex = plate;
        }

        if (windowtint !== undefined && windowtint !== null) {
            player.vehicle.windowTint  = windowtint;
        }

        if (wheeltype !== undefined && wheeltype !== null) {
            if (wheelid !== undefined && wheelid !== null) {
                const index = 23;
                vehicleData.tuning.mods[index].value = wheeltype;
                vehicleData.tuning.wheelid = wheelid;
                // player.vehicle.setWheels(wheeltype, wheelid);
            }
        }

        if (wheelcamber !== undefined && wheelcamber !== null) {
            player.vehicle.setStreamSyncedMeta('wheelModCamber', {camber: wheelcamber})
            vehicleData.tuning.stance.camber.value = wheelcamber;
        }

        if (wheelheight !== undefined && wheelheight !== null) {
            player.vehicle.setStreamSyncedMeta('wheelModHeight', {height: wheelheight})
            vehicleData.tuning.stance.height.value = wheelheight;
        }

        if (wheeltrackwidth !== undefined && wheeltrackwidth !==null) {
            player.vehicle.setStreamSyncedMeta('wheelModTrackWidth', {trackwidth: wheeltrackwidth})
            vehicleData.tuning.stance.trackwidth.value = wheeltrackwidth;
        }

        if (wheelrimradius !== undefined && wheelrimradius !== null) {
            player.vehicle.setStreamSyncedMeta('wheelModRimRadius', {rimradius: wheelrimradius})
            vehicleData.tuning.stance.rimradius.value = wheelrimradius;
        }

        if (wheeltyreradius !== undefined && wheeltyreradius !== null){
            player.vehicle.setStreamSyncedMeta('wheelModTyreRadius', {tyreradius: wheeltyreradius})
            vehicleData.tuning.stance.tyreradius.value = wheeltyreradius;
        }

        if (wheeltyrewidth !== undefined && wheeltyrewidth !== null) {
            player.vehicle.setStreamSyncedMeta('wheelModTyreWidth', {tyrewidth: wheeltyrewidth})
            vehicleData.tuning.stance.tyrewidth.value = wheeltyrewidth;
        }

        InternalFunctions.updateTuning(player.vehicle);
        Athena.document.vehicle.set(player.vehicle, 'vehicle', vehicleData);
        TunerView.close(player);
    }
}
