import getRamdomInt from "@/helpers/getRamdomInt";

export const   incrementRandomInt = async ( { commit } ) => {
    commit('setLoading', true);
    const randomInt = await getRamdomInt()
    commit('incrementBy', randomInt)
    commit('setLoading', false);
}