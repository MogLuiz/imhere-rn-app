export const useParticipants = () => {
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
  {
    id: 4,
    name: "José",
  },
  {
    id: 5,
    name: "Pedro",
  },
  {
    id: 6,
    name: "Paulo",
  },
  {
    id: 7,
    name: "Lucas",
  },
  {
    id: 8,
    name: "Marcos",
  },
  {
    id: 9,
    name: "Mateus",
  },
  {
    id: 10,
    name: "Judas",
  },
  {
    id: 11,
    name: "Tiago",
  },
  {
    id: 12,
    name: "Tomé",
  },
  {
    id: 13,
    name: "Bartolomeu",
  },
  {
    id: 14,
    name: "André",
  },
  {
    id: 15,
    name: "Felipe",
  },
  {
    id: 16,
    name: "Simão",
  },
  {
    id: 17,
    name: "Judas",
  },
  {
    id: 18,
    name: "Matias",
  },
  {
    id: 19,
    name: "Tadeu",
  },
  {
    id: 20,
    name: "João",
  },
  {
    id: 21,
    name: "Bartolomeu",
  },
  {
    id: 22,
    name: "André",
  },
  {
    id: 23,
    name: "Felipe",
  },
  {
    id: 24,
    name: "Simão",
  },
];