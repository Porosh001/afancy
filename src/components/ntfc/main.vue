<template>
  <div>


    <transition-group class="fnc-ntfc-parent" tag='div' name='ntfc' appear>
      <div
        v-for='(e, p) of ntfcs'
        :key="e.uid"
        class='fnc-ntfc'
        @click='remove(p)'
        :style="e.style"
        >
        {{e.content}}
      </div>
    </transition-group>


  </div>
</template>


<script>
export default {
  data(){
    return {
      uid: 0,
      ntfcs: {}
    };
  },
  methods: {
    open(custom_config){
      let config = {
        uid: this.uid,
        content: custom_config.content,
        style: {
          '--background-color': 'var(--bs-success)',
          'background-color': 'var(--background-color)',
          'box-shadow': '0px 5px 30px -15px var(--background-color)',
          ...custom_config.style
        }
      };
      this.$set( this.ntfcs, 'ntfc_'+this.uid, config );
      this.uid++;
    },
    remove( unique_property ){
      this.$delete(this.ntfcs, unique_property);
    }
  }
}
</script>



<style scoped>
@keyframes fnc_ntfc_translate_horizontal {
  0% {
    cursor: wait;
    transform: translate(360px, 0px);
  }
  100% {
    cursor: wait;
    transform: translate(0px, 0px);
  }
}


.fnc-ntfc-parent{
  position: fixed;
  right: 0px;
  bottom: 0px;
  z-index: 900000;
  padding: 20px 35px;
}


.fnc-ntfc{
  --background-color: blue;
  background-color: var(--background-color);
  width: 100%;
  max-width: 360px;
  max-height: 100px;
  padding: 15px 7px;
  box-shadow: 0px 5px 30px -15px var(--background-color);
  margin: 7px 10px;
  cursor: pointer;
}


.ntfc-move {
  transition: all .4s;
}


.ntfc-enter-active {
  animation: .8s ease 0s 1 normal fnc_ntfc_translate_horizontal;
}


.ntfc-leave-active {
  animation: .8s ease 0s 1 reverse fnc_ntfc_translate_horizontal;
}

</style>
