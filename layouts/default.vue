<template>
    <div>
        <div class="container text-center">
            <div class="row">
                <div class="col-md-12">
                    <div class="text-3xl font-bold">FE-TAXKITA</div>
                </div>
            </div>
            <div class="row" style="margin:25px; background-color: lightgreen">
                <div class="col">
                    <div class="text-1xl font-bold space-x-4">
                        <NuxtLink class="hover:text-blue-500 hover:underline" to="/" >Home</NuxtLink>
                    </div>
                </div>
                <div class="col">
                    <div class="text-1xl font-bold space-x-4">
                        <NuxtLink class="hover:text-blue-500 hover:underline" :to="{name: 'signup'}">Sign Up</NuxtLink>
                    </div>
                </div>
                <div class="col">
                    <div class="text-1xl font-bold space-x-4">
                        <NuxtLink class="hover:text-blue-500 hover:underline" :to="{name: 'login'}">Login</NuxtLink>
                    </div>
                </div>
                <div class="col">
                    <div class="text-1xl font-bold space-x-4">
                        <NuxtLink class="hover:text-blue-500 hover:underline" :to="{name: 'chat'}">Chat</NuxtLink>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div style="margin:25px">ini default layout</div> -->
        <slot />
    </div>
</template>
