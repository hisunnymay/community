<script>
</script>
<template>
  <div class="toggle-menu" role="button">
    <span ref="firstToggleLine" class="first-t"></span>
    <span ref="middleToggleLine" class="middle-t"></span>
    <span ref="lastToggleLine " class="last-t"></span>
  </div>
</template>

<style lang="scss" scoped>
@media (max-width: 719px) {
 
  .toggle-menu span:nth-child(2) {
    margin: 6px 0;
  }
  .toggle-menu {
    display: flex;
    width: 20px;
    height: 100px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 1.25rem;
    height: 1.25rem;
    align-self: center;
    cursor: pointer;
    margin-left: 10px;
    position: fixed;
    right: 10px;
    top: 80px;
    padding: 10px;
    margin-bottom: 10px;
    span {
      display: inline-block;
      width: 100%;
      height: 2px;
      border-radius: 2px;
      background: var(--c-text);
      transition: 0.01s ease-in-out;
      // position:absolute;
      // transform: var(--t-transform);
    }
  }
  .first-transform {
    transform: rotate(45deg) translate3d(6px, 6px, 0);
    // top: 3px;
  }
  .last-transform {
    transform: rotate(-45deg) translate3d(5px, -5.5px, 0);
    // transform: rotate(135deg);
    // top: 6;
  }
  .middle-transform {
    transform: scale3d(0, 1, 1);
    // width: 1px;
    // display: none;
  }
}
</style>