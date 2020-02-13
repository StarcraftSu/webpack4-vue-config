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
<style>
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
        background:cornflowerblue;
        font-size:22px;
        color:white;
    }

</style>
