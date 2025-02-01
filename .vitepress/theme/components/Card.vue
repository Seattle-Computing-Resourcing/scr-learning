<template>
  <div class="card">
    <div class="card-inner">
      <div class="card-front">
        <h2 class="card-title">{{ name }}</h2>
        <span class="card-date">{{ date }}</span>
      </div>

      <div class="card-back">
        <p class="card-description">{{ description }}</p>
        <a :href="link" target="_blank" rel="noopener noreferrer" class="card-icon">
          <img class="linkIcon"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    name: String,
    date: String,
    description: String,
    link: String
  });
</script>

<style scoped>
  .linkIcon {
    content: url("/black.png");
  }

  .dark .linkIcon {
    content: url("/white.png");
  }

  .card {
    width: 320px;
    height: 180px;
    perspective: 1000px;
  }

  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .card:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s;
  }

  .card-front {
    background: white;
    border: 1px solid #ddd;
  }

  .card:hover .card-front {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .card-back {
    background: #007bff;
    color: white;
    transform: rotateY(180deg);
    text-align: center;
    padding: 16px;
  }

  .card-title {
    font-size: 1.4rem;
    font-weight: bold;
    color: #333;
  }

  .card-date {
    font-size: 0.9rem;
    color: #666;
  }

  .card-description {
    font-size: 1rem;
    font-weight: bold;
    color: white;
  }

  .card-icon {
    position: absolute;
    bottom: 12px;
    right: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #007bff;
    color: white;
    transition: background 0.3s ease-in-out;
  }

  .card-icon:hover {
    background: #0056b3;
  }

  .icon {
    width: 18px;
    height: 18px;
    stroke: white;
  }
</style>
