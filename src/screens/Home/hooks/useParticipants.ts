export const useParticipants = () => {
  const participantsData = [
    {
      id: 1,
      name: "Luiz",
    },
    {
      id: 2,
      name: "João",
    },
    {
      id: 3,
      name: "Maria",
    },
  ];

  const handleParticipantAdd = () => {
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