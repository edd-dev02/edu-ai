import './style.css'
import { createOpenRouter } from '@openrouter/ai-sdk-provider'
import { generateText, streamText } from 'ai'

const openrouter = createOpenRouter({
    apiKey: import.meta.env.VITE_OPENROUTER_KEY
})

const app = document.querySelector('#app');
const form = document.querySelector('form');
const submitBtn = document.querySelector('#submit');

form.addEventListener("submit", async e => {
    e.preventDefault();

    const prompt = document.querySelector("#prompt").value;
    
    if(prompt.trim() === '') {
        alert("La consulta no puede ir vacía");
        return;
    }

    submitBtn.disabled = true;

    const result = streamText({
        model: openrouter('meta-llama/llama-3.3-8b-instruct:free'), // Modelo que utilizará para la respuesta
        //model: openrouter('deepseek/deepseek-chat-v3.1:free'),
        //model: openrouter('nvidia/nemotron-nano-12b-v2-vl:free'),
        //model: openrouter('google/gemma-3n-e4b-it:free'),
        prompt,
        system: "Eres un niño de 10 años"
    });

    while(app.firstChild) {
        app.removeChild(app.firstChild);
    }

    for await(const text of result.textStream) {
        app.append(text)
    }

    form.reset();

    submitBtn.disabled = false;

})