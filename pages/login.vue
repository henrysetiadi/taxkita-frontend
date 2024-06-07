<script lang="ts" setup>
//import '~/assets/css/bootstrap.css'
</script>

<template>
    <div>
        <div class="container">
            <div class="row" style="margin-bottom:50px">
                <div class="col-md-4"></div>
                <div class="col-md-4">
                    <div class="text-3xl font-bold">LOGIN</div>
                </div>
            </div>

            <form class="row g-3 needs-validation">
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <label for="validationCustom01" class="form-label">Email</label>
                        <input type="text" class="form-control" id="validationCustom01" value="" >
                        <!-- <div class="valid-feedback">
                        Looks good!
                        </div> -->
                    </div>
                    <div class="col-md-4"></div>
                </div>
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <label for="validationCustom02" class="form-label">Password</label>
                        <input type="password" class="form-control" id="validationCustom02" value="">
                        <!-- <div class="valid-feedback">
                        Looks good!
                        </div> -->
                    </div>
                    <div class="col-md-4"></div>
                </div>
                <div class="row" style="margin-top:15px">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <button class="btn btn-primary" type="submit">Login</button>
                    </div>
                    <div class="col-md-4"></div>
                </div>
            </form>
        </div>
    </div>
</template>
