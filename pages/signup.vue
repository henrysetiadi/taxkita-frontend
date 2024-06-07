<script lang="ts" setup>
 //meta title
 useHead({
        title: 'Form Submit',
    });

    //init config
    const config = useRuntimeConfig();

    //init router
    const router = useRouter();

    const name = ref('');
    const email = ref('');
    const password = ref('');
    const confPassword = ref('');
    const errors : any = ref({});

    //method "storePost"
    const storePost = async () => {

        //init formData
        let formData = new FormData();

        //assign state value to formData
        formData.append('name', name.value);
        formData.append('email', email.value);
        formData.append('password', password.value);
        formData.append('password_confirmation', confPassword.value);

        //store data with API
        //await $fetch(`${config.public.apiBase}/api/auth/register`, {
            await $fetch(`http://127.0.0.1:8000/api/auth/register`, {

            //method
            method: 'POST',

            //data
            body: formData
        })
        .then(() => {
            //redirect
            router.push({ path: "/posts" });
        })
        .catch((error) => {

            //assign response error data to state "errors"
            errors.value = error.data
        });
    }
</script>

<template>
    <div>
        <div class="row" style="margin-bottom:50px">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <div class="text-3xl font-bold">SIGN UP</div>
            </div>
        </div>
        <form class="row g-3 needs-validation" @submit.prevent="storePost()">
            <div class="container">
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <label for="validationCustom01" class="form-label">Name</label>
                        <input type="text" class="form-control" id="validationCustom01" v-model="name" >
                        <div v-if="errors.name" class="alert alert-danger mt-2">
                            <span>{{ errors.name[0] }}</span>
                        </div>
                    </div>
                    <div class="col-md-4"></div>
                </div>
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <label for="validationCustom01" class="form-label">Email</label>
                        <input type="text" class="form-control" id="validationCustom02" v-model="email" >
                        <div v-if="errors.email" class="alert alert-danger mt-2">
                            <span>{{ errors.email[0] }}</span>
                        </div>
                    </div>
                    <div class="col-md-4"></div>
                </div>
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <label for="validationCustom02" class="form-label">Password</label>
                        <input type="password" class="form-control" id="validationCustom03" v-model="password">
                        <div v-if="errors.password" class="alert alert-danger mt-2">
                            <span>{{ errors.password[0] }}</span>
                        </div>
                    </div>
                    <div class="col-md-4"></div>
                </div>
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <label for="validationCustom03" class="form-label">Konfirmasi Password</label>
                        <input type="password" class="form-control" id="validationCustom04" vmodel="password_confirmation">
                        <div v-if="errors.password_confirmation" class="alert alert-danger mt-2">
                            <span>{{ errors.password_confirmation[0] }}</span>
                        </div>
                    </div>
                    <div class="col-md-4"></div>
                </div>
                <div class="row" style="margin-top:15px">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <button class="btn btn-primary" type="submit">Submit</button>
                    </div>
                    <div class="col-md-4"></div>
                </div>
            </div>
        </form>
    </div>
</template>
