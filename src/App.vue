<template>
    <div id="app">
        <div>This is Jimmy</div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>
<style lang="scss">
    *,
    *::after,
    *::before,
    {
        margin:0;
        padding:0;
    }
    #app{
        width:80%;
        margin:0 auto;
        background:#eee;
        font-size:22px;
    }
    
</style>
