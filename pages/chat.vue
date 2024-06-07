<template>
    <div class="container">
        <div class="row">
            <div class= "col-md-3">&nbsp;</div>
            <div class= "col-md-6">
                <div class= "d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary" style="width: 600px;">
                    <div class="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom">
                        <svg class="bi pe-none me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
                        <input class="fs-5 fw-semibold" v-model="username"/>
                    </div>
                    <div class="list-group list-group-flush border-bottom scrollarea">
                        <div class="list-group-item list-group-item-action py-3 lh-tight"
                            v-for="message in messages" :key="message"
                        >
                            <div class="d-flex w-100 align-items-center justify-content-between">
                                <strong class="mb-1">{{ message.username }}</strong>
                            </div>
                            <div class="col-10 mb-1 small">{{ message.message }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class= "col-md-3">&nbsp;</div>
        </div>
        <div class="row" style="margin-top:20px">
            <div class="col-md-3"></div>
            <div class="col-md-5">
                <form @submit.prevent="submitForm">
                    <input id="message" class="form-control" style="margin-bottom:10px" placeholder="Write a message" v-model="message" />
                    <button type="submit" class="btn btn-primary">Send</button>
                </form>
            </div>
            <div class="col-md-4"></div>
        </div>
    </div>
</template>

<script>
    import Pusher from 'pusher-js'

    export default{
        data(){
            return{
                username:'username',
                message:'',
                messages:[]
            }
        },
        mounted() {
            Pusher.logToConsole = true;

            const pusher = new Pusher('1be2980dccb878de2e9b', {cluster: 'ap1'});

            const channel = pusher.subscribe('chat');
                channel.bind('message', function(data) {
                    this.messages.push(data);
                });
        },
        // methods:{
        //     async submit(){
        //         await $fetch('url:http://127.0.0.1:8000/api/messages', data: {
        //             message: this.message
        //         });
        //         this.message='';
        //     }
        // }
    }
</script>
<style>
.scrollarea{
    min-height: 500px;
}
</style>


