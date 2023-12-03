import { useEffect, useState } from 'react';
import FlashcardList from './FlashcardList';

const Quiz = () => {
  const [query, setQuery] = useState('');
  const [flashcards, setFlashcards] = useState([]);
  useEffect(() => {});

  return <FlashcardList flashcards={flashcards} />;
};

export default Quiz;
