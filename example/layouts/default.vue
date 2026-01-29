<template>
  <div>
    <MobileNotice />
    <SideNav />
    <MobileNav />
    <main class="main-content">
      <nuxt />
    </main>
    <ToolbarProvider />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
