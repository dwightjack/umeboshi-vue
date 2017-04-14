<template>
    <div :class="$style.root">
        Hello {{{{raw-helper}}}}{{ message }}{{{{/raw-helper}}}}
    </div>
</template>

<script>

export default {
    data() {
        return {
            message: 'World'
        };
    },
    name: 'Root'
};

</script>

<style module>
@import "mixins";

.root {
    font-size: font-size(13px);
}
</style>