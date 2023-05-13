import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api';
import { Tuner_View_Events } from '../../shared/events';
import { ITuner, iTunerSync } from '../../shared/interfaces';
import { TUNER } from './shops';
import { TUNER_LOCALE } from '../../shared/locales';
import { PolygonShape } from '@AthenaServer/extensions/extColshape';
import { SYSTEM_EVENTS } from '@AthenaShared/enums/system';
import { WindowTint } from 'alt-server';

const shops: Array<ITuner> = [];
const inShop = {};

class InternalFunctions {

    static updateTuning(vehicle: alt.Vehicle) {
        const vehicleData = Athena.document.vehicle.get(vehicle);
        if (!vehicleData.tuning.modkit) {
            vehicleData.tuning.modkit = 1;
        }
        if (!vehicleData?.tuning) return;
        if (!vehicleData?.state) return;
    }

    static previewTuning(
        player: alt.Player,
        spoiler: number = 0,
        fbumper: number = 0,
        rbumper: number = 0,
        sskirt: number = 0,
        exhaust: number = 0,
        frame: number = 0,
        grille: number = 0,
        hood: number = 0,
        lwing: number = 0,
        rwing: number = 0,
        roof: number = 0,
        engine: number = 0,
        brakes: number = 0,
        trans: number = 0,
        horns: number = 0,
        suspension: number = 0,
        armor: number = 0,
        turbo: number = 0,
        xenon: number = 0,
        plateh: number = 0,
        platev: number = 0,
        trimdesign: number = 0,
        ornaments: number = 0,
        dialdesign: number = 0,
        doorint: number = 0,
        seats: number = 0,
        steeringw: number = 0,
        shiftlever: number = 0,
        plaques: number = 0,
        hydraulics: number = 0,
        engineb: number = 0,
        airfilter: number = 0,
        strutbar: number = 0,
        archcover: number = 0,
        antenna: number = 0,
        exteriorp: number = 0,
        tank: number = 0,
        door: number = 0,
        wroh: number = 0,
        stickers: number = 0,
        plate: number = 0,
        windowtint: number = 0,
        wheelcamber: number = 0,
        wheelheight: number = 0,
        wheelrimradius: number = 0,
        wheeltrackwidth: number = 0,
        wheeltyreradius: number = 0,
        wheeltyrewidth: number = 0,
        wheeltype: number = 0,
        wheelid: number = 0,
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

        if (spoiler !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Spoiler, spoiler)
        }
            
        if (fbumper !== 0) {
            player.vehicle.setMod(alt.VehicleModType.FrontBumper, fbumper)
        }
            
        if (rbumper !== 0) {
            player.vehicle.setMod(alt.VehicleModType.RearBumper, rbumper)
        }
            
        if (sskirt !== 0) {
            player.vehicle.setMod(alt.VehicleModType.SideSkirt, sskirt)
        }
        
