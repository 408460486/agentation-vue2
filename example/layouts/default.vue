<template>
  <div>
    <MobileNotice />
    <SideNav />
    <MobileNav />
    <main class="main-content">
      <nuxt />
    </main>
    <ToolbarProvider />
    <portal-target name="body" multiple />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
