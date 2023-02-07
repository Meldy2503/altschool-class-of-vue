import { ref } from "@vue/reactivity";

const colors = ["green", "red", "blue", "purple"];

export default function usePicker() {
  const message = ref("Pick a color...");

  const matchColor = (value) => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    message.value = randomColor === value
      ? `You win... [answer: ${randomColor}]`
      : `You loose [answer: ${randomColor}]`;
  };

  return { colors, message, matchColor };
}