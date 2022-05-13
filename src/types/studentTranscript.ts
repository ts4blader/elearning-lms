export type ScoreResultProps = {
  key: string;
  text: string;
  conduct: string;
  scores: {
    scoreTypeId: string;
    value: number;
  }[];
};

export type StudentTranscriptProps = {
  id: string;
  schoolYearId: string;
  result: ScoreResultProps[];
};
