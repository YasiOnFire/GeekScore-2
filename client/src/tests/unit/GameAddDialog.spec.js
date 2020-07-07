import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuetify from 'vuetify'
import Vue from "vue"
import GameAddDialog from "@/components/GameAddDialog";

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuetify)


it('Game Add', async () => {
    const wrapper = shallowMount(GameAddDialog, { localVue })
    expect(wrapper.exists()).toBe(true)
})