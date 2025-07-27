<template>
    <nav class="navbar">
      <div class="nav-container">
  
        <div class="nav-links">
          <router-link to="/" exact-active-class="active-link">Home</router-link>
          <router-link to="/faqs" exact-active-class="active-link">FAQs</router-link>
        </div>
      </div>
    </nav>
  </template>

  <script lang="ts">
  export default {

  }
</script>
  
  <style scoped>
  .navbar {
    background: linear-gradient(to right, #5a3b18, #9b762e, #5a3b18);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    padding: 0.75rem 1.5rem;
  
    .nav-container {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .logo {
      display: flex;
      align-items: center;
      text-decoration: none;
  
      .logo-img {
        width: 40px;
        height: 40px;
        border: 2px solid #f4e3b2;
        border-radius: 50%;
        margin-right: 0.5rem;
      }
  
      .logo-text {
        font-size: 1.5rem;
        font-weight: bold;
        color: #f4e3b2;
        text-shadow: 1px 1px 2px #000;
      }
    }
  
    .nav-links {
      display: flex;
      gap: 1.5rem;
  
      a {
        font-size: 1.1rem;
        font-weight: 600;
        color: #f4e3b2;
        text-decoration: none;
        transition: color 0.2s;
  
        &:hover {
          color: #fff;
        }
      }
  
      .active-link {
        text-decoration: underline;
        color: #fff;
      }
    }
  }
  </style>
  