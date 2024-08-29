const preguntas = {
    facil: [
        { pregunta: "¿Qué distancia se recomienda estar para evitar un riesgo por destello de arco?", opciones: ["1.5 metros", "10 pies", "1 metro"], answer: "1.5 metros" },
        { pregunta: "¿Qué es MPS?", opciones: ["Monitoring procedure system", "Machine power system", "Monitoring power system"], answer: "Monitoring power system" },
        { pregunta: "Cuando se está verificando voltaje en una instalación eléctrica se dice que se está trabajando en:", opciones: ["En zona limite restringido", "En caliente", "En condiciones normales 127V"], answer: "En caliente" },
        { pregunta: "¿Cuál de estas es una herramienta de bloqueo?", opciones: ["Llave", "Candado", "Cadena"], answer: "Candado" },
        { pregunta: "¿Cuál de estas Energías es más peligrosa, primarias o secundarias?", opciones: ["Solo causan daños las energías primarias ya que con ellas funciona cualquier proceso, maquinaria o equipo.", "Ninguna de las dos es peligrosa", "Ambas son peligrosas ya que pueden causar daños en la misma magnitud, incluyendo las energías de tipo residual que se deben aislar y drenar"], answer: "Ambas son peligrosas ya que pueden causar daños en la misma magnitud, incluyendo las energías de tipo residual que se deben aislar y drenar" },
        { pregunta: "¿Cuál es el equipo de protección personal más básico?", opciones: ["Guantes", "Casco", "Arnés"], answer: "Casco" }
    ],
    medio: [
        { pregunta: "Cuando se realiza un trabajo bajo tensión en un panel eléctrico, ¿qué equipo de protección se recomienda usar?", opciones: ["Guantes de alta resistencia", "Escudo facial y guantes de aislamiento", "Solo guantes de protección"], answer: "Escudo facial y guantes de aislamiento" },
        { pregunta: "¿Qué debe hacerse antes de iniciar el trabajo en un equipo eléctrico?", opciones: ["Desconectar la alimentación y asegurar la fuente de energía", "Solo revisar las conexiones", "No se requiere ninguna acción previa"], answer: "Desconectar la alimentación y asegurar la fuente de energía" },
        { pregunta: "¿Qué se debe hacer si se observa un cable dañado en el sitio de trabajo?", opciones: ["Reportar inmediatamente y etiquetar el cable", "Ignorar y continuar con el trabajo", "Solo cubrir el cable"], answer: "Reportar inmediatamente y etiquetar el cable" },
        { pregunta: "¿Cuál es el propósito de un interruptor de circuito?", opciones: ["Proteger el circuito de sobrecargas y cortocircuitos", "Aumentar la potencia del circuito", "Mejorar la eficiencia del equipo"], answer: "Proteger el circuito de sobrecargas y cortocircuitos" },
        { pregunta: "¿Qué se debe hacer después de usar una herramienta eléctrica?", opciones: ["Limpiarla y guardarla en un lugar seco", "Dejarla en el lugar de trabajo", "Solo sacudir el polvo"], answer: "Limpiarla y guardarla en un lugar seco" },
        { pregunta: "¿Qué riesgo está asociado con el uso inadecuado de equipos eléctricos?", opciones: ["Descarga eléctrica", "Infección", "Pérdida de material"], answer: "Descarga eléctrica" }
    ],
    dificil: [
        { pregunta: "¿Qué medidas de seguridad deben tomarse al trabajar en una subestación eléctrica?", opciones: ["Usar equipo de protección adecuado y realizar un bloqueo de energía", "Solo usar guantes de protección", "No es necesario tomar medidas especiales"], answer: "Usar equipo de protección adecuado y realizar un bloqueo de energía" },
        { pregunta: "¿Cómo se puede prevenir una explosión en una instalación eléctrica?", opciones: ["Mantenimiento regular y monitoreo de gases explosivos", "Uso exclusivo de equipos de alta calidad", "No es posible prevenir"], answer: "Mantenimiento regular y monitoreo de gases explosivos" },
        { pregunta: "¿Qué es un análisis de riesgos eléctricos?", opciones: ["Evaluación de posibles peligros y implementación de controles", "Solo una inspección visual", "Una prueba de equipos"], answer: "Evaluación de posibles peligros y implementación de controles" },
        { pregunta: "¿Qué protocolos se deben seguir en caso de un accidente eléctrico?", opciones: ["Notificar a los servicios médicos y seguir el procedimiento de emergencia", "Solo informar al supervisor", "Esperar a que pase el incidente"], answer: "Notificar a los servicios médicos y seguir el procedimiento de emergencia" },
        { pregunta: "¿Cuál es la importancia del mantenimiento preventivo en equipos eléctricos?", opciones: ["Evita fallos inesperados y asegura el funcionamiento seguro", "Solo mejora la apariencia del equipo", "No tiene mucha importancia"], answer: "Evita fallos inesperados y asegura el funcionamiento seguro" },
        { pregunta: "¿Cómo se debe proceder si se encuentra una falla en el sistema eléctrico durante una revisión?", opciones: ["Aislar el sistema afectado y realizar las reparaciones necesarias", "Continuar con la revisión sin hacer cambios", "No se necesita hacer nada"], answer: "Aislar el sistema afectado y realizar las reparaciones necesarias" }
    ]
};

let difficultyLevel = '';
let currentQuestion = null;

function startGame(difficulty) {
    difficultyLevel = difficulty;
    document.querySelector(".container").style.display = "none"; // Oculta el fondo blanco
    document.getElementById("difficultyButtons").style.display = "none"; // Oculta los botones de dificultad
    document.getElementById("quizContainer").style.display = "block"; // Muestra el contenedor de preguntas
    showQuestion();
}

function showQuestion() {
    if (preguntas[difficultyLevel].length === 0) {
        alert("No hay más preguntas para esta dificultad.");
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * preguntas[difficultyLevel].length);
    currentQuestion = preguntas[difficultyLevel][randomIndex];
    
    document.getElementById("question").textContent = currentQuestion.pregunta;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    currentQuestion.opciones.forEach(opcion => {
        const button = document.createElement("button");
        button.textContent = opcion;
        button.onclick = () => checkAnswer(opcion);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const resultModal = document.getElementById("resultModal");
    const resultMessage = document.getElementById("resultMessage");
    const correctSound = document.getElementById("correctSound");
    const incorrectSound = document.getElementById("incorrectSound");

    if (selectedOption === currentQuestion.answer) {
        resultMessage.textContent = "¡Respuesta correcta!";
        correctSound.play();
        resultModal.style.display = "block";
        setTimeout(() => {
            window.location.href = "Ruleta/index.html"; // Cambia a la ruta correcta
        }, 3000); // Redirige después de 3 segundos
    } else {
        resultMessage.textContent = "Respuesta incorrecta. La respuesta correcta es: " + currentQuestion.answer;
        incorrectSound.play();
        resultModal.style.display = "block";
        setTimeout(() => {
            window.location.href = "end.html"; // Cambia a la ruta correcta
        }, 3000); // Redirige después de 3 segundos
    }
}
