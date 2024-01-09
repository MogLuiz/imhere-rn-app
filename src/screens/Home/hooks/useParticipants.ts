import { useState } from "react";
import { Alert } from "react-native";

export const useParticipants = () => {
  const [participantName, setParticipantName] = useState("");
  const [participantsData, setParticipantsData] = useState(participants);

  const onChangeParticipantName = (text: string) => {
    text && setParticipantName(text);
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

    setParticipantName("");
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
    participantName,
    participantsData,
    handleParticipantAdd,
    handleParticipantRemove,
    onChangeParticipantName
  }
}

const participants = [
  'Luiz',
  'João',
  'Maria'
];