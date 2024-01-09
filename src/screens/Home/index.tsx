import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { Participant } from "../../components/Participant";
import { useParticipants } from "./hooks/useParticipants";
import { styles } from "./styles";
import { useState } from "react";

export const HomeScreen = () => {
  const {
    participantsData,
    participantName,
    handleParticipantAdd,
    handleParticipantRemove,
    onChangeParticipantName,
  } = useParticipants();

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={participantName}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChange={(e) => onChangeParticipantName(e.nativeEvent.text)}
        />

        <TouchableOpacity
          style={styles.button}
          disabled={!participantName}
          onPress={() => handleParticipantAdd(participantName)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participantsData}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={handleParticipantRemove}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpty}>Nenhum participante adicionado!</Text>
        )}
      />
    </View>
  );
};