        if (exhaust !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Exhaust, exhaust)
        }
            
        if (frame !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Frame, frame)
        }
            
        if (grille !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Grille, grille)
        }
            
        if (hood !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Hood, hood)
        }
            
        if (lwing !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Fender, lwing)
        }
            
        if (rwing !== 0) {
            player.vehicle.setMod(alt.VehicleModType.RightFender, rwing)
        }
            
        if (roof !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Roof, roof)
        }
            
        if (engine !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Engine, engine)
        }
            
        if (brakes !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Brakes, brakes)
        }
            
        if (trans !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Transmission, trans)
        }
            
        if (horns !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Horn, horns)
        }
            
        if (suspension !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Suspension, suspension)
        }
            
        if (armor !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Armor, armor)
        }
            
        if (turbo !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Turbo, turbo)
        }
            
        if (xenon !== 0) {
            player.vehicle.setMod(alt.VehicleModType.XenonLights, xenon)
        }
            
        if (plateh !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Plateholder, plateh)
        }
            
        if (platev !== 0) {
            player.vehicle.setMod(alt.VehicleModType.VanityPlates, platev)
        }
            
        if (trimdesign !== 0) {
            player.vehicle.setMod(alt.VehicleModType.TrimDesign, trimdesign)
        }
            
        if (ornaments !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Ornaments, ornaments)
        }
            
        if (dialdesign !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Dial, dialdesign)
        }
            
        if (doorint !== 0) {
            player.vehicle.setMod(alt.VehicleModType.DoorSpeaker, doorint)
        }
            
        if (seats !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Seats, seats)
        }
            
        if (steeringw !== 0) {
            player.vehicle.setMod(alt.VehicleModType.SteeringWheel, steeringw)
        }
            
        if (shiftlever !== 0) {
            player.vehicle.setMod(alt.VehicleModType.ColumnShifterLeavers, shiftlever)
        }
            
        if (plaques !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Plaques, plaques)
        }
            
        if (hydraulics !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Hydraulics, hydraulics)
        }
            
        if (engineb !== 0) {
            player.vehicle.setMod(alt.VehicleModType.EngineBlock, engineb)
        }
            
        if (airfilter !== 0) {
            player.vehicle.setMod(alt.VehicleModType.AirFilter, airfilter)
        }
            
        if (strutbar !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Struts, strutbar)
        }
            
        if (archcover !== 0) {
            player.vehicle.setMod(alt.VehicleModType.ArchCover, archcover)
        }
            
        if (antenna !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Aerials, antenna)
        }
            
        if (exteriorp !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Trim, exteriorp)
        }
            
        if (tank !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Tank, tank)
        }
            
        if (door !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Windows, door)
        }
            
        if (wroh !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Unk4, wroh)
        }
            
        if (stickers !== 0) {
            player.vehicle.setMod(alt.VehicleModType.Livery, stickers)
        }
            
        if (plate !== 0) {
            player.vehicle.numberPlateIndex = plate;
        }
            
        if (windowtint !== 0) {
            player.vehicle.windowTint = windowtint;
        }
            
        if (wheelcamber !== 0) {
            player.vehicle.setStreamSyncedMeta('wheelMod', {camber: wheelcamber})
        }
            
        if (wheelheight !== 0) {
            player.vehicle.setStreamSyncedMeta('wheelMod', {height: wheelheight})
        }
            
        if (wheelrimradius !== 0) {
            player.vehicle.setStreamSyncedMeta('wheelMod', {rimradius: wheelrimradius})
        }
            
        if (wheeltrackwidth !== 0) {
            player.vehicle.setStreamSyncedMeta('wheelMod', {trackwidth: wheeltrackwidth})
        }
            
        if (wheeltyreradius !== 0) {
            player.vehicle.setStreamSyncedMeta('wheelMod', {tyreradius: wheeltyreradius})
        }
            
        if (wheeltyrewidth !== 0) {
            player.vehicle.setStreamSyncedMeta('wheelMod', {tyrewidth: wheeltyrewidth})
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
            description: 'Tune Vehicle Press shift + E',
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

        if (player.vehicle.driver.id !== player.id) {
            return;
        }

        function callback() {
            console.log(`User pressed a key after entering the area!`);
        }

        inShop[player.id] = true;

        Athena.player.emit.sound2D(player, 'shop_enter', 0.5);

        alt.log('player key work');

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

        if (!vehicleData.tuning.modkit) {
            vehicleData.tuning.modkit = 1;
        }

        let id: number;
        let value: number;
        const index = vehicleData.tuning.mods.findIndex(mod => mod.id === id);
        if (index !== -1) {
            const mods = vehicleData.tuning.mods[index].value = value;
            const syncData: iTunerSync = {
                spoiler: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                fbumper: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                rbumper: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                sskirt: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                exhaust: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                frame: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                grille: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                hood: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                lwing: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                rwing: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                roof: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                engine: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                brakes: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                trans: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                horns: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                suspension: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                armor: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                turbo: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                xenon: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                plateh: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                platev: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                trimdesign: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                ornaments: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                dialdesign: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                doorint: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                seats: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                steeringw: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                shiftlever: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                plaques: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                hydraulics: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                engineb: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                airfilter: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                strutbar: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                archcover: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                antenna: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                exteriorp: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                tank: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                door: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                wroh:
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                stickers: 
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
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
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
                wheelid:
                    typeof vehicleData.tuning?.mods === 'number'
                        ? vehicleData.tuning.mods
                        : 0,
            };
        }

        const syncData: iTunerSync = {
            spoiler: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            fbumper: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            rbumper: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            sskirt: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            exhaust: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            frame: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            grille: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            hood: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            lwing: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            rwing: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            roof: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            engine: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            brakes: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            trans: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            horns: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            suspension: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            armor: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            turbo: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            xenon: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            plateh: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            platev: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            trimdesign: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            ornaments: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            dialdesign: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            doorint: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            seats: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            steeringw: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            shiftlever: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            plaques: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            hydraulics: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            engineb: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            airfilter: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            strutbar: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            archcover: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            antenna: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            exteriorp: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            tank: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            door: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            wroh:
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            stickers: 
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
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
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
                    : 0,
            wheelid:
                typeof vehicleData.tuning?.mods === 'number'
                    ? vehicleData.tuning.mods
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
        wroh: number  ,
        stickers: number ,
        plate: number ,
        windowtint: number ,
        wheelcamber: number,
        wheelheight: number,
        wheelrimradius: number,
        wheeltrackwidth: number,
        wheeltyreradius: number,
        wheeltyrewidth: number,
        wheeltype: number,
        wheelid: number,
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

        if (!vehicleData.tuning.modkit) {
            vehicleData.tuning.modkit = 1;
        }

        if (spoiler !== undefined && spoiler !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Spoiler);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = spoiler;
            }
        }
        if (fbumper !== undefined && fbumper !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.FrontBumper);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = fbumper;
            }
        }
        if (rbumper !== undefined && rbumper !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.RearBumper);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = rbumper;
            }
        }
        if (sskirt !== undefined && sskirt !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.SideSkirt);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = sskirt;
            }
        }
        if (exhaust !== undefined && exhaust !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Exhaust);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = exhaust;
            }
        }
        if (frame !== undefined && frame !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Frame);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = frame;
            }
        }
        if (grille !== undefined && grille !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Grille);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = grille;
            }
        }
        if (hood !== undefined && hood !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Hood);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = hood;
            }
        }
        if (lwing !== undefined && lwing !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Fender);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = lwing;
            }
        }
        if (rwing !== undefined && rwing !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.RightFender);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = rwing;
            }
        }
        if (roof !== undefined && roof !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Roof);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = roof;
            }
        }
        if (engine !== undefined && engine !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Engine);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = engine;
            }
        }
        if (brakes !== undefined && brakes !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Brakes);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = brakes;
            }
        }
        if (trans !== undefined && trans !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Transmission);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = trans;
            }
        }
        if (horns !== undefined && horns !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Horn);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = horns;
            }
        }
        if (suspension !== undefined && suspension !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Suspension);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = suspension;
            }
        }
        if (armor !== undefined && armor !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Armor);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = armor;
            }
        }
        if (turbo !== undefined && turbo !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Turbo);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = turbo;
            }
        }
        if (xenon !== undefined && xenon !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.XenonLights);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = xenon;
            }
        }
        if (plateh !== undefined && plateh !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Plateholder);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = plateh;
            }
        }
        if (platev !== undefined && platev !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.VanityPlates);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = platev;
            }
        }
        if (trimdesign !== undefined && trimdesign !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.TrimDesign);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = trimdesign;
            }
        }
        if (ornaments !== undefined && ornaments !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Ornaments);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = ornaments;
            }
        }
        if (dialdesign !== undefined && dialdesign !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Dial);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = dialdesign;
            }
        }
        if (doorint !== undefined && doorint !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.DoorSpeaker);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = doorint;
            }
        }
        if (seats !== undefined && seats !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Seats);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = seats;
            }
        }
        if (steeringw !== undefined && steeringw !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.SteeringWheel);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = steeringw;
            }
        }
        if (shiftlever !== undefined && shiftlever !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.ColumnShifterLeavers);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = shiftlever;
            }
        }
        if (plaques !== undefined && plaques !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Plaques);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = plaques;
            }
        }
        if (hydraulics !== undefined && hydraulics !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Hydraulics);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = hydraulics;
            }
        }
        if (engineb !== undefined && engineb !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.EngineBlock);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = engineb;
            }
        }
        if (airfilter !== undefined && airfilter !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.AirFilter);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = airfilter;
            }
        }
        if (strutbar !== undefined && strutbar !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Struts);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = strutbar;
            }
        }
        if (archcover !== undefined && archcover !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.ArchCover);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = archcover;
            }
        }
        if (antenna !== undefined && antenna !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Aerials);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = antenna;
            }
        }
        if (exteriorp !== undefined && exteriorp !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Trim);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = exteriorp;
            }
        }
        if (tank !== undefined && tank !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Tank);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = tank;
            }
        }
        if (door !== undefined && door !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Windows);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = door;
            }
        }
        if (wroh !== undefined && wroh !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Unk4);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = wroh;
            }
        }
        if (stickers !== undefined && stickers !== null) {
            const index = vehicleData.tuning.mods.findIndex(mod => mod.id === alt.VehicleModType.Livery);
            if (index !== -1) {
                vehicleData.tuning.mods[index].value = stickers;
            }
        }
        if (plate !== undefined && plate !== null) {
            player.vehicle.numberPlateIndex;
        }
        if (windowtint !== undefined && windowtint !== null) {
            player.vehicle.windowTint;
        }
        if (wheeltype !== undefined && wheeltype !== null) {
            if (wheelid !== undefined && wheelid !== null) {
                player.vehicle.setWheels(wheeltype, wheelid);
            }
        }

        if (wheelcamber !== undefined && wheelcamber !== null) {
            vehicleData.tuning.stance.camber.value = wheelcamber;
        }

        if (wheelheight !== undefined && wheelheight !== null) {
            vehicleData.tuning.stance.height.value = wheelheight;
        }

        if (wheeltrackwidth !== undefined && wheeltrackwidth !== null) {
            vehicleData.tuning.stance.trackwidth.value = wheeltrackwidth;
        }

        if (wheelrimradius !== undefined && wheelrimradius !== null) {
            vehicleData.tuning.stance.rimradius.value = wheelrimradius;
        }

        if (wheeltyreradius !== undefined && wheeltyreradius !== null) {
            vehicleData.tuning.stance.tyreradius.value = wheeltyreradius;
        }

        if (wheeltyrewidth !== undefined && wheeltyrewidth !== null) {
            vehicleData.tuning.stance.tyrewidth.value = wheeltyrewidth;
        }

        InternalFunctions.updateTuning(player.vehicle);
        Athena.document.vehicle.set(player.vehicle, 'vehicle', vehicleData);
    }
}
