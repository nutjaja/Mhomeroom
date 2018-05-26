<template>
    <div id="app">
        <div><video ref="video" id="video" width="440" height="280" autoplay></video></div>
        <div><v-btn @click="capture">Take Photo</v-btn></div>
        <div><v-btn @click="save">Take Photo</v-btn></div>
        <canvas ref="canvas" id="canvas" width="440" height="280"></canvas>
        <ul>
            <li v-for="c in captures">
                <img v-bind:src="c" height="50" />
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        layout: 'e-homeroom',
        name: 'app',
        data() {
            return {
                video: {},
                canvas: {},
                captures: []
            }
        },
       mounted() {
    this.video = this.$refs.video;
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            this.video.src = window.URL.createObjectURL(stream);
            this.video.play();
        });
    }
},
        methods: {
    capture() {
        this.canvas = this.$refs.canvas;
        var context = this.canvas.getContext("2d").drawImage(this.video, 0, 0, 440, 280);
        this.captures.push(canvas.toDataURL("image/png"));
    },
    save(){
        let photo = this.$refs.canvas.toDataURL()
        window.localStorage.setItem('photo',photo)
        this.$router.push('/view')
    }
}
    }
</script>
