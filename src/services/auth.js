import {ref} from 'vue';

export const isLoggedin = ref(!!localStorage.getItem('JWT'));

export const errorBag = ref({});

/**
 * @param {{email:string,password:string}} credentials
 */
export const login = async credentials => {
    const response = await fetch('login', {method: 'POST', body: JSON.stringify(credentials)});

    if (response.status !== 200) {
        errorBag.value = {loginFailure: 'Mag niet!'};
        return;
    }
    console.log(response);
    const token = await response.text();
    localStorage.setItem('JWT', token);
    isLoggedin.value = true;
};
