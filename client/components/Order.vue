<template>
    <div>
        <template  v-for="(track, index) of (tracks)" >
        <template> 
        <v-subheader
           :key="track.id"
          v-text="track.title"
        ></v-subheader>

        <v-divider
           :key="index"
        ></v-divider>

        <v-list-item
         :key="track.title"
        >
          <v-list-item-avatar>
            <v-img :src="require('@/static/music-icon.jpg')"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="'Название: ' + track.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </template>
      </template>
    </div>
</template>

<script>
export default {
    props: ['tracks'],
    name: 'Order'
}
</script>