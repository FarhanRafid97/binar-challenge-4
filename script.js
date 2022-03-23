class game {
  constructor() {
    this.batuSaya = document.querySelector('.playerBatu');
    this.kertasSaya = document.querySelector('.playerKertas');
    this.guntingSaya = document.querySelector('.playerGunting');
    this.batuComp = document.querySelector('.compBatu');
    this.kertasComp = document.querySelector('.compKertas');
    this.guntingComp = document.querySelector('.comptGunting');
    this.veersus = document.querySelector('.vs');
    this.refresh = document.querySelector('.refresh');
    this.pilihan = '';
    this.pilihanComputer = '';
    this.hasil = '';
  }
  playGame() {
    this.batuPlay();
    this.kertasPlay();
    this.guntingPlay();

    this.refreshGame();
  }
  refreshGame() {
    this.refresh.addEventListener('click', () => {
      this.hapusStyle();
    });
  }
  batuPlay() {
    this.batuSaya.addEventListener('click', () => {
      this.pilihan = 'batu';
      console.log(`saya batu milih ${this.pilihan}`);
      this.hapusStyle();
      setTimeout(() => {
        this.alurGame();
        this.pilihStyle();
      }, 1000);
    });
  }
  kertasPlay() {
    this.kertasSaya.addEventListener('click', () => {
      this.pilihan = 'kertas';
      console.log(`saya kertas milih ${this.pilihan}`);
      this.hapusStyle();
      setTimeout(() => {
        this.alurGame();
        this.pilihStyle();
      }, 1000);
    });
  }
  guntingPlay() {
    this.guntingSaya.addEventListener('click', () => {
      this.pilihan = 'gunting';
      console.log(`saya gunting milih ${this.pilihan}`);

      this.hapusStyle();
      setTimeout(() => {
        this.alurGame();
        this.pilihStyle();
      }, 700);
    });
  }
  alurGame() {
    this.competerMilih();
    this.kondisiMenang();
    this.menangAtauKalah();
  }

  competerMilih() {
    const angkaRandom = Math.floor(Math.random() * 3 + 1);
    if (angkaRandom === 1) {
      this.pilihanComputer = 'gunting';
    } else if (angkaRandom === 2) {
      this.pilihanComputer = 'kertas';
    } else if (angkaRandom === 3) {
      this.pilihanComputer = 'batu';
    }
    console.log(this.pilihanComputer);
  }
  kondisiMenang() {
    if (this.pilihan === this.pilihanComputer) {
      this.hasil = 'draw';
    } else if (this.pilihan === 'batu') {
      this.pilihanComputer === 'kertas'
        ? (this.hasil = 'kalah')
        : (this.hasil = 'menang');
    } else if (this.pilihan === 'gunting') {
      this.pilihanComputer === 'batu'
        ? (this.hasil = 'kalah')
        : (this.hasil = 'menang');
    } else if (this.pilihan === 'kertas') {
      this.pilihanComputer === 'gunting'
        ? (this.hasil = 'kalah')
        : (this.hasil = 'menang');
    }
    console.log(this.hasil);
  }
  ubahVersus() {}
  menangAtauKalah() {
    if (this.hasil === 'menang') {
      this.veersus.textContent = 'menang';
      this.veersus.style.backgroundColor = '#4C9654';
      this.veersus.style.color = 'white';
      this.veersus.style.transform = 'rotate(-40deg)';
    } else if (this.hasil === 'kalah') {
      this.veersus.textContent = 'kalah';
      this.veersus.style.backgroundColor = 'red';
      this.veersus.style.color = 'white';
      this.veersus.style.transform = 'rotate(40deg)';
    } else {
      this.veersus.textContent = 'draw';
      this.veersus.style.backgroundColor = '#4C9654';
      this.veersus.style.color = 'white';
      this.veersus.style.transform = 'rotate(0deg)';
    }
  }
  pilihStyle() {
    this.komputerPilihStyle();
    this.playerPilihStyle();
  }
  komputerPilihStyle() {
    if (this.pilihanComputer === 'batu') {
      this.batuComp.style.backgroundColor = '#C4C4Ce';
      this.kertasComp.style.backgroundColor = null;
      this.guntingComp.style.backgroundColor = null;
    } else if (this.pilihanComputer === 'kertas') {
      this.batuComp.style.backgroundColor = null;
      this.kertasComp.style.backgroundColor = '#C4C4Ce';
      this.guntingComp.style.backgroundColor = null;
    } else if (this.pilihanComputer === 'gunting') {
      this.batuComp.style.backgroundColor = null;
      this.kertasComp.style.backgroundColor = null;
      this.guntingComp.style.backgroundColor = '#C4C4Ce';
    }
  }
  playerPilihStyle() {
    if (this.pilihan === 'batu') {
      this.batuSaya.style.backgroundColor = '#C4C4Ce';
      this.kertasSaya.style.backgroundColor = null;
      this.guntingSaya.style.backgroundColor = null;
    } else if (this.pilihan === 'kertas') {
      this.batuSaya.style.backgroundColor = null;
      this.kertasSaya.style.backgroundColor = '#C4C4Ce';
      this.guntingSaya.style.backgroundColor = null;
    } else if (this.pilihan === 'gunting') {
      this.batuSaya.style.backgroundColor = null;
      this.kertasSaya.style.backgroundColor = null;
      this.guntingSaya.style.backgroundColor = '#C4C4Ce';
    }
  }
  hapusStyle() {
    this.batuSaya.style.backgroundColor = null;
    this.kertasSaya.style.backgroundColor = null;
    this.guntingSaya.style.backgroundColor = null;
    this.batuComp.style.backgroundColor = null;
    this.kertasComp.style.backgroundColor = null;
    this.guntingComp.style.backgroundColor = null;
    this.veersus.textContent = 'VS';
    this.veersus.style.backgroundColor = null;
    this.veersus.style.color = null;
    this.veersus.style.transform = null;
  }
}
class mulaiMain {}
const saya = new game();
saya.playGame();
