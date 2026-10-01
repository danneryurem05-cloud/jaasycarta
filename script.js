const pages = [
  {
    html: `
      <div class="heart">❤️</div>
      <h1>Jaasiel...</h1>
      <p>Hay cosas que uno guarda durante mucho tiempo porque no sabe cómo decirlas sin que la voz tiemble.</p>
      <p class="highlight">Esta vez quiero que simplemente me leas hasta el final.</p>
      <p class="small">No es una pelea. No es un reclamo. Es mi corazón intentando hablar.</p>
    `
  },
  {
    html: `
      <div class="heart">🌙</div>
      <h2>He estado recordando...</h2>
      <p>Los momentos que vivimos, las conversaciones, las risas, las miradas, las tonterías que nos hacían felices y esos momentos en los que parecía que no necesitábamos nada más.</p>
      <p>También recuerdo el cariño, la cercanía, el amor y esa sensación bonita de saber que alguien estaba ahí.</p>
      <p class="quote">Quizá algunos recuerdos para ti sean pequeños. Para mí, muchos de ellos todavía significan muchísimo.</p>
    `
  },
  {
    html: `
      <div class="heart">✨</div>
      <h2>También recuerdo la diversión</h2>
      <p>Las cosas simples. Las bromas. Las conversaciones sin sentido. Esos momentos en los que podíamos olvidarnos de todo y simplemente disfrutar.</p>
      <p>Y sí... también recuerdo nuestros momentos más íntimos, esos que compartimos desde la confianza, el deseo y el cariño.</p>
      <p>Todo eso forma parte de nuestra historia y no voy a fingir que no me importa.</p>
    `
  },
  {
    html: `
      <div class="heart">💔</div>
      <h2>Pero hay algo que me está doliendo...</h2>
      <p><span class="highlight">Te amo, Jaasiel.</span> Y justamente por eso me cuesta tanto decir esto.</p>
      <p>Siento que durante mucho tiempo he sido yo quien intenta mantener esto vivo, quien busca, quien piensa, quien hace cosas, quien intenta encontrar una manera de que sigamos adelante.</p>
      <p>Y poco a poco me estoy cansando de sentir que estoy intentando por los dos.</p>
    `
  },
  {
    html: `
      <div class="heart">🫀</div>
      <h2>Yo también tengo un corazón</h2>
      <p>Necesito sentirme amado. Necesito sentir que también soy importante para alguien.</p>
      <p>No quiero tener que pedir constantemente cariño, atención o interés. No quiero sentir que tengo que convencerte de querer estar conmigo.</p>
      <p class="quote">Porque aunque muchas veces parezca fuerte, yo también siento. Yo también me rompo. Yo también necesito que alguien me elija.</p>
    `
  },
  {
    html: `
      <div class="heart">❤️‍🩹</div>
      <h2>Y aun así...</h2>
      <p>Mi amor por ti no desapareció.</p>
      <p>Es demasiado grande como para apagarlo de un día para otro. Una parte de mí todavía imagina que podemos aprender de todo esto, cambiar algunas cosas y volver a construir algo bonito.</p>
      <p>Pero ya no quiero ser el único que quiera intentarlo.</p>
    `
  },
  {
    html: `
      <div class="heart">🥀</div>
      <h2>No quiero perseguirte</h2>
      <p>No quiero obligarte a quedarte. No quiero que estés conmigo por pena, costumbre o miedo a perderme.</p>
      <p>Quiero que, si decides estar, sea porque <span class="highlight">realmente quieres estar.</span></p>
      <p>Porque el amor no debería sentirse como una persona corriendo detrás de la otra mientras la otra solamente espera.</p>
    `
  },
  {
    html: `
      <div class="heart">🕊️</div>
      <h2>Por una vez, piensa en mí</h2>
      <p>Sé que quizá no soy la persona por la que darías todo. Tal vez nunca lo fui.</p>
      <p>Pero quisiera pensar que, aunque sea por una vez, puedes detenerte y pensar en mí. En todo lo que hice. En todas las veces que intenté. En todas las veces que quise que funcionara.</p>
      <p class="quote">No te estoy pidiendo que seas perfecta. Solo quisiera sentir que también estás dispuesta a dar algo de ti.</p>
    `
  },
  {
    html: `
      <div class="heart">📖</div>
      <h2>Yo sí quiero creer que puede ser diferente</h2>
      <p>Si todavía tienes algo dentro de ti que quiere intentarlo, no necesito promesas enormes.</p>
      <p>Necesito hechos. Una conversación sincera. Un esfuerzo real. Una señal de que no soy el único sosteniendo esta historia.</p>
      <p>Porque cambiar no significa olvidar lo que pasó. Significa decidir que, desde ahora, los dos vamos a hacerlo diferente.</p>
    `
  },
  {
    html: `
      <div class="heart">📞</div>
      <h2>Entonces, si todavía me quieres...</h2>
      <p>No voy a perseguirte.</p>
      <p>Si de verdad todavía hay algo para mí dentro de tu corazón, <span class="highlight">búscame.</span></p>
      <p>Llámame. Háblame. Dime lo que realmente sientes.</p>
      <p>Tú sabes dónde encontrarme. Sabes por dónde camino, dónde estudio, dónde trabajo y cómo comunicarte conmigo.</p>
      <p class="small">No necesitas demostrarme nada con palabras perfectas. Solo necesito saber que todavía te importa.</p>
    `
  },
  {
    html: `
      <div class="heart">⏳</div>
      <h2>Yo todavía voy a esperar...</h2>
      <p>Pero no para siempre.</p>
      <p>Voy a dejar un pequeño espacio para que decidas qué quieres realmente. Y mientras tanto, voy a intentar aprender a cuidar también de mí.</p>
      <p>Porque esperarte no significa olvidarme de mí mismo.</p>
      <p class="quote">Si vienes, quiero que vengas porque quieres construir conmigo. Si no vienes, tendré que aceptar que quizá nuestra historia necesitaba terminar aquí.</p>
    `
  },
  {
    html: `
      <div class="heart">❤️</div>
      <h2>Esto es lo último que quiero que recuerdes</h2>
      <div class="final-message">
        <p><strong>Te amo, Jaasiel.</strong></p>
        <p>Más de lo que probablemente imaginas.</p>
        <p>Y precisamente porque todavía te amo, me cuesta soltar.</p>
        <p>Pero también estoy aprendiendo que amar a alguien no significa olvidarse de uno mismo.</p>
        <p>Si todavía quieres esto, búscame.</p>
        <p>Haz aunque sea una parte de lo que alguna vez hice por nosotros.</p>
        <p>Y si decides hacerlo, yo voy a escucharte.</p>
        <div class="signature">Con todo lo que todavía siento por ti.<br><br>— Yurem ❤️</div>
      </div>
    `
  }
];

