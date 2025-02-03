<template>
        <div class="close"></div>
</template>
<style scoped>
.close {
    position: absolute;
    top: 14px;
    right: 14px;
    width: .75em;
    height: .75em;
    border-radius: 100px;
    cursor: pointer;
    background:
        linear-gradient(45deg, transparent calc(50% - 1px), rgba(255, 255, 255, 1) calc(50% - 1px), rgba(255, 255, 255, 1) calc(50% + 1px), transparent calc(50% + 1px)),
        linear-gradient(-45deg, transparent calc(50% - 1px), rgba(255, 255, 255, 1) calc(50% - 1px), rgba(255, 255, 255, 1) calc(50% + 1px), transparent calc(50% + 1px));
}
</style>