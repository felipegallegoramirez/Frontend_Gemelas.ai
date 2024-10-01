import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  
interface Responses {
  [key: string]: string;
}

const responses: Responses = {
  "hola": "¡Hola! ¿Cómo estás?",
  "bien": "Me alegra escuchar eso.",
  "adiós": "¡Hasta luego!",
  "gracias": "¡De nada!",
  "¿cuál es tu nombre?": "Soy un bot creado para ayudarte.",
  "¿qué puedes hacer?": "Puedo responder tus preguntas y mantener una conversación.",
  "dime un chiste": "¿Por qué los pájaros no usan Facebook? ¡Porque ya tienen Twitter!",
  "¿cómo está el clima?": "No tengo acceso a datos en tiempo real, pero espero que esté bien.",
  "¿qué hora es?": "No tengo un reloj, ¡pero siempre es hora de chatear!",
  "sapa": "mera loka!"
};

function sendMessage(): void {
  const input = document.querySelector('.message-input') as HTMLInputElement;
  const messageText = input.value.trim().toLowerCase();

  if (messageText) {
      const messagesDiv = document.getElementById('messages') as HTMLElement;

      // Agregar mensaje enviado por el usuario
      const userMessage = document.createElement('div');
      userMessage.className = 'message sent';

      const userImage = document.createElement('img');
      userImage.src = 'usuario.png';
      userImage.alt = 'Usuario';

      userMessage.appendChild(userImage);
      userMessage.appendChild(document.createTextNode(messageText));
      messagesDiv.appendChild(userMessage);

      // Respuesta automática
      const botResponse = responses[messageText] || "Lo siento, no entiendo tu mensaje.";
      const botMessage = document.createElement('div');
      botMessage.className = 'message received';

      const botImage = document.createElement('img');
      botImage.src = 'Bot.png';
      botImage.alt = 'Bot';

      botMessage.appendChild(botImage);
      botMessage.appendChild(document.createTextNode(botResponse));
      messagesDiv.appendChild(botMessage);

      input.value = '';
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
}

document.querySelector('.send-button')?.addEventListener('click', sendMessage);

document.querySelector('.message-input')?.addEventListener('keydown', function(event: KeyboardEvent) {
  if (event.key === 'Enter') {
      sendMessage();
      event.preventDefault();
  }
});

  

}
