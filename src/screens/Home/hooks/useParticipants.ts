import { useState } from "react";
import { Alert } from "react-native";

export const useParticipants = () => {
  const [newParticipant, setNewParticipant] = useState("");
  const [participantsData, setParticipantsData] = useState<string[]>(participants);

  const handleNewParticipantChange = (text: string) => {
    text && setNewParticipant(text);
  }

  const handleParticipantAdd = (name: string) => {
    if (participantsData.includes(name)) {
      Alert.alert("Participante já adicionado!", `O participante ${name} já está na lista!`);
      return
    }

    if (!name) {
      Alert.alert("Participante não informado!", "Você deve informar o nome do participante!");
      return
    }

    setNewParticipant("");
    setParticipantsData(prev => [...prev, name]);
  };

  const handleParticipantRemove = (name: string) => {
    Alert.alert(
      "Remover participante",
      `Você deseja remover o participante ${name}?`,
      [
        {
          text: "Não",
          style: "cancel"
        },
        { text: "Sim", onPress: () => setParticipantsData(prev => prev.filter(participant => participant !== name)) }
      ]
    );
    console.log(`Você clicou no botão de Remover o participante ${name}!`);
  };

  return {
    newParticipant,
    participantsData,
    handleParticipantAdd,
    handleParticipantRemove,
    handleNewParticipantChange
  }
}

const participants = [
  'Luiz',
  'João',
  'Maria'
];