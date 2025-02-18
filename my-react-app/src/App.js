import Counter from './Counter';
import Greeting from './Greeting';
import React, {useState} from 'react';
import TodoList from './TodoList';

// Komponen Header
function Header() {
  return (
    <header>
      <h1>Aplikasi React Saya</h1>
    </header>
  );
}

// Komponen Main
function Main() {
  return (
    <main>
      <h2>Selamat datang di Aplikasi React Saya!</h2>
      <p>Ini adalah area konten utama.</p>
    </main>
  );
}

// Komponen Footer
function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Aplikasi React Saya</p>
    </footer>
  );
}

function Example() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder='Nama' value={name} onChange={handleNameChange} />
      <input type="number" placeholder='Umur' value={age} onChange={handleAgeChange} />
      <input type="email" placeholder='Email' value={email} onChange={handleEmailChange} />

      <p>{name} berumur {age} tahun dan emailnya adalah {email}.</p>
    </div>
  );
}

// Komponen App yang menggunakan Header, Main, dan Footer
// Tambahan komponen Counter, Greeting, Example
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Greeting name="John"/>
      <Counter />
      <Example />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;