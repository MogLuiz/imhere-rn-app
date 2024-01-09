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
    newParticipant,
    handleParticipantAdd,
    handleParticipantRemove,
    handleNewParticipantChange,
  } = useParticipants();

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={newParticipant}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChange={(e) => handleNewParticipantChange(e.nativeEvent.text)}
        />

        <TouchableOpacity
          style={styles.button}
          disabled={!newParticipant}
          onPress={() => handleParticipantAdd(newParticipant)}
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
