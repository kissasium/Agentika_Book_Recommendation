import React, { useState, useEffect } from 'react';
import { Agent, TTS, DefaultPrompts, Prompt } from 'react-agents';
import axios from 'axios';

const API_URL = `https://openlibrary.org/subjects/fiction.json?limit=5`;

export default function MyAgent() {
  const [books, setBooks] = useState<string[]>([]);
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  // Function to fetch book recommendations
  const fetchBooks = async () => {
    try {
      const response = await axios.get(API_URL);
      const bookList = response.data.works.map((book: any) => book.title);
      setBooks(bookList);
    } catch (error) {
      console.error('Error fetching book recommendations:', error);
    }
  };

  useEffect(() => {
    // Log disclaimer once when component mounts
    if (showDisclaimer) {
      console.log("Disclaimer: I am a virtual assistant providing book recommendations based on the genre!");
      setShowDisclaimer(false); // Hide disclaimer after showing once
    }
  }, [showDisclaimer]);

  return (
    <Agent>
      <DefaultPrompts />
      <Prompt>Can I recommend some books to you?</Prompt>
      <Prompt>Just click below and I'll fetch some book recommendations for you.</Prompt>
      
      <TTS voiceEndpoint="elevenlabs:scillia:kNBPK9DILaezWWUSHpF9" />
      
      <button onClick={fetchBooks}>Recommend me some books</button>

      {books.length > 0 && (
        <div>
          <h3>Recommended Books:</h3>
          <ul>
            {books.map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        </div>
      )}

      {!books.length && <p>Click the button to get some recommendations!</p>}
    </Agent>
  );
}
