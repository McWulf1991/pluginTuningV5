<template>
    <div class="wrapper stack mt-2">
        <div class="stack mb-2 mr-2 mt-2">
            <Module :name="locale.SPOILER">
                <span class="subtitle-2 pb-4">{{ locale.SPOILER_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="spoiler"
                        :increment="1"
                        @input="(e) => setspoiler(e)"
                        @change="outputspoiler"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.FBUMPER">
                <span class="subtitle-2 pb-4">{{ locale.FBUMPER_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="fbumper"
                        :increment="1"
                        @input="(e) => setfbumper(e)"
                        @change="outputfbumper"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.RBUMPER">
                <span class="subtitle-2 pb-4">{{ locale.RBUMPER_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="rbumper"
                        :increment="1"
                        @input="(e) => setrbumper(e)"
                        @change="outputrbumper"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.SSKIRT">
                <span class="subtitle-2 pb-4">{{ locale.SSKIRT_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="sskirt"
                        :increment="1"
                        @input="(e) => setsskirt(e)"
                        @change="outputsskirt"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.EXHAUST">
                <span class="subtitle-2 pb-4">{{ locale.EXHAUST_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="exhaust"
                        :increment="1"
                        @input="(e) => setexhaust(e)"
                        @change="outputexhaust"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.FRAME">
                <span class="subtitle-2 pb-4">{{ locale.FRAME_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="frame"
                        :increment="1"
                        @input="(e) => setframe(e)"
                        @change="outputframe"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.GRILLE">
                <span class="subtitle-2 pb-4">{{ locale.GRILLE_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="grille"
                        :increment="1"
                        @input="(e) => setgrille(e)"
                        @change="outputgrille"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.HOOD">
                <span class="subtitle-2 pb-4">{{ locale.HOOD_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="hood"
                        :increment="1"
                        @input="(e) => sethood(e)"
                        @change="outputhood"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.LWING">
                <span class="subtitle-2 pb-4">{{ locale.LWING_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="lwing"
                        :increment="1"
                        @input="(e) => setlwing(e)"
                        @change="outputlwing"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.RWING">
                <span class="subtitle-2 pb-4">{{ locale.RWING_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="rwing"
                        :increment="1"
                        @input="(e) => setrwing(e)"
                        @change="outputrwing"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.ROOF">
                <span class="subtitle-2 pb-4">{{ locale.ROOF_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="roof"
                        :increment="1"
                        @input="(e) => setroof(e)"
                        @change="outputroof"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.HORNS">
                <span class="subtitle-2 pb-4">{{ locale.HORNS_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="horns"
                        :increment="1"
                        @input="(e) => sethorns(e)"
                        @change="outputhorns"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.PLATEH">
                <span class="subtitle-2 pb-4">{{ locale.PLATEH_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="plateh"
                        :increment="1"
                        @input="(e) => setplateh(e)"
                        @change="outputplateh"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.PLATEV">
                <span class="subtitle-2 pb-4">{{ locale.PLATEV_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="platev"
                        :increment="1"
                        @input="(e) => setplatev(e)"
                        @change="outputplatev"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.HYDRAULICS">
                <span class="subtitle-2 pb-4">{{ locale.HYDRAULICS_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="hydraulics"
                        :increment="1"
                        @input="(e) => sethydraulics(e)"
                        @change="outputhydraulics"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.STRUTBAR">
                <span class="subtitle-2 pb-4">{{ locale.STRUTBAR_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="strutbar"
                        :increment="1"
                        @input="(e) => setstrutbar(e)"
                        @change="outputstrutbar"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.ANTENNA">
                <span class="subtitle-2 pb-4">{{ locale.ANTENNA_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="antenna"
                        :increment="1"
                        @input="(e) => setantenna(e)"
                        @change="outputantenna"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.EXTERIORP">
                <span class="subtitle-2 pb-4">{{ locale.EXTERIORP_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="exteriorp"
                        :increment="1"
                        @input="(e) => setexteriorp(e)"
                        @change="outputexteriorp"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.STICKERS">
                <span class="subtitle-2 pb-4">{{ locale.STICKERS_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="stickers"
                        :increment="1"
                        @input="(e) => setstickers(e)"
                        @change="outputstickers"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.PLATE">
                <span class="subtitle-2 pb-4">{{ locale.PLATE_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="plate"
                        :increment="1"
                        @input="(e) => setplate(e)"
                        @change="outputplate"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.WINDOWTINT">
                <span class="subtitle-2 pb-4">{{ locale.WINDOWTINT_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="getModsCountType"
                        :indexValue="windowtint"
                        :increment="1"
                        @input="(e) => setwindowtint(e)"
                        @change="outputwindowtint"
                        class="fill-full-width"
                    />
                </div>
            </Module>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';
import { iTunerSync } from '../../shared/interfaces';
import {
    VEHICLE_TUNE_EXTERIEUR_IDS,
} from '../../shared/const';

const ComponentName = 'Optics';
export default defineComponent({
    name: ComponentName,
    data() {
        return {
            update: 1,
            spoiler: 0,
            fbumper: 0,
            rbumper: 0,
            sskirt: 0,
            exhaust: 0,
            frame: 0,
            grille: 0,
            hood: 0,
            lwing: 0,
            rwing: 0,
            roof: 0,
            horns: 0,
            plateh: 0,
            platev: 0,
            hydraulics: 0,
            strutbar: 0,
            antenna: 0,
            exteriorp: 0,
            stickers: 0,
            plate: 0,
            windowtint: 0,
            getModsCountType: 0,
        };
    },
    props: {
        data: {
            type: Number,
        },
        locale: {
            type: Object,
            required: true,
        },
    },
    components: {
        Button: defineAsyncComponent(() => import('@components/Button.vue')),
        Icon: defineAsyncComponent(() => import('@components/Icon.vue')),
        RangeInput: defineAsyncComponent(() => import('@components/RangeInput.vue')),
        SimpleInput: defineAsyncComponent(() => import('@components/SimpleInput.vue')),
        ColorSlider: defineAsyncComponent(() => import('@components/ColorSlider.vue')),
        Module: defineAsyncComponent(() => import('@components/Module.vue')),
    },
    computed: {

        getspoiler(): Array<{ value: number }> {
            const spoiler: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_EXTERIEUR_IDS).forEach((index) => {
                spoiler.push({ value: VEHICLE_TUNE_EXTERIEUR_IDS[index] });
            });

            return spoiler;
        },
        getfbumper(): Array<{ value: number }> {
            const fbumper: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_EXTERIEUR_IDS).forEach((index) => {
                fbumper.push({ value: VEHICLE_TUNE_EXTERIEUR_IDS[index] });
            });

            return fbumper;
        },
        getrbumper(): Array<{ value: number }> {
            const rbumper: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_EXTERIEUR_IDS).forEach((index) => {
                rbumper.push({ value: VEHICLE_TUNE_EXTERIEUR_IDS[index] });
            });

            return rbumper;
        },
        getsskirt(): Array<{ value: number }> {
            const sskirt: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_EXTERIEUR_IDS).forEach((index) => {
                sskirt.push({ value: VEHICLE_TUNE_EXTERIEUR_IDS[index] });
            });

            return sskirt;
        },
        getexhaust(): Array<{ value: number }> {
            const exhaust: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_EXTERIEUR_IDS).forEach((index) => {
                exhaust.push({ value: VEHICLE_TUNE_EXTERIEUR_IDS[index] });
            });

            return exhaust;
        },
        getframe(): Array<{ value: number }> {
            const frame: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_EXTERIEUR_IDS).forEach((index) => {
                frame.push({ value: VEHICLE_TUNE_EXTERIEUR_IDS[index] });
            });

            return frame;
        },
        getgrille(): Array<{ value: number }> {
            const grille: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_EXTERIEUR_IDS).forEach((index) => {
                grille.push({ value: VEHICLE_TUNE_EXTERIEUR_IDS[index] });
            });

            return grille;
        },
        gethood(): Array<{ value: number }> {
            const hood: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_EXTERIEUR_IDS).forEach((index) => {
                hood.push({ value: VEHICLE_TUNE_EXTERIEUR_IDS[index] });
            });

            return hood;
        },
        getlwing(): Array<{ value: number }> {
            const lwing: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_EXTERIEUR_IDS).forEach((index) => {
                lwing.push({ value: VEHICLE_TUNE_EXTERIEUR_IDS[index] });
            });

            return lwing;
        },
        getrwing(): Array<{ value: number }> {
            const rwing: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_EXTERIEUR_IDS).forEach((index) => {
                rwing.push({ value: VEHICLE_TUNE_EXTERIEUR_IDS[index] });
            });

            return rwing;
        },
        getroof(): Array<{ value: number }> {
            const roof: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_EXTERIEUR_IDS).forEach((index) => {
                roof.push({ value: VEHICLE_TUNE_EXTERIEUR_IDS[index] });
            });

            return roof;
        },
        gethorns(): Array<{ value: number }> {
            const horns: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_EXTERIEUR_IDS).forEach((index) => {
                horns.push({ value: VEHICLE_TUNE_EXTERIEUR_IDS[index] });
            });

            return horns;
        },
        getplateh(): Array<{ value: number }> {
            const plateh: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_EXTERIEUR_IDS).forEach((index) => {
                plateh.push({ value: VEHICLE_TUNE_EXTERIEUR_IDS[index] });
            });

            return plateh;
        },
        getplatev(): Array<{ value: number }> {
            const platev: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_EXTERIEUR_IDS).forEach((index) => {
                platev.push({ value: VEHICLE_TUNE_EXTERIEUR_IDS[index] });
            });

            return platev;
        },
        gethydraulics(): Array<{ value: number }> {
            const hydraulics: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_EXTERIEUR_IDS).forEach((index) => {
                hydraulics.push({ value: VEHICLE_TUNE_EXTERIEUR_IDS[index] });
            });

            return hydraulics;
        },
        getstrutbar(): Array<{ value: number }> {
            const strutbar: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_EXTERIEUR_IDS).forEach((index) => {
                strutbar.push({ value: VEHICLE_TUNE_EXTERIEUR_IDS[index] });
            });

            return strutbar;
        },
        getantenna(): Array<{ value: number }> {
            const antenna: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_EXTERIEUR_IDS).forEach((index) => {
                antenna.push({ value: VEHICLE_TUNE_EXTERIEUR_IDS[index] });
            });

            return antenna;
        },
        getexteriorp(): Array<{ value: number }> {
            const exteriorp: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_EXTERIEUR_IDS).forEach((index) => {
                exteriorp.push({ value: VEHICLE_TUNE_EXTERIEUR_IDS[index] });
            });

            return exteriorp;
        },
        getstickers(): Array<{ value: number }> {
            const stickers: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_EXTERIEUR_IDS).forEach((index) => {
                stickers.push({ value: VEHICLE_TUNE_EXTERIEUR_IDS[index] });
            });

            return stickers;
        },
        getplate(): Array<{ value: number }> {
            const plate: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_EXTERIEUR_IDS).forEach((index) => {
                plate.push({ value: VEHICLE_TUNE_EXTERIEUR_IDS[index] });
            });

            return plate;
        },
        getwindowtint(): Array<{ value: number }> {
            const windowtint: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_EXTERIEUR_IDS).forEach((index) => {
                windowtint.push({ value: VEHICLE_TUNE_EXTERIEUR_IDS[index] });
            });

            return windowtint;
        },

        getModsCountType     (): Array<{ value: number }> {
            const getModsCountType            : Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_EXTERIEUR_IDS).forEach((index) => {
                getModsCountType.push({ value: VEHICLE_TUNE_EXTERIEUR_IDS[index] });
            });

            return            getModsCountType;
        },
    },
    methods: {
        setspoiler(e: Event) {
            const result = e.target['value'];
            this.spoiler = parseFloat(result);

            this.$emit('update-spoiler', this.spoiler);
        },
        setfbumper(e: Event) {
            const result = e.target['value'];
            this.fbumper = parseFloat(result);

            this.$emit('update-fbumper', this.fbumper);
        },
        setrbumper(e: Event) {
            const result = e.target['value'];
            this.rbumper = parseFloat(result);

            this.$emit('update-rbumper', this.rbumper);
        },
        setsskirt(e: Event) {
            const result = e.target['value'];
            this.sskirt = parseFloat(result);

            this.$emit('update-sskirt', this.sskirt);
        },
        setexhaust(e: Event) {
            const result = e.target['value'];
            this.exhaust = parseFloat(result);

            this.$emit('update-exhaust', this.exhaust);
        },
        setframe(e: Event) {
            const result = e.target['value'];
            this.frame = parseFloat(result);

            this.$emit('update-frame', this.frame);
        },
        setgrille(e: Event) {
            const result = e.target['value'];
            this.grille = parseFloat(result);

            this.$emit('update-grille', this.grille);
        },
        sethood(e: Event) {
            const result = e.target['value'];
            this.hood = parseFloat(result);

            this.$emit('update-hood', this.hood);
        },
        setlwing(e: Event) {
            const result = e.target['value'];
            this.lwing = parseFloat(result);

            this.$emit('update-lwing', this.lwing);
        },
        setrwing(e: Event) {
            const result = e.target['value'];
            this.rwing = parseFloat(result);

            this.$emit('update-rwing', this.rwing);
        },
        setroof(e: Event) {
            const result = e.target['value'];
            this.roof = parseFloat(result);

            this.$emit('update-roof', this.roof);
        },
        sethorns(e: Event) {
            const result = e.target['value'];
            this.horns = parseFloat(result);

            this.$emit('update-horns', this.horns);
        },
        setplateh(e: Event) {
            const result = e.target['value'];
            this.plateh = parseFloat(result);

            this.$emit('update-plateh', this.plateh);
        },
        setplatev(e: Event) {
            const result = e.target['value'];
            this.platev = parseFloat(result);

            this.$emit('update-platev', this.platev);
        },
        sethydraulics(e: Event) {
            const result = e.target['value'];
            this.hydraulics = parseFloat(result);

            this.$emit('update-hydraulics', this.hydraulics);
        },
        setstrutbar(e: Event) {
            const result = e.target['value'];
            this.strutbar = parseFloat(result);

            this.$emit('update-strutbar', this.strutbar);
        },
        setantenna(e: Event) {
            const result = e.target['value'];
            this.antenna = parseFloat(result);

            this.$emit('update-antenna', this.antenna);
        },
        setexteriorp(e: Event) {
            const result = e.target['value'];
            this.exteriorp = parseFloat(result);

            this.$emit('update-exteriorp', this.exteriorp);
        },
        setstickers(e: Event) {
            const result = e.target['value'];
            this.stickers = parseFloat(result);

            this.$emit('update-stickers', this.stickers);
        },
        setplate(e: Event) {
            const result = e.target['value'];
            this.plate = parseFloat(result);

            this.$emit('update-plate', this.plate);
        },
        setwindowtint(e: Event) {
            const result = e.target['value'];
            this.windowtint = parseFloat(result);

            this.$emit('update-windowtint', this.windowtint);
        },
        setModsCountType(e: Event) {
            const result = e.target['value'];
            this.getModsCountType = parseFloat(result);

            this.$emit('update-getModsCountType', this.getModsCountType);
        },

        outputspoiler(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-spoiler', { value }, true);
        },
        outputfbumper(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-fbumper', { value }, true);
        },
        outputrbumper(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-rbumper', { value }, true);
        },
        outputsskirt(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-sskirt', { value }, true);
        },
        outputexhaust(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-exhaust', { value }, true);
        },
        outputframe(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-frame', { value }, true);
        },
        outputgrille(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-grille', { value }, true);
        },
        outputhood(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-hood', { value }, true);
        },
        outputlwing(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-lwing', { value }, true);
        },
        outputrwing(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-rwing', { value }, true);
        },
        outputroof(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-roof', { value }, true);
        },
        outputhorns(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-horns', { value }, true);
        },
        outputplateh(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-plateh', { value }, true);
        },
        outputplatev(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-platev', { value }, true);
        },
        outputhydraulics(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-hydraulic', { value }, true);
        },
        outputstrutbar(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-strutbar', { value }, true);
        },
        outputantenna(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-antenna', { value }, true);
        },
        outputexteriorp(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-exteriorp', { value }, true);
        },
        outputstickers(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-stickers', { value }, true);
        },
        outputplate(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-plate', { value }, true);
        },
        outputwindowtint(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-windowtint', { value }, true);
        },
        outputModsCountType(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-getModsCountType', { value }, true);
        },
    },
    watch: {
        data(syncData: iTunerSync) {
            this.spoiler             = syncData.spoiler;
            this.fbumper             = syncData.fbumper;
            this.rbumper             = syncData.rbumper;
            this.sskirt              = syncData.sskirt;
            this.exhaust             = syncData.exhaust;
            this.frame               = syncData.frame;
            this.grille              = syncData.grille;
            this.hood                = syncData.hood;
            this.lwing               = syncData.lwing;
            this.rwing               = syncData.rwing;
            this.roof                = syncData.roof;
            this.horns               = syncData.horns;
            this.plateh              = syncData.plateh;
            this.platev              = syncData.platev;
            this.hydraulics          = syncData.hydraulics;
            this.strutbar            = syncData.strutbar;
            this.antenna             = syncData.antenna;
            this.exteriorp           = syncData.exteriorp;
            this.stickers            = syncData.stickers;
            this.plate               = syncData.plate;
            this.windowtint          = syncData.windowtint;
            this.getModsCountType    = syncData.getModsCountType;

            this.$nextTick(() => {
                this.$emit('set-spoiler', syncData.spoiler, true);
                this.$emit('set-fbumper', syncData.fbumper, true);
                this.$emit('set-rbumper', syncData.rbumper, true);
                this.$emit('set-sskirt', syncData.sskirt, true);
                this.$emit('set-exhaust', syncData.exhaust, true);
                this.$emit('set-frame', syncData.frame, true);
                this.$emit('set-grille', syncData.grille, true);
                this.$emit('set-hood', syncData.hood, true);
                this.$emit('set-lwing', syncData.lwing, true);
                this.$emit('set-rwing', syncData.rwing, true);
                this.$emit('set-roof', syncData.roof, true);
                this.$emit('set-horns', syncData.horns, true);
                this.$emit('set-plateh', syncData.plateh, true);
                this.$emit('set-platev', syncData.platev, true);
                this.$emit('set-hydraulics', syncData.hydraulics, true);
                this.$emit('set-strutbar', syncData.strutbar, true);
                this.$emit('set-antenna', syncData.antenna, true);
                this.$emit('set-exteriorp', syncData.exteriorp, true);
                this.$emit('set-stickers', syncData.stickers, true);
                this.$emit('set-plate', syncData.plate, true);
                this.$emit('set-windowtint', syncData.windowtint, true);
                this.$emit('set-getModsCountType', syncData.getModsCountType, true);
                this.$emit('update-spoiler', this.spoiler);
                this.$emit('update-fbumper', this.fbumper);
                this.$emit('update-rbumper', this.rbumper);
                this.$emit('update-sskirt', this.sskirt);
                this.$emit('update-exhaust', this.exhaust);
                this.$emit('update-frame', this.frame);
                this.$emit('update-grille', this.grille);
                this.$emit('update-hood', this.hood);
                this.$emit('update-lwing', this.lwing);
                this.$emit('update-rwing', this.rwing);
                this.$emit('update-roof', this.roof);
                this.$emit('update-horns', this.horns);
                this.$emit('update-plateh', this.plateh);
                this.$emit('update-platev', this.platev);
                this.$emit('update-hydraulics', this.hydraulics);
                this.$emit('update-strutbar', this.strutbar);
                this.$emit('update-antenna', this.antenna);
                this.$emit('update-exteriorp', this.exteriorp);
                this.$emit('update-stickers', this.stickers);
                this.$emit('update-plate', this.plate);
                this.$emit('update-windowtint', this.windowtint);
                this.$emit('update-getModsCountType', this.getModsCountType);
            });
        },
    },
});
</script>

<style scoped>
.wrapper {
    overflow-y: scroll;
    min-height: calc(100vh - 125px);
    max-height: calc(100vh - 125px);
}

.spoiler{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.fbumper{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.rbumper{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.sskirt{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.exhaust{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.frame{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.grille{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.hood{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.lwing{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.rwing{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.roof{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.horns{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.plateh{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.platev{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.hydraulics{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.strutbar{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.antenna{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.exteriorp{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.stickers{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.plate{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}
.windowtint {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}

input[type='color']::-webkit-color-swatch {
    padding: 4px;
    border: none;
    border-radius: 3px;
}

input[type='color']::-webkit-color-swatch-wrapper {
    padding: 4px;
    border: none;
    border-radius: 3px;
}

input[type='color'] {
    height: 35px;
    width: 100px;
    border-radius: 6px;
    overflow: hidden;
    background: none;
    border: 2px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
}

input[type='color']:hover {
    cursor: pointer;
}
</style>
