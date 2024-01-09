import { Alert } from "react-native";

export const useParticipants = () => {
  const handleParticipantAdd = (name: string) => {
    if (participantsData.includes(name)) {
      Alert.alert("Participante já adicionado!", `O participante ${name} já está na lista!`);
    }
    console.log("Você clicou no botão de Adicionar!");
  };

  const handleParticipantRemove = (name: string) => {
    console.log(`Você clicou no botão de Remover o participante ${name}!`);
  };

  return {
    participantsData,
    handleParticipantAdd,
    handleParticipantRemove,
  }
}

const participantsData = [
  'Luiz',
  'João',
  'Maria',
  'José',
  'Pedro',
  'Paulo',
  'Lucas',
  'Marcos',
  'Mateus',
  'Luciana',
  'Mariana',
  'Marta',
  'Marcia',
  'Margarida',
  'Miguel',
  'Michele',
  'Mário',
];