import Vue from 'vue';

export const clientId = '483c150997cced96343357e27f77a06cfb9586deefb8fa3bc33e00a939f3fdfd';
export const redirectUrlLogin = 'http://localhost:8080/authenticate';

export const userKey = '__lab_user';
export const baseApiUrl = 'http://localhost:8001';
export const scopeApi = 'api+profile';

export function getCode() {
    return localStorage.getItem('code').replace('"', '').replace('"', '');
}

export function showError(e) {
    if (e && e.response && e.response.data) {
        if (typeof e.response.data === 'object')
            return Object.keys(e.response.data).map(i => {
                Vue.toasted.global.defaultError({ msg: e.response.data[i] })
            })
        // eslint-disable-next-line
        debugger
    } else if (typeof e === 'string') {
        Vue.toasted.global.defaultError({ msg: e })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export function showSuccess(e) {
    if (e && e.response && e.response.data) {
        Vue.toasted.global.defaultSuccess({ msg: e.response.data })
    } else if (typeof e === 'string') {
        Vue.toasted.global.defaultSuccess({ msg: e })
    } else {
        Vue.toasted.global.defaultSuccess()
    }
}