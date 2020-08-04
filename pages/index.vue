<template>
  <div class="container">
    <CBox d="flex" w="100vw" h="100vh" flex-dir="column" justify-content="center">
      <CHeading textAlign="center" mb="4">⚡️ Hello chakra-ui/vue</CHeading>
      <CFlex justify="center" direction="column" align="center">
        <CButton left-icon="info" variant-color="blue" @click="showToast">Show Toast</CButton>
      </CFlex>
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,
  CButton,
  CFlex,
  CHeading,
} from '@chakra-ui/vue'

export default {
  name: 'App',
  components: {
    CBox,
    CButton,
    CFlex,
    CHeading,
  },
  methods: {
    showToast () {
      this.$toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 10000,
        isClosable: true
      })
    }
  }
}
</script>