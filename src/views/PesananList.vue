<template>
  <div class="pesanan-list-container">
    <Navbar />
    <div class="content">
      <h1 class="title">Pesanan Anda</h1>
      <div class="pesanan-scroll-container">
        <ul class="pesanan-row">
          <li v-for="pesanan in pesananList" :key="pesanan.id" class="pesanan-item" @click="deletePesanan(pesanan.id)">
            <div class="pesanan-item-container">
              <div class="pesanan-image-container">
                <img :src="pesanan.image" alt="Gambar Pesanan" class="pesanan-image" />
              </div>
              <div class="pesanan-details">
                <h3>{{ pesanan.name }}</h3>
                <p>Harga: Rp {{ pesanan.price }}</p>
              </div>
              <div class="pesanan-remove-wrapper">
                <span class="pesanan-remove">&times;</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Navbar from '@/components/MainNavbar.vue';

export default {
  name: 'PesananList',
  components: {
    Navbar
  },
  computed: {
    ...mapState(['pesananList']),
  },
  methods: {
    ...mapMutations(['removePesanan']),
    deletePesanan(pesananId) {
      this.removePesanan(pesananId);
    },
  },
};
</script>

<style scoped>
.pesanan-list-container {
  background-color: #f1f1f1;
  padding: 20px;
  min-height: 91vh;
}

.content {
  margin-top: 20px;
  text-align: left;
}

.title {
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
}

.pesanan-scroll-container {
  overflow-x: auto;
  width: 100%;
}

.pesanan-row {
  display: flex;
  flex-direction: column;
  list-style: none; /* Menghilangkan bullet */
  justify-content: center;
}

.pesanan-item {
  margin-bottom: 20px;
  margin-right: 20px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  width: 400px; /* Ubah lebar sesuai kebutuhan */
  position: relative;
}

.pesanan-item-container {
  display: flex;
  align-items: center;
  width: 100%;
}

.pesanan-image-container {
  width: 100px; /* Ubah lebar gambar sesuai kebutuhan */
  height: 100px; /* Ubah tinggi gambar sesuai kebutuhan */
  margin-right: 10px;
}

.pesanan-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.pesanan-details {
  flex-grow: 1;
}

.pesanan-remove-wrapper {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
}

.pesanan-remove {
  font-weight: bold;
  font-size: 175%;
  color: black;
  cursor: pointer;
  margin-right: 25px;
}

/* Responsiveness */
@media (max-width: 768px) {
  .pesanan-row {
    justify-content: center;
  }

  .pesanan-item {
    margin-right: 0;
  }
}
</style>
