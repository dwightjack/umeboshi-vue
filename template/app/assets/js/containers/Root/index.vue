<template>
    <div :class="$style.root">
        Hello {{{{raw-helper}}}}{{ message }}{{{{/raw-helper}}}}
    </div>
</template>

<script>

export default {
    name: 'Root',

    data() {
        return {
            message: 'World'
        };
    }
};

</script>

<style lang="scss" module>
@import "mixins";

.root {
    font-size: font-size(13px);
}
</style>