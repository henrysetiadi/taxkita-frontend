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
        await $fetch(`${config.public.apiBase}/api/auth/register`, {

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
    Page: posts/create/index
  </div>
</template>

<style scoped></style>
