<script setup lang="ts">
const redirectToPluskan = () => {
  window.location.href = '/pluskan'
}
</script>

<template>
  <main>
    <section class="hero">
      <div class="container">
        <h1 class="hero-title">Välkommen till Pluskan</h1>
        <p class="hero-description">
          Hantera din ekonomi enkelt. Håll koll på inkomster, utgifter och fatta smartare ekonomiska
          beslut med Pluskan.
        </p>

        <button class="cta-button" @click="redirectToPluskan">Kom igång</button>
      </div>
    </section>
    <section class="features">
      <div class="container">
        <h2 class="section-title">Huvudfunktioner</h2>
        <div class="features-list">
          <div class="feature-item">
            <h3>Håll koll på dina Transaktioner.</h3>
            <p>Registrera och håll koll på dina inkomster och utgifter utan ansträngning. .</p>
          </div>
          <div class="feature-item">
            <h3>Översikt över Inkomster och Utgifter</h3>
            <p>Få en tydlig överblick av din ekonomiska situation på ett ögonblick.</p>
          </div>
          <div class="feature-item">
            <h3>Enkel att Använda</h3>
            <p>Designad med enkelhet i åtanke för en smidig användarupplevelse.</p>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 Pluskan</p>
      </div>
    </footer>
  </main>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f4f7fa;
  color: #333;
}

.hero {
  background-color: #009688;
  color: white;
  padding: 60px 0;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 20px;
}

.hero-description {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.cta-button {
  background-color: #ff9800;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
}

.cta-button:hover {
  background-color: #f57c00;
}

.features {
  padding: 40px 0;
  background-color: #ffffff;
}

.features .container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 30px;
}

.features-list {
  display: flex;
  justify-content: center;
  gap: 50px;
}

.feature-item {
  text-align: center;
  max-width: 250px;
}

.feature-item h3 {
  font-size: 1.6rem;
  margin-bottom: 15px;
}

.feature-item p {
  font-size: 1rem;
  color: #666;
}

.footer {
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
}
</style>
