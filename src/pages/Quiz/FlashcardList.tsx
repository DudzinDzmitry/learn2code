import Flashcard from './Flashcard';

const FlashcardList = ({ flashcards }) => {
  return (
    <div>
      {flashcards.map((flashcard) => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />;
      })}
    </div>
  );
};

export default FlashcardList;