let current = 0;
const content = document.getElementById("content");
const counter = document.getElementById("counter");
const bar = document.getElementById("bar");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

function render(index, direction = "next") {
  content.classList.remove("active");
  setTimeout(() => {
    content.innerHTML = pages[index].html;
    content.classList.add("active");
    counter.textContent = `${index + 1} / ${pages.length}`;
    bar.style.width = `${((index + 1) / pages.length) * 100}%`;
    prev.disabled = index === 0;
    next.textContent = index === pages.length - 1 ? "Volver a leer ❤️" : "Siguiente →";
  }, 180);
}

next.addEventListener("click", () => {
  if (current === pages.length - 1) {
    current = 0;
  } else {
    current++;
  }
  render(current);
});

prev.addEventListener("click", () => {
  if (current > 0) current--;
  render(current, "prev");
});

render(current);

function createFloating() {
  const el = document.createElement("span");
  el.className = Math.random() > .45 ? "floating-heart" : "petal";
  el.textContent = Math.random() > .45 ? "♥" : "✦";
  el.style.left = Math.random() * 100 + "vw";
  el.style.setProperty("--drift", (Math.random() * 180 - 90) + "px");
  el.style.animationDuration = (6 + Math.random() * 7) + "s";
  el.style.opacity = (.25 + Math.random() * .5).toFixed(2);
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 14000);
}

setInterval(createFloating, 650);
