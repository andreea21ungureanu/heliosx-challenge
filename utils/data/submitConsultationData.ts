export const submitConsultationData = (answers: Record<string, string>) => {
  // Format data to be more readable for an API
  const formattedData = Object.entries(answers).map(([question, answer]) => ({
    question,
    answer,
  }));

  // Simulating sending data to an API
  console.log(
    "Submitting data for consultation: " +
      JSON.stringify(formattedData, null, 2)
  );
};
