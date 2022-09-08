

<template>
  <div @click="counter.increment()">
    {{ counter.count }}
    {{ count }}
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

const counter = useCounterStore();
const { count } = storeToRefs(counter);
</script>