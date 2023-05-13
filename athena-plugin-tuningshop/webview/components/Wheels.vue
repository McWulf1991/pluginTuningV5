<template>
    <div class="wrapper stack mt-2">
        <div class="stack mb-2 mr-2 mt-2">
            <Module :name="locale.TYPE">
                <span class="subtitle-2 pb-4">{{ locale.TYPE_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="50"
                        :indexValue="wheeltype"
                        :increment="1"
                        @input="(e) => setWheelType(e)"
                        @change="outputWheelType"
                        class="fill-full-width"
                    />
                </div>
            </Module>
            <br />
            <Module :name="locale.ID">
                <span class="subtitle-2 pb-4">{{ locale.ID_DESC }}</span>
                <div class="stack pt-6">
                    <RangeInput
                        :minIndex="0"
                        :maxIndex="50"
                        :indexValue="wheelid"
                        :increment="1"
                        @input="(e) => setWheelId(e)"
                        @change="outputWheelId"
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
    VEHICLE_TUNE_WHEELID,
    VEHICLE_TUNE_WHEELTYPE
} from '../../shared/const';

const ComponentName = 'Wheels';
export default defineComponent({
    name: ComponentName,
    data() {
        return {
            update: 1,
            wheeltype: 0,
            wheelid: 0,
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
        getWheelType(): Array<{ value: number }> {
            const wheeltype: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_WHEELTYPE).forEach((index) => {
                wheeltype.push({ value: VEHICLE_TUNE_WHEELTYPE[index] });
            });

            return wheeltype;
        },
        getWheelID(): Array<{ value: number }> {
            const wheelid: Array<{ value: number }> = [];

            Object.keys(VEHICLE_TUNE_WHEELID).forEach((index) => {
                wheelid.push({ value: VEHICLE_TUNE_WHEELID[index] });
            });

            return wheelid;
        },
    },
    methods: {
        setWheelType(e: Event) {
            const result = e.target['value'];
            this.wheeltype = parseFloat(result);

            this.$emit('update-wheeltype', this.wheeltype);
        },

        setWheelId(e: Event) {
            const result = e.target['value'];
            this.wheelid = parseFloat(result);

            this.$emit('update-wheelid', this.wheelid);
        },

        outputWheelType(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-wheeltype', { value }, true);
        },

        outputWheelId(value: number) {
            if (value === undefined) {
                return;
            }

            this.$emit('set-wheelid', { value }, true);
        },
    },
    watch: {
        data(syncData: iTunerSync) {
            this.wheeltype = syncData.wheeltype;
            this.wheelid = syncData.wheelid;

            this.$nextTick(() => {
                this.$emit('set-wheeltype', syncData.wheeltype, true);
                this.$emit('set-wheelid', syncData.wheelid, true);
                this.$emit('update-wheeltype', this.wheeltype);
                this.$emit('update-wheelid', this.wheelid);
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

.wheeltype {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
}

.wheelid {
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
