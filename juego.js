class Juego {

  ULTIMO_NIVEL = 10;

  constructor() {
    this.inicializar()
    this.generarSecuencia()
    setTimeout(this.siguienteNivel, 500)
  }

  inicializar() {
    // Con eso quedará atado el this (contexto) del juego
    this.elegirColor = this.elegirColor.bind(this);
    this.siguienteNivel = this.siguienteNivel.bind(this)
    this.inicializar = this.inicializar.bind(this)

    btnEmpezar.classList.toggle('hide')
    this.nivel = 1
    this.aciertos = 0
    this.colores = {
      celeste,
      violeta,
      naranja,
      verde
    }
    this.puntuacion = {
      level: score.children.item(1),
      points: score.children.item(2)
    }
  }

  toggleBtnEmpezar() {
    if (btnEmpezar.classList.contains('hide')) {
      btnEmpezar.classList.remove('hide')
    } else {
      btnEmpezar.classList.add('hide')
    }
  }

  /*
    Generamos un array de números aleatorios
    Con fill llenamos de ceros el array
  */
  generarSecuencia() {
    this.secuencia = new Array(this.ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4));
  }

  siguienteNivel() {
    this.subnivel = 0
    this.puntuacion.level.innerText = `Nivel: ${this.nivel}`
    this.puntuacion.points.innerText = `Aciertos: ${this.aciertos}`
    this.iluminarSecuencia()
    this.agregarEventosClick()
  }

  trasnformarNumeroAcolor(num) {
    switch (num) {
      case 0:
        return 'celeste'
      case 1:
        return 'violeta'
      case 2:
        return 'naranja'
      case 3:
        return 'verde'
    }
  }

  trasnformarColorANumero(color) {
    switch (color) {
      case 'celeste':
        return 0;
      case 'violeta':
        return 1
      case 'naranja':
        return 2
      case 'verde':
        return 3
    }
  }

  reproducirSonido(num) {
    var src;
    switch (num) {
      case 0:
        src = 'media/do.mp3';
        break;
      case 1:
        src = 'media/re.mp3';
        break;
      case 2:
        src = 'media/mi.mp3';
        break;
      case 3:
        src = 'media/fa.mp3';
        break;
    }
    console.log('Reproduce');
    var snd = new Audio(src);
    snd.play();
  }

  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      const color = this.trasnformarNumeroAcolor(this.secuencia[i]);

      setTimeout(() => {
        this.iluminarColor(color)
        this.reproducirSonido(this.secuencia[i]);
      }, 1000 * i)
    }
  }

  iluminarColor(color) {
    this.colores[color].classList.add
      ('light');
    setTimeout(() => this.apagarColor(color), 350);
  }

  apagarColor(color) {
    this.colores[color].classList.remove('light');
  }

  agregarEventosClick() {
    // Para no perder la referencia a this
    var self = this;
    this.colores.celeste.addEventListener('click', this.elegirColor);
    this.colores.verde.addEventListener('click', this.elegirColor);
    this.colores.violeta.addEventListener('click', this.elegirColor);
    this.colores.naranja.addEventListener('click', this.elegirColor);
  }

  eliminarEventosClick() {
    // Para no perder la referencia a this
    var self = this;
    this.colores.celeste.removeEventListener('click', this.elegirColor);
    this.colores.verde.removeEventListener('click', this.elegirColor);
    this.colores.violeta.removeEventListener('click', this.elegirColor);
    this.colores.naranja.removeEventListener('click', this.elegirColor);
  }

  elegirColor(e) {
    const nombreColor = e.target.dataset.color;
    const numeroColor = this.trasnformarColorANumero(nombreColor)
    this.iluminarColor(nombreColor)
    this.reproducirSonido(numeroColor)

    // Si el usuario selecciona bien la secuencia
    if (numeroColor === this.secuencia[this.subnivel]) {
      this.subnivel++
      this.aciertos++;
      this.puntuacion.points.innerText = `Aciertos: ${this.aciertos}`;

      // El usuario pasa de nivel
      if (this.subnivel === this.nivel) {
        this.nivel++
        this.puntuacion.level.innerText = `Nivel: ${this.nivel}`;
        this.eliminarEventosClick()

        if (this.nivel === (this.ULTIMO_NIVEL + 1)) {
          // Ganó
          this.ganoElJuego();
        } else {
          // Avanzar de nivel
          setTimeout(this.siguienteNivel, 1500)
        }
      }

    } else {
      // Perdió
      this.perdioElJuego();
    }
  }

  ganoElJuego() {
    swal('¡Super Memoria!', 'Felicitaciones, ganaste el juego!', 'success')
      .then(this.inicializar)
  }

  perdioElJuego() {
    swal('Afina tu Memoria', 'Oush, sigue practicando :(', 'error')
      .then(() => {
        this.eliminarEventosClick();
        this.inicializar();
      })
    this.aciertos = 0
    this.nivel = 1
    this.puntuacion.level.innerText = `Nivel: ${this.nivel}`;
    this.puntuacion.points.innerText = `Aciertos: ${this.aciertos}`;
  }

}