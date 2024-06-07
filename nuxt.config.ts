// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig:{
    public:{
      apiBase: 'http://127.0.0.1:8000'
    }
  },
  app:{
    head:{
      title:'FE TAXKITA',
      meta:[
        {charset:'utf-8'},
        {name:'viewport', content:'width-device-width, initial-scale=1'},
        {hid:'description', name:'description', content:'frontend with nuxt'}
      ],
      link:[
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css',
          integrity: 'sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD',
          crossorigin: 'anonymous'
        }
      ],
      script:[
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js',
          integrity: 'sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN',
          crossorigin: 'anonymous'
        },
        {
          src: 'https://js.pusher.com/8.2.0/pusher.min.js'
        }
      ]
    }
  },

  modules:[
    '@nuxtjs/tailwindcss'
  ]
})
